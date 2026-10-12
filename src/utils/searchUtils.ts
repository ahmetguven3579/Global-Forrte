import { Product, PartnerBrand } from '../types/index.ts';

/**
 * Normalizes text for search:
 * - Converts to lower-case
 * - Maps Turkish characters to Latin equivalents (ı/i, ğ/g, ü/u, ş/s, ö/o, ç/c)
 * - Removes accents
 */
export function normalizeSearchText(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Strips all whitespace, hyphens, and punctuation, leaving pure alphanumeric string.
 * Example: 'RDL-3000' -> 'rdl3000', 'Luna SA' -> 'lunasa'
 */
export function stripPunctuation(str: string): string {
  return normalizeSearchText(str).replace(/[^a-z0-9]/g, '');
}

/**
 * Splits query into clean tokens across whitespace and common delimiters
 */
export function tokenizeQuery(query: string): string[] {
  return normalizeSearchText(query)
    .split(/[\s\-_,./+]+/)
    .filter(Boolean);
}

/**
 * Calculates a match score for a product given a user search query.
 * Returns > 0 if matched, 0 if not matched.
 * Higher score indicates better relevance.
 */
export function getProductSearchScore(query: string, p: Product, isTr: boolean = true): number {
  const normQuery = normalizeSearchText(query.trim());
  if (!normQuery) return 1;

  const strippedQuery = stripPunctuation(query);
  const tokens = tokenizeQuery(query);

  const nameNorm = normalizeSearchText(p.name);
  const nameStripped = stripPunctuation(p.name);
  const idStripped = stripPunctuation(p.id);
  const partNumberNorm = normalizeSearchText(p.datasheetContent?.partNumber || '');
  const partNumberStripped = stripPunctuation(p.datasheetContent?.partNumber || '');
  const brandNorm = normalizeSearchText(p.brandName);
  const brandStripped = stripPunctuation(p.brandName);

  const targets = [
    p.name,
    p.brandName,
    p.categoryTr,
    p.categoryEn,
    p.summaryTr,
    p.summaryEn,
    p.datasheetContent?.partNumber || '',
    ...(p.compliance || []),
    ...(p.specs?.map((s) => `${s.val} ${s.labelTr} ${s.labelEn}`) || []),
  ];

  const combinedNorm = targets.map((t) => normalizeSearchText(t)).join(' ');
  const combinedStripped = targets.map((t) => stripPunctuation(t)).join('');

  let matches = false;

  // 1. Direct substring match in normalized combined text
  if (combinedNorm.includes(normQuery)) {
    matches = true;
  }
  // 2. Stripped alphanumeric match (e.g. 'rdl 3000' -> 'rdl3000' matches 'RDL-3000' -> 'rdl3000')
  else if (
    strippedQuery &&
    (combinedStripped.includes(strippedQuery) || idStripped.includes(strippedQuery))
  ) {
    matches = true;
  }
  // 3. Multi-token match: every word in query must match
  else if (
    tokens.length > 0 &&
    tokens.every((token) => {
      const sTok = stripPunctuation(token);
      return combinedNorm.includes(token) || (sTok && combinedStripped.includes(sTok));
    })
  ) {
    matches = true;
  }

  if (!matches) return 0;

  // Calculate relevance weighting
  let score = 10;

  // Exact or prefix matches on product name
  if (nameNorm.startsWith(normQuery)) score += 100;
  else if (nameNorm.includes(normQuery)) score += 60;
  if (nameStripped.includes(strippedQuery)) score += 50;

  // Part number / model match
  if (partNumberNorm.includes(normQuery) || partNumberStripped.includes(strippedQuery)) {
    score += 55;
  }

  // ID match
  if (idStripped.includes(strippedQuery)) {
    score += 40;
  }

  // Brand match
  if (brandNorm.includes(normQuery) || brandStripped.includes(strippedQuery)) {
    score += 30;
  }

  return score;
}

/**
 * Checks if a partner brand matches the search query.
 */
export function matchesBrandSearch(query: string, brand: PartnerBrand, isTr: boolean = true): boolean {
  const normQuery = normalizeSearchText(query.trim());
  if (!normQuery) return true;

  const strippedQuery = stripPunctuation(query);
  const tokens = tokenizeQuery(query);

  const brandFields = [
    brand.name,
    brand.id,
    isTr ? brand.taglineTr : brand.taglineEn,
    isTr ? brand.specialtyTr : brand.specialtyEn,
    isTr ? brand.descriptionTr : brand.descriptionEn,
  ];

  const combinedNorm = brandFields.map((f) => normalizeSearchText(f)).join(' ');
  const combinedStripped = brandFields.map((f) => stripPunctuation(f)).join('');

  if (combinedNorm.includes(normQuery)) return true;
  if (strippedQuery && combinedStripped.includes(strippedQuery)) return true;

  return (
    tokens.length > 0 &&
    tokens.every((token) => {
      const sTok = stripPunctuation(token);
      return combinedNorm.includes(token) || (sTok && combinedStripped.includes(sTok));
    })
  );
}

/**
 * Computes Levenshtein distance between two strings
 */
export function computeLevenshteinDistance(a: string, b: string): number {
  const an = a.length;
  const bn = b.length;
  if (!an) return bn;
  if (!bn) return an;
  const matrix: number[][] = Array.from({ length: bn + 1 }, (_, i) => [i]);
  for (let j = 0; j <= an; j++) matrix[0][j] = j;
  for (let i = 1; i <= bn; i++) {
    for (let j = 1; j <= an; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        );
      }
    }
  }
  return matrix[bn][an];
}

