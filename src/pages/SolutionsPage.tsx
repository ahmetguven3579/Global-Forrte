import React from 'react';
import { ShieldCheck, Video, Wifi, Server, Check, ArrowRight } from 'lucide-react';
import { Lang, PageId } from '../types/index.ts';

interface SolutionsPageProps {
  onNavigateToProducts: (brandId?: string) => void;
  onOpenContact: () => void;
  lang: Lang;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigateToProducts,
  onOpenContact,
  lang,
}) => {
  const isTr = lang === 'TR';

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
            <span>{isTr ? 'Kurumsal Çözümler' : 'Enterprise Solutions'}</span>
            <span aria-hidden="true">·</span>
            <span>{isTr ? 'Kritik Görev Altyapısı' : 'Mission-Critical Systems'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isTr
              ? 'Yüksek Güvenlikli ve Kesintisiz Bilişim Çözümlerimiz'
              : 'High-Assurance Technology Solutions'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {isTr
              ? 'Siber güvenlikten akıllı video gözetimine, geniş bant kablosuz iletimden kurumsal BT yönetişimine kadar entegre mühendislik çözümleri sunuyoruz.'
              : 'Delivering integrated systems engineering spanning cybersecurity, intelligent surveillance, broadband wireless, and enterprise IT governance.'}
          </p>
        </div>

        {/* 4 Deep-dive Solutions */}
        <div className="space-y-12">
          {/* 1. Network Security & Cryptography */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-100 text-red-700 rounded-2xl">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  01. {isTr ? 'Siber Güvenlik & Kripto' : 'Cybersecurity & Cryptography'}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  {isTr ? 'Donanımsal Hat İçi Ağ Güvenliği ve HSM Çözümleri' : 'Hardware Inline Network Security & HSM Systems'}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl mb-6">
              {isTr
                ? 'Fortress FC-X hat içi ağ şifreleyicilerimiz, SafeNet Luna Network HSM donanımlarımız ve SPYRUS kriptografik çiplerimiz ile kurumlar arası veri iletişimini Katman-2 Ethernet ve Katman-3 IPsec seviyesinde tam hat hızında şifreliyoruz. FIPS 140-2 Seviye 3 onaylı fiziksel müdahale korumalı donanımlarımız, sıfır gecikme ile finansal işlemlerin ve devlet sırrı niteliğindeki bilgilerin güvenliğini sağlar.'
                : 'Protecting classified inter-branch data communications at line-rate with Fortress FC-X inline encryptors, SafeNet Luna Network HSMs, and SPYRUS cryptographic tokens. Meeting FIPS 140-2 Level 3 tamper-resistant hardware standards with sub-microsecond latency.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-xs text-slate-800">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">10 Gbps Hat Hızı</span>
                <span>%0 paket ek yükü ile sıfır gecikmeli şifreleme</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">FIPS 140-2 Seviye 3</span>
                <span>Aktif fiziksel müdahale korumalı kasa mimarisi</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">NSA Suite B</span>
                <span>ECDSA, ECDH, AES-256-GCM ve SHA-384</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">Luna HSM Entegrasyonu</span>
                <span>Kök anahtar ve PKI sertifikalarının donanımda izolasyonu</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => onNavigateToProducts('fortress')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800"
              >
                <span>{isTr ? 'İlgili Kripto Ürünlerini İncele' : 'View Cryptography Products'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Digifort Video Surveillance */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-100 text-red-700 rounded-2xl">
                <Video className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  02. {isTr ? 'Görüntüleme & Yapay Zeka' : 'Surveillance & AI Vision'}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  {isTr ? 'Digifort Kurumsal Video Yönetimi ve Yapay Zekalı PTS' : 'Digifort Enterprise VMS & Neural LPR Systems'}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl mb-6">
              {isTr
                ? 'Global Forte, Digifort’un Türkiye ve bölgedeki yetkili çözüm ortağıdır. Binlerce IP kameranın eşzamanlı izlendiği, sunucu arızalarında 2 saniye içinde kesintisiz yedek sunucuya geçen (failover) VMS mimarileri kuruyoruz. Digifort Neural LPR motorumuz 250 km/s hızdaki araç plakalarını yüksek doğrulukla tanırken; yapay zeka video analitik modüllerimiz petabaytlarca arşivde saniyeler içinde şüpheli eşya ve şahıs tespiti yapar.'
                : 'Authorized enterprise integration partner for Digifort. Engineering distributed VMS clusters capable of managing thousands of video streams with automated under-2-second failover. Digifort Neural LPR identifies license plates at speeds up to 250 km/h, while forensic analytics search petabytes in seconds.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-xs text-slate-800">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">Sınırsız Kamera</span>
                <span>Dağıtık çok sunuculu kurumsal VMS kümesi</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">250 km/s PTS Hızı</span>
                <span>Otoban ve şehir içi araç/renk/marka tespiti</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">Adli Video Arama</span>
                <span>24 saatlik kaydı 3 saniyede filtreleyen derin öğrenme</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">Mobil & Video Wall</span>
                <span>Saha devriyeleri ve komuta merkezleri için tam kontrol</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => onNavigateToProducts('digifort')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800"
              >
                <span>{isTr ? 'Digifort Ürün Ailesini İncele' : 'View Digifort Products'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Broadband Wireless & Tactical Mesh */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-100 text-red-700 rounded-2xl">
                <Wifi className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  03. {isTr ? 'Kablosuz İletişim' : 'Wireless Infrastructure'}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  {isTr ? 'Redline Geniş Bant ve Fortress Taktiksel Kablosuz Mesh' : 'Redline Broadband Wireless & Fortress Tactical Mesh'}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl mb-6">
              {isTr
                ? 'Kablo kazı maliyetlerinin ve coğrafi engellerin olduğu arazilerde fiber optik hızında kablosuz omurgalar kuruyoruz. Redline Communications RDL-3000 XP sistemleri ile 50 km mesafeye kadar noktadan çok noktaya geniş bant video aktarımı sağlarken; hareketli askeri konvoylar için Fortress kablosuz mesh düğümleri ile kendi kendini kuran ve onaran telsiz ağları inşa ediyoruz. Türk Emniyeti MOBESE kablosuz ağında kanıtlanmış güvenilirlik.'
                : 'Delivering carrier-grade wireless backhauls where optical fiber trenching is prohibitive. Redline RDL-3000 XP connects points up to 50 km with high-capacity throughput, while Fortress tactical mesh nodes maintain self-healing communications between moving armored convoys. Proven in Turkish National Police municipal wireless deployments.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-xs text-slate-800">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">50+ km Menzil</span>
                <span>Taşıyıcı sınıfı noktadan çok noktaya geniş bant</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">Otomatik Takip Anteni</span>
                <span>RAS-Elite hareketli araçlarda kesintisiz link</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">-40°C ile +75°C Dayanım</span>
                <span>IP67 su geçirmez ve MIL-STD-810G askeri kasa</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">Kendi Kendini Onaran Mesh</span>
                <span>Düğüm kaybında milisaniyeler içinde alternatif rota</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => onNavigateToProducts('redline')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800"
              >
                <span>{isTr ? 'Redline Kablosuz Ürünlerini İncele' : 'View Redline Products'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4. IT Governance & Consulting */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-100 text-red-700 rounded-2xl">
                <Server className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
                  04. {isTr ? 'Danışmanlık & Yönetişim' : 'Advisory & Governance'}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">
                  {isTr ? 'Stratejik BT Danışmanlığı, ERP ve Uluslararası Tedarik' : 'Strategic IT Advisory, ERP Architecture & Procurement'}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl mb-6">
              {isTr
                ? 'Global Forte kurumsal danışmanlık birimi; CIO ve CISO’lara bağımsız mimari tasarım, ERP sistem seçimi ve tedarikçi denetimi, ITIL v4 ve COBIT 2019 süreç tasarımı ve ISO 27001 Bilgi Güvenliği Yönetim Sistemi kurulumu sağlar. Ayrıca uluslararası yüksek teknoloji tedarikinde şartname (RFP) hazırlığından sözleşme yönetimine kadar uçtan uca destek verir.'
                : 'Guiding C-level executives through vendor-neutral enterprise architecture blueprints, ERP selection and vendor audit, ITIL and COBIT governance design, and ISO 27001 ISMS certification. Supporting international high-tech procurement programs from RFP specification to SLA compliance.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-xs text-slate-800">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">TOGAF 10 & Zachman</span>
                <span>Kurumsal hedef mimari tasarımı ve yol haritası</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">ISO 27001 BGYS</span>
                <span>Bilgi güvenliği yönetim sistemi kurulum ve denetimi</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">Tedarikçi Denetimi</span>
                <span>Bağımsız RFP şartname oluşturma ve teklif analizi</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="font-bold block text-red-700 mb-0.5">CKMS Entegrasyonu</span>
                <span>Cryptomathic ile merkezi kriptografik anahtar yönetimi</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800"
              >
                <span>{isTr ? 'Danışmanlık Talebi Oluşturun' : 'Request Advisory Consultation'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
