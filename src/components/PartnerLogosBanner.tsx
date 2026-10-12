import React from 'react';
import { Lang } from '../types/index.ts';

interface PartnerLogosBannerProps {
  lang: Lang;
  onSelectBrand?: (brandId: string) => void;
}

export const PartnerLogosBanner: React.FC<PartnerLogosBannerProps> = ({
  lang,
  onSelectBrand,
}) => {
  const isTr = lang === 'TR';

  return (
    <div className="bg-slate-100/80 border-t border-b border-slate-200 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Row 1: Official Quality & Security Certification Badges */}
        <div className="flex flex-col items-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-4">
            {isTr ? 'Akredite Kalite ve Güvenlik Sertifikalarımız' : 'Accredited Quality & Security Certifications'}
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {/* ISO 9001 Badge */}
            <div className="flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <img
                src="./images/certificates/iso9001.png"
                alt="ISO 9001"
                className="h-8 w-auto object-contain"
              />
              <div>
                <span className="text-xs font-bold text-slate-800 block leading-tight">ISO 9001</span>
                <span className="text-[10px] text-slate-500">{isTr ? 'Kalite Yönetim' : 'Quality Mgmt'}</span>
              </div>
            </div>

            {/* TSE-HYB Badge */}
            <div className="flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-xl border border-red-200 shadow-2xs">
              <img
                src="./images/certificates/tsehyb.png"
                alt="TSE-HYB"
                className="h-8 w-auto object-contain"
              />
              <div>
                <span className="text-xs font-bold text-red-700 block leading-tight">TSE-HYB</span>
                <span className="text-[10px] text-slate-500">{isTr ? 'Hizmet Yeterlilik' : 'Service Adequacy'}</span>
              </div>
            </div>

            {/* ISO 10002 Badge */}
            <div className="flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <img
                src="./images/certificates/iso10002.png"
                alt="ISO 10002"
                className="h-8 w-auto object-contain"
              />
              <div>
                <span className="text-xs font-bold text-slate-800 block leading-tight">ISO 10002</span>
                <span className="text-[10px] text-slate-500">{isTr ? 'Müşteri Memnuniyeti' : 'Customer Care'}</span>
              </div>
            </div>

            {/* ISO 27001 Badge */}
            <div className="flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <img
                src="./images/certificates/iso27001.png"
                alt="ISO 27001"
                className="h-8 w-auto object-contain"
              />
              <div>
                <span className="text-xs font-bold text-slate-800 block leading-tight">ISO 27001</span>
                <span className="text-[10px] text-slate-500">{isTr ? 'Bilgi Güvenliği' : 'InfoSec ISMS'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Official Technology Partners (Matching the user's uploaded banner) */}
        <div>
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              {isTr ? 'Yetkili Çözüm Ortakları ve Teknoloji Markaları' : 'Authorized Technology Brands & Solution Partners'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
            {/* Global Forte */}
            <button
              onClick={() => onSelectBrand?.('globalforte')}
              className="p-3 bg-white hover:bg-slate-50 hover:border-red-300 rounded-xl border border-slate-200 flex flex-col items-center justify-center h-24 w-full transition-all text-center group shadow-2xs cursor-pointer"
            >
              <div className="h-9 w-full flex items-center justify-center">
                <img
                  src="./images/mainlogo.png"
                  alt="Global Forte"
                  className="max-h-8 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[9px] text-slate-500 font-mono mt-1 font-semibold truncate max-w-full">OEM & Systems</span>
            </button>

            {/* Redline Communications */}
            <button
              onClick={() => onSelectBrand?.('redline')}
              className="p-3 bg-white hover:bg-slate-50 hover:border-red-300 rounded-xl border border-slate-200 flex flex-col items-center justify-center h-24 w-full transition-all text-center group shadow-2xs cursor-pointer"
            >
              <div className="h-9 w-full flex items-center justify-center">
                <img
                  src="./images/partners/redline/logo.jpg"
                  alt="Redline Communications"
                  className="max-h-7 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[9px] text-slate-500 uppercase tracking-wider mt-1 font-semibold truncate max-w-full">Broadband</span>
            </button>

            {/* Digifort */}
            <button
              onClick={() => onSelectBrand?.('digifort')}
              className="p-3 bg-white hover:bg-slate-50 hover:border-red-300 rounded-xl border border-slate-200 flex flex-col items-center justify-center h-24 w-full transition-all text-center group shadow-2xs cursor-pointer"
            >
              <div className="h-9 w-full flex items-center justify-center">
                <img
                  src="./images/partners/digifort/logo.png"
                  alt="Digifort"
                  className="max-h-7 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[8px] text-slate-500 mt-1 font-semibold truncate max-w-full">VMS & Neural LPR</span>
            </button>

            {/* SafeNet (Thales) */}
            <button
              onClick={() => onSelectBrand?.('safenet')}
              className="p-3 bg-white hover:bg-slate-50 hover:border-red-300 rounded-xl border border-slate-200 flex flex-col items-center justify-center h-24 w-full transition-all text-center group shadow-2xs cursor-pointer"
            >
              <div className="h-9 w-full flex items-center justify-center">
                <img
                  src="./images/partners/safenet/logo.png"
                  alt="SafeNet"
                  className="max-h-7 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[8px] text-slate-500 font-mono mt-1 font-semibold truncate max-w-full">HSM & Tokens</span>
            </button>

            {/* Fortress Technologies */}
            <button
              onClick={() => onSelectBrand?.('fortress')}
              className="p-3 bg-white hover:bg-slate-50 hover:border-red-300 rounded-xl border border-slate-200 flex flex-col items-center justify-center h-24 w-full transition-all text-center group shadow-2xs cursor-pointer"
            >
              <div className="h-9 w-full flex items-center justify-center">
                <img
                  src="./images/partners/fortress/logo.jpg"
                  alt="Fortress Technologies"
                  className="max-h-7 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[8px] text-slate-500 uppercase tracking-widest mt-1 font-semibold truncate max-w-full">Mesh & Crypto</span>
            </button>

            {/* SPYRUS */}
            <button
              onClick={() => onSelectBrand?.('spyrus')}
              className="p-3 bg-white hover:bg-slate-50 hover:border-red-300 rounded-xl border border-slate-200 flex flex-col items-center justify-center h-24 w-full transition-all text-center group shadow-2xs cursor-pointer"
            >
              <div className="h-9 w-full flex items-center justify-center">
                <img
                  src="./images/partners/spyrus/logo.gif"
                  alt="SPYRUS"
                  className="max-h-7 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[8px] text-slate-500 font-mono mt-1 font-semibold truncate max-w-full">PocketVault</span>
            </button>

            {/* Cryptomathic */}
            <button
              onClick={() => onSelectBrand?.('cryptomathic')}
              className="p-3 bg-white hover:bg-slate-50 hover:border-red-300 rounded-xl border border-slate-200 flex flex-col items-center justify-center h-24 w-full transition-all text-center group shadow-2xs cursor-pointer"
            >
              <div className="h-9 w-full flex items-center justify-center">
                <img
                  src="./images/partners/cryptomathic/logo.gif"
                  alt="Cryptomathic"
                  className="max-h-7 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-[8px] text-slate-500 font-mono mt-1 font-semibold truncate max-w-full">Key Management</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
