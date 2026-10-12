import React from 'react';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { Lang, PageId } from '../types/index.ts';
import { PARTNER_BRANDS, PRODUCTS_CATALOG } from '../data/productsData.ts';

interface PartnersPageProps {
  onSelectBrand: (brandId: string) => void;
  lang: Lang;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onSelectBrand, lang }) => {
  const isTr = lang === 'TR';

  const certifications = [
    {
      code: 'ISO 9001:2015',
      image: '/images/certificates/iso9001.png',
      titleTr: 'Kalite Yönetim Sistemi',
      titleEn: 'Quality Management System',
      descTr:
        'Uluslararası standartlarda sürekli süreç iyileştirme, risk yönetimi ve kurumsal mühendislik kalitesi standardı.',
      descEn:
        'International standard for operational quality management, continual improvement, and rigorous engineering controls.',
      badgeColor: 'bg-blue-700',
    },
    {
      code: 'TSE-HYB',
      image: '/images/certificates/tsehyb.png',
      titleTr: 'TSE Hizmet Yeterlilik Belgesi',
      titleEn: 'TSE Service Adequacy Certificate',
      descTr:
        'Türk Standartları Enstitüsü tarafından bilişim teknolojileri, ağ altyapısı ve teknik destek yeterliliğimizin resmi onayı.',
      descEn:
        'Official Turkish Standards Institution accreditation verifying IT service capability, lab testing, and technical support.',
      badgeColor: 'bg-red-600',
    },
    {
      code: 'ISO 10002:2018',
      image: '/images/certificates/iso10002.png',
      titleTr: 'Müşteri Memnuniyeti Yönetim Sistemi',
      titleEn: 'Customer Satisfaction Management',
      descTr:
        'Müşteri geri bildirimlerinin şeffaf yönetimi, kurumsal çözüm süreçleri ve yüksek memnuniyet taahhüdü.',
      descEn:
        'Guidelines for complaints handling, stakeholder transparency, and ongoing customer relationship excellence.',
      badgeColor: 'bg-blue-700',
    },
    {
      code: 'ISO 27001:2022',
      image: '/images/certificates/iso27001.png',
      titleTr: 'Bilgi Güvenliği Yönetim Sistemi (BGYS)',
      titleEn: 'Information Security Management System',
      descTr:
        'Kurumsal verilerin, müşteri projelerinin ve kriptografik altyapıların en üst düzeyde gizlilik ve bütünlükle korunması.',
      descEn:
        'Global benchmark for protecting enterprise data assets, client projects, and cryptographic environments.',
      badgeColor: 'bg-blue-700',
    },
  ];

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-700 mb-2">
            <span>{isTr ? 'Ekosistem ve Akreditasyonlar' : 'Ecosystem & Accreditations'}</span>
            <span aria-hidden="true">·</span>
            <span>{isTr ? 'Resmi Belgeler' : 'Official Credentials'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isTr
              ? 'Yetkili Teknoloji Markaları ve Kalite Belgelerimiz'
              : 'Authorized Technology Partners & Quality Certifications'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            {isTr
              ? 'Global Forte, 2001’den bu yana dünyanın önde gelen siber güvenlik, kablosuz iletişim ve video gözetim üreticilerinin yetkili temsilcisi ve çözüm ortağıdır.'
              : 'Global Forte has been an authorized distributor, integrator, and engineering partner for world-class cybersecurity and wireless communications leaders since 2001.'}
          </p>
        </div>

        {/* 1. Official Certifications Grid with Real Certificates */}
        <div className="mb-16">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
            <Award className="w-5 h-5 text-red-700" />
            <h2 className="text-lg font-bold text-slate-900">
              {isTr ? 'Resmi Kalite ve Güvenlik Sertifikalarımız' : 'Official Quality & Security Accreditations'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <div
                key={c.code}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold text-white px-2.5 py-1 rounded font-mono ${c.badgeColor}`}>
                      {c.code}
                    </span>
                    <img
                      src={c.image}
                      alt={c.code}
                      className="h-9 w-auto object-contain opacity-90"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {isTr ? c.titleTr : c.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isTr ? c.descTr : c.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>{isTr ? 'Aktif & Denetlenmiş Belge' : 'Active & Verified'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Partner Brands: Clean & Direct, No Category Groupings */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-bold text-slate-900">
                {isTr ? 'Yetkili Markalarımız' : 'Authorized Technology Brands'}
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono font-semibold">
              7 {isTr ? 'Lider Marka · 140+ Ürün' : 'Leading Brands · 140+ Products'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNER_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-all group"
              >
                <div>
                  {/* Brand Header with Real Logo */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      {brand.logoUrl && (
                        <div className="h-10 w-24 flex items-center justify-start bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                          <img
                            src={brand.logoUrl}
                            alt={brand.name}
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-red-700 transition-colors">
                          {brand.name}
                        </h3>
                      </div>
                    </div>
                    {(() => {
                      const brandProducts = PRODUCTS_CATALOG.filter((p) => p.brandId === brand.id);
                      return (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-red-50 text-red-700 rounded-full shrink-0">
                          {brandProducts.length} {isTr ? 'Ürün' : 'Products'}
                        </span>
                      );
                    })()}
                  </div>

                  <span className="text-xs font-bold text-red-700 block mb-2">
                    {isTr ? brand.taglineTr : brand.taglineEn}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {isTr ? brand.descriptionTr : brand.descriptionEn}
                  </p>

                  {/* Mini Product Photos Row */}
                  {(() => {
                    const previewProducts = PRODUCTS_CATALOG.filter(
                      (p) => p.brandId === brand.id && p.imageUrl
                    ).slice(0, 4);
                    if (previewProducts.length === 0) return null;
                    return (
                      <div className="mb-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                          {isTr ? 'Örnek Donanım Fotoğrafları:' : 'Hardware Photography:'}
                        </span>
                        <div className="grid grid-cols-4 gap-2">
                          {previewProducts.map((p) => (
                            <div
                              key={p.id}
                              className="bg-white border border-slate-200 rounded-lg p-1 h-14 flex items-center justify-center overflow-hidden shadow-2xs group/img"
                              title={p.name}
                            >
                              <img
                                src={p.imageUrl}
                                alt={p.name}
                                className="max-h-full max-w-full object-contain group-hover/img:scale-110 transition-transform"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-700 mb-5">
                    <span className="font-bold text-slate-900 block mb-0.5">
                      {isTr ? 'Uzmanlık Alanı:' : 'Core Specialty:'}
                    </span>
                    <span>{isTr ? brand.specialtyTr : brand.specialtyEn}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectBrand(brand.id)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-slate-800 hover:text-white bg-slate-50 hover:bg-red-700 border border-slate-200 hover:border-red-700 rounded-xl transition-all cursor-pointer shadow-2xs"
                >
                  <span>{brand.name} {isTr ? 'Ürünlerini Görüntüle' : 'Products'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
