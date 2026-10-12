export type PageId = 'home' | 'about' | 'solutions' | 'services' | 'products' | 'partners' | 'contact';
export type Lang = 'TR' | 'EN';

export type BrandId = 'all' | 'redline' | 'digifort' | 'safenet' | 'fortress' | 'spyrus' | 'cryptomathic' | 'globalforte';

export interface Product {
  id: string;
  name: string;
  brandId: BrandId;
  brandName: string;
  categoryTr: string;
  categoryEn: string;
  summaryTr: string;
  summaryEn: string;
  specs: { labelTr: string; labelEn: string; val: string }[];
  compliance: string[];
  imageUrl?: string;
  datasheetUrl?: string;
  datasheetContent: {
    partNumber: string;
    version: string;
    descriptionTr: string;
    descriptionEn: string;
    technicalOverviewTr: string;
    technicalOverviewEn: string;
    electricalSpecs: { key: string; value: string }[];
    physicalSpecs: { key: string; value: string }[];
    environmentalSpecs: { key: string; value: string }[];
  };
}

export interface PartnerBrand {
  id: BrandId;
  name: string;
  logoUrl?: string;
  taglineTr: string;
  taglineEn: string;
  descriptionTr: string;
  descriptionEn: string;
  specialtyTr: string;
  specialtyEn: string;
  featuredProductsCount: number;
}