/**
 * Curated list of popular and canonical technology terms, models, and brands
 */
export const CANONICAL_SEARCH_ITEMS: {
  term: string;
  categoryTr: string;
  categoryEn: string;
  brand: string;
}[] = [
  { term: 'RDL-3000', categoryTr: 'Geniş Bant Kablosuz', categoryEn: 'Broadband Wireless', brand: 'Redline' },
  { term: 'AN-80i', categoryTr: 'Karasal Geniş Bant', categoryEn: 'Carrier Broadband', brand: 'Redline' },
  { term: 'Luna SA', categoryTr: 'Donanımsal HSM', categoryEn: 'Hardware HSM', brand: 'SafeNet' },
  { term: 'Luna PCIe', categoryTr: 'PCIe HSM Kartı', categoryEn: 'PCIe HSM Card', brand: 'SafeNet' },
  { term: 'Luna G5', categoryTr: 'Masaüstü USB HSM', categoryEn: 'Desktop USB HSM', brand: 'SafeNet' },
  { term: 'FC-X', categoryTr: '10G Hat İçi Kripto', categoryEn: '10G Inline Encryptor', brand: 'Fortress' },
  { term: 'ES2440', categoryTr: 'Taktik Mesh Düğümü', categoryEn: 'Tactical Mesh Node', brand: 'Fortress' },
  { term: 'ES520', categoryTr: 'Mobil Mesh Düğümü', categoryEn: 'Deployable Mesh Node', brand: 'Fortress' },
  { term: 'eToken 5100', categoryTr: 'PKI Güvenlik Tokenı', categoryEn: 'PKI Security Token', brand: 'SafeNet' },
  { term: 'eToken PRO', categoryTr: 'Akıllı Kart USB Token', categoryEn: 'Smart Card Token', brand: 'SafeNet' },
  { term: 'eToken PASS', categoryTr: 'Donanımsal OTP', categoryEn: 'Hardware OTP', brand: 'SafeNet' },
  { term: 'eToken 7300', categoryTr: 'Şifreli Flaş & Kripto', categoryEn: 'Encrypted Flash & Crypto', brand: 'SafeNet' },
  { term: 'Neural LPR', categoryTr: 'Plaka Tanıma (PTS)', categoryEn: 'License Plate Recognition', brand: 'Digifort' },
  { term: 'Digifort Enterprise', categoryTr: 'Video Gözetim (VMS)', categoryEn: 'Video Management', brand: 'Digifort' },
  { term: 'Digifort Analytics', categoryTr: 'Adli Video Analiz', categoryEn: 'Video Analytics', brand: 'Digifort' },
  { term: 'PocketVault', categoryTr: 'Donanımsal SSD Kripto', categoryEn: 'Hardware Encrypted SSD', brand: 'SPYRUS' },
  { term: 'Rosetta SDHC', categoryTr: 'Şifreli Hafıza Kartı', categoryEn: 'Encrypted Memory Card', brand: 'SPYRUS' },
  { term: 'Hydra PC', categoryTr: 'Güvenli USB Kripto', categoryEn: 'Secure USB Cryptography', brand: 'SPYRUS' },
  { term: 'CKMS', categoryTr: 'Merkezi Anahtar Yönetimi', categoryEn: 'Central Key Management', brand: 'Cryptomathic' },
  { term: 'Cryptomathic Signer', categoryTr: 'Uzaktan e-İmza QSCD', categoryEn: 'Remote e-Signature QSCD', brand: 'Cryptomathic' },
  { term: 'DataSecure', categoryTr: 'Veritabanı Şifreleme', categoryEn: 'Database Encryption', brand: 'SafeNet' },
  { term: 'ProtectServer', categoryTr: 'Ödeme & Finans HSM', categoryEn: 'Payment & Finance HSM', brand: 'SafeNet' },
  { term: 'StorageSecure', categoryTr: 'Depolama Şifreleme', categoryEn: 'Storage Encryption', brand: 'SafeNet' },
  { term: 'Redline', categoryTr: 'Marka', categoryEn: 'Brand', brand: 'Redline' },
  { term: 'SafeNet', categoryTr: 'Marka', categoryEn: 'Brand', brand: 'SafeNet' },
  { term: 'Digifort', categoryTr: 'Marka', categoryEn: 'Brand', brand: 'Digifort' },
  { term: 'Fortress', categoryTr: 'Marka', categoryEn: 'Brand', brand: 'Fortress' },
  { term: 'SPYRUS', categoryTr: 'Marka', categoryEn: 'Brand', brand: 'SPYRUS' },
  { term: 'Cryptomathic', categoryTr: 'Marka', categoryEn: 'Brand', brand: 'Cryptomathic' },
  { term: 'Global Forte', categoryTr: 'Marka & Mühendislik', categoryEn: 'Brand & Engineering', brand: 'Global Forte' },
];

