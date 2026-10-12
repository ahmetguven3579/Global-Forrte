import React from 'react';
import {
  Briefcase,
  Layers,
  ShieldCheck,
  Headphones,
  Server,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Settings,
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
        'Uluslararası yüksek teknoloji pazarlarında stratejik iş geliştirme, dağıtım ve tedarik stratejileri, kanal geliştirme ve ileri teknoloji ürünlerinin pazarlanması alanlarında kapsamlı danışmanlık hizmetleri.',
      descEn:
        'Strategic international high-tech business development, procurement and distribution strategies, channel expansion, and specialized marketing of mission-critical technology products and services.',
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
        'Farklı üreticilere ait donanım ve yazılım bileşenlerini açık sistem (open systems) standartlarında bir araya getirerek, karmaşık bilişim ve güvenlik altyapılarının anahtar teslim kurulumu ve devreye alınması.',
      descEn:
        'Integrating multi-vendor hardware and software components adhering to open-systems standards for turnkey deployment of complex enterprise IT and communications environments.',
      highlightsTr: [
        'Açık sistem mimarisi ve istemci/sunucu (client/server) entegrasyonu',
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
        'Kritik kurumların siber güvenlik duruşunu güçlendirmek için mimari inceleme, kriptografik anahtar yönetim denetimi, güvenlik açığı tespiti ve standartlara uyumluluk değerlendirmesi.',
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
        'TSE-HYB ve ISO standartlarıyla belgelendirilmiş mühendis kadromuzla, kurulu sistemlerin kesintisiz çalışması için sözleşmeli bakım, 7/24 teknik çağrı merkezi ve yerinde acil müdahale desteği.',
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
        'Yüksek güvenlik standartlarına sahip Unix ve Windows tabanlı kurumsal sunucu altyapımız ile güvenli web barındırma, e-posta güvenliği, anti-spam ve veri tabanı yönetimi.',
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
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
            <span>{isTr ? 'Global Forte Hizmetleri' : 'Global Forte Services'}</span>
            <span aria-hidden="true">·</span>
            <span>{isTr ? 'Hizmetler' : 'Services'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isTr
              ? 'Uluslararası Teknoloji ve Mühendislik Hizmetlerimiz'
              : 'Enterprise Technology & Engineering Services'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            {isTr
              ? '2001 yılından bu yana stratejik danışmanlıktan anahtar teslim sistem entegrasyonuna, bilgi güvenliği denetiminden 7/24 teknik desteğe kadar kurumsal bilişim hizmetleri sunuyoruz.'
              : 'Delivering end-to-end IT services spanning strategic consulting, turnkey systems integration, information security auditing, and 24/7 mission-critical support since 2001.'}
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8 mb-16">
          {servicesList.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-red-100 text-red-700 rounded-xl">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider">
                          0{idx + 1}. {isTr ? srv.badgeTr : srv.badgeEn}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {isTr ? srv.titleTr : srv.titleEn}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed mt-2 mb-4">
                      {isTr ? srv.descTr : srv.descEn}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      {isTr ? 'Hizmet Kapsamı & Özellikler' : 'Service Scope & Deliverables'}
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {(isTr ? srv.highlightsTr : srv.highlightsEn).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {isTr
                ? 'Kurumsal Projeleriniz İçin Uzman Kadromuzla Görüşün'
                : 'Consult with Our Systems Engineering Team'}
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              {isTr
                ? 'İhtiyaçlarınıza özel danışmanlık, sistem entegrasyonu ve SLA teklifi almak için doğrudan İstanbul merkezimizle irtibata geçebilirsiniz.'
                : 'Contact our Istanbul headquarters to discuss customized consultancy, systems integration, or technical support agreements.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>{isTr ? 'Hemen İletişime Geçin' : 'Contact Us Today'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer border border-slate-700"
            >
              <span>{isTr ? 'Ürün Kataloğu' : 'Products Catalog'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
