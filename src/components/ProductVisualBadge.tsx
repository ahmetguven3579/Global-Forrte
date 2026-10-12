import React, { useState } from 'react';
import { Product } from '../types/index.ts';
import { ShieldCheck, Cpu, Wifi, Key, Video, Server, FileText } from 'lucide-react';

interface ProductVisualBadgeProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
}

export const getVisualType = (
  pid: string
): 'hsm' | 'rackmount' | 'wireless' | 'token' | 'smartcard' | 'camera' | 'server' | 'software' => {
  const p = pid.toLowerCase();
  if (
    p.includes('luna') ||
    p.includes('protectserver') ||
    p.includes('hsm') ||
    p.includes('lynks') ||
    p.includes('viewpin')
  ) {
    return 'hsm';
  }
  if (
    p.includes('encryptor') ||
    p.includes('datasecure') ||
    p.includes('fcx') ||
    p.includes('ciphertrust') ||
    p.includes('storagesecure') ||
    p.includes('protectdb') ||
    p.includes('protectfile') ||
    p.includes('protectv') ||
    p.includes('protectz') ||
    p.includes('esafe') ||
    p.includes('smc')
  ) {
    return 'rackmount';
  }
  if (
    p.includes('an80i') ||
    p.includes('rdl') ||
    p.includes('redmax') ||
    p.includes('mesh') ||
    p.includes('es210') ||
    p.includes('es440') ||
    p.includes('es520') ||
    p.includes('es820') ||
    p.includes('es2440') ||
    p.includes('emp820') ||
    p.includes('rtg') ||
    p.includes('ellipse') ||
    p.includes('wireless') ||
    p.includes('repeater') ||
    p.includes('airguard')
  ) {
    return 'wireless';
  }
  if (
    p.includes('token') ||
    p.includes('ikey') ||
    p.includes('hydra') ||
    p.includes('pocketvault') ||
    p.includes('gold') ||
    p.includes('pass') ||
    p.includes('3500') ||
    p.includes('usb') ||
    p.includes('reader')
  ) {
    return 'token';
  }
  if (
    p.includes('card') ||
    p.includes('smartcard') ||
    p.includes('sc650') ||
    p.includes('sc400') ||
    p.includes('sc330') ||
    p.includes('4100') ||
    p.includes('rosetta')
  ) {
    return 'smartcard';
  }
  if (
    p.includes('lpr') ||
    p.includes('camera') ||
    p.includes('keyboard') ||
    p.includes('insight') ||
    p.includes('evidence') ||
    p.includes('biopass') ||
    p.includes('video') ||
    p.includes('surveillance')
  ) {
    return 'camera';
  }
  if (
    p.includes('hosting') ||
    p.includes('server') ||
    p.includes('systems-integration') ||
    p.includes('web-basic') ||
    p.includes('web-standard') ||
    p.includes('web-pro') ||
    p.includes('web-max') ||
    p.includes('oem')
  ) {
    return 'server';
  }
  return 'software';
};

