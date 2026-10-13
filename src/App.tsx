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
  const [displayedText, setDisplayedText] = useState<string>('');
  const fullText = 'Global Forte';

  // Daktilo efekti (Harf harf yazılma)
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120); // Her harfin yazılma hızı

    // 3.5 saniye sonra solarak kaybolma başlasın
    const timer1 = setTimeout(() => {
      setFadeAnim(true);
    }, 3500);

    // 4.5 saniye sonra intro tamamen kalksın
    const timer2 = setTimeout(() => {
      setShowIntro(false);
    }, 4500);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const darkRed = '#8B0000';

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
    <div 
      className="min-h-screen text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white w-full max-w-full overflow-x-hidden relative"
      style={{ 
        background: 'linear-gradient(135deg, #e30613 0%, #ffffff 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* SİNEMATİK SÜPER İNTRO PERDESİ */}
      {showIntro && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-in-out ${
            fadeAnim ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
          }`}
          style={{ 
            background: `linear-gradient(135deg, ${darkRed} 0%, #ffffff 100%)`
          }}
        >
          <div className="text-center transition-all duration-1000 transform px-4">
            {/* Daktilo Efektli Başlık */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wider drop-shadow-2xl font-mono">
              {displayedText}
              <span className="animate-pulse text-red-300">_</span>
            </h1>
            <p className="text-white text-sm md:text-base mt-4 tracking-[0.3em] uppercase opacity-90 font-medium animate-fade-in">
              Information Technologies & Consultancy Inc.
            </p>
          </div>
        </div>
      )}

      {/* Top Header with Multi-Page Navigation, Global Search Bar & Quick Categories Bar */}
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

      {/* Main Multi-Page Routed View */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
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

      {/* Corporate Footer with Logos & Certifications */}
      <Footer onNavigate={handleNavigate} lang={lang} />

      {/* Official Technical Datasheet Viewer & Downloader Modal */}
      <DatasheetModal
        product={datasheetProduct}
        onClose={() => setDatasheetProduct(null)}
        lang={lang}
      />
    </div>
  );
}
