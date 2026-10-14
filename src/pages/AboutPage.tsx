import React from 'react';
import { Target, Award, Users, CheckCircle, Shield, Building2, Cpu, Lock, Globe, Server } from 'lucide-react';
import { Lang, PageId } from '../types/index.ts';
import { PartnerLogosBanner } from '../components/PartnerLogosBanner.tsx';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  lang: Lang;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, lang }) => {
  const isTr = lang === 'TR';

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
            <span>{isTr ? 'Kurumsal Profil' : 'Corporate Profile'}</span>
            <span aria-hidden="true">·</span>
            <span>{isTr ? 'Hakkımızda' : 'About Global Forte'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isTr
              ? 'Global Forte Bilişim Teknolojileri ve Danışmanlık'
              : 'Global Forte Information Technologies & Consultancy'}
          </h1>
          <p className="text-slate-700 text-sm sm:text-base mt-2 leading-relaxed font-medium">
            {isTr
              ? '2001 yılından bu yana uluslararası pazarlarda ileri teknoloji ürünleri, kritik bilişim altyapıları, siber güvenlik sistemleri ve stratejik teknoloji danışmanlığı sunan bağımsız sistem entegratörü.'
              : 'An independent systems integrator delivering high-technology infrastructure, mission-critical cybersecurity, and strategic technical consulting across international markets since 2001.'}
          </p>
        </div>

        {/* Detailed & Clean Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-sm text-slate-800 leading-relaxed font-medium">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {isTr ? 'Şirket Tanımı ve Faaliyet Alanı' : 'Company Overview & Operating Scope'}
              </h2>
              <p>
                {isTr
                  ? 'Global Forte Bilişim Teknolojileri ve Danışmanlık Ltd. Şti., 2001 yılında kurulmuş olup, yüksek teknolojili donanım ve yazılım ürünlerinin geliştirilmesi, pazarlanması, uluslararası tedariki ve anahtar teslim sistem entegrasyonu alanlarında uzmanlaşmıştır.'
                  : 'Founded in 2001, Global Forte Information Technologies and Consultancy Ltd. specializes in the engineering, procurement, international distribution, and turnkey integration of high-technology hardware and software architectures.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {isTr ? 'Açık Sistem Mimarisi ve İstemci/Sunucu Yaklaşımı' : 'Open Systems Architecture & Client-Server Focus'}
              </h3>
              <p>
                {isTr
                  ? 'Mühendislik odak noktamız; açık sistem (open systems) standartlarına dayalı istemci/sunucu mimarileri, yüksek işlem kapasiteli kriptografik donanım modülleri (HSM), geniş bant taktiksel kablosuz ağlar ve akıllı şehir video yönetim altyapılarıdır. Müşterilerimizin teknolojik bağımsızlığını koruyarak, tescilli veya kapalı sistemlerin kısıtlamalarına takılmadan en yüksek performans ve güvenliği elde etmelerini sağlıyoruz.'
                  : 'Our engineering core focuses exclusively on open-systems client/server architectures, high-throughput hardware security modules (HSM), broadband tactical wireless meshes, and municipal intelligent video surveillance networks.'}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {isTr ? 'Uzmanlık ve Çözüm Alanlarımız' : 'Core Disciplines & Competencies'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5 text-slate-700">
                <li>
                  <strong className="text-slate-900">{isTr ? 'Donanımsal Güvenlik Modülleri (HSM):' : 'Hardware Security Modules (HSM):'}</strong>{' '}
                  {isTr
                    ? 'Finans, ödeme sistemleri ve genel amaçlı FIPS 140-2 Seviye 3/4 kriptografik anahtar üretimi ve saklama.'
                    : 'FIPS 140-2 Level 3/4 key lifecycle management and hardware root of trust.'}
                </li>
                <li>
                  <strong className="text-slate-900">{isTr ? 'Uçtan Uca Ağ ve Veri Şifreleme:' : 'Network & Data-at-Rest Encryption:'}</strong>{' '}
                  {isTr
                    ? '100 Gbps Ethernet/IP hat içi donanımsal şifreleyiciler, veritabanı alan şifreleme ve tokenizasyon.'
                    : 'High-assurance line encryptors, database column cryptography, and tokenization.'}
                </li>
                <li>
                  <strong className="text-slate-900">{isTr ? 'Taktik Askeri Kablosuz Mesh İletişimi:' : 'Tactical Defense Wireless Mesh:'}</strong>{' '}
                  {isTr
                    ? 'Zırhlı araçlar, komuta merkezleri ve sahra birlikleri için kendi kendini onaran FIPS onaylı kablosuz ağlar.'
                    : 'Self-forming, self-healing Suite B tactical meshes for mobile vehicle and field units.'}
                </li>
                <li>
                  <strong className="text-slate-900">{isTr ? 'Kent Güvenlik Yönetim Sistemleri (KGYS / VMS):' : 'City Surveillance & Intelligent VMS:'}</strong>{' '}
                  {isTr
                    ? 'Kapsamlı MOBESE/KGYS projeleri, yapay zekalı plaka tanıma (LPR), video analitik ve delil yönetimi.'
                    : 'Large-scale urban surveillance backhauls, automated license plate recognition, and forensic video.'}
                </li>
                <li>
                  <strong className="text-slate-900">{isTr ? 'Geniş Bant Taşıyıcı Telsiz Ağları:' : 'Broadband Carrier-Grade Wireless:'}</strong>{' '}
                  {isTr
                    ? 'Zorlu endüstriyel sahalar, enerji boru hatları ve kamu güvenliği için noktadan noktaya (PTP) ve çok noktaya (PMP) telsiz omurgaları.'
                    : 'Point-to-point and point-to-multipoint wireless infrastructure for critical energy and telecom operators.'}
                </li>
                <li>
                  <strong className="text-slate-900">{isTr ? 'Kurumsal Barındırma ve Sistem Entegrasyonu:' : 'Hardened Web Hosting & Systems Integration:'}</strong>{' '}
                  {isTr
                    ? 'Tier-3 standartlarında yedekli veri merkezi barındırma, DNS, kurumsal e-posta ve yüksek erişilebilirlik mimarileri.'
                    : 'Tier-3 data center hosting, disaster recovery, and mission-critical server management.'}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {isTr ? 'Merkez Yönetimi ve Konum' : 'Headquarters & Location'}
              </h3>
              <p>
                {isTr
                  ? 'Şirketimizin tek ve merkezi yönetim üssü Sarıyer, İstanbul’da yer almaktadır. Doğu ile Batı arasındaki köprü konumumuz sayesinde Türkiye, Kafkaslar ve Orta Asya pazarlarındaki kamu ve özel sektör projelerine doğrudan, hızlı ve güvenilir mühendislik desteği sağlamaktayız.'
                  : 'Global Forte operates its single central headquarters in Sariyer, Istanbul, Turkey, delivering direct, agile engineering advisory and technical support across Turkey and neighboring regions.'}
              </p>
            </div>
          </div>

          {/* Clean Corporate Facts Panel - Buzlu Cam */}
          <div className="lg:col-span-5 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                {isTr ? 'Kurumsal Bilgiler' : 'Corporate Facts'}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                {isTr ? 'Şirket Künyesi' : 'Corporate Credentials'}
              </h3>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Ticaret Unvanı:' : 'Official Title:'}</span>
                <span className="text-slate-900 font-bold text-right">Global Forte Bilişim Teknolojileri ve Danışmanlık Ltd.</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Kuruluş Yılı:' : 'Established:'}</span>
                <span className="text-slate-900 font-bold">2001 (25 Yıllık Tecrübe)</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Genel Merkez:' : 'Headquarters:'}</span>
                <span className="text-slate-900 font-bold text-right">Pınar Mah. Çamlıbel Cad. No.36B, Sarıyer / İstanbul</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Akreditasyonlar:' : 'Accreditations:'}</span>
                <span className="text-slate-900 font-bold text-right">ISO 9001, TSE-HYB, ISO 10002, ISO 27001</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Donanım Standartları:' : 'Hardware Standards:'}</span>
                <span className="text-slate-900 font-bold text-right">FIPS 140-2 L3/4, Common Criteria, PCI DSS</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Yetkili Markalar:' : 'Authorized Brands:'}</span>
                <span className="text-slate-900 font-bold text-right">SafeNet, Redline, Digifort, Fortress, SPYRUS, Cryptomathic</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Telefon / Faks:' : 'Phone / Fax:'}</span>
                <span className="text-slate-900 font-mono font-bold">+90 212 279 2440 / 0503</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <span className="text-slate-600 font-medium">{isTr ? 'Kurumsal E-posta:' : 'Corporate Email:'}</span>
                <span className="text-slate-900 font-mono font-bold">info@globalforte.com</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full mt-4 py-2.5 px-4 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-xl transition-colors text-center shadow-xs cursor-pointer"
            >
              {isTr ? 'İletişime Geçin & Teklif Alın' : 'Contact Engineering & Inquiries'}
            </button>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="border-t border-slate-200/60 pt-16 mb-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              {isTr ? 'Temel Mühendislik İlkelerimiz' : 'Core Engineering Pillars'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
              {isTr
                ? 'Çeyrek asırlık başarımızın arkasındaki ödünsüz kurumsal prensipler.'
                : 'Uncompromising corporate principles behind twenty-five years of operational reliability.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-700 flex items-center justify-center mb-4 border border-red-200/40">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                {isTr ? 'Uluslararası Sertifikasyon' : 'Certified Compliance'}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {isTr
                  ? 'FIPS 140-2 Seviye 3/4, Common Criteria EAL 4+ ve NATO uyumlu kripto standartlarında donanım.'
                  : 'FIPS 140-2 Level 3/4, Common Criteria EAL 4+, and defense-grade certified cryptographic hardware.'}
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-700 flex items-center justify-center mb-4 border border-red-200/40">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                {isTr ? 'Açık Sistem Entegrasyonu' : 'Open Standards'}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {isTr
                  ? 'Tescilli kısıtlamalardan arındırılmış, mevcut altyapılarla sorunsuz haberleşen modüler mimari.'
                  : 'Interoperable systems engineering minimizing vendor lock-in with standard protocols.'}
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-700 flex items-center justify-center mb-4 border border-red-200/40">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                {isTr ? 'TSE ve ISO Kalite Güvencesi' : 'TSE & ISO Audited'}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {isTr
                  ? 'ISO 9001, ISO 27001, ISO 10002 ve TSE-HYB denetimlerinden geçmiş kurumsal hizmet süreci.'
                  : 'Regularly audited and certified service adequacy by Turkish Standards Institution and ISO.'}
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-700 flex items-center justify-center mb-4 border border-red-200/40">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                {isTr ? '7/24 Kesintisiz Destek' : '24/7 Dedicated Support'}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {isTr
                  ? 'Kritik kamu, banka ve savunma altyapıları için yerinde mühendislik müdahalesi ve yedek parça temini.'
                  : 'On-site mission support, SLA management, and component provisioning for high-availability sites.'}
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos Banner Component */}
        <div className="border-t border-slate-200/60 pt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              {isTr ? 'Temsil Ettiğimiz Küresel Teknoloji Liderleri' : 'Authorized Global Technology Brands'}
            </h2>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              {isTr
                ? 'Dünyanın en güvenilir bilişim ve güvenlik üreticilerinin resmi Türkiye temsilcisi.'
                : 'Authorized distributor and system integrator for leading technology brands.'}
            </p>
          </div>
          <PartnerLogosBanner lang={lang} onSelectBrand={(brand) => onNavigate('products')} />
        </div>
      </div>
    </div>
  );
};
