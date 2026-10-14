import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Video,
  Wifi,
  Server,
  Download,
  Layers,
  Cpu,
  Lock,
  Globe2,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { PageId, Lang, Product } from '../types/index.ts';
import { PartnerLogosBanner } from '../components/PartnerLogosBanner.tsx';
import { HomeHeroSlider } from '../components/HomeHeroSlider.tsx';
import { PRODUCTS_CATALOG } from '../data/productsData.ts';
import { ProductVisualBadge } from '../components/ProductVisualBadge.tsx';

interface HomePageProps {
  onNavigate: (page: PageId, brandFilter?: string, categoryFilter?: string) => void;
  onOpenDatasheet?: (product: Product) => void;
  lang: Lang;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDatasheet, lang }) => {
  const isTr = lang === 'TR';

  // The 5 Core Domain Areas from the original Global Forte website architecture
  const coreDomains = [
    {
      id: 'kablosuz',
      titleTr: 'Kablosuz İletişim',
      titleEn: 'Wireless Communications',
      subtitleTr: 'Redline & Fortress Geniş Bant',
      subtitleEn: 'Redline & Fortress Broadband',
      descTr:
        'Taşıyıcı sınıfı noktadan noktaya (PTP) ve noktadan çok noktaya (PMP) Redline AN-80i / RDL-3000 XP sistemleri, sanal fiber optik bağlantılar ve taktik askeri kablosuz ağlar.',
      descEn:
        'Carrier-grade PTP & PMP wireless infrastructure, Redline virtual fiber optic links, and Fortress tactical military communications.',
      icon: Wifi,
      accent: 'text-red-700 bg-red-50/80 border-red-200',
      brand: 'redline',
      tags: ['RDL-3000 XP', 'AN-80i (50+ km)', 'Taktik Mesh', 'WiMAX'],
    },
    {
      id: 'guvenlik',
      titleTr: 'Bilgi Güvenliği',
      titleEn: 'Information Security',
      subtitleTr: 'SafeNet HSM & Fortress Kripto',
      subtitleEn: 'SafeNet HSM & Inline Encryption',
      descTr:
        'FIPS 140-2 Seviye 3 onaylı SafeNet Luna Network HSM, Fortress FC-X donanımsal hat şifreleyiciler, SPYRUS PocketVault ve Cryptomathic merkezi anahtar yönetimi.',
      descEn:
        'FIPS 140-2 Level 3 certified SafeNet Luna HSMs, Fortress FC-X inline encryption, SPYRUS secure tokens, and Cryptomathic CKMS.',
      icon: ShieldCheck,
      accent: 'text-blue-700 bg-blue-50/80 border-blue-200',
      brand: 'safenet',
      tags: ['Luna Network HSM', 'FC-X 10G/1G', 'eToken 5110', 'CKMS'],
    },
    {
      id: 'entegrasyon',
      titleTr: 'Sistem Entegrasyonu',
      titleEn: 'Systems Integration',
      subtitleTr: 'Digifort IP Gözetim & Analitik',
      subtitleEn: 'Digifort IP Surveillance & VMS',
      descTr:
        'Digifort Kurumsal VMS, yüksek hızlı yapay zeka destekli plaka tanıma (Neural LPR), MOBESE / KGYS uyumlu şehir gözetimi ve kritik tesis entegrasyonu.',
      descEn:
        'Digifort Enterprise VMS, high-speed neural license plate recognition (LPR), city surveillance integration, and perimeter defense.',
      icon: Video,
      accent: 'text-emerald-700 bg-emerald-50/80 border-emerald-200',
      brand: 'digifort',
      tags: ['Digifort VMS', 'Neural LPR (250 km/s)', 'Adli Analitik', 'MOBESE'],
    },
    {
      id: 'gelistirme',
      titleTr: 'Geliştirme & Ar-Ge',
      titleEn: 'Development & R&D',
      subtitleTr: 'Kriptografik Donanım & Yazılım',
      subtitleEn: 'Embedded Crypto Hardware',
      descTr:
        'Müşteriye ve kamu şartnamelerine özel gömülü kriptografik donanım tasarımı, savunma sanayii RFP mühendisliği ve Cryptomathic eIDAS nitelikli imza sistemleri.',
      descEn:
        'Custom embedded cryptographic board design, defense RFP engineering, and Cryptomathic eIDAS qualified electronic signature systems.',
      icon: Cpu,
      accent: 'text-purple-700 bg-purple-50/80 border-purple-200',
      brand: 'globalforte',
      tags: ['Gömülü Kripto', 'Savunma RFP', 'eIDAS e-İmza', 'Sistem Mimarisi'],
    },
    {
      id: 'hosting',
      titleTr: 'Kurumsal Web Hosting',
      titleEn: 'Enterprise Web Hosting',
      subtitleTr: 'Güvenlikli Sunucu & Veri Merkezi',
      subtitleEn: 'Secure Dedicated & Colocation',
      descTr:
        'Tier-3 donanımsal güvenlikli veri merkezi barındırma, DDoS korumalı dedicated sunucular, SSL donanım hızlandırma ve 7/24 kesintisiz NOC izleme.',
      descEn:
        'Tier-3 hardware-secured datacenter hosting, DDoS-mitigated dedicated servers, SSL acceleration, and round-the-clock 24/7 NOC monitoring.',
      icon: Server,
      accent: 'text-amber-700 bg-amber-50/80 border-amber-200',
      brand: 'globalforte',
      category: 'Kurumsal Web Hosting ve Veri Merkezi',
      tags: ['DDoS Koruma', 'Dedicated Sunucu', '7/24 NOC', '%99.999 SLA'],
    },
  ];

  return (
    <div className="space-y-0 w-full max-w-full overflow-x-hidden bg-transparent">
      {/* 1. Official Hero Carousel */}
      <HomeHeroSlider
        lang={lang}
        onNavigate={onNavigate}
        onOpenDatasheet={onOpenDatasheet}
      />

      {/* 2. Original 5 Core Specialization Domains */}
      <section className="py-16 bg-transparent border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
                <span>{isTr ? 'Orijinal 5 Uzmanlık Alanımız' : '5 Core Specialization Areas'}</span>
                <span aria-hidden="true">·</span>
                <span>{isTr ? 'Uçtan Uca Bilişim Çözümleri' : 'End-to-End Enterprise Systems'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {isTr ? 'Kritik Görev ve Yüksek Güvenlik Teknolojileri' : 'Mission-Critical & High-Assurance Technologies'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 max-w-2xl font-medium">
                {isTr
                  ? 'Savunma, kamu, finans ve telekomünikasyon sektörlerinde 2001 yılından bu yana uyguladığımız beş ana teknoloji mimarisi.'
                  : 'Five foundational technology architectures deployed across defense, public sector, and banking since 2001.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 hover:bg-white text-slate-800 rounded-xl text-xs font-semibold transition-colors shrink-0 cursor-pointer shadow-sm"
            >
              <span>{isTr ? 'Tüm Çözüm Detayları' : 'Explore All Solutions'}</span>
              <ArrowRight className="w-4 h-4 text-red-700" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5 w-full items-stretch">
            {coreDomains.map((dom) => {
              const IconComp = dom.icon;
              return (
                <div
                  key={dom.id}
                  onClick={() => onNavigate('products', dom.brand, dom.category)}
                  className="bg-white/80 hover:bg-white/95 backdrop-blur-sm border border-white/60 hover:border-red-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer min-w-0 w-full"
                >
                  <div className="min-w-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 shadow-2xs group-hover:scale-105 transition-transform ${dom.accent}`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-red-700 transition-colors mb-1 break-words">
                      {isTr ? dom.titleTr : dom.titleEn}
                    </h3>
                    <div className="text-[11px] font-semibold text-slate-600 mb-2 break-words">
                      {isTr ? dom.subtitleTr : dom.subtitleEn}
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed mb-4 break-words font-medium">
                      {isTr ? dom.descTr : dom.descEn}
                    </p>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {dom.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium bg-white/90 px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-red-700 pt-3 border-t border-slate-200/60 group-hover:translate-x-0.5 transition-transform">
                      <span>{isTr ? 'Ürünleri Gör' : 'View Products'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Official Partner Logos */}
      <PartnerLogosBanner
        lang={lang}
        onSelectBrand={(brandId) => onNavigate('products', brandId)}
      />

      {/* 4. Featured Hardware Products Showcase */}
      <section className="py-20 bg-transparent border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
                <span>{isTr ? 'Orijinal Donanım ve Sistemler' : 'Original Hardware & Systems'}</span>
                <span aria-hidden="true">·</span>
                <span>{isTr ? '138 Onaylı Ürün' : '138 Certified Products'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {isTr ? 'Öne Çıkan Teknoloji Ürünleri & Gerçek Donanım Galerisi' : 'Featured Technology Products & Hardware Gallery'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 max-w-2xl font-medium">
                {isTr
                  ? 'SafeNet HSM’ler, Redline kablosuz istasyonlar, Digifort video analiz sistemleri ve Fortress donanımsal kripto cihazlarının teknik parametreleri ve fotoğrafları.'
                  : 'High-resolution hardware photography and technical specifications for SafeNet HSMs, Redline wireless stations, Digifort VMS, and Fortress encryptors.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              <span>{isTr ? 'Tüm 138 Ürünü İncele' : 'View All 138 Products'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_CATALOG.filter((p) =>
              [
                'safenet-luna-sa',
                'redline-rdl3000',
                'digifort-enterprise',
                'fortress-fcx',
                'spyrus-pocketvault-384',
                'safenet-etoken-5110',
                'redline-an80i',
                'cryptomathic-ckms',
              ].includes(p.id)
            ).map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  if (onOpenDatasheet) {
                    onOpenDatasheet(product);
                  } else {
                    onNavigate('products');
                  }
                }}
                className="bg-white/90 backdrop-blur-sm border border-white/60 hover:border-red-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="p-2 sm:p-2.5 bg-slate-950/95 border-b border-slate-800">
                    <ProductVisualBadge product={product} size="md" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold text-red-700">{product.brandName}</span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.2 rounded">
                        {product.datasheetContent.partNumber}
                      </span>
                    </div>

                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-red-700 transition-colors line-clamp-1 mb-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed mb-3 font-medium">
                      {isTr ? product.summaryTr : product.summaryEn}
                    </p>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {isTr ? 'Orijinal Donanım Fotoğrafı' : 'Hardware Photo'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenDatasheet) {
                        onOpenDatasheet(product);
                      } else {
                        onNavigate('products');
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-800 hover:text-white bg-slate-100 hover:bg-red-700 border border-slate-200 hover:border-red-700 rounded-xl transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-red-700 group-hover:text-white transition-colors" />
                    <span>{isTr ? 'Datasheet & Detay' : 'Datasheet & Specs'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-800 transition-colors cursor-pointer"
            >
              <span>
                {isTr
                  ? 'SafeNet, Redline, Digifort, Fortress, SPYRUS ve tüm markaların 138 ürününü görüntüleyin →'
                  : 'Explore all 138 products across SafeNet, Redline, Digifort, Fortress, SPYRUS →'}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Core Solutions Grid Teaser */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                {isTr ? '5 Temel Kurumsal Hizmet Alanı' : '5 Core Enterprise Solution Areas'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {isTr ? 'Uçtan Uca Kritik Görev Bilişim Altyapıları' : 'End-to-End Mission-Critical Infrastructure'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-800 cursor-pointer"
            >
              <span>{isTr ? 'Tüm Çözüm Detayları' : 'View All Solutions'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
            {coreDomains.map((dom) => {
              const IconComp = dom.icon;
              return (
                <div
                  key={dom.id}
                  onClick={() => onNavigate('solutions')}
                  className="p-5 sm:p-6 rounded-2xl bg-white/80 hover:bg-white/95 backdrop-blur-sm border border-white/60 hover:border-red-300 shadow-sm hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-red-700 border border-slate-200 flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-red-700 transition-colors mb-2">
                      {isTr ? dom.titleTr : dom.titleEn}
                    </h3>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {isTr ? dom.descTr : dom.descEn}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-red-700">
                    <span>{isTr ? 'Detayları İncele' : 'Learn More'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Quick Numbers & Trust Bar */}
      <section className="py-12 bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-red-500">25+</div>
            <div className="text-xs text-slate-400 mt-1">{isTr ? 'Yıllık Sektör Tecrübesi' : 'Years Experience'}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">140+</div>
            <div className="text-xs text-slate-400 mt-1">{isTr ? 'Sertifikalı Donanım Ürünü' : 'Certified Products'}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">%99.999</div>
            <div className="text-xs text-slate-400 mt-1">{isTr ? 'Kritik Sistem Erişilebilirliği' : 'System Availability SLA'}</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">40+</div>
            <div className="text-xs text-slate-400 mt-1">{isTr ? 'Uluslararası Dağıtım Ülkesi' : 'Global Countries'}</div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-red-500">ISO 27001</div>
            <div className="text-xs text-slate-400 mt-1">{isTr ? 'TSE ve Uluslararası Sertifikalı' : 'Certified Compliance'}</div>
          </div>
        </div>
      </section>

      {/* 7. Engineering Consultation Call to Action */}
      <section className="py-14 bg-gradient-to-r from-red-900 via-slate-900 to-slate-950 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              {isTr ? 'Doğrudan Mühendislik Desteği' : 'Direct Engineering Support'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isTr
                ? 'Kritik Görev Projeniz İçin Teknik Danışmanlık ve Şartname Desteği Alın'
                : 'Request Technical Advisory & RFP Specification Support'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium">
              {isTr
                ? 'Mecidiyeköy İstanbul merkez ofisimiz ve uzman mühendis kadromuzla donanımsal kripto, geniş bant kablosuz ve akıllı video gözetim projelerinizi planlayalım.'
                : 'Our Mecidiyeköy Istanbul engineering team assists with hardware crypto, tactical wireless, and intelligent video surveillance deployments.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+902122862627"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-red-400" />
              <span>+90 (212) 286 26 27</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold shadow-lg transition-colors cursor-pointer"
            >
              <span>{isTr ? 'Bize Ulaşın' : 'Contact Us'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