export interface DidYouMeanResult {
  suggestedTerm: string;
  categoryTr: string;
  categoryEn: string;
  brand: string;
}

/**
 * Returns a 'Did You Mean' suggestion if query is likely a typo or misspelling
 */
export function getDidYouMeanSuggestion(
  query: string,
  matchCount: number
): DidYouMeanResult | null {
  const trimmed = query.trim();
  if (trimmed.length < 3) return null;

  const strippedQuery = stripPunctuation(trimmed);
  const normQuery = normalizeSearchText(trimmed);

  // If already exact match on canonical term, no suggestion needed
  for (const item of CANONICAL_SEARCH_ITEMS) {
    if (stripPunctuation(item.term) === strippedQuery) {
      return null;
    }
  }

  // Only suggest if 0 matches or very low matches (<= 1)
  let bestCandidate: (typeof CANONICAL_SEARCH_ITEMS)[0] | null = null;
  let minDistance = 999;

  for (const item of CANONICAL_SEARCH_ITEMS) {
    const itemStripped = stripPunctuation(item.term);
    const itemNorm = normalizeSearchText(item.term);

    // Compute distance
    const distStripped = computeLevenshteinDistance(strippedQuery, itemStripped);
    const distNorm = computeLevenshteinDistance(normQuery, itemNorm);
    const dist = Math.min(distStripped, distNorm);

    // Dynamic threshold based on length
    const maxThreshold = trimmed.length <= 4 ? 1 : trimmed.length <= 7 ? 2 : 3;

    if (dist > 0 && dist <= maxThreshold && dist < minDistance) {
      minDistance = dist;
      bestCandidate = item;
    }
  }

  // If found and match count is low, suggest it
  if (bestCandidate && (matchCount === 0 || minDistance === 1)) {
    return {
      suggestedTerm: bestCandidate.term,
      categoryTr: bestCandidate.categoryTr,
      categoryEn: bestCandidate.categoryEn,
      brand: bestCandidate.brand,
    };
  }

  return null;
}

/**
 * Returns real-time search suggestions as the user types
 */
export function getRealtimeSearchSuggestions(query: string, limit: number = 6): string[] {
  const trimmed = query.trim();

  // If empty query, return top featured product models
  if (!trimmed) {
    return [
      'RDL-3000',
      'Luna SA',
      'FC-X',
      'Digifort Enterprise',
      'eToken 5100',
      'AN-80i',
      'PocketVault',
      'CKMS',
    ].slice(0, limit);
  }

  const normQuery = normalizeSearchText(trimmed);
  const strippedQuery = stripPunctuation(trimmed);

  const matched = CANONICAL_SEARCH_ITEMS.filter((item) => {
    const itemNorm = normalizeSearchText(item.term);
    const itemStripped = stripPunctuation(item.term);

    // Don't suggest exact identical query
    if (itemStripped === strippedQuery) return false;

    // Matches if term starts with or contains query
    return (
      itemNorm.startsWith(normQuery) ||
      itemStripped.startsWith(strippedQuery) ||
      itemNorm.includes(normQuery) ||
      itemStripped.includes(strippedQuery)
    );
  }).map((item) => item.term);

  return Array.from(new Set(matched)).slice(0, limit);
}

/**
 * Checks if a section or page matches the search query.
 */
export function matchesSectionSearch(
  query: string,
  section: { titleTr: string; titleEn: string; descTr: string; descEn: string; keywords?: string[] }
): boolean {
  const normQuery = normalizeSearchText(query.trim());
  if (!normQuery) return true;

  const strippedQuery = stripPunctuation(query);
  const tokens = tokenizeQuery(query);

  const fields = [
    section.titleTr,
    section.titleEn,
    section.descTr,
    section.descEn,
    ...(section.keywords || []),
  ];

  const combinedNorm = fields.map((f) => normalizeSearchText(f)).join(' ');
  const combinedStripped = fields.map((f) => stripPunctuation(f)).join('');

  if (combinedNorm.includes(normQuery)) return true;
  if (strippedQuery && combinedStripped.includes(strippedQuery)) return true;

  return (
    tokens.length > 0 &&
    tokens.every((token) => {
      const sTok = stripPunctuation(token);
      return combinedNorm.includes(token) || (sTok && combinedStripped.includes(sTok));
    })
  );
}

