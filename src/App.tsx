import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { SolutionsPage } from './pages/SolutionsPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { PartnersPage } from './pages/PartnersPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { DatasheetModal } from './components/DatasheetModal.tsx';
import { PageId, Lang, Product } from './types/index.ts';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedBrandForProducts, setSelectedBrandForProducts] = useState<string | undefined>(undefined);
  const [selectedCategoryForProducts, setSelectedCategoryForProducts] = useState<string | undefined>(undefined);
  const [searchQueryForProducts, setSearchQueryForProducts] = useState<string>('');
  const [datasheetProduct, setDatasheetProduct] = useState<Product | null>(null);
  const [lang, setLang] = useState<Lang>('TR');
  
  // Animasyon state'leri
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [fadeAnim, setFadeAnim] = useState<boolean>(false);
  const [displayedGlobal, setDisplayedGlobal] = useState<string>('');
  const [displayedForte, setDisplayedForte] = useState<string>('');
  
  const targetGlobal = 'Global';
  const targetForte = 'Forte';

  // Daktilo efekti
  useEffect(() => {
    let globalIndex = 0;
    let forteIndex = 0;

    const globalInterval = setInterval(() => {
      if (globalIndex <= targetGlobal.length) {
        setDisplayedGlobal(targetGlobal.slice(0, globalIndex));
        globalIndex++;
      } else {
        clearInterval(globalInterval);
        
        const forteInterval = setInterval(() => {
          if (forteIndex <= targetForte.length) {
            setDisplayedForte(targetForte.slice(0, forteIndex));
            forteIndex++;
          } else {
            clearInterval(forteInterval);
          }
        }, 120);
      }
    }, 120);

    const timer1 = setTimeout(() => {
      setFadeAnim(true);
    }, 3800);

    const timer2 = setTimeout(() => {
      setShowIntro(false);
    }, 4600);

    return () => {
      clearInterval(globalInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Ekrana tıklandığında introyu anında geçme
  const handleSkipIntro = () => {
    setFadeAnim(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 500);
  };

  const handleNavigate = (
    page: PageId,
    brandFilter?: string,
    categoryFilter?: string,
    searchFilter?: string
  ) => {
    setActivePage(page);
    if (brandFilter !== undefined) {
      setSelectedBrandForProducts(brandFilter);
    } else if (page !== 'products') {
      setSelectedBrandForProducts(undefined);
    }

    if (categoryFilter !== undefined) {
      setSelectedCategoryForProducts(categoryFilter);
    } else if (page !== 'products') {
      setSelectedCategoryForProducts(undefined);
    }

    if (searchFilter !== undefined) {
      setSearchQueryForProducts(searchFilter);
    } else if (page !== 'products') {
      setSearchQueryForProducts('');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDatasheet = (product: Product) => {
    setDatasheetProduct(product);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'TR' ? 'EN' : 'TR'));
  };

  return (
    <div className="min-h-screen text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white w-full max-w-full overflow-x-hidden relative bg-white">
      
      {/* ========================================================
          EN ARKAYA ZIMBALANMIŞ SABİT KURUMSAL ARKA PLAN KATMANI
          (Bunu hiçbir bileşen, bg-white veya tailwind sınıfı kapatamaz!)
         ======================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sol üst köşeden yayılan ana kırmızı/bordo ışık süzmesi */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px]"></div>
        {/* Sağ alt köşeye doğru süzülen hafif kurumsal doku */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[160px]"></div>
        {/* Arka planda ince bir grid (kareli teknoloji deseni) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      {/* SİNEMATİK PERDE */}
      {showIntro && (
        <div 
          onClick={handleSkipIntro}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
            fadeAnim ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
          }`}
          style={{ 
            backgroundImage: 'linear-gradient(135deg, #8B0000 0%, #ff4d4d 50%, #ffffff 100%)'
          }}
        >
          {/* Arka plan ışık süzümleri */}
          <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-white rounded-full blur-[120px] animate-ping" style={{ animationDuration: '5s' }}></div>
          </div>

          <div className="text-center z-10 px-4 transition-all duration-1000 transform">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider drop-shadow-2xl font-mono flex items-center justify-center gap-3">
              <span 
                className="text-black"
                style={{ filter: 'drop-shadow(0 2px 0 rgba(255,255,255,0.9)) drop-shadow(0 4px 6px rgba(0,0,0,0.6))' }}
              >
                {displayedGlobal}
              </span>
              <span 
                className="text-[#8B0000]" 
                style={{ filter: 'drop-shadow(0 2px 0 rgba(255,255,255,0.9)) drop-shadow(0 4px 6px rgba(0,0,0,0.6))' }}
              >
                {displayedForte}
              </span>
              <span className="animate-pulse text-white">_</span>
            </h1>
            <p className="text-white text-sm md:text-base mt-4 tracking-[0.3em] uppercase opacity-95 font-semibold drop-shadow-md">
              Information Technologies & Consultancy Inc.
            </p>
          </div>
        </div>
      )}

      {/* TOP HEADER (z-10 ile arka planın üstünde, sapasağlam durur) */}
      <div className="relative z-10">
        <Header
          activePage={activePage}
          onNavigate={handleNavigate}
          currentLang={lang}
          onToggleLang={toggleLanguage}
          activeBrand={selectedBrandForProducts}
          activeCategory={selectedCategoryForProducts}
          onOpenDatasheet={handleOpenDatasheet}
          initialSearchQuery={searchQueryForProducts}
        />
      </div>

      {/* MAIN ROUTED VIEW (z-10 ile üstte) */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden relative z-10">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDatasheet={handleOpenDatasheet}
            lang={lang}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} lang={lang} />
        )}

        {activePage === 'solutions' && (
          <SolutionsPage
            onNavigateToProducts={(brand) => handleNavigate('products', brand)}
            onOpenContact={() => handleNavigate('contact')}
            lang={lang}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} lang={lang} />
        )}

        {activePage === 'products' && (
          <ProductsPage
            initialBrand={selectedBrandForProducts}
            initialCategory={selectedCategoryForProducts}
            initialSearchQuery={searchQueryForProducts}
            onOpenDatasheet={handleOpenDatasheet}
            lang={lang}
          />
        )}

        {activePage === 'partners' && (
          <PartnersPage
            onSelectBrand={(brand) => handleNavigate('products', brand)}
            lang={lang}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage lang={lang} />
        )}
      </main>

      {/* CORPORATE FOOTER (z-10 ile üstte) */}
      <div className="relative z-10">
        <Footer onNavigate={handleNavigate} lang={lang} />
      </div>

      {/* DATASHEET MODAL */}
      <DatasheetModal
        product={datasheetProduct}
        onClose={() => setDatasheetProduct(null)}
        lang={lang}
      />
    </div>
  );
}
