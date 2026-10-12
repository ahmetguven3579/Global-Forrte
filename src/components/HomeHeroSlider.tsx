import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Video,
  Key,
  Wifi,
  Cpu,
  Layers,
  Sparkles,
  Download,
} from 'lucide-react';
import { Lang, PageId, Product } from '../types/index.ts';
import { PRODUCTS_CATALOG } from '../data/productsData.ts';

interface HomeHeroSliderProps {
  lang: Lang;
  onNavigate: (page: PageId, brandFilter?: string, categoryFilter?: string) => void;
  onOpenDatasheet?: (product: Product) => void;
}

interface SlideItem {
  id: string;
  badgeTr: string;
  badgeEn: string;
  titleTr: string;
  titleEn: string;
  highlightTr: string;
  highlightEn: string;
  descTr: string;
  descEn: string;
  image: string;
  targetBrand?: string;
  targetCategory?: string;
  featuredProductId?: string;
  specs: { labelTr: string; labelEn: string; val: string }[];
  accentColor: string;
  bgGradient: string;
}

export const HomeHeroSlider: React.FC<HomeHeroSliderProps> = ({
  lang,
  onNavigate,
  onOpenDatasheet,
}) => {
  const isTr = lang === 'TR';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideItem[] = [
    {
      id: 'city-surveillance',
      badgeTr: 'T.C. Kamu Güvenliği & MOBESE',
      badgeEn: 'Public Safety & City Surveillance',
      titleTr: 'Kent Güvenlik Yönetim Sistemleri &',
      titleEn: 'City Surveillance Management &',
      highlightTr: 'Akıllı Video Gözetim (VMS)',
      highlightEn: 'Intelligent Video Analytics (VMS)',
      descTr:
        'Türkiye genelinde emniyet müdürlükleri, havalimanları ve kritik tesislerde kullanılan Digifort Enterprise VMS, yüksek hızlı yapay zeka destekli plaka tanıma (Neural LPR) ve adli video arama motorları.',
      descEn:
        'Digifort Enterprise VMS and Neural LPR plate recognition engines deployed across regional law enforcement, international airports, and mission-critical government perimeters.',
      image: '/images/news/city-surveillance-projects-minister.jpg',
      targetBrand: 'digifort',
      targetCategory: 'video',
      featuredProductId: 'digifort-enterprise',
      specs: [
        { labelTr: 'Kamera Kapasitesi', labelEn: 'Camera Scaling', val: 'Sınırsız / Lider' },
        { labelTr: 'Yapay Zeka', labelEn: 'AI Recognition', val: 'Neural LPR & PTS' },
        { labelTr: 'Entegrasyon', labelEn: 'Integration', val: 'MOBESE / KGYS Uyumlu' },
      ],
      accentColor: 'text-sky-400',
      bgGradient: 'from-slate-950 via-slate-900 to-sky-950',
    },
    {
      id: 'redline-wireless',
      badgeTr: 'Redline & Sanal Fiber Optik',
      badgeEn: 'Redline Broadband & Virtual Fiber',
      titleTr: 'Taşıyıcı Sınıfı Geniş Bant Kablosuz &',
      titleEn: 'Carrier-Grade Broadband Wireless &',
      highlightTr: 'RDL-3000 XP & AN-80i Sistemleri',
      highlightEn: 'RDL-3000 XP & AN-80i Systems',
      descTr:
        'Petrol/doğalgaz hatları, akıllı ulaşım, MOBESE ve telekom operatörleri için zorlu arazi koşullarında 50+ km mesafeye kadar kesintisiz, sanal fiber optik kalitesinde yüksek hızlı kablosuz iletişim altyapısı.',
      descEn:
        'Long-range carrier-grade broadband wireless, virtual fiber PTP/PMP connectivity up to 50+ km, and tactical ruggedized base stations under mission-critical conditions.',
      image: '/images/partners/redline/rdl-3000-enterprise-new.jpg',
      targetBrand: 'redline',
      targetCategory: 'wireless',
      featuredProductId: 'redline-rdl3000',
      specs: [
        { labelTr: 'Menzil', labelEn: 'Coverage Range', val: '50+ km Kesintisiz' },
        { labelTr: 'Teknoloji', labelEn: 'Technology', val: 'Sanal Fiber PTP/PMP' },
        { labelTr: 'Dayanıklılık', labelEn: 'Ruggedized', val: 'IP67 / Askeri Seviye' },
      ],
      accentColor: 'text-rose-400',
      bgGradient: 'from-slate-950 via-slate-900 to-rose-950',
    },
    {
      id: 'safenet-hsms',
      badgeTr: 'FIPS 140-2 Seviye 3 Onaylı',
      badgeEn: 'FIPS 140-2 Level 3 Certified',
      titleTr: 'Donanımsal Güvenlik Modülleri (HSM) &',
      titleEn: 'Hardware Security Modules (HSM) &',
      highlightTr: 'Kritik Kriptografi',
      highlightEn: 'Critical Cryptography',
      descTr:
        'Finansal işlemler, e-İmza, PKI ve kurumsal veri tabanı korumasında dünya standardı SafeNet Luna SA Network HSM ve PCIe hızlandırıcı kart ailesiyle tam donanımsal anahtar koruması.',
      descEn:
        'Global benchmark SafeNet Luna SA Network HSMs providing tamper-resistant key isolation for central banking, e-signatures, PKI roots, and TLS acceleration.',
      image: '/images/news/safenet-hsms-new.jpg',
      targetBrand: 'safenet',
      targetCategory: 'hsm',
      featuredProductId: 'safenet-luna-sa',
      specs: [
        { labelTr: 'Sertifikasyon', labelEn: 'Compliance', val: 'FIPS 140-2 Level 3' },
        { labelTr: 'İşlem Hızı', labelEn: 'Crypto TPS', val: '10,000+ RSA/sn' },
        { labelTr: 'Yedeklilik', labelEn: 'Redundancy', val: 'Çift Güç & HA' },
      ],
      accentColor: 'text-red-400',
      bgGradient: 'from-slate-950 via-slate-900 to-red-950',
    },
    {
      id: 'multi-factor',
      badgeTr: 'Zero Trust & Kurumsal Erişim',
      badgeEn: 'Zero Trust & Identity Access',
      titleTr: 'Çok Faktörlü Kimlik Doğrulama (MFA) &',
      titleEn: 'Multi-Factor Authentication (MFA) &',
      highlightTr: 'PKI Akıllı Kart Tokenları',
      highlightEn: 'PKI Smart Card Tokens',
      descTr:
        'SafeNet eToken 5100, eToken PRO, MobilePASS ve akıllı kart aileleriyle uzaktan erişim, VPN ve kurumsal ağlarda yetkisiz erişim risklerini sıfıra indiren donanımsal kimlik doğrulama.',
      descEn:
        'SafeNet eToken 5100, eToken PRO, MobilePASS OTP and JavaCard authenticators eliminating credential breach vulnerabilities across hybrid enterprise perimeters.',
      image: '/images/news/safenet-multi-factor.jpg',
      targetBrand: 'safenet',
      targetCategory: 'token',
      featuredProductId: 'safenet-etoken-5110',
      specs: [
        { labelTr: 'Kripto Çip', labelEn: 'Secure Element', val: 'CC EAL4+ / FIPS' },
        { labelTr: 'Protokoller', labelEn: 'Protocols', val: 'PKI, RADIUS, SAML' },
        { labelTr: 'Form Faktör', labelEn: 'Form Factor', val: 'USB Token & Kart' },
      ],
      accentColor: 'text-amber-400',
      bgGradient: 'from-slate-950 via-slate-900 to-amber-950',
    },
    {
      id: 'critical-infra',
      badgeTr: '2001’den Beri Kesintisiz Mühendislik',
      badgeEn: 'Engineering Leadership Since 2001',
      titleTr: 'Uçtan Uca Bilişim Altyapıları &',
      titleEn: 'End-to-End Enterprise Systems &',
      highlightTr: 'Gelişmiş Siber Güvenlik',
      highlightEn: 'Advanced Cyber Defense',
      descTr:
        'Savunma sanayii, enerji iletim hatları, finans kuruluşları ve telekomünikasyon operatörleri için taşıyıcı sınıfı kablosuz ağlar, hat içi şifreleyiciler ve 7/24 kurumsal destek.',
      descEn:
        'High-reliability carrier-grade wireless links, NSA Suite B inline encryptors, and tier-3 security infrastructure designed for mission-critical deployments.',
      image: '/images/news/4-pic-banner-new.jpg',
      targetBrand: 'fortress',
      targetCategory: 'crypto',
      featuredProductId: 'fortress-fcx',
      specs: [
        { labelTr: 'Deneyim', labelEn: 'Experience', val: '25+ Yıl Sektör Lideri' },
        { labelTr: 'Sertifikasyon', labelEn: 'Accreditation', val: 'ISO 9001 · TSE' },
        { labelTr: 'Hizmet SLA', labelEn: 'Service SLA', val: '7/24 Kesintisiz' },
      ],
      accentColor: 'text-emerald-400',
      bgGradient: 'from-slate-950 via-slate-900 to-emerald-950',
    },
  ];

  // Auto-advance logic
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];
  const featuredProduct = current.featuredProductId
    ? PRODUCTS_CATALOG.find((p) => p.id === current.featuredProductId)
    : null;

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-950 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Dynamic Gradients */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${current.bgGradient} opacity-90 transition-all duration-700 pointer-events-none`}
      />

      {/* Futuristic Grid Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Top Accent Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>{isTr ? current.badgeTr : current.badgeEn}</span>
            </div>

            {/* Slide Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.15] break-words [overflow-wrap:anywhere]">
                {isTr ? current.titleTr : current.titleEn}{' '}
                <span className={current.accentColor}>
                  {isTr ? current.highlightTr : current.highlightEn}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl break-words">
              {isTr ? current.descTr : current.descEn}
            </p>

            {/* Quick Specs Chips */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1 max-w-xl w-full">
              {current.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-2 sm:p-2.5 backdrop-blur-xs min-w-0 overflow-hidden"
                >
                  <div className="text-[10px] text-slate-400 truncate">
                    {isTr ? spec.labelTr : spec.labelEn}
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-white mt-0.5 truncate">
                    {spec.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() =>
                  onNavigate(
                    'products',
                    current.targetBrand,
                    current.targetCategory
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-700 hover:bg-red-800 transition-all shadow-lg hover:shadow-red-700/30 cursor-pointer group"
              >
                <span>
                  {isTr ? 'Ürün ve Çözümleri Gör' : 'View Products & Systems'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {featuredProduct && (
                <button
                  onClick={() => {
                    if (onOpenDatasheet) {
                      onOpenDatasheet(featuredProduct);
                    } else {
                      onNavigate('products', current.targetBrand);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-red-400" />
                  <span>
                    {isTr ? 'Teknik Föyü İndir (PDF)' : 'Download Datasheet'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Sliding Image Display */}
          <div className="lg:col-span-5">
            <div className="relative group/box">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600/30 to-blue-600/30 blur-lg opacity-70 group-hover/box:opacity-100 transition-opacity" />

              {/* Main Image Frame */}
              <div
                onClick={() => {
                  if (featuredProduct && onOpenDatasheet) {
                    onOpenDatasheet(featuredProduct);
                  } else if (current.targetBrand) {
                    onNavigate('products', current.targetBrand, current.targetCategory);
                  }
                }}
                className="relative w-full h-56 sm:h-64 lg:h-72 bg-slate-900/95 border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-2.5 cursor-pointer"
                title={isTr ? 'Ürünü İncele / Datasheet Aç' : 'View Product / Datasheet'}
              >
                <img
                  src={current.image}
                  alt={isTr ? current.titleTr : current.titleEn}
                  className="w-full h-full object-contain rounded-xl transform transition-transform duration-500 group-hover/box:scale-102"
                  onError={(e) => {
                    // Fallback to partner logo if image path error
                    (e.target as HTMLImageElement).src = '/images/mainlogo.png';
                  }}
                />

                {/* Overlaid Bottom Title Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2 flex items-center justify-between">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-red-400 block truncate">
                      {isTr ? current.badgeTr : current.badgeEn}
                    </span>
                    <span className="text-xs font-semibold text-white truncate block">
                      {isTr ? current.highlightTr : current.highlightEn}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-black/60 px-2 py-1 rounded shrink-0">
                    {currentSlide + 1} / {slides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Carousel Navigation Bar: Arrows + Dots + Quick Tabs */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full min-w-0">
          {/* Quick Clickable Slide Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 min-w-0 flex-1 w-full sm:w-auto">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-red-700 text-white shadow-xs font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-white' : 'bg-slate-500'
                    }`}
                  />
                  <span>{isTr ? s.badgeTr : s.badgeEn}</span>
                </button>
              );
            })}
          </div>

          {/* Arrow Buttons & Slide Indicators */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx ? 'w-6 bg-red-600' : 'w-2 bg-slate-600'
                  }`}
                  aria-label={`Slayt ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                aria-label="Önceki Slayt"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                aria-label="Sonraki Slayt"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
