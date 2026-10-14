import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Download,
  Layers,
  ShieldCheck,
  Video,
  Wifi,
  Cpu,
  Key,
  FileText,
  Server,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Filter,
  HelpCircle,
} from 'lucide-react';
import { Product, BrandId, Lang } from '../types/index.ts';
import { PRODUCTS_CATALOG, PARTNER_BRANDS } from '../data/productsData.ts';
import { ProductVisualBadge, getVisualType } from '../components/ProductVisualBadge.tsx';
import { getProductSearchScore, getDidYouMeanSuggestion } from '../utils/searchUtils.ts';

interface ProductsPageProps {
  initialBrand?: string;
  initialCategory?: string;
  initialSearchQuery?: string;
  onOpenDatasheet: (product: Product) => void;
  lang: Lang;
}

type CategoryFilter =
  | 'all'
  | 'hsm'
  | 'crypto'
  | 'wireless'
  | 'video'
  | 'token'
  | 'pki'
  | 'hosting';

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialBrand,
  initialCategory,
  initialSearchQuery,
  onOpenDatasheet,
  lang,
}) => {
  const isTr = lang === 'TR';
  const [selectedBrand, setSelectedBrand] = useState<BrandId>(
    (initialBrand as BrandId) || 'all'
  );
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    (initialCategory as CategoryFilter) || 'all'
  );
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(48);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // React to prop changes from Header navigation
  useEffect(() => {
    if (initialBrand) {
      setSelectedBrand(initialBrand as BrandId);
      setCurrentPage(1);
    }
  }, [initialBrand]);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory as CategoryFilter);
      setCurrentPage(1);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialSearchQuery !== undefined) {
      setSearchQuery(initialSearchQuery);
      setCurrentPage(1);
    }
  }, [initialSearchQuery]);

  const categories: {
    id: CategoryFilter;
    labelTr: string;
    labelEn: string;
    icon: React.ElementType;
    descTr: string;
    descEn: string;
  }[] = [
    {
      id: 'all',
      labelTr: 'Tüm Kategoriler',
      labelEn: 'All Categories',
      icon: Layers,
      descTr: 'Kataloğun tamamı',
      descEn: 'Full product catalogue',
    },
    {
      id: 'hsm',
      labelTr: 'Donanımsal Güvenlik (HSM)',
      labelEn: 'Hardware HSMs',
      icon: Key,
      descTr: 'Luna SA, PCIe, EFT, ProtectServer, Lynks',
      descEn: 'FIPS 140-2 Level 3/4 cryptographic modules',
    },
    {
      id: 'crypto',
      labelTr: 'Ağ & Veri Şifreleme',
      labelEn: 'Network & Data Encryption',
      icon: ShieldCheck,
      descTr: 'Ethernet, SONET, DataSecure, ProtectFile, eSafe',
      descEn: 'High-speed line and storage encryption',
    },
    {
      id: 'wireless',
      labelTr: 'Kablosuz & Taktik Mesh',
      labelEn: 'Wireless & Tactical Mesh',
      icon: Wifi,
      descTr: 'Redline RDL-3000, AN-80i, WiMAX, Fortress ES mesh',
      descEn: 'Broadband wireless links and tactical mesh',
    },
    {
      id: 'video',
      labelTr: 'Video Gözetim & PTS (VMS)',
      labelEn: 'Surveillance & LPR (VMS)',
      icon: Video,
      descTr: 'Digifort Enterprise, Pro, Standard, LPR, Biopass',
      descEn: 'IP video management and plate recognition',
    },
    {
      id: 'token',
      labelTr: 'Token & Akıllı Kart',
      labelEn: 'Tokens & Smartcards',
      icon: Cpu,
      descTr: 'SafeNet eToken, SmartCard 650/400/330, Hydra PC',
      descEn: 'PKI tokens, JavaCard smartcards, authenticators',
    },
    {
      id: 'pki',
      labelTr: 'PKI & e-İmza Çözümleri',
      labelEn: 'PKI & Digital Signatures',
      icon: FileText,
      descTr: 'Cryptomathic CKMS, Signer, MySafeID CA, Zaman Damgası',
      descEn: 'Central key management and digital certificate tools',
    },
    {
      id: 'hosting',
      labelTr: 'Sunucu & Güvenli Hosting',
      labelEn: 'Servers & Secure Hosting',
      icon: Server,
      descTr: 'Tier-3 kurumsal barındırma, sistem entegrasyonu',
      descEn: 'Hardened hosting, server integration & engineering',
    },
  ];

  // Map product to category filter
  const matchesCategoryFilter = (p: Product, cat: CategoryFilter): boolean => {
    if (cat === 'all') return true;
    const vType = getVisualType(p.id);
    if (cat === 'hsm') return vType === 'hsm';
    if (cat === 'crypto') return vType === 'rackmount';
    if (cat === 'wireless') return vType === 'wireless';
    if (cat === 'video') return vType === 'camera';
    if (cat === 'token') return vType === 'token' || vType === 'smartcard';
    if (cat === 'pki') return p.brandId === 'cryptomathic' || p.id.includes('pki') || p.id.includes('ca');
    if (cat === 'hosting') return vType === 'server' || p.id.includes('hosting');
    return true;
  };

  // Filter products by brand, category and flexible search query
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim();

    return PRODUCTS_CATALOG
      .filter((p) => {
        const matchesBrand = selectedBrand === 'all' || p.brandId === selectedBrand;
        const matchesCat = matchesCategoryFilter(p, selectedCategory);
        return matchesBrand && matchesCat;
      })
      .map((p) => ({
        product: p,
        score: query ? getProductSearchScore(query, p, isTr) : 1,
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => (query ? b.score - a.score : 0))
      .map((item) => item.product);
  }, [selectedBrand, selectedCategory, searchQuery, isTr]);

  const didYouMeanResult = useMemo(() => {
    return getDidYouMeanSuggestion(searchQuery, filteredProducts.length);
  }, [searchQuery, filteredProducts.length]);

  // Reset page when filters change
  const handleBrandChange = (brand: BrandId) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const getBrandCount = (brandId: BrandId) => {
    if (brandId === 'all') return PRODUCTS_CATALOG.length;
    return PRODUCTS_CATALOG.filter((p) => p.brandId === brandId).length;
  };

  const getCategoryCount = (catId: CategoryFilter) => {
    if (catId === 'all') return PRODUCTS_CATALOG.length;
    return PRODUCTS_CATALOG.filter((p) => matchesCategoryFilter(p, catId)).length;
  };

  const currentBrandInfo = PARTNER_BRANDS.find((b) => b.id === selectedBrand);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const displayedProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Banner */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
            <span>{isTr ? 'Kapsamlı Ürün Kataloğu' : 'Comprehensive Product Catalogue'}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono font-bold bg-red-500/10 text-red-800 px-2 py-0.5 rounded border border-red-200/40">
              {PRODUCTS_CATALOG.length} {isTr ? 'Onaylı Ürün' : 'Certified Products'}
            </span>
            <span aria-hidden="true">·</span>
            <span>7 {isTr ? 'Yetkili Marka' : 'Authorized Brands'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isTr ? 'Tüm Teknoloji Ürünleri & Teknik Föyler' : 'All Technology Products & Technical Datasheets'}
          </h1>
          <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
            {isTr
              ? 'Global Forte tarafından Türkiye ve bölgede temsil edilen SafeNet (Thales), Redline Communications, Digifort, Fortress Technologies, SPYRUS, Cryptomathic ve Global Forte ürün ailesinin tamamı (140+ ürün). Gerçek donanım fotoğrafları, teknik parametreleri ve resmi mühendislik föyleri (datasheet).'
              : 'Complete portfolio of over 140 technology products represented by Global Forte across SafeNet, Redline, Digifort, Fortress, SPYRUS, Cryptomathic, and Global Forte with official hardware photography, engineering specifications, and downloadable datasheets.'}
          </p>
        </div>

        {/* 1. TOP CATEGORY CARDS / TABS - Buzlu Cam */}
        <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-4 sm:p-5 shadow-sm mb-6">
          <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-slate-200/60">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <Layers className="w-4 h-4 text-red-700" />
              <span>{isTr ? 'Ürün Kategorileri' : 'Product Categories'}</span>
              <span className="text-slate-500 font-normal hidden sm:inline">
                ({isTr ? 'Kategoriye göre filtreleyin' : 'Filter by technical domain'})
              </span>
            </div>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => handleCategoryChange('all')}
                className="text-xs font-bold text-red-700 hover:underline cursor-pointer"
              >
                {isTr ? 'Tüm Kategorileri Göster' : 'Show All Categories'}
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {categories.map((c) => {
              const isCatSel = selectedCategory === c.id;
              const Icon = c.icon;
              const count = getCategoryCount(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => handleCategoryChange(c.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isCatSel
                      ? 'bg-red-700 text-white border-red-700 shadow-xs'
                      : 'bg-white/70 hover:bg-white/90 text-slate-800 border-white/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <Icon
                      className={`w-4 h-4 ${
                        isCatSel ? 'text-white' : 'text-red-700'
                      }`}
                    />
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                        isCatSel
                          ? 'bg-red-950 text-white'
                          : 'bg-white/90 text-slate-700 border border-slate-200/60'
                      }`}
                    >
                      {count}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold leading-tight block">
                    {isTr ? c.labelTr : c.labelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. BRANDS & SEARCH TOOLBAR - Buzlu Cam */}
        <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-4 sm:p-5 shadow-sm mb-8 space-y-4">
          {/* Top Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder={
                  isTr
                    ? 'Ürün adı, model veya kod ara (örn: rdl 3000, luna sa, fcx, an80i, etoken 5100, lpr)...'
                    : 'Search products or models (e.g. rdl 3000, luna sa, fcx, an80i, etoken 5100, lpr)...'
                }
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-white/75 border border-slate-200/80 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 justify-between sm:justify-end">
              <div className="text-xs text-slate-600 font-semibold whitespace-nowrap">
                <span className="text-red-700 font-bold">{filteredProducts.length}</span> /{' '}
                {PRODUCTS_CATALOG.length} {isTr ? 'ürün' : 'products'}
              </div>

              {/* Page size toggle */}
              <div className="flex items-center gap-1 bg-white/60 p-0.5 rounded-lg border border-slate-200/60">
                {[24, 48, 96].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setPageSize(num);
                      setShowAllProducts(false);
                      setCurrentPage(1);
                    }}
                    className={`px-2 py-1 text-[11px] font-mono font-bold rounded-md transition-colors cursor-pointer ${
                      !showAllProducts && pageSize === num
                        ? 'bg-red-700 text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={() => setShowAllProducts(true)}
                  className={`px-2 py-1 text-[11px] font-bold rounded-md transition-colors cursor-pointer ${
                    showAllProducts
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {isTr ? 'Tümü (138)' : 'All (138)'}
                </button>
              </div>
            </div>
          </div>

          {/* Pure Brand Row */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-slate-200/60">
            <button
              onClick={() => handleBrandChange('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                selectedBrand === 'all'
                  ? 'bg-slate-900 text-white shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <span>{isTr ? 'Tüm Markalar' : 'All Brands'}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                  selectedBrand === 'all'
                    ? 'bg-slate-700 text-white'
                    : 'bg-white/80 text-slate-700 border border-slate-200/60'
                }`}
              >
                {getBrandCount('all')}
              </span>
            </button>

            {PARTNER_BRANDS.map((b) => {
              const isSel = selectedBrand === b.id;
              const count = getBrandCount(b.id);
              return (
                <button
                  key={b.id}
                  onClick={() => handleBrandChange(b.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                    isSel
                      ? 'bg-red-700 text-white shadow-xs font-bold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span>{b.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono font-bold ${
                      isSel
                        ? 'bg-red-950 text-white'
                        : 'bg-white/80 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Brand Hero Callout - Buzlu Cam */}
        {currentBrandInfo && selectedBrand !== 'all' && (
          <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-4">
              {currentBrandInfo.logoUrl && (
                <div className="p-2 bg-white/80 border border-slate-200/60 rounded-xl shrink-0 hidden sm:block">
                  <img
                    src={currentBrandInfo.logoUrl}
                    alt={currentBrandInfo.name}
                    className="h-9 w-auto object-contain"
                  />
                </div>
              )}
              <div>
                <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block">
                  {isTr ? 'Seçili Teknoloji Markası' : 'Selected Technology Brand'}
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <h2 className="text-xl font-bold text-slate-900">{currentBrandInfo.name}</h2>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-800 border border-red-200/40">
                    {getBrandCount(currentBrandInfo.id)} {isTr ? 'Ürün' : 'Products'}
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-1 max-w-3xl leading-relaxed font-medium">
                  {isTr ? currentBrandInfo.descriptionTr : currentBrandInfo.descriptionEn}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedCategory('all');
                setCurrentPage(1);
              }}
              className="text-xs font-semibold text-slate-600 hover:text-red-700 whitespace-nowrap cursor-pointer"
            >
              {isTr ? 'Filtreleri Sıfırla' : 'Reset Filters'}
            </button>
          </div>
        )}

        {/* Products Grid */}
        {displayedProducts.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-12 text-center max-w-md mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-white/80 text-slate-600 mx-auto flex items-center justify-center mb-3 border border-slate-200/60">
              {didYouMeanResult ? (
                <HelpCircle className="w-6 h-6 text-red-600" />
              ) : (
                <Search className="w-6 h-6" />
              )}
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {isTr ? 'Aramanıza Uygun Ürün Bulunamadı' : 'No Products Matched'}
            </h3>
            {didYouMeanResult ? (
              <div className="my-3 p-3 bg-red-500/10 border border-red-200/60 rounded-xl">
                <p className="text-xs text-slate-800 font-medium">
                  {isTr ? 'Bunu mu demek istediniz:' : 'Did you mean:'}{' '}
                  <strong className="text-red-700 font-bold">{didYouMeanResult.suggestedTerm}</strong>
                  {' '}({didYouMeanResult.brand})
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery(didYouMeanResult.suggestedTerm)}
                  className="mt-2.5 px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded-lg text-xs font-semibold cursor-pointer shadow-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{isTr ? `"${didYouMeanResult.suggestedTerm}" Olarak Ara` : `Search for "${didYouMeanResult.suggestedTerm}"`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <p className="text-xs text-slate-600 mb-4 font-medium">
                {isTr
                  ? 'Lütfen arama terimlerinizi değiştirin veya filtreleri sıfırlayın.'
                  : 'Please try different keywords or reset your filters.'}
              </p>
            )}
            <button
              onClick={() => {
                setSelectedBrand('all');
                setSelectedCategory('all');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-950 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs"
            >
              {isTr ? 'Tüm Filtreleri Temizle' : 'Clear All Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onOpenDatasheet(product)}
                className="bg-white/60 backdrop-blur-md border border-white/80 hover:border-red-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Equipment Visual or Real Photo */}
                  <div className="p-2 sm:p-2.5 bg-slate-950/95 border-b border-slate-800">
                    <ProductVisualBadge product={product} size="md" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Brand Name & Part Number */}
                    <div className="flex items-center justify-between text-[11px] mb-2">
                      <span className="font-bold text-red-700">{product.brandName}</span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold bg-white/80 px-1.5 py-0.2 rounded border border-slate-200/60">
                        {product.datasheetContent.partNumber}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-red-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Category Label & Photo indicator */}
                    <div className="flex items-center gap-1.5 flex-wrap mb-3">
                      <span className="inline-block text-[10px] font-semibold text-slate-700 bg-white/80 px-2 py-0.5 rounded border border-slate-200/60">
                        {isTr ? product.categoryTr : product.categoryEn}
                      </span>
                      {product.imageUrl && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-700 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-200/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {isTr ? 'Donanım Fotoğrafı' : 'Hardware Photo'}
                        </span>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed mb-4 font-medium">
                      {isTr ? product.summaryTr : product.summaryEn}
                    </p>

                    {/* Quick Specs 2-item table */}
                    <div className="space-y-1.5 text-[11px] bg-white/70 p-2.5 rounded-xl border border-slate-200/60 mb-4 font-medium">
                      {product.specs.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="flex justify-between items-center gap-2">
                          <span className="text-slate-600 truncate">
                            {isTr ? s.labelTr : s.labelEn}:
                          </span>
                          <span className="font-semibold text-slate-900 text-right truncate font-mono text-[10px]">
                            {s.val}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Tags */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.compliance.slice(0, 3).map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono font-bold bg-white/80 text-slate-700 px-1.5 py-0.2 rounded border border-slate-200/60"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDatasheet(product);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-900 hover:text-white bg-white/80 hover:bg-red-700 border border-slate-200 hover:border-red-700 rounded-xl transition-all shadow-xs group-hover:border-red-600 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-red-700 group-hover:text-white transition-colors" />
                    <span>{isTr ? 'Datasheet İndir' : 'Download Datasheet'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls - Buzlu Cam */}
        {!showAllProducts && totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-slate-200/60 pt-6">
            <div className="text-xs text-slate-600 font-medium">
              {isTr ? (
                <>
                  Toplam <span className="font-bold text-slate-900">{filteredProducts.length}</span> üründen{' '}
                  <span className="font-bold text-slate-900">
                    {(currentPage - 1) * pageSize + 1} -{' '}
                    {Math.min(currentPage * pageSize, filteredProducts.length)}
                  </span>{' '}
                  arası gösteriliyor
                </>
              ) : (
                <>
                  Showing{' '}
                  <span className="font-bold text-slate-900">
                    {(currentPage - 1) * pageSize + 1} -{' '}
                    {Math.min(currentPage * pageSize, filteredProducts.length)}
                  </span>{' '}
                  of <span className="font-bold text-slate-900">{filteredProducts.length}</span> products
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-slate-200/80 bg-white/60 backdrop-blur-md text-slate-700 hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                aria-label="Önceki Sayfa"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="text-xs font-mono font-bold text-slate-800 px-3 py-1 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-lg shadow-xs">
                {currentPage} / {totalPages}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200/80 bg-white/60 backdrop-blur-md text-slate-700 hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                aria-label="Sonraki Sayfa"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