export const ProductVisualBadge: React.FC<ProductVisualBadgeProps> = ({
  product,
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);
  const type = getVisualType(product.id);
  const brand = product.brandId;

  // Height and layout scalers
  const isLg = size === 'lg';
  const isSm = size === 'sm';
  const containerHeight = isLg ? 'h-64 sm:h-72' : 'h-48 sm:h-52';

  const hasRealPhoto = Boolean(product.imageUrl && !imageError);

  if (isSm) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden group">
        {hasRealPhoto ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <div className="text-[10px] font-bold text-slate-500 font-mono text-center">
            {product.brandName.slice(0, 3)}
          </div>
        )}
      </div>
    );
  }

  // Brand-based styling accents
  const brandBgGradient =
    brand === 'safenet'
      ? 'from-blue-950 via-slate-900 to-indigo-950'
      : brand === 'fortress'
      ? 'from-emerald-950 via-slate-900 to-teal-950'
      : brand === 'spyrus'
      ? 'from-cyan-950 via-slate-900 to-blue-950'
      : brand === 'redline'
      ? 'from-rose-950 via-slate-900 to-red-950'
      : brand === 'digifort'
      ? 'from-sky-950 via-slate-900 to-blue-950'
      : brand === 'cryptomathic'
      ? 'from-amber-950 via-slate-900 to-stone-900'
      : 'from-red-950 via-slate-900 to-rose-950';

  const badgeColor =
    brand === 'safenet'
      ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      : brand === 'fortress'
      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
      : brand === 'spyrus'
      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
      : brand === 'redline'
      ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
      : brand === 'digifort'
      ? 'bg-sky-500/20 text-sky-300 border-sky-500/30'
      : brand === 'cryptomathic'
      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
      : 'bg-red-500/20 text-red-300 border-red-500/30';

  return (
    <div
      className={`relative w-full ${containerHeight} rounded-xl bg-gradient-to-br ${brandBgGradient} border border-slate-700/60 overflow-hidden flex flex-col justify-between p-3 select-none group`}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Top Header: Brand Name + Part Number */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span
          className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeColor}`}
        >
          {product.brandName.split(' ')[0]}
        </span>
        <span className="text-[10px] font-mono font-bold text-slate-300 bg-black/40 px-2 py-0.5 rounded border border-white/10 tracking-tight">
          {product.datasheetContent.partNumber}
        </span>
      </div>

      {/* Central Visual: Real Hardware Photo from globalforte.com or Hardware Schematic */}
      {hasRealPhoto ? (
        <div className="relative z-10 flex-1 flex items-center justify-center p-1 overflow-hidden w-full my-1">
          <div className="relative w-full h-full max-h-full flex items-center justify-center bg-white rounded-lg p-2 shadow-xs border border-white/70 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              loading="lazy"
              onError={() => setImageError(true)}
              className={`${
                isLg
                  ? 'max-h-48 sm:max-h-56'
                  : 'max-h-32 sm:max-h-36'
              } max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
            />
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex items-center justify-center py-1">
          {type === 'rackmount' && (
            <div className="w-full max-w-[260px] bg-slate-800 border border-slate-600 rounded-sm shadow-inner px-2 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="h-4 w-[1px] bg-slate-700 mx-1" />
                <div className="text-[8px] font-mono text-emerald-400 font-bold bg-black/60 px-1 py-0.2 rounded border border-emerald-900/60">
                  10G ACTIVE
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((p) => (
                  <div
                    key={p}
                    className="w-3 h-3 bg-black border border-slate-600 rounded-xs flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400/80 rounded-2xs" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {type === 'hsm' && (
            <div className="w-full max-w-[250px] bg-slate-900 border-2 border-red-900/80 rounded shadow-md px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600 border border-red-400 animate-ping opacity-75" />
                <div>
                  <div className="text-[9px] font-mono font-extrabold text-red-400">
                    FIPS 140-2 L3
                  </div>
                  <div className="text-[7px] font-mono text-slate-400 uppercase">
                    TAMPER RESISTANT
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 rounded bg-slate-800 border border-slate-600 flex items-center justify-center">
                <Key className="w-3.5 h-3.5 text-amber-400" />
              </div>
            </div>
          )}

          {type === 'wireless' && (
            <div className="flex flex-col items-center justify-center">
              <div className="w-20 h-16 bg-slate-200 border-2 border-slate-400 rounded-md shadow-lg flex flex-col items-center justify-center relative">
                <Wifi className="w-6 h-6 text-red-700" />
                <div className="text-[7px] font-bold text-slate-800 uppercase mt-0.5">
                  IP67 OUTDOOR
                </div>
              </div>
              <div className="w-1 h-3 bg-slate-500" />
            </div>
          )}

          {type === 'token' && (
            <div className="flex items-center gap-2 bg-slate-900/90 border border-cyan-500/40 rounded-full px-4 py-1.5 shadow-md">
              <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
              <div className="text-[10px] font-mono font-bold text-cyan-200">
                HARDWARE TOKEN
              </div>
            </div>
          )}

          {type === 'smartcard' && (
            <div className="w-24 h-14 bg-gradient-to-r from-slate-200 to-slate-100 border border-slate-400 rounded-md shadow-md p-1.5 flex flex-col justify-between">
              <div className="w-4 h-3 bg-amber-400/90 border border-amber-600 rounded-xs flex items-center justify-center">
                <div className="w-2 h-1.5 border border-amber-800/40" />
              </div>
              <div className="text-[7px] font-mono text-slate-800 font-bold">
                ISO 7816 CHIP
              </div>
            </div>
          )}

          {type === 'camera' && (
            <div className="flex items-center gap-2 bg-slate-900/90 border border-sky-500/40 rounded-lg px-3 py-1.5">
              <Video className="w-4 h-4 text-sky-400" />
              <span className="text-[10px] font-mono font-bold text-sky-200">
                DIGIFORT VMS / LPR
              </span>
            </div>
          )}

          {type === 'server' && (
            <div className="flex items-center gap-2 bg-slate-900/90 border border-rose-500/40 rounded-lg px-3 py-1.5">
              <Server className="w-4 h-4 text-rose-400" />
              <span className="text-[10px] font-mono font-bold text-rose-200">
                SECURE HOSTING & TIER-3
              </span>
            </div>
          )}

          {type === 'software' && (
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-600 rounded-lg px-3 py-1.5">
              <FileText className="w-4 h-4 text-slate-300" />
              <span className="text-[10px] font-mono font-bold text-slate-200">
                ENTERPRISE SYSTEM
              </span>
            </div>
          )}
        </div>
      )}

      {/* Bottom Footer: Product Model Name */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-200 font-semibold border-t border-white/10 pt-1.5">
        <span className="truncate max-w-[200px]" title={product.name}>
          {product.name}
        </span>
        <span className="text-[9px] font-mono text-slate-400 shrink-0">
          {product.compliance[0] || 'ISO 9001'}
        </span>
      </div>
    </div>
  );
};
