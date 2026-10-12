import React, { useRef } from 'react';
import { X, Download, Printer, CheckCircle2, ShieldCheck, FileText, Cpu, Layers } from 'lucide-react';
import { Product, Lang } from '../types/index.ts';
import { Logo } from './Logo.tsx';
import { ProductVisualBadge } from './ProductVisualBadge.tsx';

interface DatasheetModalProps {
  product: Product | null;
  onClose: () => void;
  lang: Lang;
}

export const DatasheetModal: React.FC<DatasheetModalProps> = ({
  product,
  onClose,
  lang,
}) => {
  const printRef = useRef<HTMLDivElement>(null);
  const isTr = lang === 'TR';

  if (!product) return null;

  const ds = product.datasheetContent;

  const handleDownloadFile = () => {
    // Generate text/markdown datasheet file
    const content = `================================================================================
GLOBAL FORTE INFORMATION TECHNOLOGIES & CONSULTANCY INC.
OFFICIAL TECHNICAL PRODUCT DATASHEET
================================================================================

PRODUCT: ${product.name}
BRAND / MANUFACTURER: ${product.brandName}
PART NUMBER: ${ds.partNumber}
DOCUMENT VERSION: ${ds.version}
DATE: ${new Date().toLocaleDateString()}

1. PRODUCT OVERVIEW
--------------------------------------------------------------------------------
${isTr ? ds.descriptionTr : ds.descriptionEn}

2. DETAILED TECHNICAL ARCHITECTURE
--------------------------------------------------------------------------------
${isTr ? ds.technicalOverviewTr : ds.technicalOverviewEn}

3. CORE SPECIFICATIONS
--------------------------------------------------------------------------------
${product.specs.map((s) => `${isTr ? s.labelTr : s.labelEn}: ${s.val}`).join('\n')}

4. ELECTRICAL & POWER SPECIFICATIONS
--------------------------------------------------------------------------------
${ds.electricalSpecs.map((s) => `${s.key}: ${s.value}`).join('\n')}

5. PHYSICAL & MECHANICAL SPECIFICATIONS
--------------------------------------------------------------------------------
${ds.physicalSpecs.map((s) => `${s.key}: ${s.value}`).join('\n')}

6. ENVIRONMENTAL & COMPLIANCE RATINGS
--------------------------------------------------------------------------------
${ds.environmentalSpecs.map((s) => `${s.key}: ${s.value}`).join('\n')}

REGULATORY CERTIFICATIONS & STANDARDS:
${product.compliance.join(' | ')}

--------------------------------------------------------------------------------
GLOBAL FORTE BİLİŞİM TEKNOLOJİLERİ VE DANIŞMANLIK LTD.
Mecidiyeköy Mah. Başaran Sok. No: 2 Şişli / İstanbul
Tel: +90 (212) 286 26 27 | E-posta: info@globalforte.com | www.globalforte.com
ISO 9001 · TSE-HYB · ISO 10002 · ISO 27001 Certified
================================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GlobalForte_Datasheet_${product.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white border border-slate-300 max-w-3xl w-full rounded-2xl shadow-2xl relative text-slate-900 my-8 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Action Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {isTr ? 'Resmi Teknik Ürün Föyü (Datasheet)' : 'Official Technical Datasheet'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadFile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors shadow-2xs"
              title={isTr ? 'Föyü İndir (.TXT / Datasheet)' : 'Download Document'}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isTr ? 'Datasheet İndir' : 'Download Datasheet'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
              title={isTr ? 'Yazdır / PDF Olarak Kaydet' : 'Print / Save as PDF'}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isTr ? 'Yazdır' : 'Print'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors ml-2"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Viewable Document Area */}
        <div ref={printRef} className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Document Header with Logo & Brand */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-slate-900">
            <div>
              <Logo size="md" variant="light" showSubtitle={true} />
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block">
                {product.brandName}
              </span>
              <div className="text-xs font-mono text-slate-700 font-semibold mt-0.5">
                P/N: {ds.partNumber}
              </div>
              <div className="text-[10px] text-slate-500 font-mono">
                DOC: {ds.version} · {new Date().getFullYear()}
              </div>
            </div>
          </div>

          {/* Hardware & Equipment Visual Illustration */}
          <div className="w-full">
            <ProductVisualBadge product={product} size="lg" />
          </div>

          {/* Product Title Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              {isTr ? product.categoryTr : product.categoryEn}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
              {product.name}
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {isTr ? ds.descriptionTr : ds.descriptionEn}
            </p>
          </div>

          {/* Technical Architecture Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-red-700" />
              <span>{isTr ? 'Teknik Mimari ve Özellikler' : 'Technical Architecture & Features'}</span>
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              {isTr ? ds.technicalOverviewTr : ds.technicalOverviewEn}
            </p>
          </div>

          {/* Key Spec Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-red-700" />
              <span>{isTr ? 'Temel Donanım Parametreleri' : 'Primary Hardware Parameters'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.specs.map((s, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex justify-between">
                  <span className="text-slate-500 font-medium">{isTr ? s.labelTr : s.labelEn}:</span>
                  <span className="text-slate-900 font-semibold text-right">{s.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Electrical & Physical Tables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-bold text-slate-900 mb-2 pb-1 border-b border-slate-200">
                {isTr ? 'Elektrik & Arayüz Spesifikasyonları' : 'Electrical & Interface Specs'}
              </h4>
              <div className="space-y-1.5">
                {ds.electricalSpecs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">{spec.key}:</span>
                    <span className="text-slate-900 font-mono text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-2 pb-1 border-b border-slate-200">
                {isTr ? 'Fiziksel & Çevre Koşulları' : 'Physical & Environmental Specs'}
              </h4>
              <div className="space-y-1.5">
                {[...ds.physicalSpecs, ...ds.environmentalSpecs].map((spec, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">{spec.key}:</span>
                    <span className="text-slate-900 font-mono text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regulatory & Compliance Footprint */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <span className="font-bold text-slate-900 block mb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-700" />
              <span>{isTr ? 'Sertifikalar ve Standart Uyumluluğu:' : 'Regulatory Approvals & Compliance:'}</span>
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {product.compliance.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 bg-white border border-slate-200 rounded text-slate-700 font-medium text-[11px]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Document Footer */}
          <div className="pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
            <div>
              Global Forte Bilişim Teknolojileri ve Danışmanlık Ltd. · Mecidiyeköy / İstanbul · info@globalforte.com
            </div>
            <div>
              ISO 9001 · TSE-HYB · ISO 10002 · ISO 27001 Certified
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {isTr ? 'Teknik föyü doğrudan bilgisayarınıza kaydedebilirsiniz.' : 'You can download the technical datasheet directly.'}
          </span>
          <button
            onClick={handleDownloadFile}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{isTr ? 'Datasheet İndir' : 'Download Datasheet'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
