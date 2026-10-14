import React from 'react';
import { Logo } from './Logo.tsx';
import { MapPin, Phone, Mail, Printer } from 'lucide-react';
import { Lang, PageId } from '../types/index.ts';

interface FooterProps {
  onNavigate: (page: PageId, brandFilter?: string, categoryFilter?: string) => void;
  lang: Lang;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const isTr = lang === 'TR';

  const handleNav = (page: PageId, brandFilter?: string, categoryFilter?: string) => {
    onNavigate(page, brandFilter, categoryFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-white/90 text-slate-800 text-xs relative z-10 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" variant="light" showSubtitle={true} />
            <p className="text-slate-700 text-xs leading-relaxed max-w-sm pt-2 font-medium">
              {isTr
                ? 'Global Forte Bilişim Teknolojileri ve Danışmanlık Ltd.; donanımsal güvenlik modülleri (HSM), yüksek güvenlikli ağ şifreleme, akıllı video yönetimi (VMS), taktiksel kablosuz ağlar ve kurumsal sistem entegrasyonunda uzmanlaşmış bağımsız bir teknoloji sağlayıcısıdır.'
                : 'Global Forte Information Technologies & Consultancy Ltd. is an independent technology provider specializing in hardware security modules (HSM), network cryptography, intelligent VMS, tactical wireless infrastructure, and systems integration.'}
            </p>
            <div className="text-[11px] text-slate-900 font-bold pt-1">
              {isTr ? 'İstanbul Genel Merkezi · 2001’den Bugüne' : 'Istanbul Headquarters · Established 2001'}
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {isTr ? 'Sayfalar' : 'Navigation'}
            </h4>
            <ul className="space-y-2 font-medium text-slate-700">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  {isTr ? 'Ana Sayfa' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  {isTr ? 'Hakkımızda' : 'About Us'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  {isTr ? 'Çözümler' : 'Solutions'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  {isTr ? 'Hizmetler' : 'Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  {isTr ? 'Ürünler' : 'Products'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('partners')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  {isTr ? 'İş Ortakları' : 'Partners'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  {isTr ? 'İletişim' : 'Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Partner Brands */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {isTr ? 'Yetkili Markalar' : 'Authorized Brands'}
            </h4>
            <ul className="space-y-2 font-medium text-slate-700">
              <li>
                <button
                  onClick={() => handleNav('products', 'safenet')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  SafeNet (Thales) HSM
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'redline')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  Redline Communications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'digifort')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  Digifort IP Surveillance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'fortress')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  Fortress Technologies FC-X
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'spyrus')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  SPYRUS Hardware Tokens
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'cryptomathic')}
                  className="hover:text-red-700 transition-colors text-left cursor-pointer"
                >
                  Cryptomathic CKMS & Signer
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {isTr ? 'Genel Merkez İletişim' : 'Headquarters Contact'}
            </h4>
            <ul className="space-y-3 font-medium text-slate-700">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span>Mecidiyeköy Mah. Başaran Sok. No: 2, Şişli 34387 İstanbul</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-700 shrink-0" />
                <span className="font-mono text-slate-900 font-bold">+90 (212) 279 2440</span>
              </li>
              <li className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-red-700 shrink-0" />
                <span className="font-mono text-slate-900 font-bold">+90 (212) 279 0503</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-700 shrink-0" />
                <span className="font-mono text-slate-900 font-bold">info@globalforte.com</span>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full text-center py-2 px-3 bg-red-700 hover:bg-red-800 text-white rounded-lg transition-colors font-bold shadow-xs cursor-pointer"
                >
                  {isTr ? 'Bize Ulaşın' : 'Contact Us'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Certifications & Copyright */}
        <div className="pt-8 border-t border-slate-200/60 text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-700 font-medium">
            <span className="font-mono">ISO 9001</span>
            <span aria-hidden="true">·</span>
            <span className="text-red-700 font-bold font-mono">TSE-HYB</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">ISO 10002</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">ISO 27001</span>
          </div>

          <div className="text-xs font-semibold text-slate-900">
            Global Forte © 2001- 2026 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
