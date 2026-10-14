import React from 'react';
import {
  Briefcase,
  Layers,
  ShieldCheck,
  Headphones,
  Server,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Lang, PageId } from '../types/index.ts';

interface ServicesPageProps {
  onNavigate: (page: PageId, brandFilter?: string) => void;
  lang: Lang;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, lang }) => {
  const isTr = lang === 'TR';

  const servicesList = [
    {
      id: 'consulting',
      icon: Briefcase,
      badgeTr: 'Strateji & Yönetim',
      badgeEn: 'Strategy & Governance',
      titleTr: 'Uluslararası İş ve Teknoloji Danışmanlığı',
      titleEn: 'International Business & Technology Consultancy',
      descTr:
        'Uluslararası yüksek teknoloji pazarlarında stratejik iş geliştirme, dağıtım ve tedarik stratejileri, kanal geliştirme ve ileri teknoloji ürünlerinin pazarlanması alanlarında kapsamlı danışmanlık sunuyoruz.',
      descEn:
        'Strategic international high-tech business development, procurement and distribution strategies, channel expansion, and specialized marketing of mission-critical technology products and solutions.',
      highlightsTr: [
        'Uluslararası teknoloji tedariki ve dağıtım stratejileri',
        'Kanal geliştirme ve yetkili iş ortaklığı yönetimi',
        'Teknoloji yatırımlarında yatırım geri dönüşü (ROI) optimizasyonu',
        'Stratejik bilgi yönetimi ve uygulama mimarisi tasarımı',
      ],
      highlightsEn: [
        'International high-tech procurement & distribution advisory',
        'Channel development & strategic vendor partnerships',
        'ROI optimization for critical technology investments',
        'Strategic knowledge management & technical architecture design',
      ],
    },
    {
      id: 'integration',
      icon: Layers,
      badgeTr: 'Mühendislik & Entegrasyon',
      badgeEn: 'Engineering & Integration',
      titleTr: 'Sistem Entegrasyonu ve Çözüm Dağıtımı',
      titleEn: 'Systems Integration & Solution Deployment',
      descTr:
        'Farklı üreticilere ait donanım ve yazılım bileşenlerini açık sistem standartlarında bir araya getirerek, karmaşık bilişim ve güvenlik altyapılarının anahtar teslim dağıtımını gerçekleştiriyoruz.',
      descEn:
        'Integrating multi-vendor hardware and software components adhering to open-systems standards for turnkey deployment of complex enterprise IT and communications environments.',
      highlightsTr: [
        'Açık sistem mimarisi ve istemci/sunucu entegrasyonu',
        'Geniş bant kablosuz iletim ve taktik ağ kurulumları',
        'Donanımsal güvenlik modülleri (HSM) ve hat şifreleyici saha dağıtımı',
        'Sistem testleri, kabul prosedürleri ve devreye alma',
      ],
      highlightsEn: [
        'Open systems architecture & client/server integration',
        'Broadband wireless transmission & tactical network deployment',
        'Hardware Security Modules (HSM) & inline encryptor field commissioning',
        'Rigorous acceptance testing and turnkey operational handoff',
      ],
    },
    {
      id: 'risk-security',
      icon: ShieldCheck,
      badgeTr: 'Bilgi Güvenliği',
      badgeEn: 'Information Security',
      titleTr: 'Bilgi Riski Yönetimi ve Ağ Güvenliği Denetimi',
      titleEn: 'Information Risk Management & Network Security Audit',
      descTr:
        'Kritik kurumların siber güvenlik duruşunu güçlendirmek için mimari inceleme, kriptografik anahtar yönetim denetimi, güvenlik açığı tespiti ve standartlara uyumluluk değerlendirmeleri yapıyoruz.',
      descEn:
        'Comprehensive security architecture review, cryptographic key lifecycle audits, vulnerability assessment, and compliance verification for mission-critical organizations.',
      highlightsTr: [
        'FIPS 140-2 Seviye 3/4 kriptografik uyumluluk denetimleri',
        'Kök anahtar ve PKI altyapısı risk analizi',
        'Katman-2 / Katman-3 hat içi şifreleme mimarisi denetimi',
        'ISO 27001 ve regülatif uyumluluk teknik danışmanlığı',
      ],
      highlightsEn: [
        'FIPS 140-2 Level 3/4 cryptographic compliance audits',
        'Root-of-trust & PKI lifecycle vulnerability analysis',
        'Layer-2 & Layer-3 inline encryption architecture audit',
        'ISO 27001 & regulatory compliance technical advisory',
      ],
    },
    {
      id: 'support-maintenance',
      icon: Headphones,
      badgeTr: '7/24 Teknik Servis',
      badgeEn: '24/7 Technical SLA',
      titleTr: 'Teknik Destek, Bakım ve SLA Hizmetleri',
      titleEn: 'Technical Support, Maintenance & SLA Services',
      descTr:
        'TSE-HYB ve ISO standartlarıyla belgelendirilmiş mühendis kadromuzla, kurulu sistemlerin kesintisiz çalışması için sözleşmeli bakım, 7/24 teknik çağrı merkezi ve yerinde acil müdahale sağlıyoruz.',
      descEn:
        'Certified systems engineers backed by TSE-HYB and ISO credentials providing contract-based maintenance, 24/7 technical helpdesk, and rapid on-site emergency resolution.',
      highlightsTr: [
        'Kritik görev sistemleri için garantili SLA yanıt süreleri',
        'Sertifikalı mühendislerle yerinde ve uzaktan müdahale',
        'Yazılım, firmware ve güvenlik yaması güncellemeleri',
        'Arıza durumunda yedek donanım ve parça sağlama garantisi',
      ],
      highlightsEn: [
        'Guaranteed SLA response times for mission-critical installations',
        'Certified systems engineer remote & on-site field intervention',
        'Firmware, patch management, and hardware maintenance',
        'Advance hardware replacement and spare-part provisioning',
      ],
    },
    {
      id: 'hosting',
      icon: Server,
      badgeTr: 'Veri Merkezi & Bulut',
      badgeEn: 'Data Center & Hosting',
      titleTr: 'Güvenli Web Barındırma ve Sunucu Yönetimi',
      titleEn: 'Secure Web Hosting & Managed Infrastructure',
      descTr:
        'Yüksek güvenlik standartlarına sahip Unix ve Windows tabanlı kurumsal sunucu altyapımız ile güvenli web barındırma, e-posta güvenliği, anti-spam ve veri tabanı yönetimi sunuyoruz.',
      descEn:
        'Hardened Unix and Windows enterprise infrastructure delivering secure web hosting, corporate email protection, anti-spam/anti-virus filtering, and managed database operations.',
      highlightsTr: [
        'Yedekli Tier-3 veri merkezi barındırma altyapısı',
        'Güvenli kurumsal e-posta, SPF/DKIM/DMARC ve anti-spam filtreleme',
        'MySQL, MSSQL, PHP, ASP.NET, Java kurumsal uygulama desteği',
        'Düzenli otomatik yedekleme ve felaket kurtarma senaryoları',
      ],
      highlightsEn: [
        'Redundant Tier-3 data center hosting infrastructure',
        'Hardened corporate email with anti-spam and malware mitigation',
        'Database & enterprise runtime support (MySQL, MSSQL, .NET, Java)',
        'Automated regular backups and disaster recovery protocols',
      ],
    },
  ];

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-red-700 shadow-sm backdrop-blur-sm">
            <span>{isTr ? 'Global Forte Hizmetleri' : 'Global Forte Services'}</span>
            <span className="text-red-400">•</span>
            <span>{isTr ? 'Hizmetler' : 'Services'}</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            {isTr ? 'Uluslararası Teknoloji ve Mühendislik Hizmetlerimiz' : 'Enterprise Technology & Engineering Services'}
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-700">
            {isTr
              ? '2001 yılından bu yana stratejik danışmanlıktan anahtar teslim sistem entegrasyonuna, bilgi güvenliği denetiminden 7/24 teknik desteğe kadar kurumsal bilişim hizmetlerini güven, kalite ve süreklilik anlayışıyla sunuyoruz.'
              : 'Delivering end-to-end IT services spanning strategic consulting, turnkey systems integration, information security auditing, and 24/7 mission-critical support with a disciplined focus on reliability and measurable business impact.'}
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {servicesList.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.id}
                className="rounded-[28px] border border-red-200 bg-[#fffdfd] p-5 sm:p-7 lg:p-8 shadow-[0_18px_50px_rgba(120,0,0,0.08)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-800 shadow-inner ring-1 ring-red-200">
                        <IconComp className="h-5 w-5" />
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-red-800">
                          0{idx + 1}. {isTr ? srv.badgeTr : srv.badgeEn}
                        </span>
                        <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                          {isTr ? srv.titleTr : srv.titleEn}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-800">
                      {isTr ? srv.descTr : srv.descEn}
                    </p>
                  </div>

                  <div className="lg:col-span-5 rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 via-[#fff9f9] to-white p-5 shadow-sm">
                    <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-900">
                      {isTr ? 'Hizmet Kapsamı & Özellikler' : 'Service Scope & Deliverables'}
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      {(isTr ? srv.highlightsTr : srv.highlightsEn).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-[28px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-7 sm:p-8 lg:p-10 text-white shadow-[0_18px_55px_rgba(15,23,42,0.25)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold tracking-tight">
                {isTr ? 'Kurumsal Projeleriniz İçin Uzman Kadromuzla Görüşün' : 'Consult with Our Systems Engineering Team'}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {isTr
                  ? 'İhtiyaçlarınıza özel danışmanlık, sistem entegrasyonu ve SLA teklifi almak için doğrudan İstanbul merkezimizle irtibata geçebilirsiniz.'
                  : 'Contact our Istanbul headquarters to discuss customized consultancy, systems integration, or technical support agreements tailored to your business priorities.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-red-800 shadow-md"
              >
                <span>{isTr ? 'Hemen İletişime Geçin' : 'Contact Us Today'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-700"
              >
                {isTr ? 'Ürün Kataloğu' : 'Products Catalog'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
