import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Logo } from './Logo.tsx';
import {
  Globe,
  Menu,
  X,
  ArrowRight,
  Search,
  Phone,
  Mail,
  ExternalLink,
  Tag,
  Sparkles,
  Wifi,
  ShieldCheck,
  Cpu,
  Layers,
  Server,
  ChevronDown,
  Building2,
  FileText,
  Briefcase,
  Users,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';
import { PageId, Lang, Product, BrandId } from '../types/index.ts';
import { PRODUCTS_CATALOG, PARTNER_BRANDS } from '../data/productsData.ts';
import { ProductVisualBadge } from './ProductVisualBadge.tsx';
import {
  getProductSearchScore,
  matchesBrandSearch,
  matchesSectionSearch,
  getDidYouMeanSuggestion,
  getRealtimeSearchSuggestions,
  DidYouMeanResult,
} from '../utils/searchUtils.ts';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (
    page: PageId,
    brandFilter?: string,
    categoryFilter?: string,
    searchFilter?: string
  ) => void;
  currentLang: Lang;
  onToggleLang: () => void;
  activeBrand?: string;
  activeCategory?: string;
  onOpenDatasheet?: (product: Product) => void;
  initialSearchQuery?: string;
}

// 5 Core Domain Areas shown exactly in the user's uploaded banner screenshot
export interface CoreDomainTab {
  id: string;
  titleTr: string;
  titleEn: string;
  subTitleTr: string;
  subTitleEn: string;
  pageTarget: PageId;
  brandFilter?: string;
  categoryFilter?: string;
  icon: React.ComponentType<{ className?: string }>;
  brands: { id: string; name: string }[];
  highlightItems: { labelTr: string; labelEn: string; brandId?: string }[];
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  currentLang,
  onToggleLang,
  activeBrand,
  activeCategory,
  onOpenDatasheet,
  initialSearchQuery = '',
}) => {
  const isTr = currentLang === 'TR';

  // State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMac, setIsMac] = useState(false);

  // Refs
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Check platform for ⌘K vs Ctrl+K
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    }
  }, []);

  // Sync internal search query if initialSearchQuery changes
  useEffect(() => {
    if (initialSearchQuery !== undefined) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  // Global Keyboard Shortcut: ⌘K or Ctrl+K or / to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchFocused(true);
      } else if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchFocused(true);
      } else if (e.key === 'Escape') {
        setIsSearchFocused(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside listener for search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(target)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ORIGINAL GLOBAL FORTE 5 DOMAIN AREAS FROM THE SCREENSHOT ("şu şekil ekle ve gereken yerleri içine koy")
  const coreDomains: CoreDomainTab[] = [
    {
      id: 'kablosuz',
      titleTr: 'Kablosuz İletişim',
      titleEn: 'Wireless Communications',
      subTitleTr: 'Redline & Fortress Geniş Bant, Wi-Fi 802.11 & WiMAX',
      subTitleEn: 'Redline & Fortress Broadband, Wi-Fi 802.11 & WiMAX',
      pageTarget: 'products',
      brandFilter: 'redline',
      icon: Wifi,
      brands: [
        { id: 'redline', name: 'Redline Communications' },
        { id: 'fortress', name: 'Fortress Technologies' },
      ],
      highlightItems: [
        { labelTr: 'Redline AN-80i & RDL-3000 XP (50+ km)', labelEn: 'Redline AN-80i & RDL-3000 XP', brandId: 'redline' },
        { labelTr: 'Redline RedMAX WiMAX (AN-100UX & SU)', labelEn: 'Redline RedMAX WiMAX Systems', brandId: 'redline' },
        { labelTr: 'Redline RAS-Elite Otomatik Takip Anteni', labelEn: 'Redline RAS-Elite Auto-tracking', brandId: 'redline' },
        { labelTr: 'Fortress FastPath Kendini Onaran Mesh', labelEn: 'Fortress FastPath Self-Healing Mesh', brandId: 'fortress' },
        { labelTr: 'Türk Emniyeti MOBESE Kablosuz Video İletimi', labelEn: 'Municipal Police Wireless Backhaul', brandId: 'redline' },
      ],
    },
    {
      id: 'guvenlik',
      titleTr: 'Bilgi Güvenliği',
      titleEn: 'Information Security',
      subTitleTr: 'SafeNet HSM, Fortress Hat İçi Kripto, SPYRUS & Cryptomathic',
      subTitleEn: 'SafeNet HSM, Fortress Inline Encryption, SPYRUS & Cryptomathic',
      pageTarget: 'products',
      brandFilter: 'safenet',
      icon: ShieldCheck,
      brands: [
        { id: 'safenet', name: 'SafeNet (Thales)' },
        { id: 'fortress', name: 'Fortress Technologies' },
        { id: 'spyrus', name: 'SPYRUS' },
        { id: 'cryptomathic', name: 'Cryptomathic' },
      ],
      highlightItems: [
        { labelTr: 'SafeNet Luna Network HSM (FIPS 140-2 Level 3)', labelEn: 'SafeNet Luna Network HSM', brandId: 'safenet' },
        { labelTr: 'Fortress FC-X 10G/1G Donanımsal Hat Şifreleyici', labelEn: 'Fortress FC-X Inline Encryptors', brandId: 'fortress' },
        { labelTr: 'SPYRUS PocketVault P-384 & Hydra PC', labelEn: 'SPYRUS Hardware Tokens & Secure Flash', brandId: 'spyrus' },
        { labelTr: 'Cryptomathic CKMS Kriptografik Anahtar Yönetimi', labelEn: 'Cryptomathic Central Key Management', brandId: 'cryptomathic' },
        { labelTr: 'SafeNet ProtectDB, ProtectFile & eToken', labelEn: 'SafeNet Data Protection & Tokens', brandId: 'safenet' },
      ],
    },
    {
      id: 'entegrasyon',
      titleTr: 'Sistem Entegrasyonu',
      titleEn: 'Systems Integration',
      subTitleTr: 'Digifort Video Gözetim, Karmaşık Altyapı & Anahtar Teslim Dağıtım',
      subTitleEn: 'Digifort VMS, High-Assurance Architecture & Deployment',
      pageTarget: 'solutions',
      icon: Layers,
      brands: [
        { id: 'digifort', name: 'Digifort IP Surveillance' },
        { id: 'redline', name: 'Redline Communications' },
        { id: 'safenet', name: 'SafeNet' },
      ],
      highlightItems: [
        { labelTr: 'Digifort Kurumsal VMS & Failover Kümeleri', labelEn: 'Digifort Enterprise VMS Clusters', brandId: 'digifort' },
        { labelTr: 'Digifort Yapay Zekalı PTS (250 km/s Hız)', labelEn: 'Digifort Neural LPR & Speed Cameras', brandId: 'digifort' },
        { labelTr: 'Kritik Tesisler ve Havalimanları Güvenlik Mimarisi', labelEn: 'Critical Infrastructure Integration', brandId: 'digifort' },
        { labelTr: 'Çok Satıcılı Donanım ve Ağ Birleştirme', labelEn: 'Multi-vendor Infrastructure Interoperability' },
        { labelTr: 'Şehir Güvenliği ve Komuta Kontrol Merkezleri (BYS)', labelEn: 'Command & Control Centers Deployment' },
      ],
    },
    {
      id: 'gelistirme',
      titleTr: 'Geliştirme',
      titleEn: 'Development',
      subTitleTr: 'Özel Kriptografik Donanımlar, Yazılım & Teknoloji Ar-Ge',
      subTitleEn: 'Custom Embedded Crypto, Software & Tech R&D',
      pageTarget: 'services',
      icon: Cpu,
      brands: [
        { id: 'globalforte', name: 'Global Forte Mühendislik' },
        { id: 'cryptomathic', name: 'Cryptomathic' },
      ],
      highlightItems: [
        { labelTr: 'Gömülü Kripto ve Güvenli Donanım Tasarımı', labelEn: 'Embedded Crypto Hardware Architecture' },
        { labelTr: 'Uluslararası Yüksek Teknoloji İş Geliştirme', labelEn: 'International High-Tech Development' },
        { labelTr: 'Kamu Şartnameleri (RFP) ve Sistem Mühendisliği', labelEn: 'Defense RFP Technical Specifications' },
        { labelTr: 'Cryptomathic Signer & eIDAS e-İmza Entegrasyonu', labelEn: 'eIDAS Qualified Signatures Integration', brandId: 'cryptomathic' },
        { labelTr: 'Müşteriye Özel Sivil ve Askeri Yazılım Çözümleri', labelEn: 'Custom Defense & Civil Software Development' },
      ],
    },
    {
      id: 'hosting',
      titleTr: 'Web Hosting',
      titleEn: 'Web Hosting',
      subTitleTr: 'Kurumsal Güvenlikli Barındırma, Sunucu & Colocation',
      subTitleEn: 'Secure Corporate Hosting, Dedicated Servers & Colocation',
      pageTarget: 'products',
      brandFilter: 'globalforte',
      categoryFilter: 'Kurumsal Web Hosting ve Veri Merkezi',
      icon: Server,
      brands: [
        { id: 'globalforte', name: 'Global Forte Hosting' },
      ],
      highlightItems: [
        { labelTr: 'Global Forte Web-Basic Barındırma Paketi', labelEn: 'Web-Basic Hosting Package' },
        { labelTr: 'Global Forte Web-Standard Kurumsal Paket', labelEn: 'Web-Standard Hosting Package' },
        { labelTr: 'Global Forte Web-Pro Yüksek Trafik Paketi', labelEn: 'Web-Pro High-Traffic Hosting' },
        { labelTr: 'Global Forte Web-Max Dedicated Sunucu & Colocation', labelEn: 'Web-Max Colocation & Dedicated Server' },
        { labelTr: 'DDoS Koruması, SSL Donanım Hızlandırıcı ve 7/24 İzleme', labelEn: 'Hardware DDoS Mitigation & 24/7 NOC' },
      ],
    },
  ];

  // PRIMARY PAGES NAVIGATION (Ana Sayfa, Hakkımızda, Çözümler, Hizmetler, Ürünler, İş Ortakları, İletişim)
  const navPages: { id: PageId; labelTr: string; labelEn: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', labelTr: 'Ana Sayfa', labelEn: 'Home', icon: Building2 },
    { id: 'about', labelTr: 'Hakkımızda', labelEn: 'About Us', icon: FileText },
    { id: 'solutions', labelTr: 'Çözümler', labelEn: 'Solutions', icon: Layers },
    { id: 'services', labelTr: 'Hizmetler', labelEn: 'Services', icon: Briefcase },
    { id: 'products', labelTr: 'Ürünler', labelEn: 'Products', icon: Tag },
    { id: 'partners', labelTr: 'İş Ortakları', labelEn: 'Partners', icon: Users },
    { id: 'contact', labelTr: 'İletişim', labelEn: 'Contact', icon: Mail },
  ];

  // Searchable Sections
  const searchableSections = [
    {
      id: 'home' as PageId,
      titleTr: 'Ana Sayfa',
      titleEn: 'Home',
      descTr: 'Kritik görev bilişim altyapıları ve kurumsal çözümler',
      descEn: 'Mission-critical technology infrastructure & solutions',
    },
    {
      id: 'about' as PageId,
      titleTr: 'Hakkımızda',
      titleEn: 'About Us',
      descTr: '2001’den bugüne şirket profili, açık sistemler ve uzmanlık',
      descEn: 'Company overview, open systems architecture and expertise since 2001',
    },
    {
      id: 'solutions' as PageId,
      titleTr: 'Çözümler',
      titleEn: 'Solutions',
      descTr: 'Ağ güvenliği & HSM, Digifort video gözetim, Redline kablosuz, BT yönetişimi',
      descEn: 'Network security & HSM, Digifort surveillance, Redline wireless, IT governance',
    },
    {
      id: 'services' as PageId,
      titleTr: 'Hizmetler',
      titleEn: 'Services',
      descTr: 'Stratejik danışmanlık, sistem entegrasyonu, güvenlik denetimi, 7/24 SLA ve hosting',
      descEn: 'Strategic consultancy, systems integration, security audits, 24/7 SLA & hosting',
    },
    {
      id: 'products' as PageId,
      titleTr: 'Ürünler',
      titleEn: 'Products Catalog',
      descTr: 'Tüm 140+ yetkili ürün, teknik föyler ve donanım özellikleri',
      descEn: 'All 140+ authorized products, datasheets and technical specifications',
    },
    {
      id: 'partners' as PageId,
      titleTr: 'İş Ortakları',
      titleEn: 'Partners & Accreditations',
      descTr: 'SafeNet, Redline, Digifort, Fortress, SPYRUS, Cryptomathic ve ISO/TSE belgeleri',
      descEn: 'Authorized technology vendors and official ISO / TSE certifications',
    },
    {
      id: 'contact' as PageId,
      titleTr: 'İletişim',
      titleEn: 'Contact',
      descTr: 'İstanbul Mecidiyeköy genel merkezi, teknik destek ve kurumsal iletişim',
      descEn: 'Istanbul Mecidiyeköy headquarters, engineering support and contact details',
    },
  ];

  // Search Results Computation
  const searchResults = useMemo(() => {
    const query = searchQuery.trim();
    if (!query) {
      return {
        matchedSections: [],
        matchedBrands: [],
        matchedProducts: [],
        totalMatchesCount: 0,
      };
    }

    // 1. Matched Sections / Pages with Turkish and character normalization
    const matchedSections = searchableSections.filter((s) =>
      matchesSectionSearch(query, s)
    );

    // 2. Matched Brands with token and variation matching (e.g. 'safe net' -> SafeNet)
    const matchedBrands = PARTNER_BRANDS.filter((b) =>
      matchesBrandSearch(query, b, isTr)
    );

    // 3. Matched Products with hyphen/space insensitivity (e.g. 'rdl 3000' matches 'RDL-3000', 'an 80i' matches 'AN-80i')
    const matchedProducts = PRODUCTS_CATALOG.map((p) => ({
      product: p,
      score: getProductSearchScore(query, p, isTr),
    }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.product);

    return {
      matchedSections,
      matchedBrands,
      matchedProducts,
      totalMatchesCount:
        matchedSections.length + matchedBrands.length + matchedProducts.length,
    };
  }, [searchQuery, isTr]);

  // Real-time keyword & model suggestions
  const realtimeSuggestions = useMemo(() => {
    return getRealtimeSearchSuggestions(searchQuery, 8);
  }, [searchQuery]);

  // 'Did you mean?' typo detection
  const didYouMeanResult: DidYouMeanResult | null = useMemo(() => {
    return getDidYouMeanSuggestion(searchQuery, searchResults.totalMatchesCount);
  }, [searchQuery, searchResults.totalMatchesCount]);

  // Apply a suggestion chip or Did-You-Mean correction
  const handleSuggestionApply = (suggestedTerm: string) => {
    setSearchQuery(suggestedTerm);
    searchInputRef.current?.focus();
  };

  // Handlers
  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setIsSearchFocused(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDomainClick = (tab: CoreDomainTab) => {
    if (tab.brandFilter) {
      onNavigate(tab.pageTarget, tab.brandFilter, tab.categoryFilter);
    } else {
      onNavigate(tab.pageTarget);
    }
    setMobileMenuOpen(false);
    setIsSearchFocused(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrandSelect = (brandId: string) => {
    onNavigate('products', brandId === 'all' ? undefined : brandId, undefined);
    setMobileMenuOpen(false);
    setIsSearchFocused(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (product: Product) => {
    if (onOpenDatasheet) {
      onOpenDatasheet(product);
    } else {
      onNavigate('products', product.brandId, undefined, product.name);
    }
    setIsSearchFocused(false);
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    if (searchResults.matchedProducts.length === 1) {
      handleProductSelect(searchResults.matchedProducts[0]);
    } else if (searchResults.matchedBrands.length === 1 && searchResults.matchedProducts.length === 0) {
      handleBrandSelect(searchResults.matchedBrands[0].id);
    } else {
      onNavigate('products', undefined, undefined, query);
    }
    setIsSearchFocused(false);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md border-b border-slate-200">
      {/* 1. TOP UTILITY BAR (Corporate contact, Istanbul HQ & Language) */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:+902122862627"
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>+90 (212) 286 26 27</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href="mailto:info@globalforte.com"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-3 h-3 text-red-500" />
              <span>info@globalforte.com</span>
            </a>
          </div>

          {/* Right: Istanbul HQ & Language Switcher */}
          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <span className="hidden sm:inline text-slate-400">
              {isTr ? 'İstanbul Mecidiyeköy Genel Merkezi' : 'Istanbul Mecidiyeköy HQ'}
            </span>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors cursor-pointer text-[10px] border border-slate-700"
              title="Dili Değiştir / Switch Language"
            >
              <Globe className="w-3 h-3 text-red-400" />
              <span>{currentLang}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR: Logo + Pages Navigation + Global Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center whitespace-nowrap shrink-0 focus:outline-none cursor-pointer"
            aria-label="Global Forte Ana Sayfa"
          >
            <Logo size="md" variant="light" showSubtitle={true} />
          </button>

          {/* DESKTOP PAGE LINKS (Ana Sayfa, Hakkımızda, vb.) */}
          <nav
            aria-label="Site Gezintisi"
            className="hidden lg:flex items-center gap-0.5 text-[13px] font-semibold text-slate-700"
          >
            {navPages.map((page) => {
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer text-xs xl:text-[13px] ${
                    isActive
                      ? 'bg-red-50 text-red-700 font-bold border border-red-200/80 shadow-2xs'
                      : 'hover:text-red-700 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {isTr ? page.labelTr : page.labelEn}
                </button>
              );
            })}
          </nav>

          {/* GLOBAL SEARCH BAR */}
          <div
            className="flex-1 max-w-xs sm:max-w-sm md:max-w-md relative"
            ref={searchContainerRef}
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <div
                className={`flex items-center w-full bg-slate-50 border rounded-xl transition-all duration-200 ${
                  isSearchFocused
                    ? 'bg-white border-red-600 ring-2 ring-red-100 shadow-md'
                    : 'border-slate-300 hover:border-slate-400 hover:bg-slate-100/70 shadow-2xs'
                }`}
              >
                <Search
                  className={`w-4 h-4 ml-3 shrink-0 transition-colors ${
                    isSearchFocused ? 'text-red-700' : 'text-slate-400'
                  }`}
                />

                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder={
                    isTr
                      ? 'Ürün, model veya marka ara... (örn: rdl 3000, luna sa, fcx, an80i)'
                      : 'Search products, models, brands... (e.g. rdl 3000, luna sa, fcx)'
                  }
                  className="w-full py-1.5 px-2.5 text-xs sm:text-sm text-slate-900 bg-transparent placeholder-slate-400 focus:outline-none"
                  aria-label={isTr ? 'Global Arama' : 'Global Search'}
                />

                {/* Clear Button */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="p-1 mr-1 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-200/60 transition-colors cursor-pointer"
                    title={isTr ? 'Aramayı Temizle' : 'Clear search'}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Hotkey Tag */}
                <div className="hidden sm:flex items-center mr-2 px-1.5 py-0.5 rounded bg-slate-200/70 border border-slate-300 text-[10px] font-mono text-slate-500 font-semibold select-none pointer-events-none shrink-0">
                  <span>{isMac ? '⌘K' : 'Ctrl+K'}</span>
                </div>
              </div>
            </form>

            {/* LIVE SEARCH RESULTS DROPDOWN */}
            {isSearchFocused && (
              <div className="absolute top-full right-0 w-[92vw] sm:w-[480px] md:w-[540px] mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn max-h-[75vh] flex flex-col">
                {/* Search Header */}
                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs shrink-0">
                  <div className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" />
                    <span>
                      {searchQuery.trim()
                        ? isTr
                          ? `"${searchQuery}" için sonuçlar (${searchResults.totalMatchesCount})`
                          : `Results for "${searchQuery}" (${searchResults.totalMatchesCount})`
                        : isTr
                        ? 'Hızlı Arama & Geçiş'
                        : 'Quick Search & Navigation'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsSearchFocused(false)}
                    className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Real-time search suggestions chips */}
                {realtimeSuggestions.length > 0 && (
                  <div className="px-3 py-2 bg-slate-50/90 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px] shrink-0">
                    <span className="text-slate-400 font-semibold shrink-0 text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <Lightbulb className="w-3 h-3 text-amber-500" />
                      {isTr ? 'Öneriler:' : 'Suggestions:'}
                    </span>
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                      {realtimeSuggestions.map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => handleSuggestionApply(term)}
                          className="px-2.5 py-0.5 rounded-full bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 hover:border-red-300 font-medium transition-colors shrink-0 cursor-pointer shadow-2xs"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scrollable Results Area */}
                <div className="overflow-y-auto p-3 space-y-4 max-h-[58vh]">
                  {/* When query is empty: Show Direct Links to 5 Screenshot Domains & Original Pages */}
                  {!searchQuery.trim() && (
                    <>
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                          {isTr ? 'Orijinal 5 Uzmanlık Alanı' : 'Original 5 Core Domains'}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {coreDomains.map((dom) => {
                            const DomIcon = dom.icon;
                            return (
                              <button
                                key={dom.id}
                                onClick={() => handleDomainClick(dom)}
                                className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 text-left transition-colors cursor-pointer group"
                              >
                                <div className="p-1.5 bg-slate-100 group-hover:bg-red-100 text-slate-700 group-hover:text-red-700 rounded-lg shrink-0">
                                  <DomIcon className="w-4 h-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-bold text-slate-900 group-hover:text-red-700 truncate">
                                    {isTr ? dom.titleTr : dom.titleEn}
                                  </div>
                                  <div className="text-[10px] text-slate-500 truncate">
                                    {isTr ? dom.subTitleTr : dom.subTitleEn}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                          {isTr ? 'Sayfalar' : 'Pages'}
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {searchableSections.map((sec) => (
                            <button
                              key={sec.id}
                              onClick={() => handleNavClick(sec.id)}
                              className="flex items-center justify-between p-2 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 text-left transition-colors cursor-pointer group"
                            >
                              <div className="truncate">
                                <div className="text-xs font-bold text-slate-900 group-hover:text-red-700 truncate">
                                  {isTr ? sec.titleTr : sec.titleEn}
                                </div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-red-600 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* When query has text */}
                  {searchQuery.trim() && (
                    <>
                      {/* Matched Brands */}
                      {searchResults.matchedBrands.length > 0 && (
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                            {isTr ? 'Markalar' : 'Partner Brands'} (
                            {searchResults.matchedBrands.length})
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {searchResults.matchedBrands.map((b) => (
                              <button
                                key={b.id}
                                onClick={() => handleBrandSelect(b.id)}
                                className="flex items-center gap-3 p-2 rounded-xl border border-slate-200 hover:border-red-400 hover:bg-red-50/40 text-left transition-colors cursor-pointer group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                                  <img
                                    src={b.logoUrl}
                                    alt={b.name}
                                    className="max-h-full max-w-full object-contain"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-bold text-slate-900 group-hover:text-red-700 truncate">
                                    {b.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 truncate">
                                    {isTr ? b.taglineTr : b.taglineEn}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Matched Products */}
                      {searchResults.matchedProducts.length > 0 && (
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1 flex items-center justify-between">
                            <span>
                              {isTr ? 'Eşleşen Ürünler' : 'Matching Products'} (
                              {searchResults.matchedProducts.length})
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            {searchResults.matchedProducts.slice(0, 8).map((product) => (
                              <button
                                key={product.id}
                                onClick={() => handleProductSelect(product)}
                                className="w-full flex items-center gap-3 p-2 rounded-xl border border-slate-100 hover:border-red-300 hover:bg-red-50/40 text-left transition-colors cursor-pointer group"
                              >
                                <div className="shrink-0">
                                  <ProductVisualBadge product={product} size="sm" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs font-semibold text-slate-900 group-hover:text-red-700 truncate">
                                    {product.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 flex items-center gap-2 truncate">
                                    <span className="font-medium text-red-600">
                                      {product.brandName}
                                    </span>
                                    <span>·</span>
                                    <span className="truncate">
                                      {isTr ? product.categoryTr : product.categoryEn}
                                    </span>
                                  </div>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-red-600 shrink-0" />
                              </button>
                            ))}
                          </div>

                          {searchResults.matchedProducts.length > 8 && (
                            <button
                              onClick={() => handleSearchSubmit()}
                              className="w-full mt-2 py-2 text-center text-xs font-bold text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100/80 rounded-xl transition-colors cursor-pointer"
                            >
                              {isTr
                                ? `Tüm ${searchResults.matchedProducts.length} sonucu katalogda gör →`
                                : `View all ${searchResults.matchedProducts.length} results in catalog →`}
                            </button>
                          )}
                        </div>
                      )}

                      {/* No Results */}
                      {searchResults.totalMatchesCount === 0 && (
                        <div className="py-8 px-4 text-center text-slate-500 text-xs">
                          {didYouMeanResult ? (
                            <div className="max-w-sm mx-auto bg-gradient-to-br from-red-50 to-amber-50/50 border border-red-200/80 rounded-xl p-4 shadow-2xs">
                              <HelpCircle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                              <p className="font-semibold text-slate-800 mb-1">
                                {isTr
                                  ? `"${searchQuery}" için doğrudan sonuç bulunamadı.`
                                  : `No direct matches found for "${searchQuery}".`}
                              </p>
                              <p className="text-slate-600 mb-3 text-[11px]">
                                {isTr ? 'Bunu mu demek istediniz:' : 'Did you mean:'}{' '}
                                <strong className="text-red-700 font-bold text-xs">{didYouMeanResult.suggestedTerm}</strong>
                                {' '}
                                <span className="text-slate-400">({didYouMeanResult.brand})</span>
                              </p>
                              <button
                                type="button"
                                onClick={() => handleSuggestionApply(didYouMeanResult.suggestedTerm)}
                                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg font-bold text-xs cursor-pointer shadow-2xs transition-colors inline-flex items-center gap-1.5"
                              >
                                <span>
                                  {isTr
                                    ? `"${didYouMeanResult.suggestedTerm}" Olarak Ara`
                                    : `Search for "${didYouMeanResult.suggestedTerm}"`}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <>
                              <p className="font-semibold text-slate-700 mb-1">
                                {isTr ? 'Sonuç bulunamadı' : 'No matches found'}
                              </p>
                              <p className="text-slate-400">
                                {isTr
                                  ? 'Farklı bir arama terimi deneyin veya tüm ürün kataloğuna göz atın.'
                                  : 'Try a different search keyword or browse the catalog.'}
                              </p>
                              <button
                                onClick={() => {
                                  onNavigate('products');
                                  setIsSearchFocused(false);
                                }}
                                className="mt-3 px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded-lg font-bold text-xs cursor-pointer inline-flex items-center gap-1.5"
                              >
                                <span>{isTr ? 'Ürün Kataloğunu Aç' : 'Open Product Catalog'}</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Search Footer */}
                {searchQuery.trim() && (
                  <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500">
                      {isTr ? 'Enter: Katalogda Filtrele' : 'Enter: Filter in Catalog'}
                    </span>
                    <button
                      onClick={() => handleSearchSubmit()}
                      className="px-3 py-1 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>{isTr ? 'Katalogda Göster' : 'Browse All'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 border border-slate-200 cursor-pointer"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl animate-fadeIn px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Regular Pages */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
              {isTr ? 'Kurumsal Sayfalar' : 'Company Pages'}
            </div>
            <nav className="space-y-1">
              {navPages.map((page) => {
                const isActive = activePage === page.id;
                const PageIcon = page.icon;
                return (
                  <button
                    key={page.id}
                    onClick={() => handleNavClick(page.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-red-50 text-red-700 font-bold border border-red-200'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <PageIcon className="w-4 h-4 text-slate-500" />
                      <span>{isTr ? page.labelTr : page.labelEn}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <a
              href="tel:+902122862627"
              className="flex items-center gap-1.5 font-medium hover:text-slate-900"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>+90 (212) 286 26 27</span>
            </a>

            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
            >
              <Globe className="w-3.5 h-3.5 text-red-600" />
              <span>{currentLang}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
