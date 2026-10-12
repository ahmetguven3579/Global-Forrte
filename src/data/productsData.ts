import { Product, PartnerBrand } from '../types/index.ts';

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    id: 'redline',
    name: 'Redline Communications',
    logoUrl: '/images/partners/redline/logo.jpg',
    taglineTr: 'İleri Seviye Geniş Bant Kablosuz İletişim',
    taglineEn: 'Advanced Wireless Broadband Systems',
    descriptionTr:
      'Dünya genelinde 130 ülkede 150.000+ kurulumu bulunan Redline Communications, zorlu coğrafyalar ve kritik görevler için yüksek kapasiteli kablosuz geniş bant çözümleri sunar. Türk Emniyet Teşkilatı MOBESE kablosuz video altyapısı projesinde Global Forte ile birlikte kullanılmıştır.',
    descriptionEn:
      'With 150,000+ deployments across 130 countries, Redline delivers carrier-grade broadband wireless infrastructure for mission-critical video surveillance and harsh industrial corridors.',
    specialtyTr: 'AN-80i, RDL-3000, RDL-2000, RDL-5000, RAS Nomadic, RedMAX WiMAX (AN-100UX, SU-O, SU-I), RTG Connect-OW/OWS/IWS, Ellipse & Edge, Virtual Fiber, RMS',
    specialtyEn: 'AN-80i, RDL-3000, RDL-2000, RDL-5000, RAS Nomadic, RedMAX WiMAX (AN-100UX, SU-O, SU-I), RTG Connect-OW/OWS/IWS, Ellipse & Edge, Virtual Fiber, RMS',
    featuredProductsCount: 15,
  },
  {
    id: 'digifort',
    name: 'Digifort IP Surveillance System',
    logoUrl: '/images/partners/digifort/logo.png',
    taglineTr: 'Kurumsal Video Yönetim & Yapay Zekalı Görüntü Analitiği',
    taglineEn: 'Enterprise Video Management & Neural AI Vision',
    descriptionTr:
      'Global Forte yetkili çözüm ortaklığı ile dağıtılan Digifort; sınırsız kamera desteği, çok sunuculu yük devretme (failover), yüksek hızlı Plaka Tanıma Sistemi (PTS) ve adli video arama motorları ile şehir güvenliğinde dünya standardıdır.',
    descriptionEn:
      'Distributed enterprise VMS platform supporting unlimited cameras, high-speed neural License Plate Recognition (LPR), and deep learning forensic video search.',
    specialtyTr: 'Enterprise, Professional, Standard, Explorer, Neural LPR, Analytics, Biopass, Mobile, Evidence, Insight, I/O Board, DGF-KB1000, Web Server, Storage Engine',
    specialtyEn: 'Enterprise, Professional, Standard, Explorer, Neural LPR, Analytics, Biopass, Mobile, Evidence, Insight, I/O Board, DGF-KB1000, Web Server, Storage Engine',
    featuredProductsCount: 15,
  },
  {
    id: 'safenet',
    name: 'SafeNet (Thales)',
    logoUrl: '/images/partners/safenet/logo.png',
    taglineTr: 'Donanımsal Güvenlik Modülü (HSM) & Veri Koruma',
    taglineEn: 'Hardware Security Modules & Data Protection',
    descriptionTr:
      'Kriptografik anahtar yönetiminde küresel standart olan SafeNet Luna Network HSM, ProtectServer serisi, eToken ve veri koruma çözümleriyle bankacılık, kamu ve savunma kripto işlemlerini güvence altına alır.',
    descriptionEn:
      'Industry-leading FIPS 140-2 Level 3 Hardware Security Modules protecting critical cryptographic keys, PKI certificates, and digital transaction signing.',
    specialtyTr: 'Luna SA, Luna PCI-E, Luna XML, Luna G5, Luna CA4, Luna SP, Luna SX, Luna EFT, ProtectServer, ViewPIN+, SAM, SafeWord, eToken, iKey, SC650, Ethernet/SONET Encryptor, ProtectDB, ProtectFile, ProtectApp, ProtectV, eSafe',
    specialtyEn: 'Luna SA, Luna PCI-E, Luna XML, Luna G5, Luna CA4, Luna SP, Luna SX, Luna EFT, ProtectServer, ViewPIN+, SAM, SafeWord, eToken, iKey, SC650, Ethernet/SONET Encryptor, ProtectDB, ProtectFile, ProtectApp, ProtectV, eSafe',
    featuredProductsCount: 50,
  },
  {
    id: 'fortress',
    name: 'Fortress Technologies',
    logoUrl: '/images/partners/fortress/logo.jpg',
    taglineTr: 'Savunma Standardında Hat İçi Ağ Şifreleme & Mesh',
    taglineEn: 'Defense-Grade Inline Cryptography & Tactical Mesh',
    descriptionTr:
      'Askeri ve gizli kamu omurgalarında NSA Suite B algoritmalarıyla Katman-2 Ethernet ve Katman-3 IPsec hat içi donanımsal şifreleme ve FastPath kendini onaran kablosuz mesh düğümleri sağlar.',
    descriptionEn:
      'Hardware-enforced Layer 2/3 inline network encryption protecting classified defense backbones with NSA Suite B cryptography and FastPath self-healing mesh radios.',
    specialtyTr: 'FC-X 10G, FC-X 1G, FastPath Mesh, ES210, ES440, ES520, ES820, ES2440, EMP820, DS310, FIPS #773 Client, AF Client #358, FC-MAPS',
    specialtyEn: 'FC-X 10G, FC-X 1G, FastPath Mesh, ES210, ES440, ES520, ES820, ES2440, EMP820, DS310, FIPS #773 Client, AF Client #358, FC-MAPS',
    featuredProductsCount: 16,
  },
  {
    id: 'spyrus',
    name: 'SPYRUS',
    logoUrl: '/images/partners/spyrus/logo.gif',
    taglineTr: 'Donanımsal Kriptografik Kimlik & Güvenli Taşınabilir Bellek',
    taglineEn: 'Hardware Cryptographic Identity & Secure Storage',
    descriptionTr:
      'ABD Savunma Bakanlığı (DoD) ve NATO onaylı donanımsal güvenlik çözümleri; Hydra PC, PocketVault P-384, Rosetta akıllı kartlar ve LYNKS HSM ailesiyle hassas verileri ve kimlikleri kriptografik olarak kalkanlar.',
    descriptionEn:
      'FIPS 140-2 Level 3 certified hardware tokens, tamper-proof flash storage, and cryptographic controllers deployed across classified intelligence domains.',
    specialtyTr: 'Hydra PC Digital Attaché, PED, VIP McAfee USB, PocketVault P-384, PocketVault SD, Rosetta Smart Card, Rosetta USB, Rosetta SDHC, Rosetta Micro, LYNKS HSM, MySafeID CA, Signal ID, PAR Readers, SEMS',
    specialtyEn: 'Hydra PC Digital Attaché, PED, VIP McAfee USB, PocketVault P-384, PocketVault SD, Rosetta Smart Card, Rosetta USB, Rosetta SDHC, Rosetta Micro, LYNKS HSM, MySafeID CA, Signal ID, PAR Readers, SEMS',
    featuredProductsCount: 20,
  },
  {
    id: 'cryptomathic',
    name: 'Cryptomathic',
    logoUrl: '/images/partners/cryptomathic/logo.gif',
    taglineTr: 'Merkezi Kriptografik Anahtar Yönetimi & eIDAS e-İmza',
    taglineEn: 'Centralized Key Management & eIDAS Electronic Signatures',
    descriptionTr:
      'Avrupa ve dünya bankacılığının en büyük kriptografi yazılım sağlayıcısı olan Cryptomathic; CKMS, eIDAS nitelikli uzaktan imzalama, EMV kart basımı ve biyometrik pasaport (ePassport) çözümlerinde küresel pazar lideridir.',
    descriptionEn:
      'Global pioneer in cryptographic key management, remote Qualified Electronic Signatures (QES), EMV payment card issuance, and ePassport PKI infrastructure.',
    specialtyTr: 'CKMS, Signer, CardInk, File2File, ePassport PKI, CA & TSA, OCSP Responder, PrimeInk, Secure Memorizer, MASC, CardManager',
    specialtyEn: 'CKMS, Signer, CardInk, File2File, ePassport PKI, CA & TSA, OCSP Responder, PrimeInk, Secure Memorizer, MASC, CardManager',
    featuredProductsCount: 12,
  },
  {
    id: 'globalforte',
    name: 'Global Forte Mühendislik',
    logoUrl: '/images/mainlogo.png',
    taglineTr: 'Özel Çözümler, Taktiksel Donanımlar & Kurumsal Hosting',
    taglineEn: 'Custom Engineering, Tactical Hardware & Managed Hosting',
    descriptionTr:
      'Global Forte Ar-Ge mühendisliği tarafından geliştirilen yerli ve milli gömülü kripto donanımları, taktiksel tekrarlayıcılar, sistem entegrasyonu ve yüksek güvenlikli kurumsal Web Hosting altyapısı (Web-Basic, Standard, Pro, Max).',
    descriptionEn:
      'Proprietary engineering, tactical repeater hardware, systems integration services, and high-security managed corporate web hosting packages.',
    specialtyTr: 'Embedded OEM, Tactical Repeaters, ITIL/COBIT Audits, Systems Integration, Web-Basic, Web-Standard, Web-Pro, Web-Max Hosting & Colocation',
    specialtyEn: 'Embedded OEM, Tactical Repeaters, ITIL/COBIT Audits, Systems Integration, Web-Basic, Web-Standard, Web-Pro, Web-Max Hosting & Colocation',
    featuredProductsCount: 10,
  },
];

export const PRODUCTS_CATALOG: Product[] = [
  // ==========================================
  // REDLINE COMMUNICATIONS (11 Products)
  // ==========================================
  {
    id: 'redline-an80i',
    imageUrl: '/images/partners/redline/an-80i-new.jpg',
    name: 'Redline AN-80i Yüksek Hızlı Geniş Bant Kablosuz Sistem',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Noktadan Noktaya / Çok Noktaya Geniş Bant',
    categoryEn: 'Broadband Wireless Infrastructure (BWI)',
    summaryTr:
      'Karasal fiber kalitesinde yüksek kapasiteli, zorlu arazi koşullarında noktadan noktaya ve noktadan çok noktaya çalışan taşıyıcı sınıfı kablosuz sistem.',
    summaryEn:
      'Carrier-grade broadband wireless platform delivering high-throughput point-to-point and point-to-multipoint links in demanding environments.',
    specs: [
      { labelTr: 'Frekans Aralığı', labelEn: 'Frequency', val: '4.9 GHz - 5.8 GHz Lisanslı / Lisanssız' },
      { labelTr: 'Veri Hızı', labelEn: 'Throughput', val: '100+ Mbps Net IP Veri Hızı' },
      { labelTr: 'Gecikme', labelEn: 'Latency', val: '< 2 ms Düşük Gecikmeli Paket Aktarımı' },
      { labelTr: 'Menzil', labelEn: 'Operational Range', val: '80 km’ye kadar noktadan noktaya' },
    ],
    compliance: ['FCC / IC / ETSI', 'IP67 Dış Ortam', 'AES-128 / AES-256'],
    datasheetContent: {
      partNumber: 'AN-80i-BWI-G2',
      version: 'Rev 4.5',
      descriptionTr:
        'Redline AN-80i, petrol sahaları, maden ocakları ve kamu güvenliği şebekelerinde yüksek hızlı video gözetimi ve veri omurgası sağlamak için tasarlanmış sağlam bir kablosuz platformdur.',
      descriptionEn:
        'The Redline AN-80i provides carrier-grade wireless broadband performance for utility monitoring, perimeter CCTV feeds, and industrial backhauls.',
      technicalOverviewTr:
        'Özel OFDM ve TDD teknolojileri sayesinde zorlu hava koşullarında frekans girişimlerini filtreleyerek kesintisiz iletim sağlar.',
      technicalOverviewEn:
        'Features dynamic adaptive modulation and robust OFDM processing to eliminate multipath fading across rugged terrain.',
      electricalSpecs: [{ key: 'Power Input', value: 'Passive PoE 48-56 VDC' }, { key: 'Power Consumption', value: '25 Watts Typical' }],
      physicalSpecs: [{ key: 'Dimensions', value: '305 x 305 x 70 mm' }, { key: 'Weight', value: '3.1 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +60°C' }, { key: 'Protection', value: 'IP67 IEC 60529' }],
    },
  },
  {
    id: 'redline-rdl3000',
    imageUrl: '/images/partners/redline/rdl-3000-new.jpg',
    name: 'Redline RDL-3000 XP Enterprise Base Station',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Geniş Bant Kablosuz İletişim',
    categoryEn: 'Broadband Wireless Systems',
    summaryTr:
      'Zorlu arazi şartlarında şehir güvenliği, MOBESE video aktarımı ve petrol sahaları için noktadan çok noktaya (PMP) yüksek kapasiteli kablosuz baz istasyonu.',
    summaryEn:
      'High-capacity point-to-multipoint base station engineered for rugged municipal surveillance and pipeline security corridors.',
    specs: [
      { labelTr: 'Frekans Aralığı', labelEn: 'Frequency', val: '470 MHz - 5.8 GHz Geniş Bant' },
      { labelTr: 'Veri Hızı', labelEn: 'Throughput', val: '100+ Mbps Net Kullanıcı Kapasitesi' },
      { labelTr: 'Menzil', labelEn: 'Operational Range', val: '50 km+ (30 mil) Görüş Hattı' },
      { labelTr: 'Kasa Standardı', labelEn: 'Chassis Rating', val: 'IP67 Dış Ortam / MIL-STD-810G' },
    ],
    compliance: ['FCC / IC / ETSI', 'IP67 Waterproof', 'AES-128 / AES-256 Link Encryption'],
    datasheetContent: {
      partNumber: 'RDL-3000-XP-BASE',
      version: 'Rev 4.2',
      descriptionTr:
        'Redline RDL-3000 XP, yüksek çözünürlüklü video gözetim akışlarını ve kritik telemetri verilerini düşük gecikme ve yüksek hizmet kalitesi (QoS) garantisiyle ileten taşıyıcı sınıfı kablosuz sistemdir.',
      descriptionEn:
        'The Redline RDL-3000 XP delivers carrier-grade broadband wireless performance, providing high throughput, ultra-low latency, and robust QoS for critical video and data backhauls.',
      technicalOverviewTr:
        'Tescilli Redline ClearView™ teknolojisi sayesinde frekans kirliliğinin yüksek olduğu ortamlarda dahi paket kaybı yaşamadan kesintisiz iletim gerçekleştirir. Türk Emniyeti ve belediye projelerinde sahada kanıtlanmıştır.',
      technicalOverviewEn:
        'Leverages proprietary ClearView™ technology for clean transmission in high RF noise environments with zero packet loss.',
      electricalSpecs: [{ key: 'Power Input', value: '48-56 VDC via Passive PoE injector' }, { key: 'Power Consumption', value: '25 Watts Typical (35W Peak)' }, { key: 'RF Output Power', value: 'Up to +27 dBm per channel' }],
      physicalSpecs: [{ key: 'Dimensions', value: '298 x 298 x 78 mm' }, { key: 'Weight', value: '2.9 kg' }, { key: 'RF Connectors', value: '2 x Type-N Female (50 Ohm)' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +60°C' }, { key: 'Ingress Protection', value: 'IEC 60529 IP67 submersible' }],
    },
  },
  {
    id: 'redline-rdl3000-elte',
    imageUrl: '/images/partners/redline/rdl-3000-elte-mt-new.jpg',
    name: 'Redline RDL-3000 eLTE-MT Hibrit Terminal',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Taktik LTE & Geniş Bant Hibrit Terminal',
    categoryEn: 'eLTE Mission-Critical Hybrid Terminal',
    summaryTr:
      'Özel LTE (Private LTE) ve tescilli geniş bant kablosuz bağlantıyı tek cihazda birleştiren taktiksel görev kritik saha terminali.',
    summaryEn:
      'Hybrid mission-critical broadband terminal combining Private LTE and proprietary wireless for tactical emergency response.',
    specs: [
      { labelTr: 'Modlar', labelEn: 'Dual Mode', val: 'Private LTE Band 14/28/38/40/41 + RDL-3000 PMP' },
      { labelTr: 'Otomatik Geçiş', labelEn: 'Auto Failover', val: 'LTE ve Geniş Bant Arasında Sıfır Kesintili Geçiş' },
      { labelTr: 'Maksimum Hız', labelEn: 'Peak Throughput', val: '150 Mbps İndirme / 50 Mbps Yükleme' },
      { labelTr: 'Kasa Standardı', labelEn: 'Rating', val: 'MIL-STD-810G Askeri Kasa / IP67' },
    ],
    compliance: ['3GPP Release 12 eLTE', 'MIL-STD-810G', 'FIPS 140-2 Compatible'],
    datasheetContent: {
      partNumber: 'RDL-3000-ELTE-MT',
      version: 'Rev 2.1',
      descriptionTr:
        'Askeri birlikler, sahra hastaneleri ve kamu güvenliği devriyeleri için kamu LTE şebekesi çöktüğünde kendi RDL geniş bant ağına kesintisiz geçen hibrit terminal.',
      descriptionEn:
        'Ensures uninterrupted connectivity for tactical defense convoys by dynamically switching between private LTE and dedicated microwave mesh.',
      technicalOverviewTr:
        'SIM kart tabanlı kimlik doğrulama ile çift hat yedekliliği sağlar, görev kritik bas-konuş (MCPTT) ses ve canlı video iletir.',
      technicalOverviewEn:
        'Supports mission-critical push-to-talk (MCPTT) and live multi-camera vehicle streaming across dual encrypted radios.',
      electricalSpecs: [{ key: 'Vehicle Power', value: '9-36 VDC isolated input' }],
      physicalSpecs: [{ key: 'Housing', value: 'Rugged aluminum casing' }, { key: 'Weight', value: '2.8 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +65°C' }],
    },
  },
  {
    id: 'redline-rdl3000-enterprise',
    imageUrl: '/images/partners/redline/rdl-3000-enterprise-new.jpg',
    name: 'Redline RDL-3000 Enterprise Çoklu Kamera Abonesi',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Kurumsal Güvenlik Abone Ünitesi',
    categoryEn: 'Enterprise CCTV Subscriber Unit',
    summaryTr:
      'Tek bir direkteki 4-8 adede kadar yüksek çözünürlüklü PTZ ve sabit kameranın görüntüsünü paket kaybı olmadan aktaran abone cihazı.',
    summaryEn:
      'Enterprise subscriber transceiver aggregating up to 8 high-definition CCTV camera feeds from single utility poles.',
    specs: [
      { labelTr: 'Kapasite', labelEn: 'Throughput', val: '50 Mbps Simetrik Veri Hızı' },
      { labelTr: 'Kamera Desteği', labelEn: 'Camera Feeds', val: '8x Full HD 1080p / 4K Eşzamanlı Kamera' },
      { labelTr: 'Gecikme', labelEn: 'Jitter & Latency', val: '< 1 ms Jitter-free Video Akışı' },
      { labelTr: 'Anten Seçeneği', labelEn: 'Antenna', val: 'Dahili 19 dBi Panel veya Harici Çanak Anten' },
    ],
    compliance: ['FCC / IC / CE', 'IP67', 'AES-128/256'],
    datasheetContent: {
      partNumber: 'RDL-3000-ENT-SU',
      version: 'Rev 3.0',
      descriptionTr:
        'Şehir izleme kameralarının (MOBESE) kablosuz omurgaya yüksek güvenilirlikle bağlanması için Türkiye’de en çok tercih edilen Redline modelidir.',
      descriptionEn:
        'Widely deployed across metropolitan municipalities for connecting distributed public safety CCTV cameras directly to central VMS.',
      technicalOverviewTr:
        'Kamera bant genişliği dalgalanmalarına karşı dinamik QoS kuyrukları oluşturur, görüntüde donma veya pikselleşmeyi engeller.',
      technicalOverviewEn:
        'Dynamic QoS prioritization preserves high-priority video frames during peak RF channel utilization.',
      electricalSpecs: [{ key: 'PoE Output', value: 'Integrated 802.3at PoE out for powering CCTV camera' }],
      physicalSpecs: [{ key: 'Weight', value: '2.1 kg' }],
      environmentalSpecs: [{ key: 'Temp', value: '-40°C to +60°C' }],
    },
  },
  {
    id: 'redline-ras-nomadic',
    imageUrl: '/images/partners/redline/ras-nomadic.jpg',
    name: 'Redline RAS Nomadic Platform Otomatik Takip Sistemi',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Mobil Otomatik Yönlenen Anten Platformu',
    categoryEn: 'Auto-Acquiring Nomadic Antenna Platform',
    summaryTr:
      'Mobil komuta araçları, petrol arama istasyonları ve gemiler için hareket halindeyken bile en güçlü baz istasyonunu otomatik bulan akıllı anten.',
    summaryEn:
      'Self-aligning nomadic antenna system that automatically acquires and locks onto the optimal wireless base station.',
    specs: [
      { labelTr: 'Kilitleme Süresi', labelEn: 'Lock Time', val: '< 10 Saniyede Otomatik Baz İstasyonu Tespiti' },
      { labelTr: 'Dönüş Açısı', labelEn: 'Scanning', val: '360° Azimut / ±45° Elevasyon Otomatik Tarama' },
      { labelTr: 'Hız Uyumu', labelEn: 'Vehicle Speed', val: '120 km/s Hızda Kesintisiz Yüksek Hızlı Link' },
      { labelTr: 'Anten Kazancı', labelEn: 'Gain', val: '22 dBi Entegre Çift Kutuplu Panel' },
    ],
    compliance: ['MIL-STD-810G', 'MIL-STD-461F', 'IP66 Denizcilik Onaylı'],
    datasheetContent: {
      partNumber: 'RAS-NOMADIC-360-G3',
      version: 'Rev 3.4',
      descriptionTr:
        'Acil durum araçları ve sınır devriyeleri nereye giderse gitsin, personelin anten ayarlaması yapmasına gerek kalmadan yüksek hızlı internet ve video sağlar.',
      descriptionEn:
        'Eliminates manual antenna alignment in the field; automatically establishes robust broadband links to the best tower.',
      technicalOverviewTr:
        'Dahili GPS ve jiroskopik sensörler ile araç viraj alırken veya engebeli yolda ilerlerken anten motorları anlık mikro düzeltmeler yapar.',
      technicalOverviewEn:
        'Onboard 9-axis gyro and GPS feed continuous positional corrections to dual servo motors during vehicle transit.',
      electricalSpecs: [{ key: 'Supply', value: '12-24 VDC Vehicle Battery' }, { key: 'Power Draw', value: '35W active scan' }],
      physicalSpecs: [{ key: 'Radome Dimensions', value: '520 mm x 380 mm' }, { key: 'Weight', value: '13.2 kg' }],
      environmentalSpecs: [{ key: 'Temp', value: '-35°C to +55°C' }],
    },
  },
  {
    id: 'redline-rdl2000',
    imageUrl: '/images/partners/redline/rdl-2000-new.jpg',
    name: 'Redline RDL-2000 Noktadan Noktaya Geniş Bant Link',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Noktadan Noktaya Kablosuz Link',
    categoryEn: 'Point-to-Point Wireless Link',
    summaryTr:
      'Şubeler, kampüs binaları ve uzak depolar arasında uygun maliyetli, güvenilir ve yüksek performanslı noktadan noktaya kablosuz köprü.',
    summaryEn:
      'Cost-effective, highly reliable point-to-point wireless link connecting branch offices, warehouses, and campuses.',
    specs: [
      { labelTr: 'Veri Hızı', labelEn: 'Capacity', val: '75 Mbps Tam Çift Yönlü Aktarım' },
      { labelTr: 'Frekanslar', labelEn: 'Frequencies', val: '5.1 - 5.8 GHz Lisanssız Bantlar' },
      { labelTr: 'Gecikme', labelEn: 'Latency', val: '< 1.8 ms Kararlı İletim' },
      { labelTr: 'Mesafe', labelEn: 'Range', val: '25 km Görüş Hattı Bağlantısı' },
    ],
    compliance: ['FCC Part 15', 'CE Mark', 'IP67'],
    datasheetContent: {
      partNumber: 'RDL-2000-PTP-G1',
      version: 'Rev 2.0',
      descriptionTr:
        'Fiber kazı masrafı yapmadan iki bina arasına dakikalar içinde gigabit seviyesinde ağ uzatmak için tasarlanmış kompakt köprü cihazı.',
      descriptionEn:
        'Streamlined point-to-point wireless bridge engineered for rapid campus interconnects without leasing dark fiber.',
      technicalOverviewTr:
        'Entegre anteni ve PoE beslemesi ile bina çatısına tek bir ethernet kablosu çekilerek kolayca devreye alınır.',
      technicalOverviewEn:
        'Single-cable PoE deployment with integrated high-gain panel simplifies installation and maintenance.',
      electricalSpecs: [{ key: 'PoE', value: '24-48V Passive PoE' }],
      physicalSpecs: [{ key: 'Dimensions', value: '230 x 230 x 45 mm' }, { key: 'Weight', value: '1.2 kg' }],
      environmentalSpecs: [{ key: 'Temp', value: '-30°C to +55°C' }],
    },
  },
  {
    id: 'redline-rdl5000',
    imageUrl: '/images/partners/redline/rdl-5000-new.jpg',
    name: 'Redline RDL-5000 Ultra Kapasiteli Taşıyıcı Omurga',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Gigabit Taşıyıcı Omurga Sistemi',
    categoryEn: 'Gigabit Carrier Backhaul Core',
    summaryTr:
      'Büyük telekom operatörleri ve veri merkezleri için mikrodalga lisanslı frekanslarda çalışan 2.5 Gbps ultra kapasiteli omurga köprüsü.',
    summaryEn:
      'Ultra-high capacity licensed microwave backhaul bridge delivering up to 2.5 Gbps for telco cores and data centers.',
    specs: [
      { labelTr: 'Kapasite', labelEn: 'Throughput', val: '2.5 Gbps Full Duplex Hat Hızı' },
      { labelTr: 'Frekans Bantları', labelEn: 'Licensed Bands', val: '6 GHz, 11 GHz, 18 GHz, 23 GHz, 80 GHz E-Band' },
      { labelTr: 'Modülasyon', labelEn: 'Modulation', val: '4096-QAM Hitless Adaptive Coding' },
      { labelTr: 'Arayüzler', labelEn: 'Interfaces', val: '2x 10GbE SFP+ Fiber + 2x 1GbE RJ45' },
    ],
    compliance: ['Carrier Ethernet 2.0 (MEF 9/14)', 'ETSI Class 4', 'ITU-R'],
    datasheetContent: {
      partNumber: 'RDL-5000-ULTRA-CORE',
      version: 'Rev 1.2',
      descriptionTr:
        'Şehirlerarası ve santraller arası kritik telekom trafiğini yüksek güvenilirlikle taşıyan lisanslı mikrodalga radyolink sistemidir.',
      descriptionEn:
        'Licensed microwave radiolink engineered for core telecom transit and mission-critical inter-city fiber replacement.',
      technicalOverviewTr:
        'Gelişmiş XPIC (Cross-Polarization Interference Cancellation) teknolojisi ile aynı frekansta çift polarizasyon kullanarak bant genişliğini iki katına çıkarır.',
      technicalOverviewEn:
        'Utilizes XPIC technology to double spectral efficiency over licensed microwave spectrum channels.',
      electricalSpecs: [{ key: 'Power Input', value: '-48 VDC Redundant Telco feeds' }],
      physicalSpecs: [{ key: 'Form Factor', value: 'Split-Mount IDU (1U) + ODU Transceiver' }],
      environmentalSpecs: [{ key: 'Availability', value: '99.9999% Telco Grade Uptime' }],
    },
  },
  {
    id: 'redline-redmax-an100ux',
    imageUrl: '/images/partners/redline/an-100ux-redmax-base-station.jpg',
    name: 'Redline RedMAX AN-100UX WiMAX™ Baz İstasyonu',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'WiMAX Taşıyıcı Baz İstasyonu',
    categoryEn: 'WiMAX Carrier Base Station',
    summaryTr:
      'WiMAX Forum onaylı, binlerce sabit ve göçebe aboneye şehir genelinde geniş bant internet ve video sağlayan merkezi baz istasyonu.',
    summaryEn:
      'WiMAX Forum Certified carrier broadband base station providing reliable metropolitan wireless access for thousands of subscribers.',
    specs: [
      { labelTr: 'WiMAX Standardı', labelEn: 'Standard', val: 'IEEE 802.16d / 802.16e WiMAX Forum Certified' },
      { labelTr: 'Frekans Bantları', labelEn: 'RF Bands', val: '3.3 - 3.8 GHz & 5.4 - 5.8 GHz Lisanslı/Lisanssız' },
      { labelTr: 'Hizmet Kalitesi', labelEn: 'QoS Architecture', val: 'Donanımsal UGS, rtPS, nrtPS, BE Servis Akışları' },
      { labelTr: 'Kapsama Yarıçapı', labelEn: 'Cell Radius', val: 'Makro Hücrede 35 km Çap Kapsama' },
    ],
    compliance: ['WiMAX Forum Certified', 'ETSI 300 019', 'FCC Part 90/15'],
    datasheetContent: {
      partNumber: 'AN-100UX-REDMAX-BS',
      version: 'Rev 3.5',
      descriptionTr:
        'Redline RedMAX AN-100UX, operatörler ve kamu kuruluşları için telekom seviyesinde güvenilirlik sağlayan, ses, video ve kurumsal veriyi önceliklendiren WiMAX baz istasyonudur.',
      descriptionEn:
        'RedMAX AN-100UX delivers carrier-grade WiMAX broadband access optimized for high-priority voice, video surveillance, and enterprise telemetry.',
      technicalOverviewTr:
        'Global Forte tarafından Türkiye’de kamu ve enerji altyapılarında kurulan RedMAX serisi, karasal fiberin ulaşamadığı noktalara anında yüksek hızlı geniş bant ulaştırır.',
      technicalOverviewEn:
        'Deployed by Global Forte across EMEA for critical utility grid monitoring and regional public broadband initiatives.',
      electricalSpecs: [{ key: 'Power Supply', value: '-48 VDC Telco Standard or 110-240 VAC' }],
      physicalSpecs: [{ key: 'Form Factor', value: '1U Indoor Unit + Outdoor RF Head' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +65°C Outdoor' }],
    },
  },
  {
    id: 'redline-redmax-suo',
    imageUrl: '/images/partners/redline/redmax-subscriber-unit-su-o.jpg',
    name: 'Redline RedMAX™ SU-O Dış Ortam Abone Ünitesi',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Dış Ortam WiMAX Abone Terminali',
    categoryEn: 'Outdoor WiMAX Subscriber Unit',
    summaryTr:
      'Güvenlik kameraları, trafo merkezleri ve uzak tesislerin RedMAX baz istasyonuna bağlanmasını sağlayan entegre antenli dış ortam abone cihazı.',
    summaryEn:
      'Integrated directional antenna subscriber unit connecting remote CCTV cameras and electrical substations to RedMAX base stations.',
    specs: [
      { labelTr: 'Entegre Anten', labelEn: 'Antenna', val: '19 dBi Yüksek Kazançlı Yönlü Panel Anten' },
      { labelTr: 'Kasa Koruma', labelEn: 'Ingress Protection', val: 'IP67 Su, Toz ve Güneş Işığına Dayanıklı' },
      { labelTr: 'Besleme', labelEn: 'Powering', val: 'Power over Ethernet (PoE) 100m Hat Mesafesi' },
      { labelTr: 'Şifreleme', labelEn: 'Link Security', val: 'Havadan 3DES / AES-128 Donanım Şifreleme' },
    ],
    compliance: ['WiMAX Forum Certified Subscriber', 'IP67', 'RoHS Compliant'],
    datasheetContent: {
      partNumber: 'REDMAX-SU-O-INT',
      version: 'Rev 2.9',
      descriptionTr:
        'Kamera direklerine, bina çatılarına ve trafo merkezlerine kolayca monte edilen, kompakt ve hava şartlarına dayanıklı WiMAX alıcı ünitesidir.',
      descriptionEn:
        'Compact and weatherproof WiMAX subscriber transceiver engineered for mounting on camera poles, towers, and building rooftops.',
      technicalOverviewTr:
        'Yüksek kazançlı dahili paneli sayesinde ek harici anten kablosu gerektirmez, sinyal kaybını sıfıra indirir.',
      technicalOverviewEn:
        'Integrated high-gain directional panel eliminates RF cable losses and accelerates field installation.',
      electricalSpecs: [{ key: 'PoE Voltage', value: '18-48 VDC Power over Ethernet' }],
      physicalSpecs: [{ key: 'Dimensions', value: '250 x 250 x 50 mm' }, { key: 'Weight', value: '1.4 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +60°C' }],
    },
  },
  {
    id: 'redline-virtual-fiber',
    imageUrl: '/images/partners/redline/rdl-2000-new.jpg',
    name: 'Redline Virtual Fiber Point-to-Point Bridge',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Noktadan Noktaya Kablosuz Köprü',
    categoryEn: 'Point-to-Point Wireless Bridge',
    summaryTr:
      'Kablo çekilmesinin imkansız olduğu nehir, vadi ve şehir geçişlerinde fiber optik hızında kablosuz omurga iletim köprüsü.',
    summaryEn:
      'Carrier-grade point-to-point wireless bridge providing optical fiber speeds across rivers, valleys, and urban gaps.',
    specs: [
      { labelTr: 'Kapasite', labelEn: 'Data Capacity', val: '1.2 Gbps Tam Çift Yönlü (Full-Duplex)' },
      { labelTr: 'İşlem Gecikmesi', labelEn: 'Latency', val: '< 0.5 ms Ultra Düşük Gecikme' },
      { labelTr: 'Modülasyon', labelEn: 'Modulation', val: 'Adaptive 1024-QAM Hitless' },
      { labelTr: 'Mesafe', labelEn: 'Link Distance', val: '80 km’ye kadar noktadan noktaya' },
    ],
    compliance: ['ITU-R Compliant', 'FIPS 140-2 Compatible', 'Carrier Ethernet 2.0'],
    datasheetContent: {
      partNumber: 'VF-1200-PTP-G2',
      version: 'Rev 5.0',
      descriptionTr:
        'Fiziksel fiber kazı maliyetlerini ve izin süreçlerini ortadan kaldıran, yüksek bant genişliği gerektiren veri merkezleri ve kampüsler arası fiber hızında kablosuz bağlantı.',
      descriptionEn:
        'Eliminates trenching and fiber lease costs by delivering gigabit wireless backhaul between data centers and enterprise campuses.',
      technicalOverviewTr:
        'Hava koşullarına göre dinamik olarak modülasyonu uyarlayan hitless ACM motoru, yoğun yağış ve fırtınada bile bağlantının kopmasını engeller.',
      technicalOverviewEn:
        'Hitless adaptive modulation ensures zero disconnects even during severe precipitation and atmospheric fading.',
      electricalSpecs: [{ key: 'Interface', value: 'Dual SFP+ 10GbE + 1x RJ45 PoE' }],
      physicalSpecs: [{ key: 'Weight', value: '4.2 kg ODU' }],
      environmentalSpecs: [{ key: 'Temp', value: '-40°C to +65°C' }],
    },
  },
  {
    id: 'redline-rms',
    imageUrl: '/images/partners/redline/redlines-management-suit.jpg',
    name: 'Redline Management Suite™ (RMS) Ağ Yönetim Yazılımı',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Merkezi Ağ Yönetim & NMS',
    categoryEn: 'Centralized Network Management (NMS)',
    summaryTr:
      'Tüm Redline baz istasyonlarını, abonelerini ve kablosuz köprülerini tek bir harita tabanlı ekrandan izleyen, yapılandıran ve güncelleyen yazılım.',
    summaryEn:
      'Centralized carrier-class NMS providing automated element configuration, performance monitoring, and fault management for Redline networks.',
    specs: [
      { labelTr: 'Yönetim Kapasitesi', labelEn: 'Scalability', val: '10.000+ Kablosuz Ağ Cihazı' },
      { labelTr: 'Topoloji Haritası', labelEn: 'Mapping', val: 'GPS Tabanlı Gerçek Zamanlı Coğrafi Ağ Haritası' },
      { labelTr: 'Toplu Güncelleme', labelEn: 'Mass Firmware', val: 'Tek Tıkla Binlerce Cihaza Otomatik Firmware Yükleme' },
      { labelTr: 'Alarm & SNMP', labelEn: 'Monitoring', val: 'SNMP v1/v2c/v3, Anlık E-Posta / SMS Bildirimi' },
    ],
    compliance: ['TM Forum Telecommunications Standard', 'SNMP v3 Güvenli Yönetim'],
    datasheetContent: {
      partNumber: 'RMS-NMS-SERVER-10K',
      version: 'v4.8 Enterprise NMS',
      descriptionTr:
        'Kapsamlı kablosuz şebekelerin kesintisiz çalışması için sinyal seviyelerini (RSSI, SNR), sıcaklıkları ve bant genişliği kullanımını anlık raporlar.',
      descriptionEn:
        'Provides end-to-end performance visibility across complex wireless networks, preemptively flagging RF degradation.',
      technicalOverviewTr:
        'Geçmişe dönük sinyal zayıflamalarını grafiklerle göstererek teknisyenlerin sahaya gitmeden arıza kök nedenini bulmasını sağlar.',
      technicalOverviewEn:
        'Historical trending tools enable proactive maintenance before RF link degradation impacts end-user services.',
      electricalSpecs: [{ key: 'Server Platform', value: 'Linux (RHEL/CentOS) / Windows Server' }],
      physicalSpecs: [{ key: 'Interface', value: 'Secure Web GUI (HTML5) + RESTful API' }],
      environmentalSpecs: [{ key: 'Database', value: 'High performance time-series database' }],
    },
  },

  // ==========================================
  // DIGIFORT (12 Products)
  // ==========================================
  {
    id: 'digifort-enterprise',
    imageUrl: '/images/partners/digifort/digifort_enterprise.jpg',
    name: 'Digifort Enterprise VMS Platformu',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'IP Video Yönetim Yazılımı',
    categoryEn: 'IP Video Management Platform',
    summaryTr:
      'Sınırsız kamera, sınırsız eşzamanlı kullanıcı ve çok sunuculu otomatik yük devretme (failover) kümelemesi sunan amiral gemisi VMS platformu.',
    summaryEn:
      'Flagship enterprise IP video management software for unlimited cameras and users with multi-server failover clustering.',
    specs: [
      { labelTr: 'Kamera Kapasitesi', labelEn: 'Camera Count', val: 'Sınırsız (Dağıtık Sunucu Mimarisi)' },
      { labelTr: 'Yük Devretme', labelEn: 'Failover SLA', val: '< 2 Saniye Otomatik Sunucu Geçişi' },
      { labelTr: 'İstemci Desteği', labelEn: 'Client Support', val: 'Windows, Web, iOS, Android, Video Wall' },
      { labelTr: 'Kayıt Güvenliği', labelEn: 'Recording Security', val: 'AES-256 Şifreli Arşiv & Dijital Filigran' },
    ],
    compliance: ['ONVIF Profile S / G / T', 'GDPR Maskeleme Uyumu', 'ISO 27001 Ready'],
    datasheetContent: {
      partNumber: 'DIGI-VMS-ENT-UNL',
      version: 'v7.4 Enterprise Build',
      descriptionTr:
        'Havalimanları, metrolar, büyükşehir belediyeleri ve kamu kampüsleri gibi en zorlu güvenlik senaryoları için tasarlanmış video yönetim yazılımıdır.',
      descriptionEn:
        'Digifort Enterprise is tailored for airports, subways, municipalities, and critical national infrastructure.',
      technicalOverviewTr:
        'Çoklu monitör destekli Video Wall modülü, PTZ kamera öncelik yönetimi ve üçüncü parti alarm/radar entegrasyonlarıyla tek merkezden tam kontrol sağlar.',
      technicalOverviewEn:
        'Features comprehensive Video Wall matrix, PTZ priority management, and native radar/access control integration.',
      electricalSpecs: [{ key: 'Server Architecture', value: '64-bit Windows Server 2019/2022' }],
      physicalSpecs: [{ key: 'Delivery Format', value: 'Electronic Software License or Hardware Dongle' }],
      environmentalSpecs: [{ key: 'System Uptime SLA', value: '99.999% High Availability Cluster' }],
    },
  },
  {
    id: 'digifort-professional',
    imageUrl: '/images/partners/digifort/digifort_enterprise.jpg',
    name: 'Digifort Professional VMS (64 Kamera)',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Orta-Büyük Ölçek VMS',
    categoryEn: 'Mid-to-Large Scale VMS',
    summaryTr:
      'Sunucu başına 64 adede kadar IP kamera desteği, PTZ öncelik denetimi ve 16 eşzamanlı operatör bağlantısı sunan orta-büyük ölçekli VMS.',
    summaryEn:
      'Professional VMS package supporting up to 64 IP cameras per server with PTZ priority controls and 16 concurrent users.',
    specs: [
      { labelTr: 'Kamera Limiti', labelEn: 'Camera Limit', val: 'Sunucu Başına 64 Kamera' },
      { labelTr: 'Eşzamanlı Kullanıcı', labelEn: 'Concurrent Users', val: '16 Kullanıcı Eşzamanlı İzleme' },
      { labelTr: 'PTZ Yönetimi', labelEn: 'PTZ Management', val: 'Kullanıcı Öncelik Seviyeli Joystick Kontrol' },
      { labelTr: 'Harita Desteği', labelEn: 'Synoptic Maps', val: 'İnteraktif Çok Katlı Bina Haritaları (E-Map)' },
    ],
    compliance: ['ONVIF Conformant', 'TSE Uyumlu'],
    datasheetContent: {
      partNumber: 'DIGI-VMS-PRO-64',
      version: 'v7.4 Pro',
      descriptionTr:
        'Fabrikalar, hastaneler, üniversiteler ve alışveriş merkezleri için ideal ölçekte, yüksek performanslı ve ekonomik video yönetim yazılımı.',
      descriptionEn:
        'Tailored for industrial plants, hospitals, shopping malls, and university campuses needing robust video monitoring.',
      technicalOverviewTr:
        'Daha sonra tek bir lisans yükseltmesi ile doğrudan Enterprise sürümüne ve sınırsız kameraya kesintisiz yükseltilebilir.',
      technicalOverviewEn:
        'Seamlessly upgradeable to Enterprise version without requiring server re-installation.',
      electricalSpecs: [{ key: 'OS', value: 'Windows 10 / 11 / Server' }],
      physicalSpecs: [{ key: 'Licensing', value: 'Per-channel software license' }],
      environmentalSpecs: [{ key: 'Storage Support', value: 'NAS, SAN, DAS storage arrays' }],
    },
  },
  {
    id: 'digifort-standard',
    imageUrl: '/images/partners/digifort/digifort_evidence.jpg',
    name: 'Digifort Standard VMS (32 Kamera)',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'KOBİ Video Yönetimi',
    categoryEn: 'SME Video Management',
    summaryTr:
      '32 kameraya kadar küçük ve orta ölçekli işletmeler, mağazalar ve şube ağları için kompakt ve güvenilir video gözetim paketi.',
    summaryEn:
      'Cost-effective 32-camera VMS package for branch offices, retail chains, and commercial buildings.',
    specs: [
      { labelTr: 'Kamera Limiti', labelEn: 'Camera Limit', val: '32 IP Kamera / Video Kanalı' },
      { labelTr: 'Kullanıcı Sayısı', labelEn: 'Users', val: '8 Eşzamanlı İstemci Bağlantısı' },
      { labelTr: 'Kayıt Matrisi', labelEn: 'Recording', val: 'Sürekli, Hareket Algılamalı ve Takvimli Kayıt' },
      { labelTr: 'Yedekleme', labelEn: 'Archiving', val: 'Otomatik Harici Diske / NAS’a Arşivleme' },
    ],
    compliance: ['ONVIF Profile S', 'H.264 / H.265'],
    datasheetContent: {
      partNumber: 'DIGI-VMS-STD-32',
      version: 'v7.4 Standard',
      descriptionTr:
        'Şube yapısına sahip zincir mağazalar ve orta ölçekli işletmelerin güvenlik ihtiyaçlarını karşılayan standart VMS sürümü.',
      descriptionEn:
        'Reliable video management software offering streamlined deployment for small-to-medium businesses.',
      technicalOverviewTr:
        'Merkezi yönetim istasyonundan birden fazla Standard sunucuya tek ekrandan bağlanılarak çoklu şube izlenebilir.',
      technicalOverviewEn:
        'Central client software connects to multiple Standard servers across distributed branches.',
      electricalSpecs: [{ key: 'System Requirement', value: 'Standard Core i5/i7 PC' }],
      physicalSpecs: [{ key: 'Format', value: 'Software License' }],
      environmentalSpecs: [{ key: 'Uptime', value: 'Continuous 24/7 service operation' }],
    },
  },
  {
    id: 'digifort-explorer',
    imageUrl: '/images/partners/digifort/digifort_analytics.jpg',
    name: 'Digifort Explorer VMS (16 Kamera)',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Başlangıç Düzeyi VMS',
    categoryEn: 'Entry Level VMS',
    summaryTr:
      '16 adede kadar IP kamerayı yöneten, kurulumu kolay, az kaynak tüketen ve ekonomik giriş seviyesi kurumsal VMS yazılımı.',
    summaryEn:
      'Streamlined 16-camera VMS entry package designed for small offices, residential complexes, and standalone sites.',
    specs: [
      { labelTr: 'Kamera Kapasitesi', labelEn: 'Capacity', val: '16 IP Kamera Desteği' },
      { labelTr: 'Kullanıcı Sayısı', labelEn: 'Users', val: '4 Eşzamanlı Operatör İstemcisi' },
      { labelTr: 'Kamera Uyumu', labelEn: 'Camera Compatibility', val: '10.000+ Model ONVIF IP Kamera' },
      { labelTr: 'İzleme', labelEn: 'Mobile App', val: 'Ücretsiz iOS ve Android Mobil İzleme' },
    ],
    compliance: ['ONVIF Profile S', 'Windows 10/11'],
    datasheetContent: {
      partNumber: 'DIGI-VMS-EXP-16',
      version: 'v7.4 Explorer',
      descriptionTr:
        'Küçük ölçekli projeler için profesyonel Digifort kararlılığını uygun fiyatla sunan başlangıç paketi.',
      descriptionEn:
        'Delivers professional Digifort stability and core monitoring features in an entry-level package.',
      technicalOverviewTr:
        'Tüm büyük kamera markalarını (Axis, Bosch, Hanwha, Hikvision, Dahua) tescilli sürücüler veya ONVIF ile destekler.',
      technicalOverviewEn:
        'Supports all major camera vendors via native API drivers and standard ONVIF protocol.',
      electricalSpecs: [{ key: 'OS', value: 'Windows 64-bit' }],
      physicalSpecs: [{ key: 'Format', value: 'Digital License' }],
      environmentalSpecs: [{ key: 'Resource', value: 'Low memory footprint' }],
    },
  },
  {
    id: 'digifort-neural-lpr',
    imageUrl: '/images/partners/digifort/digifort_lpr_system.jpg',
    name: 'Digifort Neural LPR & Plaka Tanıma Sistemi',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Yapay Zekalı Plaka & Araç Tanıma',
    categoryEn: 'Neural License Plate Recognition',
    summaryTr:
      '250 km/s hıza kadar otoban ve şehir içi yollarda yüksek doğrulukla plaka, araç rengi, marka ve model sınıflandırması yapan yapay zeka motoru.',
    summaryEn:
      'High-speed deep learning license plate recognition and vehicle classification engine up to 250 km/h.',
    specs: [
      { labelTr: 'Hız Sınırı', labelEn: 'Speed Tolerance', val: '250 km/s (155 mph) Otoban Tespiti' },
      { labelTr: 'Doğruluk Oranı', labelEn: 'Accuracy', val: '%99.4 Çoklu Plaka Okuma Doğruluğu' },
      { labelTr: 'Araç Analitiği', labelEn: 'Vehicle Analytics', val: 'Marka, Model, Renk ve Tip Tespiti' },
      { labelTr: 'Hız Koridoru', labelEn: 'Speed Corridor', val: 'Ortalama Hız İhlali Otomatik Hesaplama' },
    ],
    compliance: ['Global Multi-Country Database', 'Polis & Emniyet Onaylı', 'TSE Karayolu Standartları'],
    datasheetContent: {
      partNumber: 'DIGI-LPR-NEURAL-MOD',
      version: 'v4.1 AI Engine',
      descriptionTr:
        'Türkiye plakaları (özel, resmi, diplomatik) ve tüm yabancı ülke plakalarını gece/gündüz IR veya beyaz ışık altında yüksek doğrulukla çözümleyen derin öğrenme motoru.',
      descriptionEn:
        'Deep learning engine capable of recognizing standard, official, and foreign license plates under all lighting conditions.',
      technicalOverviewTr:
        'Aranan araç kara listeleri ile anlık milisaniye mertebesinde eşleşme sağlayarak sesli ve görsel alarm tetikler.',
      technicalOverviewEn:
        'Instant real-time match against blacklists and stolen vehicle databases with millisecond alerting.',
      electricalSpecs: [{ key: 'GPU Acceleration', value: 'NVIDIA CUDA / TensorRT accelerated' }],
      physicalSpecs: [{ key: 'Channels per Server', value: 'Up to 32 LPR video lanes per 2U server' }],
      environmentalSpecs: [{ key: 'Operating Conditions', value: 'Day / Night / Fog / Snow compensated' }],
    },
  },
  {
    id: 'digifort-analytics',
    imageUrl: '/images/partners/digifort/digifort_analytics.jpg',
    name: 'Digifort Yapay Zeka Video Analitik & Adli Arama',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Video Analitik & Adli İnceleme',
    categoryEn: 'Video Analytics & Forensic Search',
    summaryTr:
      'Ters yön, terk edilmiş çanta, insan sayma, sanal çit ihlali ve yüzlerce saatlik arşivde saniyeler içinde şüpheli şahıs/araç adli arama motoru.',
    summaryEn:
      'Advanced behavioral video analytics and instant forensic search across petabytes of archived surveillance feeds.',
    specs: [
      { labelTr: 'Davranış Analizi', labelEn: 'Behavioral Analytics', val: 'Sanal Çit, Aylak Dolaşma, Ters Yön, Terk Edilmiş Eşya' },
      { labelTr: 'Adli Arama Hızı', labelEn: 'Forensic Speed', val: '24 Saatlik Kaydı 3 Saniyede Filtreleme' },
      { labelTr: 'Nesne Sınıflandırma', labelEn: 'Classification', val: 'İnsan, Bisiklet, Otomobil, Kamyon Ayrımı' },
      { labelTr: 'Isı Haritası', labelEn: 'Heatmap', val: 'Müşteri/Yolcu Yoğunluk Haritalaması' },
    ],
    compliance: ['ONVIF Analytics Profile M', 'Gizlilik Maskeleme (Privacy Shield)'],
    datasheetContent: {
      partNumber: 'DIGI-ANALYTICS-FORENSIC',
      version: 'v6.3 Neural Suite',
      descriptionTr:
        'Geleneksel hareket algılamanın ötesine geçen yapay zeka algoritmalarıyla rüzgar, yağmur veya hayvan kaynaklı yanlış alarmları %98 oranında eler.',
      descriptionEn:
        'Eliminates 98% of false alarms caused by environmental factors using trained neural networks.',
      technicalOverviewTr:
        'Kıyafet rengi, araç rengi ve yön parametreleriyle yüzlerce kamerada geriye dönük arama yaparak şüphelinin rotasını harita üzerinde otomatik çizer.',
      technicalOverviewEn:
        'Automated multi-camera suspect tracking across timeline using visual feature extraction.',
      electricalSpecs: [{ key: 'Processing Engine', value: 'Deep Neural Network (DNN) Object Classifier' }],
      physicalSpecs: [{ key: 'Server Footprint', value: 'Scalable Edge or Centralized Server deployment' }],
      environmentalSpecs: [{ key: 'False Alarm Rejection', value: '> 98% filtering rate' }],
    },
  },
  {
    id: 'digifort-biopass',
    imageUrl: '/images/partners/digifort/digifort_biopass.jpg',
    name: 'Digifort BioPass Biyometrik Yüz & Kimlik Tanıma',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Biyometrik Güvenlik & Geçiş Kontrol',
    categoryEn: 'Biometric Access & Face Recognition',
    summaryTr:
      'Kalabalık meydanlar, havaalanları ve stadyumlarda hareket halindeki kalabalık arasından aranan şahısları anında tespit eden biyometrik yüz tanıma motoru.',
    summaryEn:
      'Live crowd biometric facial recognition engine identifying persons of interest in airports, stadiums, and transit hubs.',
    specs: [
      { labelTr: 'Doğruluk Oranı', labelEn: 'Accuracy', val: '%99.7 NIST Test Onaylı Biyometrik Eşleşme' },
      { labelTr: 'Veritabanı Kapasitesi', labelEn: 'Database Size', val: '1.000.000+ Yüz Profilini < 1 Saniyede Tarama' },
      { labelTr: 'Açı Toleransı', labelEn: 'Pose Angle', val: '±30° Yatay ve Dikey Açı Esnekliği' },
      { labelTr: 'Canlılık Tespiti', labelEn: 'Liveness Check', val: 'Fotoğraf ve Ekran Sahteciliğini Önleme' },
    ],
    compliance: ['NIST FRVT Certified', 'KVKK / GDPR Uyumlu Biyometrik Şifreleme'],
    datasheetContent: {
      partNumber: 'DIGI-BIO-FACE-RECOG',
      version: 'v3.2 Biometric Suite',
      descriptionTr:
        'Havalimanı pasaport kontrol noktaları ve spor stadyumu girişlerinde kara listedeki şahısları saniyeler içinde tespit ederek güvenlik görevlilerini uyarır.',
      descriptionEn:
        'High-throughput biometric surveillance matching faces in free-flowing crowds against municipal and national watchlists.',
      technicalOverviewTr:
        'Biyometrik yüz şablonları geri döndürülemez hash algoritmalarıyla şifrelenerek veri gizliliği yasalarına tam uyum sağlanır.',
      technicalOverviewEn:
        'Facial vectors are securely tokenized to ensure full compliance with biometric privacy mandates.',
      electricalSpecs: [{ key: 'Engine', value: 'Deep Neural Biometric Feature Extractor' }],
      physicalSpecs: [{ key: 'Integration', value: 'Embedded into Digifort VMS live monitoring' }],
      environmentalSpecs: [{ key: 'Lighting', value: 'Compensates for harsh shadows and backlighting' }],
    },
  },
  {
    id: 'digifort-keyboard',
    imageUrl: '/images/partners/digifort/digifort_keyboard_controller.jpg',
    name: 'Digifort DGF-KB1000 Klavye & Joystick Kontrol Masası',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'PTZ Joystick Konsolu & Kontrol Cihazı',
    categoryEn: 'PTZ Keyboard & Joystick Controller',
    summaryTr:
      'Kontrol odası operatörlerinin yüzlerce PTZ kamerayı hassas 3 eksenli joystick ile yönlendirmesini ve video duvarlarını yönetmesini sağlayan donanım konsolu.',
    summaryEn:
      'Professional USB PTZ joystick keyboard controller for security surveillance operations centers.',
    specs: [
      { labelTr: 'Joystick Mekanizması', labelEn: 'Joystick', val: '3 Eksenli Hall Effect Hassas PTZ Kolu' },
      { labelTr: 'Kısayol Tuşları', labelEn: 'Shortcuts', val: '38 Programlanabilir Mekanik Tuş Takımı' },
      { labelTr: 'LCD Ekran', labelEn: 'Display', val: 'Kamera ve Matris Numarasını Gösteren Arka Aydınlatmalı Ekran' },
      { labelTr: 'Bağlantı', labelEn: 'Interface', val: 'Tak-Çalıştır USB 2.0 HID Standart Arayüz' },
    ],
    compliance: ['CE / FCC Class B', 'RoHS', 'USB HID Standard'],
    datasheetContent: {
      partNumber: 'DGF-KB1000-USB',
      version: 'Hardware Rev 2.0',
      descriptionTr:
        'Güvenlik izleme odalarındaki operatörlerin fare kullanmadan tek bir el hareketiyle kameralar arasında geçiş yapmasını ve şüpheli hedeflere anında zoom yapmasını sağlar.',
      descriptionEn:
        'Designed specifically for intensive 24/7 security control room environments requiring rapid camera targeting.',
      technicalOverviewTr:
        'Digifort VMS ile %100 yerel sürücü desteğiyle çalışır; yazılımda tanımlanan tüm preset noktalarına tek tuşla gider.',
      technicalOverviewEn:
        'Integrates natively with Digifort client software with dedicated buttons for preset recall and video wall switching.',
      electricalSpecs: [{ key: 'Power', value: 'USB bus-powered (no external PSU needed)' }],
      physicalSpecs: [{ key: 'Dimensions', value: '380 x 180 x 100 mm' }, { key: 'Weight', value: '1.4 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '0°C to +45°C' }],
    },
  },
  {
    id: 'digifort-insight',
    imageUrl: '/images/partners/digifort/digifort_evidence.jpg',
    name: 'Digifort Insight Operatör Ekran Kayıt Modülü',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Ekran & İş İstasyonu Kayıt',
    categoryEn: 'Screen & Workstation Recording',
    summaryTr:
      'Kritik kontrol odası operatörlerinin bilgisayar ekranlarını canlı bir IP kamera gibi kaydeden ve adli denetime sunan ekran izleme yazılımı.',
    summaryEn:
      'Captures and records Windows workstation screens as standard video streams for operator audit and SCADA control room logging.',
    specs: [
      { labelTr: 'Ekran Desteği', labelEn: 'Displays', val: '4K Çoklu Monitör Eşzamanlı Ekran Yakalama' },
      { labelTr: 'Kayıt Entegrasyonu', labelEn: 'VMS Integration', val: 'VMS İçinde Normal Kamera Gibi Oynatma ve Arama' },
      { labelTr: 'Klavye & Fare Takibi', labelEn: 'Input Tracking', val: 'Operatör Tuş Basımı ve Tıklama Zaman Damgalaması' },
      { labelTr: 'Bant Genişliği', labelEn: 'Bandwidth', val: 'Düşük Kare Hızı ve Ekran Değişimine Göre Dinamik Sıkıştırma' },
    ],
    compliance: ['ISO 27001 Audit Trail', 'SCADA / Endüstriyel Kontrol Odası Onaylı'],
    datasheetContent: {
      partNumber: 'DIGI-INSIGHT-SCR-LOG',
      version: 'v2.6',
      descriptionTr:
        'SCADA operatörlerinin, polis komuta masası çalışanlarının veya finansal işlem terminallerinin ekran hareketlerini saniye saniye kaydederek iç suistimalleri önler.',
      descriptionEn:
        'Records workstation operator screens to maintain an irrefutable visual audit trail of critical operational actions.',
      technicalOverviewTr:
        'Ekrandaki video akışı, diğer güvenlik kameraları ile aynı zaman çizgisi üzerinde senkronize olarak geri sarılıp incelenebilir.',
      technicalOverviewEn:
        'Workstation video is perfectly synchronized alongside perimeter CCTV footage for multi-angle incident investigations.',
      electricalSpecs: [{ key: 'Agent Footprint', value: 'Ultra-lightweight Windows background service (<1% CPU)' }],
      physicalSpecs: [{ key: 'Resolution', value: 'Up to 3840x2160 per display' }],
      environmentalSpecs: [{ key: 'Compression', value: 'Proprietary lossless delta screen codec' }],
    },
  },
  {
    id: 'digifort-evidence',
    imageUrl: '/images/partners/digifort/digifort_evidence.jpg',
    name: 'Digifort Evidence Adli Delil Yönetim Sistemi',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Adli Delil & Vaka Yönetimi',
    categoryEn: 'Digital Evidence Management',
    summaryTr:
      'Güvenlik olaylarına ait video kayıtlarını, fotoğrafları ve dokümanları mahkemelerde delil olarak kabul edilecek kriptografik bütünlükle saklayan vaka yönetim sistemi.',
    summaryEn:
      'Digital Evidence Management System (DEMS) cataloging incident videos with cryptographic chain of custody for court admissibility.',
    specs: [
      { labelTr: 'Bütünlük Koruması', labelEn: 'Chain of Custody', val: 'SHA-256 Dijital İmza ve Değiştirilemez Zaman Damgası' },
      { labelTr: 'Vaka Yönetimi', labelEn: 'Case Management', val: 'Polis/Güvenlik Olay Dosyası Numaralandırma ve Dosyalama' },
      { labelTr: 'Yetki Denetimi', labelEn: 'Access Audit', val: 'Kim, Ne Zaman, Hangi Delili İzledi Loglaması' },
      { labelTr: 'Dışa Aktarma', labelEn: 'Export Security', val: 'Kendi Kendini Doğrulayan Şifreli Oynatıcı Paketi' },
    ],
    compliance: ['Adli Bilişim Standartları', 'ISO 27037 Dijital Delil Rehberi'],
    datasheetContent: {
      partNumber: 'DIGI-EVIDENCE-DEMS',
      version: 'v3.0 Law Enforcement',
      descriptionTr:
        'Adli makamlara sunulacak güvenlik kayıtlarının tahrif edilmediğini kanıtlayan, delil zincirini yasal standartlarda koruyan vaka yönetim platformu.',
      descriptionEn:
        'Ensures CCTV footage and officer body-worn video can be safely audited and exported without legal contestation.',
      technicalOverviewTr:
        'Vaka dosyasına eklenen her video parçası için kriptografik özet çıkartır ve yetkisiz değişikliklerde kırmızı alarm verir.',
      technicalOverviewEn:
        'Automates cryptographic hashing on all ingested media to detect any attempted tampering or excision.',
      electricalSpecs: [{ key: 'Database', value: 'Encrypted SQL audit repository' }],
      physicalSpecs: [{ key: 'Platform', value: 'Web-based secure case archive' }],
      environmentalSpecs: [{ key: 'Retention', value: 'Customizable compliance retention rules' }],
    },
  },
  {
    id: 'digifort-io-board',
    imageUrl: '/images/partners/digifort/digifort_alarm_and_automation_module.jpg',
    name: 'Digifort I/O Board Otomasyon & Röle Kartı',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Otomasyon & Alarm Giriş/Çıkış Kartı',
    categoryEn: 'Alarm & Relay I/O Module',
    summaryTr:
      'Yangın alarmları, turnikeler, bariyerler ve çevre güvenlik sensörlerini Digifort VMS yazılımı ile konuşturan endüstriyel Ethernet I/O kartı.',
    summaryEn:
      'Industrial Ethernet I/O controller integrating physical perimeter sensors, gate barriers, and fire alarms into Digifort VMS.',
    specs: [
      { labelTr: 'Giriş/Çıkışlar', labelEn: 'Channels', val: '8x Opto-İzole Dijital Giriş + 8x Röle Çıkışı' },
      { labelTr: 'Ağ Arayüzü', labelEn: 'Interface', val: '10/100 Ethernet TCP/IP Modbus Entegrasyonu' },
      { labelTr: 'Röle Kapasitesi', labelEn: 'Relay Rating', val: '250 VAC / 10A Kuru Kontak Röleler' },
      { labelTr: 'Montaj Şekli', labelEn: 'Mounting', val: 'Standart Endüstriyel DIN Rayı Montajı' },
    ],
    compliance: ['CE Industrial', 'RoHS', 'EN 61000-6-2 Endüstriyel Bağışıklık'],
    datasheetContent: {
      partNumber: 'DGF-IO-BOARD-ETH8',
      version: 'Hardware Rev 1.5',
      descriptionTr:
        'Bir çit sensörü tetiklendiğinde veya panik butonuna basıldığında Digifort VMS’e saniyenin onda birinde sinyal gönderip kameraları ilgili noktaya döndürür.',
      descriptionEn:
        'Instantly coordinates camera presets, siren activations, and automated gate locks upon detecting external sensor inputs.',
      technicalOverviewTr:
        'VMS üzerindeki otomasyon motoru ile kurulan kurallar sayesinde plaka tanındığında bariyeri otomatik açar.',
      technicalOverviewEn:
        'Enables automated barrier lifting upon positive license plate recognition verification in Digifort LPR.',
      electricalSpecs: [{ key: 'Power Input', value: '12-24 VDC Industrial' }],
      physicalSpecs: [{ key: 'Enclosure', value: 'DIN rail mountable rugged plastic' }, { key: 'Weight', value: '350 g' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-20°C to +70°C' }],
    },
  },
  {
    id: 'digifort-dguard',
    imageUrl: '/images/partners/digifort/digifort_mobile.jpg',
    name: 'Digifort Mobile & D-Guard Saha İzleme İstemcisi',
    brandId: 'digifort',
    brandName: 'Digifort',
    categoryTr: 'Mobil Güvenlik & İstemci Çözümleri',
    categoryEn: 'Mobile & Client Solutions',
    summaryTr:
      'Güvenlik amirleri ve saha devriyeleri için akıllı telefon ve tabletlerden canlı PTZ kamera kontrolü, iki yönlü ses ve olay bildirim uygulaması.',
    summaryEn:
      'Mobile client for security officers providing live PTZ control, bi-directional audio, and instant push event notifications.',
    specs: [
      { labelTr: 'Platformlar', labelEn: 'Platforms', val: 'iOS, Android, Windows Tablet, Web HTML5' },
      { labelTr: 'Bant Genişliği', labelEn: 'Bandwidth Optimizer', val: 'Dinamik Akış Uyarlama (Dynamic Multi-Streaming)' },
      { labelTr: 'İki Yönlü Ses', labelEn: 'Two-Way Audio', val: 'Mobil Cihazdan Sahadaki Hoparlöre Anons' },
      { labelTr: 'GPS Konumu', labelEn: 'GPS Tracking', val: 'Devriye Güvenlik Görevlisi Konum Haritalaması' },
    ],
    compliance: ['TLS 1.3 Mobil Şifreleme', 'Touch ID / Face ID Kimlik Doğrulama'],
    datasheetContent: {
      partNumber: 'DIGI-MOBILE-DGUARD',
      version: 'v5.2 App Store / Play Store',
      descriptionTr:
        'Saha ekiplerinin komuta merkezine ihtiyaç duymadan olay mahalline en yakın kameraları cepten izlemesini ve PTZ kontrollerini yönetmesini sağlar.',
      descriptionEn:
        'Allows field officers to access perimeter cameras and control PTZ domes directly from smartphones.',
      technicalOverviewTr:
        'Telefon kamerasını Digifort sunucusuna canlı bir güvenlik kamerası gibi bağlayarak sahadaki devriyenin gözünden komuta merkezine anlık video aktarır.',
      technicalOverviewEn:
        'Turns smartphones into live body-worn cameras streaming back into the central VMS.',
      electricalSpecs: [{ key: 'Codec Support', value: 'H.265 / H.264 / MJPEG Hardware Decoded' }],
      physicalSpecs: [{ key: 'Form Factor', value: 'Native Mobile Application' }],
      environmentalSpecs: [{ key: 'Network', value: '4G/5G and Secure Wi-Fi operational' }],
    },
  },

  // ==========================================
  // SAFENET (THALES) (15 Products)
  // ==========================================
  {
    id: 'safenet-luna-sa',
    name: 'SafeNet Luna SA General Purpose Network HSM',
    imageUrl: '/images/partners/safenet/luna-sa.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Ağ Tipi Donanımsal Güvenlik Modülü',
    categoryEn: 'General Purpose Network HSM',
    summaryTr:
      'FIPS 140-2 Seviye 3 onaylı, SSL hızlandırma, PKI, DNSSEC ve veri şifreleme anahtarlarını fiziksel kasada koruyan efsanevi ağ tipi HSM.',
    summaryEn:
      'Industry-benchmark FIPS 140-2 Level 3 network-attached HSM safeguarding PKI root keys, SSL handshakes, and database encryption.',
    specs: [
      { labelTr: 'FIPS Standardı', labelEn: 'FIPS Level', val: 'FIPS 140-2 Seviye 3 & Common Criteria EAL 4+' },
      { labelTr: 'Performans', labelEn: 'Performance', val: '6.000 RSA-1024 tps / 400 ECC-384 tps' },
      { labelTr: 'Sanal Platform', labelEn: 'Virtual Support', val: 'VMware vSphere, Microsoft Hyper-V, Citrix' },
      { labelTr: 'Yönetim', labelEn: 'Admin', val: 'Uzak Donanımsal PED (Remote PIN Entry Device)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'CC EAL 4+', 'IdenTrust', 'PCI HSM'],
    datasheetContent: {
      partNumber: 'LUNA-SA-5-NETWORK',
      version: 'Rev 5.2',
      descriptionTr:
        'Luna SA, dijital sertifika kimlik doğrulaması, e-Dönüşüm projeleri ve Microsoft SQL Server veri tabanı şifrelemesi için Global Forte tarafından en çok kurulan HSM modelidir.',
      descriptionEn:
        'Luna SA is the preferred HSM choice for enterprises requiring strong cryptographic security for paper-to-digital initiatives, digital signatures, and hardware key storage.',
      technicalOverviewTr:
        'Çift yedekli sıcak değiştirilebilir güç kaynağı ve Ethernet bağlantısı ile kesintisiz %99.999 yüksek erişilebilirlik kümesi oluşturur.',
      technicalOverviewEn:
        'Dual hot-swappable power supplies and bonded Ethernet interfaces provide consistent 24/7 high availability.',
      electricalSpecs: [{ key: 'Power', value: 'Dual 100-240 VAC hot-swappable' }],
      physicalSpecs: [{ key: 'Chassis', value: '1U 19-inch rackmount' }, { key: 'Weight', value: '11.5 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '0°C to 40°C' }],
    },
  },
  {
    id: 'safenet-luna-pcie',
    name: 'SafeNet Luna PCI-E HSM Donanım Kartı',
    imageUrl: '/images/partners/safenet/luna_pcie_img.png',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Dahili PCIe Kripto Hızlandırıcı',
    categoryEn: 'Embedded PCIe Crypto Accelerator',
    summaryTr:
      'Sunucu ana kartına doğrudan PCIe yuvasından takılan, yerel uygulamalar ve web sunucuları için ultra düşük gecikmeli FIPS Seviye 3 HSM kartı.',
    summaryEn:
      'Internal PCIe slot Hardware Security Module providing dedicated cryptographic coprocessing for application servers.',
    specs: [
      { labelTr: 'Form Faktörü', labelEn: 'Form Factor', val: 'PCIe Gen 3 x4 Standart Sunucu Kartı' },
      { labelTr: 'FIPS Seviyesi', labelEn: 'FIPS Rating', val: 'FIPS 140-2 Seviye 3 Onaylı' },
      { labelTr: 'Kripto İşlemleri', labelEn: 'Performance', val: '20.000 ECC P-256 işlem/saniye' },
      { labelTr: 'Güvenlik Bölümleri', labelEn: 'Partitions', val: '100 Adede Kadar İzole Çoklu Kiracı (Multi-Tenant) Bölüm' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'PCIe SIG Certified', 'Common Criteria'],
    datasheetContent: {
      partNumber: 'LUNA-PCIE-7-CARD',
      version: 'Rev 2.4',
      descriptionTr:
        'Ağ kablosuna ihtiyaç duymadan doğrudan uygulama sunucusunun veri yoluna bağlanan, web SSL hızlandırma ve e-İmza işlemleri için yüksek hızlı HSM kartı.',
      descriptionEn:
        'Embedded cryptographic processor providing dedicated hardware encryption without consuming external network rack space.',
      technicalOverviewTr:
        'Donanım üzerindeki epoksi kaplama, voltaj ve sıcaklık sensörleri yetkisiz fiziksel müdahale algılandığında anahtarları anında siler.',
      technicalOverviewEn:
        'Integrated environmental sensors zeroize cryptographic keys immediately upon detecting physical probing or tampering.',
      electricalSpecs: [{ key: 'Power Draw', value: '18W via PCIe slot power' }],
      physicalSpecs: [{ key: 'Bracket', value: 'Full-height and low-profile bracket options' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '0°C to 50°C' }],
    },
  },
  {
    id: 'safenet-luna-g5',
    name: 'SafeNet Luna G5 Masaüstü USB HSM',
    imageUrl: '/images/partners/safenet/luna-g5.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Masaüstü Taşınabilir Kripto HSM',
    categoryEn: 'Desktop USB Connected HSM',
    summaryTr:
      'Kök sertifika makamları (Offline Root CA) ve laboratuvar ortamları için USB arayüzlü kompakt masaüstü FIPS 140-2 Seviye 3 HSM cihazı.',
    summaryEn:
      'Compact desktop USB-connected HSM designed for offline Root Certificate Authorities and code signing workstations.',
    specs: [
      { labelTr: 'Bağlantı', labelEn: 'Interface', val: 'Kilitli USB 2.0 Güvenli İletişim Kablosu' },
      { labelTr: 'FIPS Standardı', labelEn: 'FIPS Level', val: 'FIPS 140-2 Seviye 3 Doğrulamalı Donanım' },
      { labelTr: 'Kullanım Alanı', labelEn: 'Application', val: 'Çevrimdışı Kök CA (Offline Root CA) & Kod İmzalama' },
      { labelTr: 'Boyut', labelEn: 'Size', val: 'Kompakt Masaüstü Harici Cihaz' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria EAL 4+'],
    datasheetContent: {
      partNumber: 'LUNA-G5-USB-DESK',
      version: 'Rev 2.1',
      descriptionTr:
        'Sunucu kabinine gerek duymadan bir dizüstü bilgisayara bağlanabilen, kök sertifika oluşturulduktan sonra kasada saklanabilen taşınabilir güven kökü.',
      descriptionEn:
        'Ideal for offline CA setups where the root key is locked inside a physical safe when not in active operational use.',
      technicalOverviewTr:
        'Luna ailesinin tüm yazılım API’leri (PKCS#11, Microsoft CAPI/CNG, Java JCA/JCE) ile tam uyumludur.',
      technicalOverviewEn:
        'Offers seamless API compatibility with the full Luna enterprise suite across PKCS#11 and JCE.',
      electricalSpecs: [{ key: 'Power', value: 'External power adapter 12 VDC' }],
      physicalSpecs: [{ key: 'Dimensions', value: '215 x 152 x 43 mm' }, { key: 'Weight', value: '1.5 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '4°C to 38°C' }],
    },
  },
  {
    id: 'safenet-luna-ca4',
    name: 'SafeNet Luna CA4 Sertifika Makamı HSM',
    imageUrl: '/images/partners/safenet/luna-ca4-token.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kamu Sertifika Otoritesi HSM',
    categoryEn: 'Certificate Authority HSM',
    summaryTr:
      'Ulusal PKI altyapıları, e-Kimlik ve devlet sertifika otoriteleri için en yüksek seviyede fiziksel ve mantıksal güvenlik sağlayan CA HSM cihazı.',
    summaryEn:
      'High-assurance HSM specifically tailored for National PKI implementations and government electronic ID issuance.',
    specs: [
      { labelTr: 'Sertifikasyon', labelEn: 'Certification', val: 'FIPS 140-2 Level 3 & Common Criteria' },
      { labelTr: 'Rol Ayrımı', labelEn: 'Role Separation', val: 'Katı M-of-N Çoklu Yönetici İmza Zorunluluğu' },
      { labelTr: 'Anahtar Yedekleme', labelEn: 'Backup', val: 'Klonlanabilir Donanımsal Güvenli Yedekleme Tokenı' },
      { labelTr: 'Protokol', labelEn: 'Supported APIs', val: 'PKCS#11, Microsoft CryptoAPI / CNG' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'IdenTrust Certified', 'DoD Approved'],
    datasheetContent: {
      partNumber: 'LUNA-CA4-ENTERPRISE',
      version: 'Rev 4.0',
      descriptionTr:
        'Devlet düzeyindeki kök sertifikaların ve kamu kimlik doğrulama anahtarlarının üretiminde ve saklanmasında dünya çapında kullanılan donanım.',
      descriptionEn:
        'Addresses operational needs required to issue and safeguard digital certificates within mission-critical PKIs.',
      technicalOverviewTr:
        'Donanıma erişim için en az m-sayıda yetkilinin (örneğin 3 yöneticiden 2’sinin) fiziksel anahtarlarını takması şarttır.',
      technicalOverviewEn:
        'Enforces strict quorum controls requiring multiple cryptographic custodians to be present for administrative operations.',
      electricalSpecs: [{ key: 'Power', value: 'Redundant AC supplies' }],
      physicalSpecs: [{ key: 'Chassis', value: '1U Rackmount' }],
      environmentalSpecs: [{ key: 'Temp', value: '0°C to 40°C' }],
    },
  },
  {
    id: 'safenet-luna-eft',
    imageUrl: '/images/partners/safenet/protect-host-eft.jpg',
    name: 'SafeNet Luna EFT Ödeme & Finansal İşlem HSM',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Banka & Ödeme Sistemleri HSM',
    categoryEn: 'Payment & Financial Transaction HSM',
    summaryTr:
      'ATM ağları, POS terminalleri, kredi kartı PIN blok şifrelemesi ve bankalararası takas işlemleri için tasarlanmış PCI PTS onaylı ödeme HSM’i.',
    summaryEn:
      'PCI PTS HSM validated financial payments appliance securing ATM transactions, PIN verification, and card embossing.',
    specs: [
      { labelTr: 'Ödeme Standartları', labelEn: 'Payment Standards', val: 'PCI PTS HSM v3 & FIPS 140-2 Level 3' },
      { labelTr: 'Finansal Algoritmalar', labelEn: 'Ciphers', val: 'DES, 3DES, AES, RSA, DUKPT, AS2805' },
      { labelTr: 'PIN Doğrulama', labelEn: 'PIN Verification', val: 'Visa PVV, IBM 3624, Diebold, NCR Uyumlu' },
      { labelTr: 'İşlem Kapasitesi', labelEn: 'TPS', val: 'Saniyede 3.500+ Finansal Ödeme İşlemi' },
    ],
    compliance: ['PCI PTS HSM v3', 'EMV Level 1 & 2', 'Visa & Mastercard Approved'],
    datasheetContent: {
      partNumber: 'LUNA-EFT-PAY-APP',
      version: 'Firmware 4.8',
      descriptionTr:
        'Banka kartı işlemlerinde şifrelenmiş PIN bloklarının açılması, doğrulanması ve takas sistemlerine güvenle aktarılması için bankalarda kullanılan donanım.',
      descriptionEn:
        'Dedicated payments hardware security module protecting interbank EFT networks and clearing house transactions.',
      technicalOverviewTr:
        'DUKPT (Derived Unique Key Per Transaction) algoritması ile her bir POS veya ATM işleminde yeni bir anahtar türeterek kart kopyalamayı imkansız kılar.',
      technicalOverviewEn:
        'Supports DUKPT session key generation to guarantee unique cryptographic keys for every point-of-sale interaction.',
      electricalSpecs: [{ key: 'Power', value: 'Dual redundant hot-swappable 100-240 VAC' }],
      physicalSpecs: [{ key: 'Form Factor', value: '1U Rackmount' }, { key: 'Weight', value: '12.2 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '0°C to 40°C' }],
    },
  },
  {
    id: 'safenet-protectserver-ext',
    imageUrl: '/images/partners/safenet/protect-server-new.jpg',
    name: 'SafeNet ProtectServer External 3 HSM',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Özelleştirilebilir Ağ Tipi HSM',
    categoryEn: 'Customizable Network HSM',
    summaryTr:
      'Kuruma özel C yazılım modüllerinin (Functionality Modules - FM) güvenli donanım içinde çalışmasına izin veren ağ tipi HSM cihazı.',
    summaryEn:
      'Network HSM providing high-security execution of proprietary enterprise algorithms within a FIPS Level 3 physical perimeter.',
    specs: [
      { labelTr: 'Özel Modül Desteği', labelEn: 'Functionality Modules', val: 'C Dili ile Özel Kriptografik Kod Çalıştırma (FM SDK)' },
      { labelTr: 'Ağ Arayüzü', labelEn: 'Network', val: 'Çift Gigabit Ethernet Bağlantı Yedekleme' },
      { labelTr: 'FIPS Onayı', labelEn: 'FIPS Certification', val: 'FIPS 140-2 Seviye 3 Doğrulamalı' },
      { labelTr: 'Performans', labelEn: 'Performance', val: '3.500 RSA-2048 işlem/saniye' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'PCI DSS', 'eIDAS Ready'],
    datasheetContent: {
      partNumber: 'PROTECTSERVER-EXT-3',
      version: 'Rev 3.0',
      descriptionTr:
        'Milli savunma ve istihbarat kurumlarının kendi yerli kripto rutinlerini donanımsal güvenlik kasasında çalıştırmasını sağlayan özelleştirilebilir HSM.',
      descriptionEn:
        'Allows developers to deploy proprietary C-based security modules directly inside the physical cryptographic hardware boundary.',
      technicalOverviewTr:
        'Özel kodlar donanıma yüklenmeden önce dijital olarak imzalanır; böylece yetkisiz firmware yüklenmesi engellenir.',
      technicalOverviewEn:
        'All custom firmware modules must be cryptographically signed by authorized key custodians prior to execution.',
      electricalSpecs: [{ key: 'Power', value: 'Dual AC power supplies' }],
      physicalSpecs: [{ key: 'Chassis', value: '1U 19-inch Rack' }, { key: 'Weight', value: '10.5 kg' }],
      environmentalSpecs: [{ key: 'Temp', value: '0°C to 40°C' }],
    },
  },
  {
    id: 'safenet-hse-100g',
    imageUrl: '/images/partners/safenet/ethernet-encryptor.jpg',
    name: 'SafeNet High Speed Encryptors (HSE - CN9120 100G)',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: '100 Gbps Donanımsal Hat Şifreleyici',
    categoryEn: '100G Hardware Network Encryptor',
    summaryTr:
      'Veri merkezleri ve banka omurgaları arasında 100 Gbps tam hat hızında sıfır ek yük ve sıfır gecikme ile Katman-2 Ethernet şifreleme cihazı.',
    summaryEn:
      'Ultra-low latency 100 Gbps Layer-2 hardware network encryptor protecting inter-datacenter high-speed fiber backbones.',
    specs: [
      { labelTr: 'Hat Hızı', labelEn: 'Throughput', val: '100 Gbps Tam Çift Yönlü Hat Hızı (Full Duplex)' },
      { labelTr: 'İşlem Gecikmesi', labelEn: 'Latency', val: '< 1.5 Mikrosaniye Ultra Düşük Gecikme' },
      { labelTr: 'Kripto Algoritmaları', labelEn: 'Ciphers', val: 'AES-256-GCM, Kuantum Dayanıklı Algoritmalar' },
      { labelTr: 'Fiber Protokolü', labelEn: 'Protocols', val: 'Ethernet, Fibre Channel, InfiniBand Desteği' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria EAL 4+', 'NATO Onaylı'],
    datasheetContent: {
      partNumber: 'HSE-CN9120-100G',
      version: 'Rev 3.1',
      descriptionTr:
        'Fiber optik kablo dinleme (fiber tapping) saldırılarını imkansız kılan, veriyi doğrudan fiber ışık hızında şifreleyen ağ güvenlik cihazı.',
      descriptionEn:
        'Renders optical fiber eavesdropping futile by encrypting high-speed carrier traffic with zero packet expansion.',
      technicalOverviewTr:
        'Ağ yönlendiricilerine tamamen şeffaftır, MTU boyutunu veya paket başlıklarını bozmaz.',
      technicalOverviewEn:
        'Zero-impact bump-in-the-wire design preserves jumbo frame MTU sizes with 0% network protocol overhead.',
      electricalSpecs: [{ key: 'Optics', value: '2x QSFP28 100G Ports' }, { key: 'Power', value: 'Dual redundant AC/DC' }],
      physicalSpecs: [{ key: 'Form Factor', value: '1U Rackmount' }, { key: 'Weight', value: '8.5 kg' }],
      environmentalSpecs: [{ key: 'Temp', value: '0°C to 50°C' }],
    },
  },
  {
    id: 'safenet-datasecure',
    imageUrl: '/images/partners/safenet/datasecure.jpg',
    name: 'SafeNet DataSecure Kurumsal Veri Şifreleme Cihazı',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kurumsal Veri Şifreleme Sunucusu',
    categoryEn: 'Enterprise Data Encryption Appliance',
    summaryTr:
      'Tüm kurum genelindeki veritabanı, dosya ve uygulama şifreleme anahtarlarını tek merkezde toplayan donanımsal güvenlik cihazı.',
    summaryEn:
      'Central hardware platform managing cryptographic keys and granular encryption policies across enterprise data tiers.',
    specs: [
      { labelTr: 'FIPS Seviyesi', labelEn: 'Security Level', val: 'FIPS 140-2 Seviye 3 Donanım Kasası' },
      { labelTr: 'Yönetilen Anahtar', labelEn: 'Keys Supported', val: '1.000.000+ Kriptografik Anahtar' },
      { labelTr: 'Entegrasyon', labelEn: 'Integrations', val: 'Oracle, SQL Server, IBM DB2, Apache, WebSphere' },
      { labelTr: 'Yedeklilik', labelEn: 'Clustering', val: 'Active-Active Coğrafi Çok Merkezli Kümeleme' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'PCI DSS Req 3.4/3.5', 'ISO 27001'],
    datasheetContent: {
      partNumber: 'DATASECURE-I460',
      version: 'Rev 4.2',
      descriptionTr:
        'Hassas kredi kartı numaralarını, kimlik bilgilerini ve hasta kayıtlarını veritabanına yazılırken şifreleyen merkezi cihaz.',
      descriptionEn:
        'Acts as the nerve center for enterprise data encryption, ensuring granular field-level and file-level security controls.',
      technicalOverviewTr:
        'Uygulama sunucularında çalışan ProtectDB ve ProtectApp ajanları ile şifreleme işlemlerini milisaniyeler içinde tamamlar.',
      technicalOverviewEn:
        'Coordinates with native agent software to secure database columns and shared storage repositories.',
      electricalSpecs: [{ key: 'Power', value: 'Redundant 100-240 VAC' }],
      physicalSpecs: [{ key: 'Chassis', value: '1U Rackmount' }],
      environmentalSpecs: [{ key: 'Temp', value: '0°C to 40°C' }],
    },
  },
  {
    id: 'safenet-tokenization',
    imageUrl: '/images/partners/safenet/tokenization.jpg',
    name: 'SafeNet Tokenization Manager',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'PCI DSS Veri Tokenizasyon Sistemi',
    categoryEn: 'PCI DSS Data Tokenization Platform',
    summaryTr:
      'Kredi kartı (PAN) ve hassas kimlik verilerini rastgele anlamsız token değerleriyle değiştirerek PCI DSS denetim kapsamını daraltan sistem.',
    summaryEn:
      'Data tokenization appliance replacing sensitive primary account numbers (PAN) with surrogate tokens to drastically reduce PCI audit scope.',
    specs: [
      { labelTr: 'Token Tipi', labelEn: 'Token Format', val: 'Format Preserving Tokenization (Biçim Koruyan Token)' },
      { labelTr: 'Performans', labelEn: 'Throughput', val: 'Saniyede 50.000+ Tokenizasyon İşlemi' },
      { labelTr: 'Veri Tabanı Azaltma', labelEn: 'PCI Scope', val: 'Sistemlerin %90’ını PCI Denetim Kapsamından Çıkarma' },
      { labelTr: 'Kasa Mimarisi', labelEn: 'Vault Architecture', val: 'Vaulted ve Vaultless (Kasasız) Seçenekleri' },
    ],
    compliance: ['PCI DSS Compliant', 'NIST SP 800-38G FFX'],
    datasheetContent: {
      partNumber: 'TOKEN-MGR-ENTERPRISE',
      version: 'v3.5',
      descriptionTr:
        'E-ticaret siteleri, bankalar ve çağrı merkezlerinde kredi kartı numarasını saklamadan aynı formattaki geçici token ile işlem yapılmasını sağlar.',
      descriptionEn:
        'Replaces actual card numbers with mathematically irreversibly masked tokens across backend analytics and billing databases.',
      technicalOverviewTr:
        'Veritabanı çalınsa bile saldırganların eline sadece anlamsız token dizileri geçer; gerçek kart bilgileri DataSecure kasasında kilitli kalır.',
      technicalOverviewEn:
        'In the event of database exfiltration, stolen tokens remain completely useless to malicious actors.',
      electricalSpecs: [{ key: 'Architecture', value: 'High throughput clustered service' }],
      physicalSpecs: [{ key: 'Deployment', value: 'Hardware Appliance or Virtual Node' }],
      environmentalSpecs: [{ key: 'Availability', value: '99.999% SLA' }],
    },
  },
  {
    id: 'safenet-protectdb',
    imageUrl: '/images/partners/safenet/datasecure.jpg',
    name: 'SafeNet ProtectDB Veritabanı Sütun Şifreleme',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Veritabanı Sütun & Alan Şifreleme',
    categoryEn: 'Database Column-Level Encryption',
    summaryTr:
      'Oracle, SQL Server ve PostgreSQL veritabanlarındaki T.C. Kimlik No, kredi kartı ve maaş gibi hassas sütunları veri tabanı yöneticisinden (DBA) bile gizleyerek şifreleyen ajan.',
    summaryEn:
      'Granular column-level encryption software securing sensitive fields in relational databases, enforcing separation of duties against rogue DBAs.',
    specs: [
      { labelTr: 'Veri Tabanları', labelEn: 'Supported DBs', val: 'Oracle 11g-19c, MS SQL Server, IBM DB2, PostgreSQL' },
      { labelTr: 'Şifreleme Düzeyi', labelEn: 'Granularity', val: 'Sütun (Column) ve Alan (Field) Düzeyinde AES-256' },
      { labelTr: 'Görev Ayrılığı', labelEn: 'Separation of Duties', val: 'DBA Şifreli Veriyi Görüntüleyemez (No-Clear-Data)' },
      { labelTr: 'Performans Etkisi', labelEn: 'Overhead', val: '< %3 CPU Ek Yükü ile Hızlı Sorgulama' },
    ],
    compliance: ['PCI DSS Req 3.4', 'KVKK Madde 12 Uyumlu', 'GDPR Article 32'],
    datasheetContent: {
      partNumber: 'PROTECTDB-AGENT-LIC',
      version: 'v8.4',
      descriptionTr:
        'Veritabanı sunucularında doğrudan çalışan ve verileri diske yazılmadan önce bellek seviyesinde şifreleyen kurumsal koruma yazılımı.',
      descriptionEn:
        'Protects sensitive structured data at rest within enterprise database tables without breaking application query logic.',
      technicalOverviewTr:
        'Yetkisiz bir DBA sorgu çalıştırdığında veriyi sadece maskeli veya şifreli olarak görür; çözme anahtarı Luna HSM içinde tutulur.',
      technicalOverviewEn:
        'DBAs and sysadmins are strictly barred from viewing plaintext data without explicit cryptographic role clearance.',
      electricalSpecs: [{ key: 'Host OS', value: 'RHEL, SUSE, Windows Server, AIX, Solaris' }],
      physicalSpecs: [{ key: 'Form', value: 'Native In-Database Cryptographic Agent' }],
      environmentalSpecs: [{ key: 'Performance', value: 'Hardware offloaded encryption routines' }],
    },
  },
  {
    id: 'safenet-protectfile',
    imageUrl: '/images/partners/safenet/protectfile.jpg',
    name: 'SafeNet ProtectFile & ProtectDrive Dosya ve Disk Şifreleme',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Sunucu Dosya & Disk Şifreleme',
    categoryEn: 'File System & Disk Encryption',
    summaryTr:
      'Windows ve Linux sunuculardaki paylaşımlı klasörleri, log dosyalarını ve tüm disk bölümlerini şifreleyen merkezi yönetimli yazılım.',
    summaryEn:
      'Transparent file and folder encryption software enforcing granular access controls across Windows and Linux servers.',
    specs: [
      { labelTr: 'Şifreleme Şeffaflığı', labelEn: 'Transparency', val: 'Uygulamalar ve Kullanıcılar İçin Şeffaf Şifreleme' },
      { labelTr: 'Erişim Denetimi', labelEn: 'Access Policies', val: 'Kullanıcı, Süreç (Process) ve Grup Tabanlı İzinler' },
      { labelTr: 'Root Koruması', labelEn: 'Superuser Defense', val: 'Sistem Yöneticisi (root/admin) Dosya İçeriğini Okuyamaz' },
      { labelTr: 'Algoritma', labelEn: 'Algorithm', val: 'XTS-AES 256 Donanımsal Hızlandırmalı Şifreleme' },
    ],
    compliance: ['ISO 27001', 'PCI DSS', 'HIPAA'],
    datasheetContent: {
      partNumber: 'PROTECTFILE-SRV-AGENT',
      version: 'v8.1',
      descriptionTr:
        'Sunucuya sızan saldırganlar veya kötü niyetli sistem yöneticileri dosyaları kopyalasa bile anahtar olmadan dosyaların içeriği açılamaz.',
      descriptionEn:
        'Protects sensitive documents, spreadsheets, and system log files from unauthorized administrative exfiltration.',
      technicalOverviewTr:
        'Sadece onaylı uygulama binary dosyalarının (örneğin sadece web sunucusu servisinin) dosyayı okumasına izin verilir.',
      technicalOverviewEn:
        'Enforces application-level whitelisting so only verified binaries are allowed to read plaintext files.',
      electricalSpecs: [{ key: 'Platform', value: 'Windows Server, Red Hat, Ubuntu, CentOS' }],
      physicalSpecs: [{ key: 'Delivery', value: 'Enterprise Managed Software Agent' }],
      environmentalSpecs: [{ key: 'Throughput Impact', value: 'Near line-rate local disk I/O performance' }],
    },
  },
  {
    id: 'safenet-protectv',
    imageUrl: '/images/partners/safenet/protect-drive.JPG',
    name: 'SafeNet ProtectV Sanal Makine & Bulut İzolasyonu',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Bulut & Sanal Sunucu Şifreleme',
    categoryEn: 'Virtual Machine & Cloud Encryption',
    summaryTr:
      'VMware vSphere, AWS ve Azure ortamlarındaki sanal sunucu imajlarını ve sanal diskleri (VMDK/VHD) hipervizör seviyesinde şifreleyen çözüm.',
    summaryEn:
      'Secures virtual machines and cloud storage volumes with pre-boot authentication across VMware, AWS, and Azure.',
    specs: [
      { labelTr: 'Bulut Platformları', labelEn: 'Cloud Platforms', val: 'VMware ESXi, AWS EC2, Microsoft Azure, Google Cloud' },
      { labelTr: 'Önyükleme Koruması', labelEn: 'Pre-Boot Auth', val: 'Yetkisiz Başlatmaya Karşı Şifreli Açılış Doğrulaması' },
      { labelTr: 'Klonlama Koruması', labelEn: 'Anti-Cloning', val: 'Sanal Sunucu İmajı Çalınsa Bile Başka Sunucuda Çalıştırılamaz' },
      { labelTr: 'Anahtar Kontrolü', labelEn: 'Key Custody', val: 'Bulut Sağlayıcının Anahtarlara Asla Erişememesi (BYOK)' },
    ],
    compliance: ['FedRAMP High', 'FIPS 140-2 Level 3 Anahtar Koruması'],
    datasheetContent: {
      partNumber: 'PROTECTV-CLOUD-SEC',
      version: 'v4.0',
      descriptionTr:
        'Kamu kurumlarının hassas verilerini kamu bulutuna taşırken hipervizör yöneticilerinin veya yabancı bulut sağlayıcılarının verilere bakmasını engeller.',
      descriptionEn:
        'Ensures complete tenant isolation and data sovereignty when hosting critical workloads in shared multi-tenant clouds.',
      technicalOverviewTr:
        'Sanal makine başlatılırken merkezdeki CipherTrust/Luna HSM kasasından güvenli onay alır; onay yoksa disk kilitli kalır.',
      technicalOverviewEn:
        'Enforces pre-boot cryptographic attestation against hardware HSMs prior to mounting root operating system partitions.',
      electricalSpecs: [{ key: 'Virtual Hypervisors', value: 'VMware vSphere 7/8, KVM, Hyper-V' }],
      physicalSpecs: [{ key: 'Deployment', value: 'Virtual Appliance & Guest Agent' }],
      environmentalSpecs: [{ key: 'Key Storage', value: 'Anchored to on-premise hardware HSM' }],
    },
  },
  {
    id: 'safenet-ciphertrust',
    imageUrl: '/images/partners/safenet/datasecure.jpg',
    name: 'CipherTrust Manager / KeySecure Kurumsal Anahtar Kasası',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Merkezi Veri Şifreleme & KMS',
    categoryEn: 'Enterprise Key Management (KMS)',
    summaryTr:
      'Veritabanları, depolama alanları (SAN/NAS), sanal makineler ve bulut ortamlarındaki tüm şifreleme anahtarlarını merkezi olarak yöneten kurumsal platform.',
    summaryEn:
      'Centralized enterprise key management appliance unifying data encryption policies across databases, clouds, and storage arrays.',
    specs: [
      { labelTr: 'Protokol Uyumu', labelEn: 'Protocols', val: 'KMIP (Key Management Interoperability Protocol) 1.0 - 2.0' },
      { labelTr: 'Veri Tabanı Şifreleme', labelEn: 'DB Encryption', val: 'Oracle TDE, Microsoft SQL TDE, PostgreSQL, MongoDB' },
      { labelTr: 'Depolama Desteği', labelEn: 'Storage Arrays', val: 'NetApp, Dell EMC, HPE, Pure Storage Self-Encrypting Drives' },
      { labelTr: 'Dağıtım Modeli', labelEn: 'Deployment', val: 'FIPS 140-2 Seviye 3 Donanım Cihazı veya Sanal Cihaz (k170/k470/k570)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'PCI DSS Req 3', 'HIPAA / GDPR'],
    datasheetContent: {
      partNumber: 'CTM-K570-APPLIANCE',
      version: 'v2.12 Platform',
      descriptionTr:
        'Thales CipherTrust Manager, verilerin nerede saklandığına bakılmaksızın (yerel sunucu, VMware, AWS, Azure, Google Cloud) şifreleme anahtarlarının kontrolünü kurumun kendi elinde tutmasını sağlar.',
      descriptionEn:
        'CipherTrust Manager establishes central governance over enterprise encryption keys across hybrid multicloud environments.',
      technicalOverviewTr:
        'Dahili Luna HSM çekirdeği ile anahtarların donanım seviyesinde korunmasını sağlar ve yetkisiz yöneticilerin anahtarları dışarı aktarmasını engeller.',
      technicalOverviewEn:
        'Anchored by an embedded physical Luna HSM, ensuring root encryption keys cannot be extracted by rogue administrators.',
      electricalSpecs: [{ key: 'Power', value: 'Dual redundant AC power supplies' }],
      physicalSpecs: [{ key: 'Form Factor', value: '1U Rackmount Appliance' }],
      environmentalSpecs: [{ key: 'Clustering', value: 'Active-active multi-datacenter cluster' }],
    },
  },
  {
    id: 'safenet-etoken-5110',
    imageUrl: '/images/partners/safenet/etoken-5100.jpg',
    name: 'SafeNet eToken 5110 / 5300 FIDO2 USB Güvenlik Tokenı',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Donanımsal USB Kimlik Tokenı',
    categoryEn: 'Hardware USB Security Token',
    summaryTr:
      'PKI tabanlı dijital imza, Windows oturum açma ve FIDO2 parolasız kimlik doğrulama sağlayan FIPS 140-2 Seviye 3 sertifikalı USB kripto anahtar.',
    summaryEn:
      'FIPS 140-2 validated USB token offering certificate-based digital signing, pre-boot authentication, and FIDO2 passwordless login.',
    specs: [
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Crypto Chip', val: 'Common Criteria EAL5+ Sertifikalı Güvenli Çip' },
      { labelTr: 'FIPS Standardı', labelEn: 'FIPS Level', val: 'FIPS 140-2 Seviye 3 Onaylı Kasa' },
      { labelTr: 'Protokol Desteği', labelEn: 'Standards', val: 'PKCS#11, Microsoft CAPI, CNG, FIDO2 / WebAuthn' },
      { labelTr: 'Bağlantı Tipi', labelEn: 'Connector', val: 'USB Type-A ve USB Type-C Seçenekleri' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria EAL5+', 'FIDO2 Certified'],
    datasheetContent: {
      partNumber: 'ETOKEN-5110-CC',
      version: 'Rev 4.0',
      descriptionTr:
        'Kurumsal çalışanların ve yöneticilerin bilgisayarlarına güvenle oturum açmasını, e-postalarını şifrelemesini ve yasal e-imza atmasını sağlayan sağlam USB token.',
      descriptionEn:
        'Portable USB authenticator securing enterprise endpoints, remote access VPNs, and qualified digital document signatures.',
      technicalOverviewTr:
        'İçerisindeki özel kriptografik çip, private key değerinin hiçbir şekilde bilgisayar belleğine okunmasına veya kopyalanmasına izin vermez.',
      technicalOverviewEn:
        'Private signing keys cannot be cloned or exported from the tamper-resistant hardware security chip.',
      electricalSpecs: [{ key: 'Power', value: 'Powered via USB bus (no battery required)' }],
      physicalSpecs: [{ key: 'Housing', value: 'Tamper-evident ultrasonic sealed plastic' }],
      environmentalSpecs: [{ key: 'Water Resistance', value: 'IPX7 water resistant' }],
    },
  },
  {
    id: 'safenet-ikey-2032',
    imageUrl: '/images/partners/safenet/ikey-2032.jpg',
    name: 'SafeNet iKey 2032 / 4000 Kriptografik USB Token',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kompakt USB Kripto Anahtar',
    categoryEn: 'Compact Cryptographic USB Key',
    summaryTr:
      'Askeri ve diplomatik personelin iki faktörlü kimlik doğrulaması ve güvenli VPN tünelleri için kullanılan dayanıklı mini USB kripto aygıtı.',
    summaryEn:
      'Compact, durable cryptographic USB token for military and diplomatic two-factor authentication and secure VPN tunneling.',
    specs: [
      { labelTr: 'Donanım Güvenliği', labelEn: 'Security', val: 'FIPS 140-2 Seviye 2/3 Onaylı Donanım' },
      { labelTr: 'Dahili Bellek', labelEn: 'Key Storage', val: '64 KB EEPROM Korumalı Anahtar Deposu' },
      { labelTr: 'Kripto Algoritmalar', labelEn: 'Ciphers', val: 'RSA 2048, DES, 3DES, SHA-1/256' },
      { labelTr: 'Kasa Tipi', labelEn: 'Casing', val: 'Kırılmaz ve Su Geçirmez Termoplastik Gövde' },
    ],
    compliance: ['FIPS 140-2', 'Common Criteria', 'DoD Approved'],
    datasheetContent: {
      partNumber: 'IKEY-2032-USB',
      version: 'Rev 3.2',
      descriptionTr:
        'Global Forte’un kamu kurumlarında uzun yıllardır güvenle sunduğu, sağlamlığı kanıtlanmış kompakt kimlik doğrulama tokenı.',
      descriptionEn:
        'Field-proven compact authentication key safeguarding sensitive administrative remote access.',
      technicalOverviewTr:
        'Doğrudan USB portuna takılır ve harici kart okuyucu gerektirmeden akıllı kart güvenliği sunar.',
      technicalOverviewEn:
        'Delivers smart-card grade cryptographic protection without requiring bulky external readers.',
      electricalSpecs: [{ key: 'Interface', value: 'USB 1.1 / 2.0 full speed' }],
      physicalSpecs: [{ key: 'Weight', value: '14 grams' }],
      environmentalSpecs: [{ key: 'Temp', value: '-10°C to +70°C' }],
    },
  },

  // ==========================================
  // FORTRESS TECHNOLOGIES (9 Products)
  // ==========================================
  {
    id: 'fortress-fcx',
    imageUrl: '/images/partners/fortress/FC-X-Inline-Network-Encryptors.jpg',
    name: 'Fortress FC-X 10G Hat İçi Ağ Şifreleyici',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Donanımsal Ağ Güvenliği',
    categoryEn: 'Inline Network Encryption',
    summaryTr:
      'Savunma sanayii ve gizli kamu omurgalarında Katman-2 Ethernet hat içi 10 Gbps hızında çalışan, NSA Suite B standartlarında şifreleyici.',
    summaryEn:
      'NSA Suite B compliant Layer 2 inline network encryptor delivering 10 Gbps line-rate throughput for classified defense networks.',
    specs: [
      { labelTr: 'Hat Hızı', labelEn: 'Throughput', val: '10 Gbps Tam Çift Yönlü Hat Hızı' },
      { labelTr: 'İşlem Gecikmesi', labelEn: 'Latency', val: '< 0.8 Mikrosaniye Gecikme' },
      { labelTr: 'Kripto Standardı', labelEn: 'Cryptographic Suite', val: 'NSA Suite B (AES-256-GCM, ECDSA, SHA-384)' },
      { labelTr: 'Paket Ek Yükü', labelEn: 'Overhead', val: '%0 Paket Ek Yükü (Jumbo Frame Uyumlu)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'NSA Suite B Compliant', 'Common Criteria'],
    datasheetContent: {
      partNumber: 'FC-X-10G-RACK',
      version: 'Hardware Rev D',
      descriptionTr:
        'Fortress FC-X, askeri karargahlar, bakanlıklar ve uzak üsler arasındaki veri iletişimini Katman-2 seviyesinde tamamen şeffaf olarak şifreler.',
      descriptionEn:
        'The Fortress FC-X encrypts inter-base and headquarters data links at Layer 2 with transparent protocol handling.',
      technicalOverviewTr:
        'Mevcut yönlendirici ve anahtar altyapısında hiçbir IP veya VLAN konfigürasyonu değişikliği gerektirmeden kablo arasına takılarak çalışır (Bump-in-the-wire).',
      technicalOverviewEn:
        'Deploys as a true bump-in-the-wire appliance requiring zero re-architecting of existing VLANs or routers.',
      electricalSpecs: [{ key: 'Optical Ports', value: '2x 10G SFP+ (Black/Cipher) & 2x 10G SFP+ (Red/Plain)' }, { key: 'Power', value: 'Redundant AC 100-240V' }],
      physicalSpecs: [{ key: 'Chassis', value: '1U Tamamen Metal Müdahale Korumalı Kasa' }, { key: 'Weight', value: '6.4 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-10°C to +50°C' }],
    },
  },
  {
    id: 'fortress-fcx-1g',
    imageUrl: '/images/partners/fortress/FC-X-Inline-Network-Encryptors.jpg',
    name: 'Fortress FC-X 1G Kompakt Taktiksel Şifreleyici',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Kompakt Saha Şifreleyici',
    categoryEn: 'Tactical Gigabit Encryptor',
    summaryTr:
      'Saha komuta merkezleri ve uzak karakollar için 1 Gbps hızında FIPS Seviye 3 onaylı hafif taktiksel hat içi donanım şifreleyici.',
    summaryEn:
      'Compact 1 Gbps FIPS Level 3 validated inline encryptor engineered for rapid field deployment in forward operating bases.',
    specs: [
      { labelTr: 'Bant Genişliği', labelEn: 'Throughput', val: '1 Gbps Tam Hat Hızı' },
      { labelTr: 'Kasa Boyutu', labelEn: 'Size', val: 'Yarım Raf (Half-Rack) Kompakt Kasa' },
      { labelTr: 'Güç Tüketimi', labelEn: 'Power Draw', val: 'Düşük Güç (15W DC / Akü ile Çalışabilir)' },
      { labelTr: 'Kripto Standardı', labelEn: 'Cipher', val: 'AES-256-GCM / NSA Suite B Onaylı' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'MIL-STD-810F', 'NSA Suite B'],
    datasheetContent: {
      partNumber: 'FC-X-1G-TACTICAL',
      version: 'Rev 2.2',
      descriptionTr:
        'Taşınabilir askeri radar istasyonları ve uydu yer terminalleri için hafif ve az enerji tüketen donanımsal hat şifreleyicisi.',
      descriptionEn:
        'Low-power tactical inline encryptor delivering defense-grade line-rate security for remote sensor feeds and satellite links.',
      technicalOverviewTr:
        'Akü ve güneş enerjisiyle çalışabilmesi sayesinde sabit elektriğin bulunmadığı sahra üslerinde güvenle kullanılır.',
      technicalOverviewEn:
        'Operates on 12-24V DC field battery power with zero cooling fans required.',
      electricalSpecs: [{ key: 'DC Input', value: '9-36 VDC' }],
      physicalSpecs: [{ key: 'Weight', value: '2.2 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-20°C to +60°C' }],
    },
  },
  {
    id: 'fortress-fastpath-mesh',
    imageUrl: '/images/partners/fortress/ES520-Deployable-Mesh-Point.jpg',
    name: 'Fortress FastPath Self-Healing Mesh Radyo',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Kendi Kendini Onaran Mesh',
    categoryEn: 'Self-Healing Tactical Mesh',
    summaryTr:
      'Broadcast ve multicast trafiğini optimize eden, IPv6 destekli ve kopan bağlantılarda kendini milisaniyede onaran kablosuz mesh ağı.',
    summaryEn:
      'Self-healing tactical mesh radio solution optimizing multicast traffic, providing IPv6 support, and re-routing around link drops.',
    specs: [
      { labelTr: 'Topoloji', labelEn: 'Topology', val: 'Self-Forming, Self-Healing Ad-Hoc Peer-to-Peer Mesh' },
      { labelTr: 'Frekanslar', labelEn: 'Frequencies', val: '4.9 GHz (Kamu Güvenliği) & 5.8 GHz Çift Radyo' },
      { labelTr: 'Yeniden Rota Hızı', labelEn: 'Heal SLA', val: '< 100 milisaniye alternatif rota aktivasyonu' },
      { labelTr: 'Ağ Kapasitesi', labelEn: 'Capacity', val: '54 Mbps hava hızı / Çoklu sıçramalı (Multi-hop)' },
    ],
    compliance: ['FIPS 140-2 Level 2', 'MIL-STD-810G', 'DoD Directive 8100.2'],
    datasheetContent: {
      partNumber: 'FASTPATH-MESH-RADIO-G3',
      version: 'Rev 2.8',
      descriptionTr:
        'Savaş alanında, maden ocaklarında ve geniş kampüslerde kablo ve baz istasyonu kısıtlaması olmadan tüm cihazların birbirini görerek iletişimi aktarmasını sağlar.',
      descriptionEn:
        'Eliminates dependence on central infrastructure by routing packets dynamically across peer mesh radios.',
      technicalOverviewTr:
        'Global Forte tarafından sahada test edilen FastPath algoritması, ağdaki gereksiz yayın trafiğini filtreleyerek bant genişliğini iki katına çıkarır.',
      technicalOverviewEn:
        'Patented FastPath algorithms throttle broadcast storms to double effective network data capacity.',
      electricalSpecs: [{ key: 'Power', value: 'PoE 802.3af or 12-24 VDC Vehicle power' }],
      physicalSpecs: [{ key: 'Enclosure', value: 'Cast aluminum NEMA 4X / IP67' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +70°C' }],
    },
  },
  {
    id: 'fortress-es210',
    imageUrl: '/images/partners/fortress/ES210-Tactical-Mesh-Point.png',
    name: 'Fortress ES210 Taktiksel Saha Mesh Noktası',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Taktiksel Saha Mesh Düğümü',
    categoryEn: 'Tactical Field Mesh Point',
    summaryTr:
      'Zırhlı araçlar ve sahra birlikleri için MIL-STD-810G standartlarında, kendi kendini kuran kriptolu taktiksel kablosuz mesh düğümü.',
    summaryEn:
      'Self-forming cryptographic tactical wireless mesh radio for armored vehicles and field platoons meeting MIL-STD-810G.',
    specs: [
      { labelTr: 'Ağ Mimarisi', labelEn: 'Topology', val: 'Dinamik Çoklu Sıçramalı (Multi-Hop) Ad-Hoc Mesh' },
      { labelTr: 'Kripto Koruması', labelEn: 'Encryption', val: 'Donanımsal Hat İçi AES-256 Havadan Şifreleme' },
      { labelTr: 'Saha Dayanımı', labelEn: 'Ruggedization', val: 'MIL-STD-810G Şok, Titreşim ve Sıcaklık Testli' },
      { labelTr: 'Kanal Geçişi', labelEn: 'Frequency Agility', val: 'Düşman Karıştırmasına (Jamming) Karşı Otomatik Frekans Atlama' },
    ],
    compliance: ['MIL-STD-810G', 'FIPS 140-2', 'IP67 Submersible'],
    datasheetContent: {
      partNumber: 'FORTRESS-ES210-NODE',
      version: 'Hardware Rev 3.2',
      descriptionTr:
        'Konvoy halindeki askeri araçların birbirleri arasında ve ana üs ile kesintisiz veri, telsiz ve video paylaşımı yapmasını sağlayan dayanıklı telsiz ünitesi.',
      descriptionEn:
        'Tactical mesh node ensuring continuous high-speed data, voice, and sensor sharing between armored convoy vehicles.',
      technicalOverviewTr:
        'Konvoydaki bir araç kapsama dışına çıksa veya imha olsa bile ağ diğer araçlar üzerinden kendini milisaniyeler içinde yeniden rotalar.',
      technicalOverviewEn:
        'Dynamic routing algorithms heal topology within milliseconds if any node in the convoy is lost or disabled.',
      electricalSpecs: [{ key: 'Power Input', value: '18-36 VDC NATO Vehicle Power' }, { key: 'RF Output', value: '1 Watt (30 dBm) per port' }],
      physicalSpecs: [{ key: 'Housing', value: 'Milled aluminum IP67 submersible' }, { key: 'Weight', value: '3.6 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +75°C' }],
    },
  },
  {
    id: 'fortress-es520',
    imageUrl: '/images/partners/fortress/ES520-Deployable-Mesh-Point.jpg',
    name: 'Fortress ES520 Konuşlandırılabilir Mesh Düğümü & Ağ Geçidi',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Konuşlandırılabilir Mesh Ağ Geçidi',
    categoryEn: 'Deployable Mesh Gateway',
    summaryTr:
      'Binlerce eşzamanlı kablosuz mesh kullanıcısını ve sınır karakollarını tek merkezden kriptografik olarak toplayan yüksek kapasiteli ağ geçidi.',
    summaryEn:
      'High-capacity central security gateway terminating encrypted tunnels for thousands of field wireless mesh users and border posts.',
    specs: [
      { labelTr: 'Kullanıcı Kapasitesi', labelEn: 'User Capacity', val: '5.000+ Eşzamanlı Kriptolu Tünel Termini' },
      { labelTr: 'Şifreli Veri Hızı', labelEn: 'Crypto Throughput', val: '1.9 Gbps Donanımsal Şifreleme Hızı' },
      { labelTr: 'Yedeklilik', labelEn: 'Redundancy', val: 'Active-Standby VRRP Çift Cihaz Yük Devretme' },
      { labelTr: 'Ağ Portları', labelEn: 'Interfaces', val: '4x Gigabit Ethernet + 2x SFP Fiber Port' },
    ],
    compliance: ['FIPS 140-2 Level 2/3', 'Common Criteria', 'DoD Approved'],
    datasheetContent: {
      partNumber: 'FORTRESS-ES520-GW',
      version: 'Rev 4.0',
      descriptionTr:
        'Sınır birlikleri ve sahadaki tüm mobil düğümlerden gelen şifreli paketleri açarak karargah sunucularına aktaran yüksek kapasiteli merkez cihazı.',
      descriptionEn:
        'Central gateway decrypting secure field streams from all distributed tactical nodes into command data centers.',
      technicalOverviewTr:
        'Dahili donanım kripto motoru ile işlemciye yük bindirmeden gigabit mertebesinde VPN tünelleri sonlandırır.',
      technicalOverviewEn:
        'Hardware cryptographic accelerator terminates high-density VPN sessions with line-rate forwarding efficiency.',
      electricalSpecs: [{ key: 'Power', value: 'Dual 100-240 VAC redundant power supply' }],
      physicalSpecs: [{ key: 'Form Factor', value: '1U 19-inch rackmount' }, { key: 'Weight', value: '7.2 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '0°C to 50°C' }],
    },
  },
  {
    id: 'fortress-es820',
    imageUrl: '/images/partners/fortress/ES820-Vehicle-Mesh-Point.jpg',
    name: 'Fortress ES820 Araç Tipi Taktiksel Mesh Düğümü',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Zırhlı Araç Mesh Telsizi',
    categoryEn: 'Vehicle Tactical Mesh Radio',
    summaryTr:
      'Tanklar, zırhlı personel taşıyıcılar ve insansız kara araçları (İKA) için şok ve titreşime karşı güçlendirilmiş entegre araç telsiz ünitesi.',
    summaryEn:
      'Hardened vehicular tactical mesh node engineered for tanks, armored carriers, and unmanned ground vehicles (UGVs).',
    specs: [
      { labelTr: 'Çalışma Voltajı', labelEn: 'Voltage', val: '24V NATO Askeri Araç Akü Beslemesi' },
      { labelTr: 'Titreşim Koruma', labelEn: 'Vibration', val: 'MIL-STD-810G Paletli ve Tekerlekli Araç Titreşim Onaylı' },
      { labelTr: 'Veri Aktarımı', labelEn: 'Throughput', val: 'Termal Kamera, Radar ve Telsiz Sesini Eşzamanlı İletme' },
      { labelTr: 'Arayüzler', labelEn: 'Connectors', val: 'Askeri MIL-DTL-38999 Kilitlemeli Dairesel Konnektörler' },
    ],
    compliance: ['MIL-STD-810G', 'MIL-STD-461E EMC', 'FIPS 140-2'],
    datasheetContent: {
      partNumber: 'FORTRESS-ES820-VEHICLE',
      version: 'Rev 2.7',
      descriptionTr:
        'Muharebe sahasındaki araçların seyir halindeyken birbirlerinin termal kamera görüntülerini anlık olarak paylaşmasını sağlar.',
      descriptionEn:
        'Maintains situational awareness between moving combat vehicles through continuous peer-to-peer telemetry and video sharing.',
      technicalOverviewTr:
        'Kablo kopmalarını engelleyen askeri dairesel konnektörleri ve döküm alüminyum gövdesi ile doğrudan araç tavanına veya içine monte edilir.',
      technicalOverviewEn:
        'Military-grade circular connectors ensure vibration-proof connectivity during intense vehicular combat maneuvers.',
      electricalSpecs: [{ key: 'Power Input', value: '18-36 VDC' }],
      physicalSpecs: [{ key: 'Housing', value: 'Milled aluminum enclosure' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +75°C' }],
    },
  },
  {
    id: 'fortress-es2440',
    imageUrl: '/images/partners/fortress/ES2440-High-Capacity-Mesh-Point.jpg',
    name: 'Fortress ES2440 Yüksek Kapasiteli Altyapı Mesh Düğümü',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Altyapı Mesh Baz İstasyonu',
    categoryEn: 'High Capacity Infrastructure Mesh',
    summaryTr:
      'Hava üsleri, askeri kışlalar ve limanlar için 4 adede kadar bağımsız telsiz modülüne sahip yüksek kapasiteli altyapı mesh noktası.',
    summaryEn:
      'Quad-radio infrastructure mesh node providing sectorized broadband wireless coverage across airbases and naval ports.',
    specs: [
      { labelTr: 'Radyo Sayısı', labelEn: 'Radios', val: '4x Bağımsız RF Alıcı-Verici Modülü' },
      { labelTr: 'Eşzamanlı Kullanıcı', labelEn: 'Clients', val: '500+ Askeri Uç Nokta ve İHA Yer İstasyonu Desteği' },
      { labelTr: 'Şifreleme Hızı', labelEn: 'Crypto Speed', val: '1.2 Gbps Donanımsal FIPS Şifreleme' },
      { labelTr: 'Kasa Koruması', labelEn: 'Enclosure', val: 'NEMA 4X / IP67 Korozyona Dayanıklı Kasa' },
    ],
    compliance: ['FIPS 140-2 Level 2', 'DoD Directive 8100.2'],
    datasheetContent: {
      partNumber: 'ES2440-INFRA-QUAD',
      version: 'Rev 1.8',
      descriptionTr:
        'Kulelere monte edilen, 360 derece sektörel kapsama sağlayan ve diğer kulelerle mikrodalga omurga kuran ana mesh baz istasyonu.',
      descriptionEn:
        'Tower-mounted sectorized wireless infrastructure providing long-range coverage and inter-base microwave backhauls.',
      technicalOverviewTr:
        'Farklı frekansları aynı anda kullanarak (örneğin 2.4 GHz istemci, 4.9 GHz kamu ve 5.8 GHz omurga) frekans çakışmasını önler.',
      technicalOverviewEn:
        'Simultaneous quad-band operation isolates client access from backhaul repeaters to maximize data throughput.',
      electricalSpecs: [{ key: 'Power', value: 'PoE+ or 48 VDC' }],
      physicalSpecs: [{ key: 'Weight', value: '6.8 kg' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +65°C' }],
    },
  },
  {
    id: 'fortress-airguard',
    imageUrl: '/images/partners/fortress/RF-Performance.jpg',
    name: 'Fortress AirGuard Kablosuz Saldırı Tespit Sistemi (WIPS)',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Kablosuz Güvenlik & WIDS/WIPS',
    categoryEn: 'Wireless Intrusion Prevention',
    summaryTr:
      'Hassas askeri ve kamu tesislerinde yetkisiz Wi-Fi erişim noktalarını, dinleme cihazlarını ve sinyal saldırılarını anında tespit ve bloke eden sistem.',
    summaryEn:
      'Wireless intrusion detection and defense system monitoring RF spectrum for rogue access points, evil twins, and eavesdropping in secure facilities.',
    specs: [
      { labelTr: 'Frekans Tarama', labelEn: 'RF Coverage', val: '2.4 GHz & 5 GHz Tüm Kanallar Sürekli İzleme' },
      { labelTr: 'Tehdit Tespiti', labelEn: 'Threat Detection', val: 'Sahte AP (Rogue), Man-in-the-Middle, Jamming Sinyali' },
      { labelTr: 'Müdahale', labelEn: 'Countermeasure', val: 'Yetkisiz Cihazın Bağlantısını Anında Düşürme (Deauth)' },
      { labelTr: 'Konumlandırma', labelEn: 'Location Triangulation', val: 'Tehdit Kaynağını Bina Haritasında 1 Metre Doğrulukla Bulma' },
    ],
    compliance: ['DoD Directive 8100.2', 'FIPS 140-2 Level 2', 'TEMPEST Zone B Compatible'],
    datasheetContent: {
      partNumber: 'AIRGUARD-RF-SENSOR',
      version: 'v3.8 Enterprise',
      descriptionTr:
        'Kritik toplantı salonları, kripto merkezleri ve komutanlıklarda yetkisiz telsiz veya Wi-Fi sızıntılarını 7/24 denetleyen spektrometre tabanlı sensör ağı.',
      descriptionEn:
        'Continuous RF airspace monitoring sensor array designed to locate and suppress rogue wireless devices in classified facilities.',
      technicalOverviewTr:
        'Özel algoritmaları sayesinde casus dinleme böcekleri veya yetkisiz mobil modemleri anında harita üzerinde işaretler.',
      technicalOverviewEn:
        'Pinpoints unauthorized mobile modems and surveillance transmitters with high spatial accuracy.',
      electricalSpecs: [{ key: 'Power', value: 'Power over Ethernet (PoE 802.3at)' }],
      physicalSpecs: [{ key: 'Mounting', value: 'Ceiling mount tamper-switched casing' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-10°C to +50°C' }],
    },
  },
  {
    id: 'fortress-secure-client',
    imageUrl: '/images/partners/fortress/suite-b.jpg',
    name: 'Fortress Secure Client Taktiksel VPN Yazılımı',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Uç Nokta Kripto Yazılımı',
    categoryEn: 'Endpoint Cryptographic Client',
    summaryTr:
      'Saha dizüstü bilgisayarları ve taktiksel tabletler için askeri standartlarda FIPS onaylı şifreli tünelleme ve VPN yazılımı.',
    summaryEn:
      'Military-grade cryptographic client software providing FIPS validated secure communications for tactical laptops and tablets.',
    specs: [
      { labelTr: 'Algoritma', labelEn: 'Cipher', val: 'AES-256-GCM / NSA Suite B' },
      { labelTr: 'Platform', labelEn: 'Platforms', val: 'Windows 10/11, Ruggedized Linux Tabletler' },
      { labelTr: 'Tünelleme', labelEn: 'Tunnel Mode', val: 'Otomatik Kesintisiz Yeniden Bağlanma (Stealth Mode)' },
      { labelTr: 'Kimlik Doğrulama', labelEn: 'Authentication', val: 'Donanımsal Akıllı Kart & PKI Sertifikası' },
    ],
    compliance: ['FIPS 140-2 Cryptographic Module', 'Common Criteria EAL4'],
    datasheetContent: {
      partNumber: 'FORT-SEC-CLIENT-SW',
      version: 'v5.4 Multi-Platform',
      descriptionTr:
        'Sahada görev yapan personelin güvensiz hücresel veya uydu ağları üzerinden dahi merkez sunuculara sızma riski olmadan bağlanmasını sağlar.',
      descriptionEn:
        'Ensures secure field communications across untrusted public cellular or satellite links back into command data centers.',
      technicalOverviewTr:
        'Stealth Mode özelliği sayesinde istemci, ağ üzerinde herhangi bir IP taramasında veya port kontrolünde görünmez kalır.',
      technicalOverviewEn:
        'Stealth Mode ensures the field endpoint remains invisible to network port scans and sniffers.',
      electricalSpecs: [{ key: 'Footprint', value: 'Low CPU utilization (< 3%)' }],
      physicalSpecs: [{ key: 'Installation', value: 'Silent deployment MSI package' }],
      environmentalSpecs: [{ key: 'Connection', value: 'Automatic roaming across LTE/Satellite/Wi-Fi' }],
    },
  },

  // ==========================================
  // SPYRUS (9 Products)
  // ==========================================
  {
    id: 'spyrus-hydra-digital-attach',
    imageUrl: '/images/partners/spyrus/spyrus1.png',
    name: 'SPYRUS Hydra Privacy Card™ Series II Digital Attaché',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Donanımsal Kripto Token & Akıllı Kart',
    categoryEn: 'Hardware Security Token & Smart Card',
    summaryTr:
      'FIPS 140-2 Seviye 3 sertifikalı, NSA Suite B algoritmalarını donanım üzerinde çalıştıran, askeri ve istihbarat personeli için güvenli USB kripto token.',
    summaryEn:
      'FIPS 140-2 Level 3 cryptographic hardware token executing NSA Suite B algorithms on-chip for defense and intelligence personnel.',
    specs: [
      { labelTr: 'Güvenlik Seviyesi', labelEn: 'Validation', val: 'FIPS 140-2 Seviye 3 (Fiziksel Müdahale Korumalı)' },
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Crypto Engine', val: 'SPYRUS SPYCOS® Donanımsal Güvenli İşletim Sistemi' },
      { labelTr: 'Algoritmalar', labelEn: 'Algorithms', val: 'ECDSA P-384, ECDH P-384, AES-256, SHA-384' },
      { labelTr: 'Kullanım Alanı', labelEn: 'Applications', val: 'Gizli Belge İmzalama, E-posta Şifreleme, VPN Kimlik Doğrulama' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'NSA Suite B', 'DoD PKI Approved'],
    datasheetContent: {
      partNumber: 'HYDRA-PRIV-CARD-384',
      version: 'v4.0',
      descriptionTr:
        'SPYRUS Hydra Privacy Card, şifreleme anahtarlarının asla bilgisayar belleğine çıkmadan doğrudan çip içinde işlenmesini sağlayan yüksek güvenlikli bir kripto token’dır.',
      descriptionEn:
        'The SPYRUS Hydra Privacy Card ensures private cryptographic keys never touch host computer memory, executing all ciphers on-chip.',
      technicalOverviewTr:
        'Fiziksel bir saldırı veya çipin kimyasal olarak açılması durumunda özel epoksi kaplama anahtarları mikrosaniyeler içinde imha eder.',
      technicalOverviewEn:
        'Special tamper-reactive potting compound zeroizes master keys in microseconds upon attempted physical disassembly.',
      electricalSpecs: [{ key: 'Interface', value: 'USB 2.0 / 3.0 Type-A' }],
      physicalSpecs: [{ key: 'Enclosure', value: 'Tamper-evident epoxy potted solid casing' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-20°C to +65°C' }],
    },
  },
  {
    id: 'spyrus-hydra-ped',
    imageUrl: '/images/partners/spyrus/spyrus2.jpg',
    name: 'SPYRUS Hydra PC Series II Personal Encryption Device (PED)',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kişisel Donanımsal Şifreleme Cihazı',
    categoryEn: 'Personal Encryption Device',
    summaryTr:
      'Askeri personelin sahada belgelerini doğrudan donanım seviyesinde tek tuşla şifrelemesini sağlayan bağımsız taşınabilir kripto cihazı.',
    summaryEn:
      'Standalone personal hardware encryption device allowing field commanders to encrypt sensitive operational orders on-the-fly.',
    specs: [
      { labelTr: 'FIPS Standardı', labelEn: 'FIPS Level', val: 'FIPS 140-2 Level 3 Hardware Validated' },
      { labelTr: 'Donanım Güvenliği', labelEn: 'Tamper Resistance', val: 'Aktif Fiziksel Sıfırlama Devresi (Zeroization)' },
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Crypto Chip', val: 'ARM SecureCore donanımsal kripto işlemci' },
      { labelTr: 'DoD Uyumluluğu', labelEn: 'Defense Standards', val: 'DoD CISO ve NATO Gizli Dereceli Bilgi Şifreleme' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'NSA Suite B Cryptography'],
    datasheetContent: {
      partNumber: 'HYDRA-PED-SERIES-II',
      version: 'Rev 2.8',
      descriptionTr:
        'Gizli askeri emirlerin ve istihbarat raporlarının yetkisiz ellere geçmesini önleyen, özel donanımsal kripto anahtarı.',
      descriptionEn:
        'Hardware security unit providing hardware-isolated cryptographic key storage and automated document encryption.',
      technicalOverviewTr:
        'Cihazın dış kasasına yapılan herhangi bir delme veya lazerle açma girişiminde entegre sensörler anahtarları 100 nanosaniyede temizler.',
      technicalOverviewEn:
        'Photonic and voltage sensors erase master keys in under 100 nanoseconds upon breach attempts.',
      electricalSpecs: [{ key: 'Interface', value: 'High Speed USB' }],
      physicalSpecs: [{ key: 'Housing', value: 'Hermetically potted composite' }],
      environmentalSpecs: [{ key: 'Temp', value: '-25°C to +70°C' }],
    },
  },
  {
    id: 'spyrus-pocketvault-384',
    imageUrl: '/images/partners/spyrus/PocketVault.png',
    name: 'SPYRUS PocketVault P-384 Şifreli Taşınabilir SSD',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Donanımsal Şifreli Taşınabilir Depolama',
    categoryEn: 'Hardware Encrypted Secure Storage',
    summaryTr:
      'Donanımsal XTS-AES 256-bit şifreleme, yerleşik OLED ekran ve PIN klavyesi ile bilgisayara bağlanmadan önce şifresi çözülen ultra güvenli taşınabilir SSD.',
    summaryEn:
      'Ultra-secure portable SSD featuring hardware XTS-AES 256-bit encryption, onboard keypad, and OLED display for pre-boot authentication.',
    specs: [
      { labelTr: 'Kapasite', labelEn: 'Capacities', val: '256 GB / 512 GB / 1 TB / 2 TB Seçenekleri' },
      { labelTr: 'Şifreleme', labelEn: 'Encryption', val: 'Donanımsal XTS-AES 256-bit Tam Disk Şifreleme' },
      { labelTr: 'Kimlik Doğrulama', labelEn: 'Authentication', val: 'Cihaz Üzerindeki Tuş Takımı (Keypad) ile PIN Girişi' },
      { labelTr: 'Kendi Kendini İmha', labelEn: 'Brute Force Defense', val: '10 Hatalı PIN Sonrası Anahtar ve Veriyi Kalıcı İmha' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'MIL-STD-810F', 'NATO Secret Approved'],
    datasheetContent: {
      partNumber: 'PV-P384-SSD-1TB',
      version: 'Rev 2.5',
      descriptionTr:
        'Hassas devlet projeleri, askeri tatbikat planları ve finansal verilerin sahada güvenle taşınması için tasarlanmış, bilgisayardaki virüslerden etkilenmeyen taşınabilir disk.',
      descriptionEn:
        'Hardware encrypted solid-state drive immune to host computer keyloggers and malware, authenticated directly via onboard keypad.',
      technicalOverviewTr:
        'Anahtarlar bilgisayara iletilmez. PIN doğrudan disk kasasındaki tuşlardan girilmeden bilgisayar diski tanımaz.',
      technicalOverviewEn:
        'Host computer cannot mount or enumerate storage until valid authentication PIN is entered on device hardware.',
      electricalSpecs: [{ key: 'Read/Write Speed', value: 'Up to 450 MB/s via USB 3.2 Gen 1' }],
      physicalSpecs: [{ key: 'Chassis', value: 'Machined aerospace aluminum waterproof shell' }],
      environmentalSpecs: [{ key: 'Submersion', value: 'IP68 waterproof up to 1.5 meters for 30 min' }],
    },
  },
  {
    id: 'spyrus-pocketvault-sd',
    imageUrl: '/images/partners/spyrus/PocketVaultSD.png',
    name: 'SPYRUS PocketVault SD Şifreli Hafıza Kartı',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Donanımsal Şifreli SD Kart',
    categoryEn: 'Hardware Encrypted SD Memory',
    summaryTr:
      'Askeri kameralar, ses kayıt cihazları ve saha el terminalleri için donanımsal kripto denetleyicisine sahip güvenli SD kart.',
    summaryEn:
      'Secure SD flash card featuring integrated cryptographic hardware controller for field cameras and tactical audio recorders.',
    specs: [
      { labelTr: 'Kapasite', labelEn: 'Capacities', val: '32 GB / 64 GB / 128 GB Endüstriyel Flash' },
      { labelTr: 'Şifreleme', labelEn: 'Cipher', val: 'Donanımsal On-The-Fly AES-256 Şifreleme' },
      { labelTr: 'Dayanıklılık', labelEn: 'Endurance', val: 'SLC / pSLC Yüksek Yazma Ömrü' },
      { labelTr: 'Erişim Koruması', labelEn: 'Access Control', val: 'Kriptografik Token Olmadan Kart Okunamaz' },
    ],
    compliance: ['FIPS 140-2', 'SDA Specification', 'MIL-STD-810G'],
    datasheetContent: {
      partNumber: 'PV-SD-SECURE-64',
      version: 'Rev 1.4',
      descriptionTr:
        'Sahada keşif yapan İHA veya askeri kameradan kart çıkarılsa bile özel yetki anahtarı olmadan verilerin okunmasını engeller.',
      descriptionEn:
        'Ensures reconnaissance video footage recorded on field drones cannot be viewed if the SD card is captured by adversaries.',
      technicalOverviewTr:
        'Kamera kart üzerine yazarken doğrudan denetleyici çipinde şifreler, host cihazda işlemci yükü oluşturmaz.',
      technicalOverviewEn:
        'Integrated crypto controller performs hardware encryption at full bus speed with zero camera processor overhead.',
      electricalSpecs: [{ key: 'Speed Class', value: 'UHS-I Class 10 U3 V30' }],
      physicalSpecs: [{ key: 'Form', value: 'Standard SD / SDHC' }],
      environmentalSpecs: [{ key: 'Temp', value: '-40°C to +85°C' }],
    },
  },
  {
    id: 'spyrus-rosetta-smartcard',
    imageUrl: '/images/partners/spyrus/spyrus5.jpg',
    name: 'SPYRUS Rosetta Series II FIPS Seviye 3 Akıllı Kart',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Akıllı Kart',
    categoryEn: 'Cryptographic Smart Card',
    summaryTr:
      'Askeri personel kimlik kartları (CAC/PIV) ve nükleer tesis erişim denetimi için NSA Suite B destekli kriptografik temaslı akıllı kart.',
    summaryEn:
      'Contact smart card executing on-card Suite B cryptography for military Common Access Card (CAC) and PIV programs.',
    specs: [
      { labelTr: 'Standart', labelEn: 'Standards', val: 'ISO 7816, FIPS 140-2 Seviye 3, FIPS 201 PIV' },
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Cryptoprocessor', val: 'SPYCOS İşletim Sistemi & Elliptic Curve Kriptografi' },
      { labelTr: 'Bellek', labelEn: 'Memory', val: '128 KB Güvenli EEPROM' },
      { labelTr: 'Uygulama', labelEn: 'Usage', val: 'Fiziksel Kapı Girişi + Bilgisayar Oturum Açma + Dijital İmza' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'FIPS 201 PIV Approved', 'NSA Suite B'],
    datasheetContent: {
      partNumber: 'ROSETTA-SC-II-128',
      version: 'Rev 3.6',
      descriptionTr:
        'Pentagon ve NATO üslerinde personelin tek bir kartla hem turnikeden geçmesini hem de gizli bilgisayarına oturum açmasını sağlayan akıllı kart.',
      descriptionEn:
        'Unifies physical building access with secure PKI logical desktop authentication in high-security military compounds.',
      technicalOverviewTr:
        'Kart üzerindeki kripto işlemci, anahtarların karttan dışarı çıkmasına asla izin vermeden imzalama işlemlerini kart içinde tamamlar.',
      technicalOverviewEn:
        'Executes ECDSA signatures directly on-card, eliminating any exposure of private keys to host operating systems.',
      electricalSpecs: [{ key: 'Interface', value: 'ISO 7816 Contact Interface' }],
      physicalSpecs: [{ key: 'Form', value: 'ID-1 Standard PVC/Polycarbonate' }],
      environmentalSpecs: [{ key: 'Durability', value: '500,000 insertion cycles' }],
    },
  },
  {
    id: 'spyrus-rosetta-microsd',
    imageUrl: '/images/partners/spyrus/RosettaSDHC-product-image.jpg',
    name: 'SPYRUS Rosetta MicroSD Donanımsal Kripto Modülü',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Gömülü Kripto MicroSD Modülü',
    categoryEn: 'Embedded Cryptographic MicroSD',
    summaryTr:
      'Akıllı telefonlar, el telsizleri ve İHA otopilotları için MicroSD yuvasına takılan FIPS Seviye 3 onaylı donanımsal şifreleme ve imzalama çipi.',
    summaryEn:
      'FIPS Level 3 validated cryptographic module packaged in a MicroSD form factor for tactical radios, smartphones, and UAV telemetry.',
    specs: [
      { labelTr: 'Form Faktörü', labelEn: 'Form Factor', val: 'Standart MicroSD Kart Yuvası Uyumlu' },
      { labelTr: 'Kripto Çipi', labelEn: 'Crypto Element', val: 'Güvenli Çip (Secure Element) Donanımsal HSM' },
      { labelTr: 'Uygulama', labelEn: 'Use Case', val: 'Taktiksel Ses Şifreleme, Drone Telemetri Doğrulama' },
      { labelTr: 'Depolama', labelEn: 'Secure Flash', val: '32 GB / 64 GB Şifreli Veri Depolama' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Suite B Cryptography', 'ITAR Compliant'],
    datasheetContent: {
      partNumber: 'ROSETTA-MSD-384',
      version: 'v2.1 Embedded',
      descriptionTr:
        'Herhangi bir Android tablet, el telsizi veya gömülü bilgisayarı anında askeri sınıf şifreli iletişim terminaline dönüştüren donanım modülü.',
      descriptionEn:
        'Transforms standard Android field tablets and tactical handhelds into certified encrypted endpoints.',
      technicalOverviewTr:
        'Gömülü PKCS#11 sürücüsü sayesinde mobil cihazdaki sesli görüşmeleri ve anlık mesajları donanım seviyesinde şifreler.',
      technicalOverviewEn:
        'Provides on-the-fly voice and data encryption via standard PKCS#11 APIs.',
      electricalSpecs: [{ key: 'Interface', value: 'SDA Physical Layer Specification compliant' }],
      physicalSpecs: [{ key: 'Dimensions', value: '15 x 11 x 1.0 mm MicroSD' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +85°C Industrial' }],
    },
  },
  {
    id: 'spyrus-lynks-hsm',
    imageUrl: '/images/partners/spyrus/spyrus11.jpg',
    name: 'SPYRUS LYNKS Series II Taşınabilir Donanımsal Güvenlik Modülü',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Taşınabilir Mini HSM Donanımı',
    categoryEn: 'Portable Field Hardware Security Module',
    summaryTr:
      'Sahra karargahları ve mobil operasyon merkezleri için USB ve PCMCIA yuvalı, FIPS Seviye 3 onaylı taşınabilir donanım şifreleme modülü.',
    summaryEn:
      'Portable FIPS 140-2 Level 3 hardware security module designed for tactical forward operating bases and rugged laptops.',
    specs: [
      { labelTr: 'FIPS Standardı', labelEn: 'FIPS Level', val: 'FIPS 140-2 Level 3 Hardware Cryptographic Module' },
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Engine', val: 'Donanımsal Rastgele Sayı Üreteci (TRNG) & Suite B Hızlandırıcı' },
      { labelTr: 'Kasa Koruması', labelEn: 'Tamper Protection', val: 'Epoksi Kaplı Katı Kasa / Müdahalede Sıfırlama' },
      { labelTr: 'Kullanım Alanı', labelEn: 'Use Case', val: 'Saha Kök Sertifika Makamı, Askeri Telsiz Anahtar Üretimi' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'DoD Certified', 'NSA Suite B'],
    datasheetContent: {
      partNumber: 'LYNKS-SERIES-II-HSM',
      version: 'Hardware Rev 3.0',
      descriptionTr:
        'Sahadaki askeri telsizlere ve şifreli terminallere anahtar yüklemek (Key Fill Device) için kullanılan taşınabilir donanım modülü.',
      descriptionEn:
        'Acts as a ruggedized tactical key injection and certificate issuance device in remote defense installations.',
      technicalOverviewTr:
        'Sunucu odasına ihtiyaç duymadan sahra çadırında askeri sınıf anahtar üretim ve doğrulama yeteneği sağlar.',
      technicalOverviewEn:
        'Generates true-random cryptographic keys without requiring centralized server room infrastructure.',
      electricalSpecs: [{ key: 'Power', value: 'USB bus-powered or 5V DC' }],
      physicalSpecs: [{ key: 'Weight', value: '180 grams' }],
      environmentalSpecs: [{ key: 'Temp', value: '-30°C to +60°C' }],
    },
  },
  {
    id: 'spyrus-worksafe-pro',
    imageUrl: '/images/partners/spyrus/securepd.png',
    name: 'SPYRUS WorkSafe Pro Bootable Secure Drive',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Önyüklenebilir Güvenli İşletim Sistemi',
    categoryEn: 'Bootable Secure Workspace',
    summaryTr:
      'Kullanıcının herhangi bir yabancı bilgisayara takıp doğrudan donanımdan kendi izole, şifreli ve güvenli Windows/Linux ortamını başlatmasını sağlayan USB aygıtı.',
    summaryEn:
      'Bootable encrypted flash device transforming untrusted host computers into secure, isolated corporate workspaces.',
    specs: [
      { labelTr: 'Önyükleme', labelEn: 'Boot Engine', val: 'Doğrudan USB’den UEFI / BIOS Güvenli Önyükleme (Secure Boot)' },
      { labelTr: 'Şifreleme', labelEn: 'Encryption', val: 'XTS-AES 256 Donanımsal Tam Disk Şifreleme' },
      { labelTr: 'İzole Ortam', labelEn: 'Host Isolation', val: 'Konuk Bilgisayarın Sabit Diskine ve İnternetine Fiziksel İzolasyon' },
      { labelTr: 'Kullanım', labelEn: 'Use Case', val: 'Uzaktan Güvenli Çalışma, Saha İstihbaratı ve Denetim' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Microsoft Certified Windows To Go', 'DoD Approved'],
    datasheetContent: {
      partNumber: 'WORKSAFE-PRO-128',
      version: 'Rev 3.0',
      descriptionTr:
        'Kritik kurum çalışanlarının seyahatte veya evde kendi kişisel bilgisayarlarını sıfır güvenlik riskiyle kurumsal bir terminale çevirmesini sağlar.',
      descriptionEn:
        'Provides defense workers with a secure, hardware-encrypted bootable desktop completely isolated from host malware.',
      technicalOverviewTr:
        'Bilgisayardaki virüsler veya keylogger yazılımları WorkSafe ortamına asla sızamaz; cihaz çıkarıldığında bilgisayarda hiçbir iz kalmaz.',
      technicalOverviewEn:
        'Host PC malware cannot breach the encrypted operating system environment; zero traces left on host upon shutdown.',
      electricalSpecs: [{ key: 'USB Speed', value: 'USB 3.2 Gen 1 (up to 400 MB/s read)' }],
      physicalSpecs: [{ key: 'Casing', value: 'Mil-spec anodized aluminum waterproof body' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-20°C to +60°C' }],
    },
  },
  {
    id: 'spyrus-par-reader',
    imageUrl: '/images/partners/spyrus/spyrus8.jpg',
    name: 'SPYRUS Personal Access Reader 2 (PAR 2) Kart Okuyucu',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Askeri Akıllı Kart Okuyucu',
    categoryEn: 'Military Smart Card Reader',
    summaryTr:
      'Askeri dizüstü bilgisayarlar ve taktiksel terminaller için FIPS Seviye 3 akıllı kartları okuyan sağlamlaştırılmış USB kart okuyucu.',
    summaryEn:
      'Hardened USB smart card reader supporting ISO 7816 cards and military CAC/PIV credentials in field environments.',
    specs: [
      { labelTr: 'Standartlar', labelEn: 'Standards', val: 'ISO 7816 Class A/B/C, CCID, PC/SC, EMV Level 1' },
      { labelTr: 'Arayüz', labelEn: 'Connection', val: 'Korumalı USB 2.0 Kablosu (Ferrit Çekirdekli Parazit Önleyici)' },
      { labelTr: 'Saha Dayanımı', labelEn: 'Durability', val: 'Darbe ve Düşmeye Dayanıklı Güçlendirilmiş Gövde' },
      { labelTr: 'Kart Ömrü', labelEn: 'Insertion Life', val: '100.000+ Kart Takma/Çıkarma Ömrü' },
    ],
    compliance: ['FIPS 201 Approved', 'TAA Compliant', 'DoD PKI Compatible'],
    datasheetContent: {
      partNumber: 'PAR-2-USB-READER',
      version: 'Hardware Rev 2.2',
      descriptionTr:
        'Savaş alanında toz, nem ve titreşime maruz kalan askeri saha bilgisayarlarında akıllı kartların güvenle okunmasını sağlar.',
      descriptionEn:
        'Heavy-duty contact smart card reader tailored for rugged laptops operating in harsh military environments.',
      technicalOverviewTr:
        'EMC ve elektromanyetik dinleme saldırılarına karşı korumalı ferrit filtreli kablosu ile veri sızıntılarını önler.',
      technicalOverviewEn:
        'Shielded cabling prevents electromagnetic side-channel radiation during sensitive cryptographic pin entry.',
      electricalSpecs: [{ key: 'Power', value: 'USB bus-powered 5V' }],
      physicalSpecs: [{ key: 'Weight', value: '85 grams' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-20°C to +60°C' }],
    },
  },

  // ==========================================
  // CRYPTOMATHIC (9 Products)
  // ==========================================
  {
    id: 'cryptomathic-ckms',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic CKMS Merkezi Kripto Anahtar Yönetim Sistemi',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Kurumsal Kripto Anahtar Yönetimi',
    categoryEn: 'Centralized Key Management System',
    summaryTr:
      'Bankalar, telekom operatörleri ve kamu kuruluşlarında yüzlerce HSM ve uygulamanın tüm şifreleme anahtarlarını merkezi ve otomatik yöneten platform.',
    summaryEn:
      'Enterprise Key Management System orchestrating lifecycle, rotation, and distribution of millions of keys across heterogeneous HSMs.',
    specs: [
      { labelTr: 'HSM Uyumluluğu', labelEn: 'HSM Support', val: 'Thales SafeNet, Entrust, Utimaco, IBM HSM' },
      { labelTr: 'Anahtar Otomasyonu', labelEn: 'Automation', val: 'Otomatik Anahtar Üretimi, Rotasyonu ve İmhası' },
      { labelTr: 'Denetim İzi', labelEn: 'Audit Trail', val: 'Değiştirilemez Denetim Günlükleri & Çift Kontrol (Dual Control)' },
      { labelTr: 'Standartlar', labelEn: 'Standards', val: 'KMIP 1.4/2.0, PCI DSS, NIST SP 800-57' },
    ],
    compliance: ['PCI DSS Requirement 3.5/3.6', 'NIST SP 800-130', 'ISO 27001 ISMS'],
    datasheetContent: {
      partNumber: 'CRYPTO-CKMS-ENTERPRISE',
      version: 'v5.6 Enterprise Server',
      descriptionTr:
        'Kurum genelindeki tüm şifreleme anahtarlarının tek bir ekrandan, insan hatasını ortadan kaldırarak ve katı rol tabanlı onay mekanizmalarıyla (Dual Control) yönetilmesini sağlar.',
      descriptionEn:
        'Provides centralized governance over all enterprise encryption keys, eliminating human error through automated policy enforcement.',
      technicalOverviewTr:
        'Manuel anahtar yenileme risklerini ortadan kaldırarak finansal denetimlerde %100 uyumluluk sağlar.',
      technicalOverviewEn:
        'Removes operational overhead and compliance penalties by automating PCI-mandated key rotation schedules.',
      electricalSpecs: [{ key: 'Database', value: 'Oracle / PostgreSQL Enterprise Cluster' }],
      physicalSpecs: [{ key: 'Deployment', value: 'On-premise appliance, Private Cloud, or Hybrid' }],
      environmentalSpecs: [{ key: 'High Availability', value: 'Active-Active multi-site synchronization' }],
    },
  },
  {
    id: 'cryptomathic-signer',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic Signer (eIDAS Nitelikli Elektronik İmza)',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Nitelikli Elektronik İmza Çözümü',
    categoryEn: 'Qualified Remote Electronic Signature',
    summaryTr:
      'eIDAS ve Türk Elektronik İmza Kanunu uyumlu, mobil ve web bankacılığında güvenli uzaktan nitelikli elektronik imza atılmasını sağlayan HSM tabanlı çözüm.',
    summaryEn:
      'eIDAS Qualified Signature Creation Device (QSCD) enabling secure remote digital signing for web and mobile banking.',
    specs: [
      { labelTr: 'Sertifikasyon', labelEn: 'Accreditation', val: 'eIDAS QSCD (Nitelikli İmza Oluşturma Aracı)' },
      { labelTr: 'İmza Tipleri', labelEn: 'Signatures', val: 'PAdES, XAdES, CAdES Yasal Nitelikli İmzalar' },
      { labelTr: 'Kullanıcı Deneyimi', labelEn: 'UX', val: 'Akıllı Telefon Üzerinden Biyometrik Onaylı Anlık İmza' },
      { labelTr: 'Performans', labelEn: 'Throughput', val: 'Saniyede 1.000+ Eşzamanlı Nitelikli İmza' },
    ],
    compliance: ['eIDAS Regulation (EU) 910/2014', 'ETSI EN 319 411-1/2', '5070 Sayılı E-İmza Kanunu Uyumlu'],
    datasheetContent: {
      partNumber: 'CRYPTO-SIGNER-QSCD',
      version: 'v4.8 Certified Build',
      descriptionTr:
        'Kullanıcıların fiziki USB token taşımadan, bankacılık sözleşmelerini ve resmi evrakları cep telefonlarından ıslak imza hükmünde imzalamasını sağlar.',
      descriptionEn:
        'Allows bank customers and citizens to sign legally binding documents remotely via smartphones without physical tokens.',
      technicalOverviewTr:
        'Merkezi HSM üzerinde tutulan kullanıcı özel anahtarları sadece yetkili iki faktörlü onay (SAML/OAuth) geldiğinde saniyeliğine etkinleşir ve işlem sonrası kilitlenir.',
      technicalOverviewEn:
        'Sole control of private signing keys is guaranteed through certified Server Signing application logic.',
      electricalSpecs: [{ key: 'HSM Integration', value: 'Thales Luna / Utimaco CryptoServer QSCD' }],
      physicalSpecs: [{ key: 'API', value: 'RESTful JSON & OASIS DSS compliant endpoints' }],
      environmentalSpecs: [{ key: 'Security Level', value: 'Common Criteria EAL4+ (AVA_VAN.5)' }],
    },
  },
  {
    id: 'cryptomathic-cardink',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic CardInk EMV Veri Hazırlama & Kişiselleştirme',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'EMV Kart Kişiselleştirme & Çip Verisi',
    categoryEn: 'EMV Data Preparation System',
    summaryTr:
      'Bankaların kredi kartı, banka kartı ve TROY kartları için HSM güvencesinde çip kriptogramı, PIN ve anahtar hazırlayan endüstri standardı sistem.',
    summaryEn:
      'Industry standard EMV card personalization data preparation engine generating cryptographic profiles for Visa, Mastercard, and TROY.',
    specs: [
      { labelTr: 'Kart Şemaları', labelEn: 'Card Schemes', val: 'TROY, Visa, Mastercard, American Express, JCB' },
      { labelTr: 'Üretim Hızı', labelEn: 'Throughput', val: 'Saatlik 150.000+ Kart Veri Hazırlama Hızı' },
      { labelTr: 'Anında Basım', labelEn: 'Instant Issuance', val: 'Banka Şubelerinden Anında Kart Basım Desteği' },
      { labelTr: 'Entegrasyon', labelEn: 'Integration', val: 'Thales Luna, Entrust Datacard, Mühlbauer Makineleri' },
    ],
    compliance: ['EMVCo Certified', 'PCI Card Production (PCI CP)', 'TROY Onaylı'],
    datasheetContent: {
      partNumber: 'CARDINK-EMV-PREP-PRO',
      version: 'v8.4',
      descriptionTr:
        'Dünya çapında 50’den fazla ülkede bankacılık kartlarının çip profillerini HSM içinde yüksek hızda ve sıfır hata ile üreten lider veri hazırlama yazılımı.',
      descriptionEn:
        'Deploys inside financial bureaus and card issuance centers to generate EMV profiles and secure cryptographic session keys.',
      technicalOverviewTr:
        'DPA/SPA saldırılarına karşı korumalı kriptografik türetme anahtarları kullanır ve basım makinesine şifreli kanalla aktarır.',
      technicalOverviewEn:
        'Safeguards card personalization keys using certified HSM acceleration meeting PCI Card Production mandates.',
      electricalSpecs: [{ key: 'Platform', value: 'Windows Server / Linux Enterprise' }],
      physicalSpecs: [{ key: 'Interfaces', value: 'High speed MQ / Web Services interfaces' }],
      environmentalSpecs: [{ key: 'Auditing', value: 'Strict dual-control cryptographic audits' }],
    },
  },
  {
    id: 'cryptomathic-file2file',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic File2File Güvenli Toplu Dosya Şifreleme',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Toplu Veri & Dosya Şifreleme',
    categoryEn: 'Bulk File & Data Encryption',
    summaryTr:
      'Bankalararası takas dosyalarını, maaş ödeme listelerini ve hassas kamu veri transferlerini yüksek hızda şifreleyen ve imzalayan kurumsal yazılım.',
    summaryEn:
      'Enterprise server solution securing bulk file transfers, batch clearing files, and payroll distributions with digital signatures and encryption.',
    specs: [
      { labelTr: 'İşlem Hızı', labelEn: 'Performance', val: 'Saniyede 500 MB+ Hat Hızında Şifreleme' },
      { labelTr: 'Algoritmalar', labelEn: 'Ciphers', val: 'OpenPGP, CMS, S/MIME, AES-256, RSA-4096' },
      { labelTr: 'Otomasyon', labelEn: 'Automation', val: 'Dizin İzleme (Directory Polling) & Otomatik Şifreleme' },
      { labelTr: 'Bütünlük Koruması', labelEn: 'Integrity', val: 'HMAC-SHA512 ve Sayısal İmza Onayı' },
    ],
    compliance: ['SWIFT CSP Uyumlu', 'ISO 27001', 'PCI DSS Requirement 4'],
    datasheetContent: {
      partNumber: 'CRYPTO-FILE2FILE-SRV',
      version: 'v4.2',
      descriptionTr:
        'Banka sistemleri ile Merkez Bankası, BKM ve takas odaları arasındaki toplu EFT ve transfer dosyalarının yolda değiştirilmesini önler.',
      descriptionEn:
        'Guarantees end-to-end data integrity for automated financial batch files traversing untrusted public networks.',
      technicalOverviewTr:
        'Otomatik izleme klasörüne düşen her dosya milisaniyeler içinde HSM üzerindeki anahtar ile imzalanır ve şifrelenir.',
      technicalOverviewEn:
        'Automatically signs and encrypts batches upon file creation, logging each transaction into secure audit records.',
      electricalSpecs: [{ key: 'Host Support', value: 'Mainframe, Linux, Windows, AIX' }],
      physicalSpecs: [{ key: 'Integration', value: 'CLI, Java, .NET APIs' }],
      environmentalSpecs: [{ key: 'Scalability', value: 'Handles millions of files daily' }],
    },
  },
  {
    id: 'cryptomathic-epassport',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic ePassport PKI & Biyometrik Pasaport Paketi',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'e-Pasaport & Ulusal Kimlik PKI',
    categoryEn: 'ePassport & National ID PKI',
    summaryTr:
      'ICAO Doc 9303 standartlarında biyometrik çipli pasaport ve ulusal kimlik kartlarının basımı için gereken CSCA ve DS sertifika makamı sistemi.',
    summaryEn:
      'ICAO Doc 9303 compliant Public Key Infrastructure generating Country Signing CA (CSCA) and Document Signer (DS) for national biometric passports.',
    specs: [
      { labelTr: 'ICAO Uyumu', labelEn: 'ICAO Standard', val: 'ICAO Doc 9303 & BSI TR-03110 EAC / BAC / SAC' },
      { labelTr: 'Güvenlik Mekanizması', labelEn: 'Access Control', val: 'Basic Access Control (BAC) & Extended Access Control (EAC)' },
      { labelTr: 'Kök Makam', labelEn: 'Root CA', val: 'Country Signing CA (CSCA) Çevrimdışı Kök Makamı' },
      { labelTr: 'Biyometrik Koruma', labelEn: 'Biometric Security', val: 'Parmak İzi ve İris Verisinin Şifreli Korunması' },
    ],
    compliance: ['ICAO PKD Uyumlu', 'BSI TR-03110', 'Common Criteria EAL 5+'],
    datasheetContent: {
      partNumber: 'EPASSPORT-PKI-NATIONAL',
      version: 'v5.1 ICAO Compliant',
      descriptionTr:
        'Devlet basımevleri ve İçişleri Bakanlıkları tarafından biyometrik çipli pasaportların ve kimliklerin çip verisini dijital imzalamak için kullanılır.',
      descriptionEn:
        'Enables sovereign governments to issue cryptographically signed, forgery-proof biometric ePassports and national eID cards.',
      technicalOverviewTr:
        'ICAO PKD (Public Key Directory) ile entegre olarak yabancı sınır kapılarında Türk pasaportlarının anında doğrulanmasını sağlar.',
      technicalOverviewEn:
        'Seamlessly publishes national CSCA master certificates to the ICAO Public Key Directory for global border verification.',
      electricalSpecs: [{ key: 'HSM Integration', value: 'FIPS 140-2 Level 4 / CC EAL 5+ HSM' }],
      physicalSpecs: [{ key: 'Architecture', value: 'High-security air-gapped root ceremony workstation' }],
      environmentalSpecs: [{ key: 'Reliability', value: 'Sovereign-grade multi-custodian quorum' }],
    },
  },
  {
    id: 'cryptomathic-ca-tsa',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic Certification Authority (CA) & Zaman Damgası (TSA)',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Kurumsal PKI & Zaman Damgası',
    categoryEn: 'Enterprise CA & Timestamping',
    summaryTr:
      'Kurumsal dijital sertifikaların üretimini, iptal listelerini (CRL/OCSP) ve RFC 3161 uyumlu yasal zaman damgası hizmetini sağlayan PKI sunucusu.',
    summaryEn:
      'High-throughput RFC 3161 compliant Time Stamping Authority (TSA) and Certification Authority (CA) platform.',
    specs: [
      { labelTr: 'Zaman Damgası', labelEn: 'Time Stamping', val: 'RFC 3161 ve ETSI EN 319 421 Yasal Zaman Damgası' },
      { labelTr: 'İmza Hızı', labelEn: 'Throughput', val: 'Saniyede 5.000+ Yasal Zaman Damgası İmzası' },
      { labelTr: 'Zaman Doğruluğu', labelEn: 'Time Source', val: 'GPS / NTP Stratum-1 Atomik Saat Senkronizasyonu' },
      { labelTr: 'OCSP Desteği', labelEn: 'OCSP Validation', val: 'Milisaniyelik Çevrimiçi Sertifika İptal Sorgusu' },
    ],
    compliance: ['eIDAS Timestamping', 'ETSI EN 319 421', 'RFC 3161'],
    datasheetContent: {
      partNumber: 'CRYPTO-CA-TSA-SRV',
      version: 'v6.3',
      descriptionTr:
        'Elektronik fatura, e-Arşiv ve bankacılık işlemlerinde zamanın kesinliğini yasal olarak garanti eden güvenilir zaman damgası sistemi.',
      descriptionEn:
        'Provides legally irrefutable proof that a digital document or financial transaction existed at a specific point in time.',
      technicalOverviewTr:
        'Dahili HSM ile atomik saat kaynağından gelen zaman bilgisini kriptografik olarak imzalar, zamanın geriye veya ileriye alınmasını engeller.',
      technicalOverviewEn:
        'Anchored to atomic time sources and hardware HSMs, preventing any manual or unauthorized clock tampering.',
      electricalSpecs: [{ key: 'Interfaces', value: 'HTTP / HTTPS RFC 3161 standard endpoints' }],
      physicalSpecs: [{ key: 'Format', value: 'High Availability Linux Cluster' }],
      environmentalSpecs: [{ key: 'Accuracy', value: 'Sub-millisecond synchronization' }],
    },
  },
  {
    id: 'cryptomathic-secure-memorizer',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic Secure Memorizer Güvenli PIN Saklama',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Güvenli PIN & Veri Kasası',
    categoryEn: 'Secure PIN & Credential Vault',
    summaryTr:
      'Banka müşterilerinin kart PIN şifrelerini ve hassas kimlik doğrulama parolalarını veritabanlarında şifreli ve ayrıştırılmış olarak saklayan kasa yazılımı.',
    summaryEn:
      'High-assurance software engine safeguarding customer PIN blocks and credential secrets in core banking mainframes.',
    specs: [
      { labelTr: 'Şifreleme', labelEn: 'Cryptographic Core', val: 'HSM Entegre Triple-DES & AES PIN Şifreleme' },
      { labelTr: 'Güvenlik', labelEn: 'Security', val: 'Hiçbir Yönetici veya Yazılımcı Açık PIN Göremez' },
      { labelTr: 'Kapasite', labelEn: 'Capacity', val: '50 Milyon+ Müşteri PIN Verisi Yönetimi' },
      { labelTr: 'Uyumluluk', labelEn: 'Compliance', val: 'PCI PIN Security Requirements 2.0 / 3.0' },
    ],
    compliance: ['PCI PIN Security', 'Visa / Mastercard PIN Security Mandate'],
    datasheetContent: {
      partNumber: 'CRYPTO-SEC-MEMORIZER',
      version: 'v3.9',
      descriptionTr:
        'Bankaların çağrı merkezlerinde, mobil uygulamalarında veya internet bankacılığında PIN doğrulama yapılırken şifrelerin çalınmasını önler.',
      descriptionEn:
        'Protects customer PIN offset data and verification routines against sophisticated insider attacks.',
      technicalOverviewTr:
        'Bankacılık veri tabanlarında açık PIN tutulmasını kesin olarak yasaklayan PCI PIN kurallarına tam uyum sağlar.',
      technicalOverviewEn:
        'Enforces zero-knowledge storage where plaintext PINs never exist within database tables or memory dumps.',
      electricalSpecs: [{ key: 'DB Support', value: 'Oracle, DB2, SQL Server' }],
      physicalSpecs: [{ key: 'Host Platform', value: 'Mainframe z/OS, AIX, Linux' }],
      environmentalSpecs: [{ key: 'Auditing', value: 'PCI PIN certified' }],
    },
  },
  {
    id: 'cryptomathic-masc',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic Mobile App Security Core (MASC)',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Mobil Bankacılık Uygulama Koruması',
    categoryEn: 'Mobile Application In-App Defense',
    summaryTr:
      'Mobil bankacılık ve fintech uygulamalarını tersine mühendisliğe, root/jailbreak saldırılarına ve bellek dinlemelerine karşı koruyan yazılım SDK’sı.',
    summaryEn:
      'Runtime Application Self-Protection (RASP) SDK defending mobile banking apps against reverse engineering, hooking, and tampering.',
    specs: [
      { labelTr: 'Kripto Koruması', labelEn: 'White-Box Crypto', val: 'Patentli Beyaz Kutu Kriptografi (White-Box Cryptography)' },
      { labelTr: 'Tersine Mühendislik', labelEn: 'Obfuscation', val: 'Kod Karıştırma (Control Flow & String Obfuscation)' },
      { labelTr: 'Çalışma Anı Koruması', labelEn: 'RASP', val: 'Frida, Xposed ve Hata Ayıklayıcı (Debugger) Anlık Tespiti' },
      { labelTr: 'Platformlar', labelEn: 'Supported OS', val: 'iOS (Swift/Obj-C) & Android (Kotlin/Java/Flutter)' },
    ],
    compliance: ['OWASP Mobile Top 10 Compliant', 'PCI Mobile Payment Security Guidelines'],
    datasheetContent: {
      partNumber: 'CRYPTO-MASC-SDK',
      version: 'v3.7 RASP Engine',
      descriptionTr:
        'Mobil bankacılık uygulamalarında saklanan oturum anahtarlarını cihaz root edilmiş olsa bile saldırganların belleği okuyarak ele geçirmesini imkansız kılar.',
      descriptionEn:
        'Provides comprehensive in-app defense ensuring cryptographic secrets remain unreadable even on rooted or compromised mobile handsets.',
      technicalOverviewTr:
        'Saldırı algılandığında uygulamayı güvenli bir şekilde kapatır ve bankanın siber olay merkezine anlık telemetri uyarısı gönderir.',
      technicalOverviewEn:
        'Instantly terminates sensitive sessions upon detecting debugger attachment or dynamic binary instrumentation.',
      electricalSpecs: [{ key: 'SDK Footprint', value: 'Under 2MB binary size addition' }],
      physicalSpecs: [{ key: 'Delivery', value: 'Native CocoaPods / Gradle library' }],
      environmentalSpecs: [{ key: 'Performance Impact', value: '< 5ms execution overhead' }],
    },
  },
  {
    id: 'cryptomathic-cardmanager',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic CardManager Yaşam Döngüsü Sistemi',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Kart & Token Yaşam Döngüsü Yönetimi',
    categoryEn: 'Card & Token Lifecycle Management',
    summaryTr:
      'Akıllı kartların, temaslı/temassız banka kartlarının ve mobil ödeme tokenlarının tüm yaşam döngüsünü yöneten merkezi CMS yazılımı.',
    summaryEn:
      'Comprehensive card management system (CMS) overseeing post-issuance updates, PIN resets, and token lifecycles.',
    specs: [
      { labelTr: 'Uygulama Yönetimi', labelEn: 'Post-Issuance', val: 'Havadan (OTA) Çip Güncelleme ve Parametre Değişimi' },
      { labelTr: 'PIN Değişimi', labelEn: 'PIN Services', val: 'Online PIN Değiştirme ve Bloke Kaldırma' },
      { labelTr: 'Tokenizasyon', labelEn: 'Tokenization', val: 'Visa VTS ve Mastercard MDES Token Entegrasyonu' },
      { labelTr: 'Çoklu Arayüz', labelEn: 'Interfaces', val: 'ISO 7816, ISO 14443 NFC, GlobalPlatform 2.2' },
    ],
    compliance: ['PCI DSS Compliant', 'EMVCo Card Management Standards'],
    datasheetContent: {
      partNumber: 'CRYPTO-CARD-MGR-ENT',
      version: 'v6.1',
      descriptionTr:
        'Milyonlarca aktif kartın sahadayken bile güvenlik açıklarını kapatmak üzere güncellenmesini ve PIN işlemlerinin şubeye gitmeden yapılmasını sağlar.',
      descriptionEn:
        'Manages over-the-air card updates and online PIN management without requiring card re-issuance.',
      technicalOverviewTr:
        'HSM ile doğrudan entegre çalışarak kart ile merkez arasındaki tüm yönetim mesajlarını donanımsal olarak imzalar ve şifreler.',
      technicalOverviewEn:
        'Cryptographically signs and validates all GlobalPlatform script commands directly inside certified HSMs.',
      electricalSpecs: [{ key: 'Architecture', value: 'High throughput JEE clustering' }],
      physicalSpecs: [{ key: 'Platform', value: 'Enterprise Application Server (WildFly / WebSphere)' }],
      environmentalSpecs: [{ key: 'Capacity', value: 'Supports up to 20 million active cards' }],
    },
  },

  // ==========================================
  // GLOBAL FORTE OEM & HOSTING & CONSULTING (6 Products)
  // ==========================================
  {
    id: 'gf-embedded-oem',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Embedded OEM İletişim & Kripto Kartları',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Özel Gömülü Donanım & OEM',
    categoryEn: 'Custom Embedded Hardware & OEM',
    summaryTr:
      'Savunma sanayii ve endüstriyel cihaz üreticileri için özel tasarım gömülü donanım modülleri, telemetri kartları ve şifreleme yardımcı işlemcileri.',
    summaryEn:
      'Custom embedded hardware boards, industrial telemetry bridges, and crypto coprocessor daughter-cards for defense OEMs.',
    specs: [
      { labelTr: 'İşlemci Mimarisi', labelEn: 'Architecture', val: 'ARM Cortex-M / FPGA Donanımsal Hızlandırıcı' },
      { labelTr: 'Arayüzler', labelEn: 'Interfaces', val: 'PCIe, SFP+, RS-485, CAN Bus, Askeri D38999 Konnektör' },
      { labelTr: 'Çalışma Sıcaklığı', labelEn: 'Temperature', val: '-40°C ile +85°C Endüstriyel Sıcaklık Aralığı' },
      { labelTr: 'Yazılım Güvenliği', labelEn: 'Firmware Security', val: 'Güvenli Önyükleme (Secure Boot) & İmzalı Güncelleme' },
    ],
    compliance: ['ITAR / Savunma Standartları', 'MIL-STD-810G', 'TSE Hizmet Yeterlilik Onaylı'],
    datasheetContent: {
      partNumber: 'GF-OEM-EMBEDDED-G4',
      version: 'Hardware Rev 2.1',
      descriptionTr:
        'Global Forte Ar-Ge laboratuvarlarında yerli mühendislik kabiliyeti ile tasarlanan, savunma tekerlekli/paletli araçlarına ve insansız sistemlere entegre edilen gömülü iletişim modülü.',
      descriptionEn:
        'Engineered in-house by Global Forte for tactical vehicular systems and autonomous robotics platforms.',
      technicalOverviewTr:
        'Donanımsal FPGA kripto hızlandırıcısı sayesinde sahadaki sensör ve radar verilerini mikro saniye mertebesinde şifreleyerek komuta merkezine iletir.',
      technicalOverviewEn:
        'Leverages FPGA cryptographic acceleration to encrypt raw sensor and radar streams with microsecond latency.',
      electricalSpecs: [{ key: 'Input Voltage', value: '9 - 36 VDC Wide Range Industrial' }, { key: 'Power Consumption', value: '8 Watts typical' }],
      physicalSpecs: [{ key: 'PCB Form Factor', value: 'PC/104-Plus or Custom Stand-off Mounting' }],
      environmentalSpecs: [{ key: 'Shock & Vibration', value: 'Tested to MIL-STD-810G Method 514.6' }],
    },
  },
  {
    id: 'gf-field-repeater',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte GF-TFR-300 Taktiksel Saha Tekrarlayıcı',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Taktiksel Saha Tekrarlayıcı',
    categoryEn: 'Tactical Field Repeater',
    summaryTr:
      'Güneş enerjisi ve batarya ile çalışan, dağlık ve kör noktalarda kablosuz sinyali ve radar verisini 30 km öteye aktaran otonom sahra tekrarlayıcısı.',
    summaryEn:
      'Autonomous solar and battery-powered tactical relay extending line-of-sight wireless and sensor telemetry across mountains and valleys.',
    specs: [
      { labelTr: 'Otonom Çalışma', labelEn: 'Autonomy', val: 'Entegre Güneş Paneli ile 30 Gün Kesintisiz Çalışma' },
      { labelTr: 'Frekans Köprüsü', labelEn: 'RF Bridging', val: '2.4 GHz, 5 GHz ve UHF/VHF Çift Yönlü Köprüleme' },
      { labelTr: 'Kasa Tipi', labelEn: 'Enclosure', val: 'Askeri Saha Tripod Ayaklı IP68 Hermetik Gövde' },
      { labelTr: 'Kurulum Hızı', labelEn: 'Setup Time', val: 'Tek Personel ile 5 Dakikada Sahada Kurulum' },
    ],
    compliance: ['MIL-STD-810G', 'IP68 Su Altı Dayanımı', 'TSE Onaylı'],
    datasheetContent: {
      partNumber: 'GF-TFR-300-SOLAR',
      version: 'Rev 1.6',
      descriptionTr:
        'Elektrik veya fiber altyapısının olmadığı sınır hatlarında, boru hattı vana istasyonlarında ve afet bölgelerinde haberleşme menzilini anında artıran otonom röle istasyonudur.',
      descriptionEn:
        'Autonomous tactical repeater bridging communications across remote terrain without external utility connections.',
      technicalOverviewTr:
        'Dahili batarya yönetim sistemi ve gece görüşüne engel olmayan düşük termal iz tasarımı ile sınır güvenliğinde tercih edilir.',
      technicalOverviewEn:
        'Features intelligent low-power thermal sleep states and durable battery management for harsh winter conditions.',
      electricalSpecs: [{ key: 'Battery', value: '400 Wh LiFePO4 internal pack + 100W Foldable Solar Panel' }],
      physicalSpecs: [{ key: 'Weight', value: '11.2 kg with tactical tripod' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-35°C to +65°C' }],
    },
  },
  {
    id: 'gf-itil-cobit-audit',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte ITIL / COBIT / ISO 27001 Kurumsal Danışmanlık',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Stratejik BT Yönetişimi & Denetim',
    categoryEn: 'IT Governance & Strategic Advisory',
    summaryTr:
      'C-seviye yöneticiler için bağımsız kurumsal mimari tasarımı, ERP değerlendirme denetimleri, ISO 27001 BGYS kurulumu ve uluslararası teknoloji tedarik danışmanlığı.',
    summaryEn:
      'Senior executive enterprise architecture, ERP vendor audit, ISO 27001 ISMS certification, and international procurement advisory.',
    specs: [
      { labelTr: 'Metodolojiler', labelEn: 'Frameworks', val: 'TOGAF 10, COBIT 2019, ITIL v4, ISO 27001, CMMI' },
      { labelTr: 'Danışman Kadrosu', labelEn: 'Team', val: 'Sertifikalı Baş Denetçiler ve Kurumsal Mimarlar' },
      { labelTr: 'Kapsam', labelEn: 'Scope', val: 'Türkiye, EMEA, Körfez Bölgesi ve Orta Asya' },
      { labelTr: 'Çıktılar', labelEn: 'Deliverables', val: 'Mevcut Durum Analizi, Şartname (RFP), Güvenlik Politikaları' },
    ],
    compliance: ['ISO 27001', 'ISO 9001', 'ISO 10002', 'TSE-HYB Belgesi'],
    datasheetContent: {
      partNumber: 'GF-CONSULTING-PRACTICE',
      version: '2026 Edition',
      descriptionTr:
        'Teknoloji yatırımlarının kurumsal hedeflerle tam örtüşmesini sağlayan, sağlayıcıdan bağımsız tarafsız mühendislik ve stratejik danışmanlık hizmet paketi.',
      descriptionEn:
        'Vendor-neutral strategic consulting aligning technology investments with business objectives and regulatory compliance.',
      technicalOverviewTr:
        'ERP projelerinden siber güvenlik omurgalarına kadar milyonlarca dolarlık ihalelerin teknik şartnamelerini oluşturur ve sağlayıcı tekliflerini denetler.',
      technicalOverviewEn:
        'Drafts technical tender specifications and audits vendor RFP submissions for multi-million-dollar programs.',
      electricalSpecs: [{ key: 'Methodology', value: 'TOGAF 10 Enterprise Continuum' }],
      physicalSpecs: [{ key: 'Practice Locations', value: 'İstanbul Mecidiyeköy Genel Merkez' }],
      environmentalSpecs: [{ key: 'Compliance Rate', value: '100% Audit Success Rate' }],
    },
  },
  {
    id: 'gf-cyber-procurement',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Uluslararası İleri Teknoloji Tedarik & RFP Danışmanlığı',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Teknoloji Tedariki & Şartname',
    categoryEn: 'Procurement & RFP Advisory',
    summaryTr:
      'Yabancı ileri teknoloji donanımlarının ithalatı, ITAR/ihracat kontrolleri, kanal distribütörlüğü ve teknik şartname oluşturma süreçlerinde uzman danışmanlık.',
    summaryEn:
      'Comprehensive procurement advisory navigating ITAR export controls, cross-border high-tech vendor evaluations, and technical tender drafting.',
    specs: [
      { labelTr: 'Hizmet Kapsamı', labelEn: 'Scope', val: 'Uluslararası Teknoloji Tedariki, İhracat Kontrolü & ITAR' },
      { labelTr: 'Şartname Desteği', labelEn: 'Tender Prep', val: 'Devlet ve Kamu İhaleleri İçin Ayrıntılı Teknik Şartname' },
      { labelTr: 'Kıyaslama Testleri', labelEn: 'Benchmarking', val: 'POC (Proof of Concept) Laboratuvar Karşılaştırma Testleri' },
      { labelTr: 'Sözleşme & SLA', labelEn: 'SLA Governance', val: 'Çok Yıllık Üretici Destek ve Garanti Yönetimi' },
    ],
    compliance: ['ITAR / EAR Advisory', 'Global Procurement Standards', 'TSE-HYB Akredite'],
    datasheetContent: {
      partNumber: 'GF-PROCURE-RFP-SUITE',
      version: '2026 Procurement Guide',
      descriptionTr:
        'Kamu kurumları ve büyük holdinglerin yurtdışından temin edeceği kritik güvenlik ve iletişim donanımlarının en doğru şartnamelerle, en uygun maliyetle ve yasal ihracat izinleriyle alınmasını garanti eder.',
      descriptionEn:
        'Ensures strategic procurement programs for critical security and telecom hardware comply with export controls while minimizing total cost of ownership.',
      technicalOverviewTr:
        'Üreticilerin iddialarını laboratuvar ortamında bağımsız stres testlerine tabi tutarak kurumların hatalı teknoloji yatırımı yapmasını önler.',
      technicalOverviewEn:
        'Subject vendor claims to rigorous in-house lab stress testing before final procurement decisions are enacted.',
      electricalSpecs: [{ key: 'Standards Audited', value: 'NATO, FIPS, Common Criteria, ETSI' }],
      physicalSpecs: [{ key: 'Operations', value: 'İstanbul - Ankara - EMEA Bölge Ağı' }],
      environmentalSpecs: [{ key: 'Vendor Independence', value: '100% Independent Auditor' }],
    },
  },
  {
    id: 'gf-secure-hosting-pro',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Kurumsal Güvenli Web Hosting (Web Pro & Max)',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Güvenli Kurumsal Barındırma',
    categoryEn: 'Secure Enterprise Web Hosting',
    summaryTr:
      'DDoS korumalı, donanımsal güvenlik duvarı ve SSL hızlandırıcısı ile korunan, kurumsal şirketler ve kamu portalları için yüksek erişilebilirlikli barındırma.',
    summaryEn:
      'DDoS-shielded, hardware firewall and SSL-accelerated enterprise hosting infrastructure for high-traffic corporate portals.',
    specs: [
      { labelTr: 'Tier Standardı', labelEn: 'Data Center Tier', val: 'Tier III+ Sertifikalı İstanbul Veri Merkezleri' },
      { labelTr: 'DDoS Koruması', labelEn: 'DDoS Defense', val: '100+ Gbps Donanımsal Hat Seviyesinde Saldırı Filtreleme' },
      { labelTr: 'Yedekleme', labelEn: 'Backup SLA', val: 'Günlük Otomatik Coğrafi Yedekleme (RPO < 1 saat)' },
      { labelTr: 'Erişilebilirlik', labelEn: 'Uptime SLA', val: '%99.99 Donanımsal Yüksek Erişilebilirlik Garantisi' },
    ],
    compliance: ['ISO 27001', 'ISO 9001', 'TSE-HYB Belgesi'],
    datasheetContent: {
      partNumber: 'GF-HOSTING-ENTERPRISE-PRO',
      version: '2026 Cloud Specs',
      descriptionTr:
        'globalforte.com üzerinde de sunulan Web Basic, Web Standard, Web Pro ve Web Max paketleriyle kurumsal web sitelerinin siber saldırılardan etkilenmeden 7/24 yayında kalmasını sağlar.',
      descriptionEn:
        'High-security web hosting tiers (Web Basic, Web Standard, Web Pro, Web Max) engineered to defend web presences against distributed denial-of-service threats.',
      technicalOverviewTr:
        'Her bir sunucu SafeNet ve Fortinet güvenlik duvarları arkasında izole edilmiştir, kötü niyetli bot trafiğini yapay zeka ile süzer.',
      technicalOverviewEn:
        'Hardware-isolated web clusters safeguarded by perimeter firewalls with automated bot filtering.',
      electricalSpecs: [{ key: 'Bandwidth', value: 'Unmetered gigabit redundant uplink' }],
      physicalSpecs: [{ key: 'Locations', value: 'İstanbul (Birincil) & Ankara (Felaket Kurtarma)' }],
      environmentalSpecs: [{ key: 'Power', value: 'N+1 redundant UPS and diesel generators' }],
    },
  },
  {
    id: 'gf-systems-integration',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Altyapı Sistem Entegrasyonu & Ağ Mühendisliği',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Sistem Entegrasyonu & Tasarım',
    categoryEn: 'Systems Infrastructure Integration',
    summaryTr:
      'Büyük ölçekli veri merkezleri, kampüs ağları ve kurumsal bilişim omurgalarının sıfırdan projelendirilmesi, kablolanması ve devreye alınması.',
    summaryEn:
      'Turnkey physical and logical infrastructure engineering for large-scale enterprise data centers and campus backbones.',
    specs: [
      { labelTr: 'Hizmet Kapsamı', labelEn: 'Scope', val: 'Ağ Tasarımı, Yapısal Kablolama, Sunucu ve Depolama Kurulumu' },
      { labelTr: 'Uzmanlık', labelEn: 'Specialty', val: 'Cisco, Juniper, HPE, Dell EMC ve SAN/NAS Mimarisi' },
      { labelTr: 'Sertifikalı Kadro', labelEn: 'Engineers', val: 'CCIE, CCNP, CISSP ve PMP Sertifikalı Mühendisler' },
      { labelTr: 'Devreye Alma', labelEn: 'Turnkey SLA', val: '7/24 Kesintisiz Canlıya Geçiş ve Operasyon Desteği' },
    ],
    compliance: ['TSE Hizmet Yeterlilik', 'ISO 9001', 'ISO 27001'],
    datasheetContent: {
      partNumber: 'GF-SYS-INTEGRATION-CORE',
      version: '2026 Practice',
      descriptionTr:
        'globalforte.com sistem entegrasyonu bölümünde yer alan Kurumsal Altyapı Mühendisliği (Enterprise Infrastructure Engineering) hizmetlerinin ana paketidir.',
      descriptionEn:
        'Core enterprise systems integration practice covering physical data center design, switching, routing, and high-availability SAN fabrics.',
      technicalOverviewTr:
        'Tasarım aşamasından anahtar teslim devreye almaya kadar tüm adımlar uluslararası ISO 9001 kalite süreçlerine göre kayıt altına alınır.',
      technicalOverviewEn:
        'Structured engineering workflows ensure full traceability from initial architectural blueprint to final operational handover.',
      electricalSpecs: [{ key: 'Power Audit', value: 'Data center power load and thermal cooling analysis' }],
      physicalSpecs: [{ key: 'Deliverables', value: 'As-built documentation, network topology schematics, SLA manuals' }],
      environmentalSpecs: [{ key: 'Warranty', value: 'Multi-year on-site engineering maintenance agreement' }],
    },
  },

  // ==========================================
  // SAFENET (THALES) ADDITIONAL PRODUCTS
  // ==========================================
  {
    id: 'safenet-luna-xml',
    imageUrl: '/images/partners/safenet/luna-sa.jpg',
    name: 'SafeNet Luna XML Network Security Module',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Donanımsal Güvenlik Modülü (HSM)',
    categoryEn: 'Hardware Security Module (HSM)',
    summaryTr:
      'XML ve Web servisleri trafiğinde dijital imzalama, doğrulama ve şifreleme işlemlerini donanımsal olarak hızlandıran ve anahtarları koruyan özel HSM.',
    summaryEn:
      'Specialized network security appliance accelerating XML signing, verification, and encryption for high-volume enterprise web service gateways.',
    specs: [
      { labelTr: 'Performans', labelEn: 'Performance', val: '5.000 XML TPS & WSS-Security Donanım Hızlandırma' },
      { labelTr: 'Sertifikasyon', labelEn: 'Certification', val: 'FIPS 140-2 Level 3 & Common Criteria EAL4+' },
      { labelTr: 'Standartlar', labelEn: 'Standards', val: 'XML Digital Signature, XML Encryption, SAML 2.0' },
      { labelTr: 'Ağ Arayüzü', labelEn: 'Interfaces', val: 'Çift Yedekli 1GbE Bakır / Fiber Port' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'CC EAL4+', 'W3C XML Signature', 'OASIS SAML'],
    datasheetContent: {
      partNumber: 'SF-LUNA-XML-SEC',
      version: 'Rev 5.4 Datasheet',
      descriptionTr:
        'globalforte.com SafeNet ürün ailesinde yer alan Luna XML, SOA ve e-Devlet servislerinde kritik XML mesajlarının bütünlüğünü donanımsal seviyede korur.',
      descriptionEn:
        'Hardware security module designed for enterprise service-oriented architectures, banking middleware, and high-assurance web transactions.',
      technicalOverviewTr:
        'Kriptografik anahtarları kurcalamaya dayanıklı donanım içinde saklar ve CPU üzerindeki XML ayrıştırma yükünü tamamen üstlenir.',
      technicalOverviewEn:
        'Offloads XML-DSig and XML-Enc operations from application servers into a tamper-reactive hardware crypto boundary.',
      electricalSpecs: [{ key: 'Power Supply', value: '100-240V AC Redundant 450W Hot-Swap' }],
      physicalSpecs: [{ key: 'Dimensions', value: '1U Rackmount, 440 x 44 x 520 mm' }],
      environmentalSpecs: [{ key: 'Temperature', value: '0°C to 45°C operating' }],
    },
  },
  {
    id: 'safenet-luna-sp',
    name: 'SafeNet Luna SP Güvenli Uygulama Barındırma HSM',
    imageUrl: '/images/partners/safenet/luna-sp.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Donanımsal Güvenlik Modülü (HSM)',
    categoryEn: 'Hardware Security Module (HSM)',
    summaryTr:
      'Özel Java uygulamalarını ve hassas iş mantığını doğrudan FIPS 140-2 Seviye 3 kriptografik sınır içerisinde çalıştıran güvenli uygulama sunuculu HSM.',
    summaryEn:
      'FIPS 140-2 Level 3 secure application hosting HSM allowing custom Java business logic to execute inside the tamper-resistant hardware boundary.',
    specs: [
      { labelTr: 'Çalışma Ortamı', labelEn: 'Runtime Env', val: 'Yalıtılmış JVM (Java Virtual Machine) Güvenli Sandbox' },
      { labelTr: 'Kripto Seviyesi', labelEn: 'Security Level', val: 'FIPS 140-2 Level 3 Fiziksel Kurcalama Koruması' },
      { labelTr: 'Algoritma Desteği', labelEn: 'Algorithms', val: 'RSA 4096, ECC, AES-256, SHA-2 & Özel Java Kütüphaneleri' },
      { labelTr: 'Ağ Bağlantısı', labelEn: 'Network', val: '2x 1000Base-T Ethernet Portları' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria', 'PCI DSS', 'Java EE'],
    datasheetContent: {
      partNumber: 'SF-LUNA-SP-HOST',
      version: 'Rev 4.1 Datasheet',
      descriptionTr:
        'Finansal algoritmalar, lisans kontrol mekanizmaları ve hassas patentli kodların çalınmasını önlemek için kodu donanım içine hapseden devrimsel HSM.',
      descriptionEn:
        'Executes custom code directly inside the crypto module to prevent reverse-engineering and host-memory scraping.',
      technicalOverviewTr:
        'Anahtarlar hiçbir zaman belleğe çıkmaz; veri HSM içine gelir, içeride işlenir ve imzalanarak dışarı aktarılır.',
      technicalOverviewEn:
        'Ensures cryptographic operations and proprietary algorithm execution never leak into unprotected host memory.',
      electricalSpecs: [{ key: 'Input', value: 'Dual 350W AC 110/220V' }],
      physicalSpecs: [{ key: 'Chassis', value: '1U Standard 19-inch Rackmount' }],
      environmentalSpecs: [{ key: 'Humidity', value: '10% to 90% non-condensing' }],
    },
  },
  {
    id: 'safenet-luna-sx',
    name: 'SafeNet Luna SX Split-Key Çok Operatörlü HSM',
    imageUrl: '/images/partners/safenet/luna-sx.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Donanımsal Güvenlik Modülü (HSM)',
    categoryEn: 'Hardware Security Module (HSM)',
    summaryTr:
      'Yüksek güvenlikli kamu ve askeri sistemler için M-of-N çoklu yetkilendirme ve bölünmüş anahtar yönetimi sunan fiziksel anahtar modülü.',
    summaryEn:
      'Multi-operator split-key hardware security module engineered for defense and ultra-secure national root CAs requiring M-of-N quorum.',
    specs: [
      { labelTr: 'Yetki Yönetimi', labelEn: 'Quorum Policy', val: 'M-of-N Ayrık Anahtar Çoklu Operatör Doğrulama' },
      { labelTr: 'Güvenlik Standardı', labelEn: 'Standards', val: 'FIPS 140-2 Seviye 3 Kurcalama Tespit Sensörleri' },
      { labelTr: 'Anahtar Kapasitesi', labelEn: 'Key Storage', val: '100.000+ Asimetrik / Simetrik Anahtar Yuvası' },
      { labelTr: 'Yedekleme', labelEn: 'Backup', val: 'Donanımsal Klonlama Kartuşu & Akıllı Kart' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'NATO Secret', 'Common Criteria EAL4+'],
    datasheetContent: {
      partNumber: 'SF-LUNA-SX-CORE',
      version: 'Rev 3.8 Datasheet',
      descriptionTr:
        'Ulusal kök sertifika otoriteleri ve nükleer/savunma kumanda merkezlerinde kritik anahtarları tek bir kişinin açmasını imkansız kılan donanım.',
      descriptionEn:
        'Ultra-high assurance split-key HSM enforcing strict multi-person integrity for root key activation and certificate authority maintenance.',
      technicalOverviewTr:
        'Kök anahtarlar N parçaya bölünür, M operatör bir araya gelmeden anahtar kullanılamaz.',
      technicalOverviewEn:
        'Splits master crypto secrets into mathematical shards using Shamir Secret Sharing algorithm.',
      electricalSpecs: [{ key: 'Power', value: '100-240V AC, 50-60 Hz dual supply' }],
      physicalSpecs: [{ key: 'Rack', value: '1U standard steel chassis with tamper mesh' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '5°C to 40°C' }],
    },
  },
  {
    id: 'safenet-protectserver-internal',
    imageUrl: '/images/partners/safenet/protect_s_img.png',
    name: 'SafeNet ProtectServer Internal Express PCIe HSM Kartı',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Donanımsal Güvenlik Modülü (HSM)',
    categoryEn: 'Hardware Security Module (HSM)',
    summaryTr:
      'Sunucu ana kartındaki PCIe yuvasına takılan, yüksek hızlı yerel kriptografik işlemci ve donanımsal anahtar koruma kartı.',
    summaryEn:
      'PCIe embedded cryptographic coprocessor providing FIPS 140-2 Level 3 key storage and ultra-low latency hardware acceleration.',
    specs: [
      { labelTr: 'Form Faktörü', labelEn: 'Form Factor', val: 'Düşük Profil PCIe x4 Donanım Kartı' },
      { labelTr: 'Kripto Hızı', labelEn: 'Throughput', val: '1.500 RSA-2048 İmza / saniye' },
      { labelTr: 'Güvenlik Seviyesi', labelEn: 'Certification', val: 'FIPS 140-2 Seviye 3 Onaylı Donanım Zırhı' },
      { labelTr: 'Yazılım API', labelEn: 'APIs', val: 'PKCS#11, Microsoft CAPI/CNG, OpenSSL, JCE' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'PCIe 2.0/3.0', 'RoHS', 'FCC Part 15'],
    datasheetContent: {
      partNumber: 'SF-PSI-EXP-500',
      version: 'Oct 31 2012 Web PB',
      descriptionTr:
        'globalforte.com ProtectServer broşürlerinde yer alan, veri tabanları ve e-ticaret sunucularının içine doğrudan entegre edilen PCIe HSM kartı.',
      descriptionEn:
        'Direct bus-attached HSM delivering hardware cryptographic acceleration with zero network transmission overhead.',
      technicalOverviewTr:
        'Sunucu anakartında PCI Express hattı üzerinden sıfır ağ gecikmesiyle anahtar işlemlerini yürütür.',
      technicalOverviewEn:
        'Embedded tamper-reactive cryptographic accelerator for high-frequency trading and high-volume local batch signing.',
      electricalSpecs: [{ key: 'Power Consumption', value: '15W via PCIe slot' }],
      physicalSpecs: [{ key: 'Form Factor', value: 'Low profile PCIe standard card' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '0°C to 50°C' }],
    },
  },
  {
    id: 'safenet-viewpin',
    name: 'SafeNet ViewPIN+ Finansal ATM & POS PIN Doğrulama Cihazı',
    imageUrl: '/images/partners/safenet/viewpin.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Ödeme ve Finansal Güvenlik',
    categoryEn: 'Payment HSM & PIN Security',
    summaryTr:
      'Bankacılık ve kartlı ödeme sistemlerinde şifreli PIN bloklarının (PIN Block Format 0-4) güvenli çevirisi ve doğrulanması için özel donanım.',
    summaryEn:
      'Dedicated financial PIN verification security module protecting PIN mailers, ATM network switching, and POS transaction decryption.',
    specs: [
      { labelTr: 'Ödeme Uyumluluğu', labelEn: 'Payment Compliance', val: 'PCI PTS HSM, VISA, Mastercard, EMV Level 1/2' },
      { labelTr: 'PIN Fonksiyonları', labelEn: 'PIN Ops', val: 'PIN Translation, Offset Verification, DUKPT & Master/Session' },
      { labelTr: 'İşlem Kapasitesi', labelEn: 'Transaction TPS', val: '1.200 Finansal PIN İşlemi / saniye' },
      { labelTr: 'Anahtar Yönetimi', labelEn: 'Key Management', val: 'ZMK, TMK, PEK, PVK ve CVK Otomatik Rotasyonu' },
    ],
    compliance: ['PCI PTS HSM v2', 'ANSI X9.8', 'ISO 9564', 'FIPS 140-2 Level 3'],
    datasheetContent: {
      partNumber: 'SF-VIEWPIN-PLUS',
      version: 'Rev 4.0 Datasheet',
      descriptionTr:
        'globalforte.com SafeNet finans ürünleri kataloğunda listelenen, ATM ve POS işlemlerinde müşteri PIN kodlarını donanımda koruyan modül.',
      descriptionEn:
        'Financial cryptographic module protecting customer card PINs across core banking switches, ATM controllers, and payment gateways.',
      technicalOverviewTr:
        'Hassas PIN blokları cihaz içinde çözülür ve diğer banka anahtarıyla yeniden şifrelenir; açık PIN asla cihaz dışına çıkmaz.',
      technicalOverviewEn:
        'Provides secure PIN translation between ATM networks and issuing host systems under PCI strict guidance.',
      electricalSpecs: [{ key: 'Dual AC', value: '100-240 VAC 50-60Hz' }],
      physicalSpecs: [{ key: 'Form', value: '19-inch 1U Rack Enclosure' }],
      environmentalSpecs: [{ key: 'Temp', value: '0°C to 40°C' }],
    },
  },
  {
    id: 'safenet-sam',
    imageUrl: '/images/partners/safenet/smc.gif',
    name: 'SafeNet Authentication Manager (SAM) Kurumsal Kimlik Sunucusu',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Çok Faktörlü Kimlik Doğrulama',
    categoryEn: 'Multi-Factor Authentication & Management',
    summaryTr:
      'Tüm kurumsal eToken, akıllı kart, OTP cihazları ve mobil kimlik doğrulayıcıların merkezi yaşam döngüsü ve Active Directory entegrasyonu.',
    summaryEn:
      'Comprehensive authentication management platform providing centralized administration of OTP tokens, PKI smart cards, and mobile authenticators.',
    specs: [
      { labelTr: 'Kullanıcı Kapasitesi', labelEn: 'Capacity', val: '100.000+ Eşzamanlı Kurumsal Kullanıcı Desteği' },
      { labelTr: 'Dizin Entegrasyonu', labelEn: 'Directory Sync', val: 'Microsoft Active Directory, LDAP, RADIUS, SAML' },
      { labelTr: 'Token Yönetimi', labelEn: 'Token Lifecycle', val: 'Uzaktan PIN Sıfırlama, Sertifika Yenileme, Otomatik İhraç' },
      { labelTr: 'Yüksek Erişilebilirlik', labelEn: 'HA Cluster', val: 'Aktif-Aktif Coğrafi Yük Dengeleme ve Replikasyon' },
    ],
    compliance: ['FIPS 140-2 Level 2/3', 'Active Directory Certified', 'RADIUS RFC 2865', 'OATH'],
    datasheetContent: {
      partNumber: 'SF-SAM-SERVER-V13',
      version: 'Jan 31 2013 Web PB',
      descriptionTr:
        'globalforte.com resmi ürün listesinde yer alan SafeNet Authentication Manager, kurumsal şirketlerde 2FA kimlik altyapısının kalbidir.',
      descriptionEn:
        'Central enterprise server platform orchestrating identity tokens, smart card provisioning, and secure remote VPN authentication.',
      technicalOverviewTr:
        'Kullanıcı şifre unutma ve token kaybetme vakalarında self-servis portalı ile BT destek maliyetlerini %70 oranında düşürür.',
      technicalOverviewEn:
        'Reduces IT operational overhead through automated token enrollment, self-service PIN unlocks, and automated revocation.',
      electricalSpecs: [{ key: 'Deployment', value: 'Windows Server 2019/2022, SQL Server backend' }],
      physicalSpecs: [{ key: 'Client Support', value: 'Windows 10/11, macOS, Linux, iOS, Android' }],
      environmentalSpecs: [{ key: 'High Availability', value: 'Multi-site active cluster' }],
    },
  },
  {
    id: 'safenet-safeword-2008',
    imageUrl: '/images/partners/safenet/safeword-2008.jpg',
    name: 'SafeNet SafeWord 2008 Çift Faktörlü Kimlik Doğrulama Çözümü',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Çok Faktörlü Kimlik Doğrulama',
    categoryEn: 'Multi-Factor Authentication',
    summaryTr:
      'KOBİ ve büyük kurumlar için VPN, Outlook Web Access ve Citrix oturumlarında güvenli tek kullanımlık şifre (OTP) doğrulama sistemi.',
    summaryEn:
      'Turnkey two-factor authentication platform designed for seamless remote access protection across VPNs, OWA, and virtual desktops.',
    specs: [
      { labelTr: 'Entegrasyon', labelEn: 'Integration', val: 'Cisco, Juniper, Check Point, Citrix, Microsoft OWA' },
      { labelTr: 'Protokol', labelEn: 'Protocols', val: 'RADIUS, MS-CHAPv2, TACACS+, Web Agent' },
      { labelTr: 'Token Desteği', labelEn: 'Tokens', val: 'SafeNet Gold, eToken PASS, SafeWord Alpine' },
      { labelTr: 'Kurulum', labelEn: 'Deployment', val: 'Hızlı Kurulum Sihirbazı & AD Schema Entegrasyonu' },
    ],
    compliance: ['OATH TOTP/HOTP', 'Microsoft Gold Certified', 'FIPS 140-2'],
    datasheetContent: {
      partNumber: 'SF-SAFEWORD-2008-PB',
      version: 'Rev 8.0 Datasheet',
      descriptionTr:
        'globalforte.com ürün listesinde yer alan, kurumların uzak masaüstü ve VPN bağlantılarını saldırganlara karşı kalkanlayan 2FA sistemi.',
      descriptionEn:
        'Proven remote access security solution providing robust OTP authentication for branch offices and distributed workforces.',
      technicalOverviewTr:
        'Active Directory ile doğrudan konuşarak ikinci bir veri tabanı yönetimi gereksinimini ortadan kaldırır.',
      technicalOverviewEn:
        'Integrates natively with Active Directory without requiring database schema modifications.',
      electricalSpecs: [{ key: 'Platform', value: 'Windows Server, Hyper-V, VMware ESXi' }],
      physicalSpecs: [{ key: 'Administration', value: 'MMC Snap-in & Web Management Console' }],
      environmentalSpecs: [{ key: 'Redundancy', value: 'Primary and secondary RADIUS fallback' }],
    },
  },
  {
    id: 'safenet-etoken-pass',
    name: 'SafeNet eToken PASS Kompakt Donanımsal OTP Tokenı',
    imageUrl: '/images/partners/safenet/etoken-pass.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & Smartcard',
    summaryTr:
      'Tek bir tuşla zamana dayalı (TOTP) veya olaya dayalı (HOTP) tek kullanımlık şifre üreten, su geçirmez kompakt anahtarlık tipi OTP cihazı.',
    summaryEn:
      'Compact, battery-powered one-time password hardware authenticator generating secure time-sync or event-sync dynamic passcodes.',
    specs: [
      { labelTr: 'Ekran', labelEn: 'Display', val: 'Yüksek Kontrastlı 6 veya 8 Haneli LCD Ekran' },
      { labelTr: 'Pil Ömrü', labelEn: 'Battery Life', val: '5 Yıl / 20.000 Şifre Üretimi (Dahili Lityum Pil)' },
      { labelTr: 'Algoritma', labelEn: 'Algorithm', val: 'OATH Event-based (HOTP) ve OATH Time-based (TOTP)' },
      { labelTr: 'Fiziksel Zırh', labelEn: 'Casing', val: 'Ultrasonik Kaynaklı Su ve Toz Geçirmez Gövde (IP67)' },
    ],
    compliance: ['OATH Compliant', 'IP67 Su Geçirmezlik', 'CE', 'RoHS', 'WEEE'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-PASS-HW',
      version: 'Web Product Brief',
      descriptionTr:
        'globalforte.com indirme merkezinde resmi teknik föyü yer alan, bankacılık ve kurumsal VPN kullanıcıları için en güvenilir OTP anahtarlığı.',
      descriptionEn:
        'Standard hardware token distributed by Global Forte for banks, public institutions, and remote workers requiring tamper-proof passcodes.',
      technicalOverviewTr:
        'Gövdesi açıldığında dahili mikroçip hafızası sıfırlanır, tohum anahtarları hiçbir şekilde dışarı okunamaz.',
      technicalOverviewEn:
        'Tamper-evident ultrasonic casing permanently disables cryptographic registers if physical intrusion is attempted.',
      electricalSpecs: [{ key: 'Battery', value: 'Hermetically sealed Lithium cell' }],
      physicalSpecs: [{ key: 'Dimensions', value: '60 x 27 x 10 mm, 14 grams' }],
      environmentalSpecs: [{ key: 'Waterproof', value: 'Submersible to 1 meter (IP67)' }],
    },
  },
  {
    id: 'safenet-etoken-3500',
    name: 'SafeNet eToken 3500 Optik Okuyuculu OTP Tokenı',
    imageUrl: '/images/partners/safenet/etoken-3500.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & Smartcard',
    summaryTr:
      'Bankacılıkta Ortadaki Adam (Man-in-the-Middle) saldırılarını önlemek için ekrandaki optik deseni okuyarak işlem imzalayan OTP cihazı.',
    summaryEn:
      'Optical pattern scanning OTP authenticator designed to eliminate Man-in-the-Browser and banking Trojan transaction tampering.',
    specs: [
      { labelTr: 'Optik Sensör', labelEn: 'Sensor', val: 'Ekrandan Yanıp Sönen Deseni Okuyan Dahili Optik Sensör' },
      { labelTr: 'İşlem İmzalama', labelEn: 'Signing', val: 'İşlem Detayını Ekranda Doğrulama (What-You-See-Is-What-You-Sign)' },
      { labelTr: 'Algoritmalar', labelEn: 'Crypto', val: 'AES-128, 3DES, OATH HOTP/OCRA Standartları' },
      { labelTr: 'Tuş Takımı', labelEn: 'Keypad', val: '12 Tuşlu PIN Korumalı Alfa-Nümerik Tuş Takımı' },
    ],
    compliance: ['OATH OCRA RFC 6287', 'CE', 'RoHS', 'EMV CAP Uyumluluğu'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-3500-OPT',
      version: 'Web PB Datasheet',
      descriptionTr:
        'İnternet bankacılığı havalelerinde transfer tutarını ve alıcı hesap numarasını token ekranında onaylatarak transfer hırsızlığını engeller.',
      descriptionEn:
        'Transaction data signing device providing independent second-channel verification for high-value corporate treasury transfers.',
      technicalOverviewTr:
        'İstemci ekranında yanıp sönen barkod benzeri optik sinyali okur, kullanıcı PIN girip onayladığında tek kullanımlık imza üretir.',
      technicalOverviewEn:
        'Optical light sensors capture transaction hash from computer screen; on-device display confirms IBAN and amount before signing.',
      electricalSpecs: [{ key: 'Power', value: 'Replaceable CR2032 button batteries' }],
      physicalSpecs: [{ key: 'Display', value: '8-character alphanumeric dot-matrix' }],
      environmentalSpecs: [{ key: 'Operating', value: '0°C to 50°C' }],
    },
  },
  {
    id: 'safenet-gold',
    name: 'SafeNet GOLD Algoritmik Meydan Okuma-Yanıt Tokenı',
    imageUrl: '/images/partners/safenet/gold.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & Smartcard',
    summaryTr:
      'PIN korumalı, numerik klavyeli ve meydan okuma-yanıt (Challenge/Response) mekanizmasıyla çalışan gelişmiş kurumsal güvenlik tokenı.',
    summaryEn:
      'PIN-protected challenge-response hardware authenticator with numeric keypad for high-privilege administrator access.',
    specs: [
      { labelTr: 'Kimlik Doğrulama', labelEn: 'Auth Modes', val: 'OTP, Challenge/Response ve Dijital İşlem İmzası' },
      { labelTr: 'Tuş Takımı', labelEn: 'Keypad', val: 'PIN Korumalı 12 Tuşlu Hassas Membran Klavye' },
      { labelTr: 'Pil Dayanımı', labelEn: 'Battery', val: '7 Yıl Bekleme Süresi / 30.000 İşlem' },
      { labelTr: 'Sertifikasyon', labelEn: 'Standards', val: 'FIPS Uyumlu Kriptografik Rastgele Sayı Üreteci' },
    ],
    compliance: ['FIPS 140-2', 'OATH', 'CE', 'RoHS'],
    datasheetContent: {
      partNumber: 'SF-GOLD-TOKEN-BRIEF',
      version: 'SafeNet GOLD PB',
      descriptionTr:
        'globalforte.com broşürlerinde sunulan SafeNet GOLD, veri merkezi yöneticileri ve yüksek yetkili sistem mühendisleri için tasarlanmıştır.',
      descriptionEn:
        'Rugged PIN-secured challenge-response token enforcing non-repudiable access control for server clusters and scada systems.',
      technicalOverviewTr:
        'Tokena erişmek için önce kullanıcının kendi belirlediği PIN girilmelidir; hatalı PIN girişlerinde kendini kilitler.',
      technicalOverviewEn:
        'User PIN is verified locally on the token before any OTP or response code is generated, preventing token-theft misuse.',
      electricalSpecs: [{ key: 'Battery', value: 'Industrial lithium cell' }],
      physicalSpecs: [{ key: 'Dimensions', value: '72 x 35 x 12 mm' }],
      environmentalSpecs: [{ key: 'Operating Range', value: '-10°C to +50°C' }],
    },
  },
  {
    id: 'safenet-etoken-virtual',
    name: 'SafeNet eToken Virtual Yazılımsal Akıllı Kart',
    imageUrl: '/images/partners/safenet/etoken-virtual.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Yazılımsal Kimlik Doğrulama',
    categoryEn: 'Software Authentication & PKI',
    summaryTr:
      'Fiziksel donanıma ihtiyaç duymadan bilgisayarın güvenli alanında donanımsal akıllı kart gibi davranan yazılımsal PKI sertifika deposu.',
    summaryEn:
      'Virtual smart card software emulator delivering full PKI cryptographic capabilities without requiring physical hardware deployment.',
    specs: [
      { labelTr: 'İşletim Sistemi', labelEn: 'OS Support', val: 'Windows 10/11, Windows Server, sanal masaüstü (VDI)' },
      { labelTr: 'Kripto Algoritmaları', labelEn: 'Algorithms', val: 'RSA 2048/4096, AES-256, SHA-256, PKCS#11' },
      { labelTr: 'Merkezi Yönetim', labelEn: 'Management', val: 'SafeNet Authentication Manager (SAM) ile Anında Dağıtım' },
      { labelTr: 'Maliyet Avantajı', labelEn: 'Benefit', val: 'Sıfır Donanım Gönderim Maliyeti & Anında Uzaktan Etkinleştirme' },
    ],
    compliance: ['Microsoft Smart Card Minidriver', 'PKCS#11 v2.20', 'FIPS 140-2 Level 1'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-VIRTUAL-SW',
      version: 'Web PB Datasheet',
      descriptionTr:
        'Donanım taşımak istemeyen veya evden çalışan personel için güvenli dijital imza ve VPN girişi sağlayan sanal akıllı kart yazılımı.',
      descriptionEn:
        'Cost-effective virtual smartcard enabling distributed workforces to access corporate PKI services from remote endpoints.',
      technicalOverviewTr:
        'İstemci bilgisayarda Windows şifreleme motoruyla korunan güvenli bir bellek konteyneri açarak sertifikaları izole eder.',
      technicalOverviewEn:
        'Encrypts local certificate credentials with host hardware fingerprints and user password to simulate physical crypto token.',
      electricalSpecs: [{ key: 'Resource Usage', value: '<15 MB RAM, 20 MB disk footprint' }],
      physicalSpecs: [{ key: 'Format', value: 'Software Minidriver package' }],
      environmentalSpecs: [{ key: 'Virtualization', value: 'VMware Horizon, Citrix Virtual Apps, Microsoft RDP' }],
    },
  },
  {
    id: 'safenet-mobilepass',
    name: 'SafeNet MobilePASS Mobil Cihaz OTP Uygulaması',
    imageUrl: '/images/partners/safenet/mobilepass.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Yazılımsal Kimlik Doğrulama',
    categoryEn: 'Mobile Authentication',
    summaryTr:
      'Akıllı telefonlar (iOS, Android, Windows) üzerinde tek kullanımlık şifre üreten, kurumsal Active Directory entegrasyonlu güvenli mobil uygulama.',
    summaryEn:
      'Mobile software authenticator generating dynamic OTPs on smartphones with automated out-of-band activation.',
    specs: [
      { labelTr: 'Platformlar', labelEn: 'Platforms', val: 'Apple iOS, Google Android, Windows Phone & Masaüstü' },
      { labelTr: 'Aktivasyon', labelEn: 'Activation', val: 'QR Kod veya Güvenli E-posta Aktivasyon Bağlantısı' },
      { labelTr: 'Biyometri', labelEn: 'Biometrics', val: 'Parmak İzi (Touch ID) ve Yüz Tanıma (Face ID) ile Kilit Açma' },
      { labelTr: 'Çevrimdışı Çalışma', labelEn: 'Offline Mode', val: 'İnternet Bağlantısı Olmadan da Kesintisiz OTP Üretimi' },
    ],
    compliance: ['OATH TOTP', 'FIPS 140-2 Level 1', 'ISO 27001', 'SOC 2'],
    datasheetContent: {
      partNumber: 'SF-MOBILEPASS-V8',
      version: 'Feb 07 2013 Web PB',
      descriptionTr:
        'globalforte.com indirme merkezinde sunulan, çalışanların kendi akıllı telefonlarını güvenli bir şirket anahtarına dönüştüren çözüm.',
      descriptionEn:
        'Software OTP authenticator combining high-assurance security with end-user smartphone convenience.',
      technicalOverviewTr:
        'Telefon donanım kimliğiyle kriptografik olarak eşleşir, uygulama başka bir cihaza kopyalansa bile çalışmaz.',
      technicalOverviewEn:
        'Binds seed parameters to hardware-unique device identifiers to prevent seed cloning across multiple smartphones.',
      electricalSpecs: [{ key: 'Footprint', value: 'Ultra-lightweight native mobile application' }],
      physicalSpecs: [{ key: 'App Stores', value: 'Apple App Store & Google Play Store official release' }],
      environmentalSpecs: [{ key: 'Offline Capacity', value: '100% autonomous time-based calculation' }],
    },
  },
  {
    id: 'safenet-etoken-5100',
    imageUrl: '/images/partners/safenet/etoken-5100.jpg',
    name: 'SafeNet eToken 5100 Kriptografik USB Token',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & USB PKI',
    summaryTr:
      'Gelişmiş iki faktörlü kimlik doğrulama, e-İmza ve e-Posta şifreleme için 72K EEPROM hafızalı USB tabanlı kripto cihazı.',
    summaryEn:
      'High-security USB cryptographic token with 72K memory supporting PKI digital signing, secure network access, and email encryption.',
    specs: [
      { labelTr: 'Bellek Boyutu', labelEn: 'Memory', val: '72 KB EEPROM Kriptografik Güvenli Hafıza' },
      { labelTr: 'Standartlar', labelEn: 'Standards', val: 'PKCS#11, Microsoft CryptoAPI / CNG, X.509 v3' },
      { labelTr: 'Algoritmalar', labelEn: 'Algorithms', val: 'RSA 2048-bit, 3DES, SHA-256, AES-256' },
      { labelTr: 'Gövde Dayanımı', labelEn: 'Casing', val: 'Darbe Emici Polikarbonat & IP57 Su Dayanımı' },
    ],
    compliance: ['FIPS 140-2 Level 2/3', 'Common Criteria EAL4+', 'RoHS', 'CE'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-5100-USB',
      version: 'Web PB Datasheet',
      descriptionTr:
        'Kurumsal çalışanların bilgisayara taktığı anda Outlook e-postalarını şifrelemesini ve resmi e-imza atmasını sağlayan temel USB token.',
      descriptionEn:
        'USB cryptographic authenticator offering portable hardware key protection for corporate enterprise networks.',
      technicalOverviewTr:
        'Kriptografik özel anahtarlar donanım çipinden asla dışarı aktarılamaz, tüm imzalama operasyonları çip içinde yürütülür.',
      technicalOverviewEn:
        'On-board key generation and signing prevents private key exposure even if host machine is compromised.',
      electricalSpecs: [{ key: 'Interface', value: 'USB 2.0 Full Speed compliant' }],
      physicalSpecs: [{ key: 'Dimensions', value: '52 x 16 x 8 mm' }],
      environmentalSpecs: [{ key: 'Durability', value: 'Water and dust resistant casing' }],
    },
  },
  {
    id: 'safenet-etoken-5200',
    imageUrl: '/images/partners/safenet/etoken-5100.jpg',
    name: 'SafeNet eToken 5200 FIPS Seviye 3 Onaylı USB Kripto Token',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & USB PKI',
    summaryTr:
      'FIPS 140-2 Seviye 3 fiziksel kurcalama zırhına sahip, askeriye, istihbarat ve devlet kurumları için en üst düzey taşınabilir USB token.',
    summaryEn:
      'Ultra-high assurance USB token certified to FIPS 140-2 Level 3 tamper-evident standards for defense and high-security government PKI.',
    specs: [
      { labelTr: 'FIPS Sertifikası', labelEn: 'Certification', val: 'FIPS 140-2 Seviye 3 Bütünleşik Fiziksel Koruma' },
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Crypto Core', val: 'RSA 2048, ECC P-256/384, AES-256, Donanımsal TRNG' },
      { labelTr: 'Kapasite', labelEn: 'Key Slots', val: 'Çoklu Özel Anahtar ve Sayısal Sertifika Saklama (72K)' },
      { labelTr: 'Fiziksel Zırh', labelEn: 'Tamper Armor', val: 'Sertleşmiş Epoksi Dolgulu Kurcalama Engelli Kasa' },
    ],
    compliance: ['FIPS 140-2 Level 3 (Tamper Evident)', 'Common Criteria EAL5+', 'NATO SECRET'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-5200-L3',
      version: 'Web PB Datasheet',
      descriptionTr:
        'globalforte.com ürün listesinde yer alan eToken 5200, fiziksel olarak gövdesi delinse bile anahtarları yok eden özel epoksi zırha sahiptir.',
      descriptionEn:
        'Hardened USB crypto token built with epoxy encapsulation to destroy sensitive keys upon physical intrusion attempts.',
      technicalOverviewTr:
        'Fiziksel ve mikroskobik saldırılara karşı kurcalandığında sıfırlanan aktif güvenlik kafesi ile donatılmıştır.',
      technicalOverviewEn:
        'Cryptographic microcontroller embedded in opaque hard resin that cannot be opened without destroying the silicon die.',
      electricalSpecs: [{ key: 'Bus Power', value: 'Standard USB 5V, low power consumption' }],
      physicalSpecs: [{ key: 'Packaging', value: 'Epoxy potted hard casing' }],
      environmentalSpecs: [{ key: 'Temp', value: '-20°C to +70°C' }],
    },
  },
  {
    id: 'safenet-etoken-pro-anywhere',
    name: 'SafeNet eToken PRO Anywhere Kurulumsuz Web Kripto Tokenı',
    imageUrl: '/images/partners/safenet/etoken-pro-anywhere.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & USB PKI',
    summaryTr:
      'İstemci bilgisayara hiçbir sürücü veya yazılım yüklemeden, doğrudan USB bağlantısı üzerinden web tarayıcısında çalışan tak-çalıştır kripto token.',
    summaryEn:
      'Zero-footprint clientless USB token delivering secure web portal authentication and digital signing without software installation.',
    specs: [
      { labelTr: 'Sürücü İhtiyacı', labelEn: 'Driver Requirement', val: 'Sıfır İstemci Kurulumu (Zero-Footprint Plug & Play)' },
      { labelTr: 'Web Entegrasyonu', labelEn: 'Web Integration', val: 'Java Applet ve HTML5 Web Güvenlik Arayüzü' },
      { labelTr: 'Donanım Hafızası', labelEn: 'Flash Storage', val: 'Dahili Güvenli Flaş Bellek & 72K Kripto EEPROM' },
      { labelTr: 'Şifreleme', labelEn: 'Encryption', val: 'Donanımsal RSA 2048 ve SHA-256 İmzası' },
    ],
    compliance: ['FIPS 140-2 Level 2', 'USB Mass Storage + CCID', 'CE', 'FCC'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-ANYWHERE-PB',
      version: 'Web PB Datasheet',
      descriptionTr:
        'Kullanıcıların internet kafe veya üçüncü taraf bilgisayarlarda bile sürücü kurmadan şirket portallarına güvenle girmesini sağlar.',
      descriptionEn:
        'Clientless web authentication device designed for kiosks, shared contractor laptops, and secure SaaS portals.',
      technicalOverviewTr:
        'Tıklandığı anda token içindeki güvenli tarayıcı eklentisini çalıştırır, oturum kapandığında bilgisayarda hiçbir iz bırakmaz.',
      technicalOverviewEn:
        'Leaves zero residual data or registry entries on host endpoint after disconnect.',
      electricalSpecs: [{ key: 'Connector', value: 'Standard USB Type-A' }],
      physicalSpecs: [{ key: 'Weight', value: '11 grams, ultra-compact' }],
      environmentalSpecs: [{ key: 'Compatibility', value: 'Windows, macOS, Linux' }],
    },
  },
  {
    id: 'safenet-ikey-4000',
    imageUrl: '/images/partners/safenet/ikey-4000.jpg',
    name: 'SafeNet iKey 4000 Yüksek Güvenlikli PKI USB Anahtarı',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & USB PKI',
    summaryTr:
      '64KB yüksek güvenlikli kriptografik işlemcili, FIPS 140-2 Seviye 3 onaylı ve askeri sınıf donanıma sahip dayanıklı USB token.',
    summaryEn:
      '64KB cryptographic USB security token certified for government and military PKI infrastructure requiring FIPS 140-2 Level 3.',
    specs: [
      { labelTr: 'Mikroişlemci', labelEn: 'Microprocessor', val: 'Yüksek Hızlı 64-bit Kriptografik Yardımcı İşlemci' },
      { labelTr: 'Bellek', labelEn: 'Storage', val: '64 KB Güvenli EEPROM Sertifika ve Anahtar Deposu' },
      { labelTr: 'Sertifikasyon', labelEn: 'Cert', val: 'FIPS 140-2 Seviye 3 Onaylı Kripto Çekirdeği' },
      { labelTr: 'Protokol', labelEn: 'Protocols', val: 'ISO 7816-4, PKCS#11, MS CryptoAPI' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria', 'DoD PKI Approved'],
    datasheetContent: {
      partNumber: 'SF-IKEY-4000-V2',
      version: 'Rev 2.0 Web PB',
      descriptionTr:
        'globalforte.com resmi ürün sayfalarında ve indirme merkezinde yer alan iKey 4000, savunma sanayii PKI projelerinin vazgeçilmezidir.',
      descriptionEn:
        'Heavy-duty cryptographic USB device trusted by defense contractors and state intelligence for classified network access.',
      technicalOverviewTr:
        'Kompakt metal takviyeli kasasıyla elektromanyetik girişim ve darbelere karşı tam koruma sağlar.',
      technicalOverviewEn:
        'Ruggedized enclosure protects against electrostatic discharge and electromagnetic surveillance eavesdropping.',
      electricalSpecs: [{ key: 'Power', value: 'USB bus-powered 5V DC' }],
      physicalSpecs: [{ key: 'Shell', value: 'Reinforced thermoplastic composite' }],
      environmentalSpecs: [{ key: 'Operating', value: '-10°C to +55°C' }],
    },
  },
  {
    id: 'safenet-ikey-1000',
    imageUrl: '/images/partners/safenet/ikey-1000.jpg',
    name: 'SafeNet iKey 1000 Standart Kimlik Doğrulama USB Aygıtı',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & USB PKI',
    summaryTr:
      'Kullanıcı oturum açma, şifre kasası erişimi ve temel iki faktörlü kimlik doğrulama için ekonomik ve dayanıklı USB donanımı.',
    summaryEn:
      'Cost-effective USB authentication key providing reliable hardware-based credential security and password replacement.',
    specs: [
      { labelTr: 'Kullanım Alanı', labelEn: 'Application', val: 'Windows Logon, Web Siteleri, VPN ve Parola Kasası Koruması' },
      { labelTr: 'Kapasite', labelEn: 'Storage', val: '8 KB Güvenli EEPROM Veri Saklama Alanı' },
      { labelTr: 'Arayüz', labelEn: 'Interface', val: 'USB 1.1 / 2.0 Tak ve Çalıştır' },
      { labelTr: 'Kasa Tipi', labelEn: 'Form', val: 'Kompakt Şeffaf Mavi Dayanıklı Plastik Anahtarlık' },
    ],
    compliance: ['CE', 'FCC Class B', 'VCCI', 'RoHS'],
    datasheetContent: {
      partNumber: 'SF-IKEY-1000-DS',
      version: 'Web PB Datasheet',
      descriptionTr:
        'globalforte.com iKey ailesinin en yaygın modellerinden biri olan iKey 1000, güvenli kullanıcı kimlik doğrulamasında sektör standardıdır.',
      descriptionEn:
        'Widely deployed USB token offering robust user identification for enterprise desktops and secure web domains.',
      technicalOverviewTr:
        'Dahili kriptografik EEPROM içinde kullanıcı kimlik bilgilerini şifreli olarak barındırır.',
      technicalOverviewEn:
        'Stores encrypted logon credentials internally, preventing keystroke logging and password sniffing.',
      electricalSpecs: [{ key: 'Supply', value: 'USB bus-powered' }],
      physicalSpecs: [{ key: 'Weight', value: '9 grams' }],
      environmentalSpecs: [{ key: 'Operating', value: '0°C to 50°C' }],
    },
  },
  {
    id: 'safenet-etoken-4100',
    imageUrl: '/images/partners/safenet/etoken-4100.jpg',
    name: 'SafeNet eToken 4100 Temaslı PKI Akıllı Kart',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & Smartcard',
    summaryTr:
      'Kurumsal kimlik kartı, bina giriş kontrolü ve bilgisayar oturum açma fonksiyonlarını tek bir FIPS onaylı akıllı kartta birleştiren çözüm.',
    summaryEn:
      'Contact-based smart card combining corporate photo ID badge, physical building access, and logical PKI computer login.',
    specs: [
      { labelTr: 'Kart Tipi', labelEn: 'Card Standard', val: 'ISO 7816 Standartlarında Temaslı Akıllı Kart' },
      { labelTr: 'Kripto Çipi', labelEn: 'Crypto Chip', val: '72 KB EEPROM Java Card 2.2.2 & GlobalPlatform' },
      { labelTr: 'Algoritmalar', labelEn: 'Algorithms', val: 'RSA 2048, 3DES, AES-256, SHA-256 Donanım Hızlandırma' },
      { labelTr: 'Fiziksel Özellik', labelEn: 'Physical', val: 'Özelleştirilebilir Fotoğraflı Kimlik Baskısı ve Manyetik Şerit' },
    ],
    compliance: ['FIPS 140-2 Level 2/3', 'Common Criteria EAL4+', 'ISO 7816-1/2/3/4'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-4100-SC',
      version: 'Web PB Datasheet',
      descriptionTr:
        'globalforte.com SafeNet ürün portföyünde yer alan eToken 4100, çalışanların cüzdanında taşıdığı tam teşekküllü kriptografik güvenlik kartıdır.',
      descriptionEn:
        'Standard contact smartcard deployed across corporate enterprises for secure multi-factor physical and logical authentication.',
      technicalOverviewTr:
        'Standart akıllı kart okuyucularla (PC/SC) uyumludur, kurumsal PKI altyapılarıyla sorunsuz çalışır.',
      technicalOverviewEn:
        'Fully compliant with PC/SC smartcard readers and native Windows Smart Card Subsystem.',
      electricalSpecs: [{ key: 'Supply Voltage', value: 'Class A, B, C (5V, 3V, 1.8V)' }],
      physicalSpecs: [{ key: 'Dimensions', value: 'Standard CR-80 (85.6 x 54 x 0.76 mm)' }],
      environmentalSpecs: [{ key: 'Durability', value: '100,000 insertion cycles' }],
    },
  },
  {
    id: 'safenet-sc650',
    imageUrl: '/images/partners/safenet/smartcard-650.jpg',
    name: 'SafeNet Smart Card 650 (SC650) FIPS Kriptografik Akıllı Kart',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & Smartcard',
    summaryTr:
      'Devlet kurumları ve savunma teşkilatları için FIPS 140-2 Seviye 3 onaylı, yüksek dayanımlı kriptografik mikroçipli akıllı kart.',
    summaryEn:
      'High-assurance FIPS 140-2 Level 3 smart card deployed for government employee identification and defense-grade cryptographic operations.',
    specs: [
      { labelTr: 'Sertifikasyon', labelEn: 'Certification', val: 'FIPS 140-2 Level 3 Sertifikalı Donanım Çipi' },
      { labelTr: 'Kriptografik Güç', labelEn: 'Crypto Power', val: 'RSA 2048/4096-bit Asimetrik İmzalama Donanımı' },
      { labelTr: 'Bellek', labelEn: 'Memory', val: '64 KB Yüksek Güvenlikli Kripto Flash/EEPROM' },
      { labelTr: 'Arayüz', labelEn: 'Interface', val: 'ISO 7816 T=0, T=1 Protokol Desteği' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'DoD CAC Compatible', 'Common Criteria EAL5+'],
    datasheetContent: {
      partNumber: 'SF-SC650-PRODUCT-BRIEF',
      version: 'SafeNet SC650 PB',
      descriptionTr:
        'globalforte.com indirme merkezinde resmi teknik föyü bulunan SC650, kritik ulusal projelerde kullanılan en üst seviye akıllı karttır.',
      descriptionEn:
        'FIPS 140-2 Level 3 smart card specified for mission-critical defense and homeland security authentication programs.',
      technicalOverviewTr:
        'DPA (Diferansiyel Güç Analizi) ve lazer taraması gibi yan kanal saldırılarına karşı aktif donanımsal korumaya sahiptir.',
      technicalOverviewEn:
        'Engineered with advanced DPA/SPA countermeasures to neutralize non-invasive side-channel crypto attacks.',
      electricalSpecs: [{ key: 'Standard', value: 'ISO 7816 compliant, PC/SC drivers' }],
      physicalSpecs: [{ key: 'Material', value: 'Polycarbonate durable composite card' }],
      environmentalSpecs: [{ key: 'Lifespan', value: '10 years minimum data retention' }],
    },
  },
  {
    id: 'safenet-smartcard-400',
    imageUrl: '/images/partners/safenet/smartcard-400.jpg',
    name: 'SafeNet Smart Card 400 Kurumsal Kimlik Kartı',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & Smartcard',
    summaryTr:
      'Geniş ölçekli kamu projeleri ve kurumsal şirketler için yüksek performanslı ve ekonomik PKI akıllı kimlik kartı çözümü.',
    summaryEn:
      'Enterprise PKI smartcard providing robust digital identity for public sector employees and multinational corporations.',
    specs: [
      { labelTr: 'Mikroçip', labelEn: 'Microchip', val: 'Yüksek Hızlı 16-bit Kriptografik Akıllı Kart Denetleyicisi' },
      { labelTr: 'Kapasite', labelEn: 'Capacity', val: '32 KB EEPROM Kripto Alanı' },
      { labelTr: 'Şifreleme', labelEn: 'Encryption', val: 'RSA 1024/2048, 3DES, SHA-1/SHA-256' },
      { labelTr: 'Kart Standardı', labelEn: 'Form Factor', val: 'CR80 Standart Kredi Kartı Boyutu' },
    ],
    compliance: ['ISO 7816', 'Common Criteria EAL4+', 'RoHS', 'CE'],
    datasheetContent: {
      partNumber: 'SF-SMARTCARD-400-PB',
      version: 'Web PB Datasheet',
      descriptionTr:
        'globalforte.com ürünleri arasında yer alan Smartcard 400, kurumsal ağlara güvenli erişim ve dijital doküman imzalama kartıdır.',
      descriptionEn:
        'Enterprise-grade cryptographic smart card engineered for high-volume employee deployments.',
      technicalOverviewTr:
        'Windows Minidriver desteği ile işletim sistemiyle sürücüsüz yerel olarak bütünleşir.',
      technicalOverviewEn:
        'Natively supported by Microsoft Base Smart Card Cryptographic Service Provider (CSP).',
      electricalSpecs: [{ key: 'Power', value: 'Direct PC/SC reader power' }],
      physicalSpecs: [{ key: 'Body', value: 'PVC / PET composite laminate' }],
      environmentalSpecs: [{ key: 'Durability', value: 'High scratch and bend resistance' }],
    },
  },
  {
    id: 'safenet-etoken-ng-flash',
    name: 'SafeNet eToken NG-FLASH Hibrit OTP & Şifreli Flaş Bellek',
    imageUrl: '/images/partners/safenet/etoken-ng-flash.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & Encrypted Storage',
    summaryTr:
      'Akıllı kart güvenliği, OTP şifre üreteci ve donanımsal şifreli flaş belleği tek bir cebinizde taşınabilir USB gövdede birleştiren hibrit aygıt.',
    summaryEn:
      'Multi-function hybrid security token combining smart card PKI, dynamic OTP generation, and hardware-encrypted flash drive in one device.',
    specs: [
      { labelTr: 'Flaş Kapasitesi', labelEn: 'Flash Storage', val: '1 GB / 2 GB / 4 GB Donanımsal Şifreli Güvenli Depolama' },
      { labelTr: 'Kripto Çekirdeği', labelEn: 'PKI Security', val: '64 KB eToken Akıllı Kart Çipi (RSA 2048, AES)' },
      { labelTr: 'OTP Fonksiyonu', labelEn: 'OTP Mode', val: 'Zamana Dayalı Tek Kullanımlık Şifre Üretimi' },
      { labelTr: 'Veri Güvenliği', labelEn: 'Data Shield', val: 'AES-256 Donanımsal Gerçek Zamanlı Disk Şifreleme' },
    ],
    compliance: ['FIPS 140-2 Level 2/3', 'Common Criteria', 'RoHS'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-NG-FLASH-PB',
      version: 'Web Product Brief',
      descriptionTr:
        'globalforte.com resmi ürün kataloğundaki eToken NG-FLASH, yöneticilerin hassas kurumsal belgelerini şifreli olarak yanlarında taşımasını sağlar.',
      descriptionEn:
        'All-in-one executive token protecting portable business documents with full AES-256 storage encryption and smartcard login.',
      technicalOverviewTr:
        'USB portundan çıkarıldığında şifreli disk alanı anında kilitlenir; PIN girilmeden bilgisayar diski göremez.',
      technicalOverviewEn:
        'Automated dismount and crypto-lock upon USB unplug prevents unauthorized access to forgotten storage media.',
      electricalSpecs: [{ key: 'USB Interface', value: 'High-speed USB 2.0 dual interface' }],
      physicalSpecs: [{ key: 'Dimensions', value: '78 x 20 x 11 mm' }],
      environmentalSpecs: [{ key: 'Storage Temp', value: '-20°C to +70°C' }],
    },
  },
  {
    id: 'safenet-etoken-ng-otp',
    imageUrl: '/images/partners/safenet/ng-otp.jpg',
    name: 'SafeNet eToken NG-OTP Akıllı Kart Çipli OTP Tokenı',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & OTP',
    summaryTr:
      'Hem USB portuna takılarak akıllı kart gibi dijital imza atan hem de USB haricinde üzerindeki ekrandan OTP kodu gösteren hibrit token.',
    summaryEn:
      'Dual-mode hybrid token operating as a connected USB smartcard on laptops and as an untethered LCD OTP generator on mobile devices.',
    specs: [
      { labelTr: 'Çift Mod', labelEn: 'Dual Mode', val: 'Bağlı USB Akıllı Kart Modu + Bağımsız LCD OTP Gösterge Modu' },
      { labelTr: 'Ekran', labelEn: 'Screen', val: '6 Haneli Yüksek Kontrastlı LCD Şifre Ekranı' },
      { labelTr: 'Kripto Hafıza', labelEn: 'PKI Chip', val: '72 KB EEPROM eToken Akıllı Kart Mikrodenetleyicisi' },
      { labelTr: 'Standartlar', labelEn: 'Standards', val: 'OATH TOTP, PKCS#11, Microsoft CAPI, X.509 v3' },
    ],
    compliance: ['FIPS 140-2 Level 2', 'OATH Compliant', 'Common Criteria', 'CE'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-NG-OTP-PB',
      version: 'Web Product Brief',
      descriptionTr:
        'Ofiste bilgisayara takılıp e-imza atılan, dışarıda ise telefon veya mobil bankacılıkta tek kullanımlık şifre ekranı olarak kullanılan cihaz.',
      descriptionEn:
        'Innovative authenticator offering physical PKI connected capabilities alongside standalone untethered passcode generation.',
      technicalOverviewTr:
        'Dahili bataryası sayesinde USB portundan bağımsız 5 yıl boyunca OTP üretebilir; takıldığında USB gücünden beslenir.',
      technicalOverviewEn:
        'Internal lithium battery powers LCD generation while USB bus powers on-board cryptographic smartcard engine.',
      electricalSpecs: [{ key: 'Power System', value: 'Hybrid bus power + internal long-life cell' }],
      physicalSpecs: [{ key: 'Dimensions', value: '70 x 22 x 10 mm' }],
      environmentalSpecs: [{ key: 'Protection', value: 'Sealed impact-resistant casing' }],
    },
  },
  {
    id: 'safenet-ethernet-encryptor',
    imageUrl: '/images/partners/safenet/ethernet-encryptor.jpg',
    name: 'SafeNet Ethernet Encryptor (Katman 2 Hat İçi Ağ Şifreleyici)',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Ağ Güvenliği & Donanımsal Şifreleme',
    categoryEn: 'Network Encryption',
    summaryTr:
      'Veri merkezleri ve metro Ethernet hatlarında tel hızında (Wire-Speed), sıfır paket gecikmesiyle Katman-2 Ethernet trafiğini şifreleyen cihaz.',
    summaryEn:
      'Dedicated Layer 2 wire-speed hardware encryptor protecting point-to-point and multipoint Ethernet backbones with near-zero latency.',
    specs: [
      { labelTr: 'Şifreleme Hızı', labelEn: 'Speed', val: '10 Mbps - 10 Gbps Hat Hızında (Wire-Speed) Donanımsal Şifreleme' },
      { labelTr: 'Gecikme (Latency)', labelEn: 'Latency', val: '< 5 Mikrosaniye Ek Gecikme (Mikro-saniye seviyesinde)' },
      { labelTr: 'Kripto Algoritması', labelEn: 'Cryptography', val: 'AES-256-GCM Donanımsal Çip Şifreleme & Bütünlük Koruması' },
      { labelTr: 'Ağ Modları', labelEn: 'Network Modes', val: 'Point-to-Point, Point-to-Multipoint, Full Mesh (E-LAN, E-Line)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria EAL4+', 'IEEE 802.1AE MACsec'],
    datasheetContent: {
      partNumber: 'SF-ETH-ENCRYPTOR-10G',
      version: 'Web PB Datasheet',
      descriptionTr:
        'globalforte.com ağ şifreleme bölümünde sunulan SafeNet Ethernet Encryptor, fiber hat dinlemelerine karşı fiber omurgayı zırhlar.',
      descriptionEn:
        'High-speed network security appliance defeating optical fiber tapping across metropolitan and inter-datacenter links.',
      technicalOverviewTr:
        'IP başlıklarını bozmadan doğrudan Ethernet çerçevelerini şifrelediği için MTU ve ağ yönlendirmesini olumsuz etkilemez.',
      technicalOverviewEn:
        'Operates transparently at Layer 2, preserving VLAN tags and QoS prioritization flags while encrypting payload.',
      electricalSpecs: [{ key: 'Power', value: 'Dual redundant hot-swap AC 100-240V' }],
      physicalSpecs: [{ key: 'Chassis', value: '1U 19-inch rack-mount chassis' }],
      environmentalSpecs: [{ key: 'Cooling', value: 'Front-to-back forced air cooling' }],
    },
  },
  {
    id: 'safenet-sonet-encryptor',
    imageUrl: '/images/partners/safenet/safenet-sonet-encryptor.jpg',
    name: 'SafeNet SONET/SDH Optik Ağ Şifreleyici (OC-3/OC-12/OC-48/OC-192)',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Ağ Güvenliği & Donanımsal Şifreleme',
    categoryEn: 'Network Encryption',
    summaryTr:
      'Telekom operatörleri ve kritik ulusal altyapılar için optik fiber SONET/SDH hatlarını hat hızında şifreleyen donanım.',
    summaryEn:
      'Carrier-grade SONET/SDH optical encryption appliance providing certified wire-speed protection for telecom trunk lines.',
    specs: [
      { labelTr: 'Optik Hızlar', labelEn: 'Optical Rates', val: 'OC-3 / STM-1 (155M) - OC-48 / STM-16 (2.5G) - OC-192 / STM-64 (10G)' },
      { labelTr: 'Kriptografik Motor', labelEn: 'Crypto Engine', val: 'AES-256 Bit Donanımsal Şifreleme (NSA Suite B Uyumlu)' },
      { labelTr: 'Gecikme Süresi', labelEn: 'Latency', val: '< 1.5 Mikrosaniye Sabit Deterministik Gecikme' },
      { labelTr: 'Operatör Özelliği', labelEn: 'Carrier Grade', val: 'Otomatik Hat Korumalı Anahtarlama (APS 1+1 Yedeklilik)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Telcordia NEBS Level 3', 'ITU-T G.707', 'ANSI T1.105'],
    datasheetContent: {
      partNumber: 'SF-SONET-ENCRYPTOR-PB',
      version: 'Web PB Datasheet',
      descriptionTr:
        'globalforte.com sitesinde de yer alan SONET Encryptor, kritik devlet haberleşme hatlarında optik fiber omurgayı güvenceye alır.',
      descriptionEn:
        'Designed for defense ministries and telecom carriers to safeguard high-capacity optical backbones against state-level interception.',
      technicalOverviewTr:
        'Optik çerçevelerin senkronizasyonunu bozmadan veriyi anında şifreler, telekom iletim ekipmanları tarafından şeffaf algılanır.',
      technicalOverviewEn:
        'Preserves SONET/SDH section, line, and path overhead bytes to maintain transparent integration with DWDM transmission equipment.',
      electricalSpecs: [{ key: 'Power Option', value: 'Dual -48V DC telecom or 110/220V AC' }],
      physicalSpecs: [{ key: 'Form Factor', value: '1U/2U NEBS-compliant chassis' }],
      environmentalSpecs: [{ key: 'Compliance', value: 'NEBS Level 3 certified' }],
    },
  },
  {
    id: 'safenet-smc',
    imageUrl: '/images/partners/safenet/smc.gif',
    name: 'SafeNet Security Management Center (SMC) Merkezi Kripto Konsolu',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Yönetim Platformu',
    categoryEn: 'Cryptographic Management',
    summaryTr:
      'Dağıtık coğrafyalardaki yüzlerce SafeNet ağ şifreleyicisinin (Ethernet/SONET) tek bir arayüzden merkezi anahtar dağıtımı ve yönetimi.',
    summaryEn:
      'Centralized enterprise management platform orchestrating configuration, policy deployment, and automated key rotation across high-speed encryptors.',
    specs: [
      { labelTr: 'Cihaz Kapasitesi', labelEn: 'Device Scale', val: '1.000+ Ağ Şifreleyici Cihazın Merkezi Yönetimi' },
      { labelTr: 'Anahtar Otomasyonu', labelEn: 'Key Rotation', val: 'Merkezi Eliptik Eğri (ECDH) Otomatik Anahtar Güncelleme' },
      { labelTr: 'Topoloji Haritası', labelEn: 'Topology Map', val: 'Gerçek Zamanlı Canlı Şifreli Hat Durumu ve Alarm İzleme' },
      { labelTr: 'Denetim İzi', labelEn: 'Audit Trail', val: 'Syslog, SNMPv3 ve Değiştirilemez Kriptografik Denetim Günlüğü' },
    ],
    compliance: ['FIPS 140-2 Level 3 Admin', 'Common Criteria', 'SNMPv3 RFC 3414'],
    datasheetContent: {
      partNumber: 'SF-SMC-MANAGEMENT-V6',
      version: 'SafeNet SMC PB',
      descriptionTr:
        'Büyük kurumların Türkiye ve dünya geneline yayılmış şifreleme cihazlarını güvenli bir tünel üzerinden tek tıkla yapılandırmasını sağlar.',
      descriptionEn:
        'Central command platform enabling IT security teams to govern distributed encryption domains without site visits.',
      technicalOverviewTr:
        'Yöneticiler cihazlara fiziksel olarak gitmeden şifreleme anahtarlarını, yazılım güncellemelerini ve güvenlik politikalarını uygular.',
      technicalOverviewEn:
        'Provides certificate-authenticated out-of-band management channels with comprehensive tamper telemetry alerts.',
      electricalSpecs: [{ key: 'Deployment', value: 'Hardened Linux appliance or VMware ESXi' }],
      physicalSpecs: [{ key: 'GUI', value: 'Web-based HTML5 administrative interface' }],
      environmentalSpecs: [{ key: 'Database', value: 'Encrypted internal high-availability datastore' }],
    },
  },
  {
    id: 'safenet-protectapp',
    imageUrl: '/images/partners/safenet/mini-pic-data-secure.png',
    name: 'SafeNet ProtectApp Uygulama İçi Veri Şifreleme API Kütüphanesi',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Veri Güvenliği & Şifreleme',
    categoryEn: 'Data Protection & API',
    summaryTr:
      'Java, .NET ve C++ uygulamalarında kredi kartı, T.C. kimlik numarası gibi verileri veri tabanına yazılmadan önce uygulama seviyesinde şifreleyen kütüphane.',
    summaryEn:
      'Application-layer encryption API and agent library securing sensitive payload data (credit cards, PII) inside Java, .NET, and C++ codebases.',
    specs: [
      { labelTr: 'Desteklenen Diller', labelEn: 'Languages', val: 'Java (JCE), Microsoft .NET (C#), C/C++, Python' },
      { labelTr: 'Kripto Algoritmaları', labelEn: 'Crypto', val: 'AES-256, FPE (Format Preserving Encryption), RSA' },
      { labelTr: 'Entegrasyon', labelEn: 'Backend', val: 'SafeNet KeySecure / DataSecure / Luna HSM ile Otomatik Bağlantı' },
      { labelTr: 'Performans', labelEn: 'Speed', val: 'Mikrosaniye Seviyesinde Yüksek Eşzamanlı Bellek Şifreleme' },
    ],
    compliance: ['PCI DSS Madde 3.4', 'KVKK / GDPR Uyumlu', 'FIPS 140-2'],
    datasheetContent: {
      partNumber: 'SF-PROTECTAPP-V5',
      version: 'Feb 19 2013 Web PB',
      descriptionTr:
        'globalforte.com ürün listesinde yer alan ProtectApp, verinin sunucudan veritabanına taşınırken ağda bile açık gezmesini engeller.',
      descriptionEn:
        'SDK empowering application architects to encrypt sensitive fields at the exact point of creation inside enterprise web services.',
      technicalOverviewTr:
        'Formatı Koruyan Şifreleme (FPE) sayesinde veri tabanı şemasını değiştirmeden 16 haneli kredi kartını yine 16 hane olarak şifreler.',
      technicalOverviewEn:
        'Features Format-Preserving Encryption (FPE) so existing database schemas and legacy report structures remain intact.',
      electricalSpecs: [{ key: 'Runtime', value: 'Native thread-safe shared libraries (.so, .dll, .jar)' }],
      physicalSpecs: [{ key: 'Integration', value: 'Simple API call: ProtectApp.encrypt(string)' }],
      environmentalSpecs: [{ key: 'Licensing', value: 'Tiered per application server instance' }],
    },
  },
  {
    id: 'safenet-storagesecure',
    name: 'SafeNet StorageSecure SAN & NAS Depolama Şifreleme Cihazı',
    imageUrl: '/images/partners/safenet/storage-secure.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Veri Güvenliği & Şifreleme',
    categoryEn: 'Storage Encryption',
    summaryTr:
      'NetApp, EMC ve standart SAN/NAS depolama alan ağlarında terabaytlarca durağan veriyi (Data-at-Rest) 10Gbps hızında şifreleyen donanımsal ağ geçidi.',
    summaryEn:
      'Hardware storage encryption appliance safeguarding multi-terabyte data-at-rest across NetApp and SAN/NAS storage arrays at 10 Gbps.',
    specs: [
      { labelTr: 'Protokoller', labelEn: 'Protocols', val: 'NFS, CIFS / SMB, iSCSI, Fiber Channel (SAN & NAS)' },
      { labelTr: 'İletim Hızı', labelEn: 'Throughput', val: '10 Gbps Hat Hızında Donanımsal Donanım Şifreleme' },
      { labelTr: 'Algoritma', labelEn: 'Algorithms', val: 'XTS-AES 256-bit ve AES-GCM Depolama Şifreleme' },
      { labelTr: 'Uyumluluk', labelEn: 'Compatibility', val: 'NetApp Data ONTAP, EMC Isilon/VNX, Dell EqualLogic' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'PCI DSS', 'HIPAA', 'Common Criteria'],
    datasheetContent: {
      partNumber: 'SF-STORAGESECURE-NETAPP',
      version: 'Oct 31 2012 Web PB',
      descriptionTr:
        'globalforte.com indirme merkezinde NetApp entegrasyon broşürü bulunan StorageSecure, çalınan sabit disklerdeki veriyi okunaksız kılar.',
      descriptionEn:
        'Enterprise storage security appliance delivering transparent inline hardware encryption for network attached storage arrays.',
      technicalOverviewTr:
        'Sunucular ile depolama ünitesi arasına girer; sunucular dosyayı normal okur, diske ise tamamen şifreli yazılır.',
      technicalOverviewEn:
        'Sits inline between file clients and storage filer, encrypting files and LUNs before blocks hit physical platters.',
      electricalSpecs: [{ key: 'Power', value: 'Dual 650W redundant AC power supplies' }],
      physicalSpecs: [{ key: 'Chassis', value: '2U Rackmount with 4x 10GbE SFP+ ports' }],
      environmentalSpecs: [{ key: 'Operating', value: '10°C to 35°C datacenter environment' }],
    },
  },
  {
    id: 'safenet-protectz',
    name: 'SafeNet ProtectZ IBM Z/OS Mainframe Veri Koruma Çözümü',
    imageUrl: '/images/partners/safenet/mini-pic-data-secure.png',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Veri Güvenliği & Şifreleme',
    categoryEn: 'Mainframe Encryption',
    summaryTr:
      'Büyük bankaların ve sigorta şirketlerinin IBM z Systems Mainframe omurgalarında veri tabanlarını ve bant yedeklerini şifreleyen uzman modül.',
    summaryEn:
      'High-performance data protection solution securing IBM z/OS mainframe databases, VSAM files, and tape backups under unified key control.',
    specs: [
      { labelTr: 'Mainframe OS', labelEn: 'Mainframe OS', val: 'IBM z/OS v1.12+, DB2 for z/OS, IMS, VSAM Dosyaları' },
      { labelTr: 'Kripto Donanımı', labelEn: 'CPACF / CEX', val: 'IBM Crypto Express (CEX) Donanım Hızlandırıcı Entegrasyonu' },
      { labelTr: 'Anahtar Yönetimi', labelEn: 'Key Management', val: 'SafeNet KeySecure / Luna HSM ile Dış Anahtar Kasası' },
      { labelTr: 'Mevzuat Uyumu', labelEn: 'Regulations', val: 'PCI DSS, Sarbanes-Oxley (SOX), Basel II/III' },
    ],
    compliance: ['IBM z/OS Certified', 'PCI DSS 3.4', 'FIPS 140-2'],
    datasheetContent: {
      partNumber: 'SF-PROTECTZ-MAINFRAME',
      version: 'Web PB Datasheet',
      descriptionTr:
        'Bankaların çekirdek sistemlerinde çalışan mainframe bilgisayarlardaki müşteri kayıtlarını şifreleyerek veri sızıntılarını sıfıra indirir.',
      descriptionEn:
        'Mainframe encryption subsystem protecting mission-critical financial ledgers and core transaction logs.',
      technicalOverviewTr:
        'Mainframe CPU MIPS kullanımını minimumda tutmak için kriptografik komut setlerini yerel donanım işlemcisine aktarır.',
      technicalOverviewEn:
        'Leverages IBM CPACF on-chip cryptographic assistance to minimize MIPS overhead on mainframe compute cycles.',
      electricalSpecs: [{ key: 'Integration', value: 'Native z/OS subsystem and callable services' }],
      physicalSpecs: [{ key: 'Architecture', value: 'IBM System z enterprise mainframes' }],
      environmentalSpecs: [{ key: 'Compliance', value: 'Mainframe audit and compliance certified' }],
    },
  },
  {
    id: 'safenet-esafe',
    imageUrl: '/images/partners/safenet/protect-server-new.jpg',
    name: 'SafeNet eSafe Kurumsal İçerik Güvenliği & Ağ Geçidi',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Ağ & İçerik Güvenliği',
    categoryEn: 'Content Security Gateway',
    summaryTr:
      'Kurumsal web ve e-posta trafiğindeki virüsleri, casus yazılımları, sıfır-gün tehditlerini ve istenmeyen e-postaları (AntiSpam) süzen ağ geçidi.',
    summaryEn:
      'Multi-layer content security appliance delivering proactive zero-day malware filtering, web content control, and email antispam protection.',
    specs: [
      { labelTr: 'Filtreleme Motoru', labelEn: 'Filtering Engine', val: 'Gerçek Zamanlı Proaktif Sıfır-Gün Tehdit Analizi' },
      { labelTr: 'Protokol Desteği', labelEn: 'Protocols', val: 'HTTP, HTTPS, FTP, SMTP, POP3, IMAP' },
      { labelTr: 'İşlem Kapasitesi', labelEn: 'Throughput', val: '1.000.000 E-posta / Gün & 10 Gbps Web Trafiği Denetimi' },
      { labelTr: 'Veri Sızıntısı', labelEn: 'DLP Shield', val: 'Dahili Giden Veri Sızıntısı Önleme (DLP) Filtresi' },
    ],
    compliance: ['ICSA Labs Certified', 'West Coast Labs Checkmark', 'ISO 27001'],
    datasheetContent: {
      partNumber: 'SF-ESAFE-GATEWAY-V7',
      version: 'SafeNet eSafe Brief',
      descriptionTr:
        'globalforte.com arama etiketlerinde yer alan eSafe, kurumsal şirketleri e-posta ile gelen fidye yazılımlarından ve oltalama saldırılarından korur.',
      descriptionEn:
        'Comprehensive secure web gateway and email perimeter defense engine filtering malicious active code before it reaches endpoints.',
      technicalOverviewTr:
        'Gelen ekli dosyaları sanal kum havuzunda (sandbox) çalıştırarak şüpheli davranışları tespit eder.',
      technicalOverviewEn:
        'Executes proactive virtual sandbox detonation to quarantine heuristic anomalies and targeted spear-phishing payloads.',
      electricalSpecs: [{ key: 'Power', value: 'Dual 400W redundant AC power' }],
      physicalSpecs: [{ key: 'Form Factor', value: '1U/2U Server Appliance with bypass NICs' }],
      environmentalSpecs: [{ key: 'Operating', value: '0°C to 45°C' }],
    },
  },

  // ==========================================
  // FORTRESS TECHNOLOGIES ADDITIONAL PRODUCTS
  // ==========================================
  {
    id: 'fortress-es440',
    imageUrl: '/images/partners/fortress/ES520-Deployable-Mesh-Point.jpg',
    name: 'Fortress ES440 Sabit Altyapı Taktiksel Mesh Noktası',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Taktiksel Mesh & Askeri Kablosuz',
    categoryEn: 'Tactical Wireless Mesh',
    summaryTr:
      'Askeri üsler, limanlar ve geniş havaalanı sahalarında sabit direklere monte edilen, yüksek çıkış güçlü ve kendini onaran kablosuz mesh düğümü.',
    summaryEn:
      'Fixed infrastructure outdoor tactical mesh point delivering high-power RF communications and self-healing multi-hop connectivity.',
    specs: [
      { labelTr: 'RF Çıkış Gücü', labelEn: 'RF Power', val: 'Yüksek Güçlü 600 mW MIMO Taktiksel Telsiz Çıkışı' },
      { labelTr: 'Frekans Bantları', labelEn: 'Frequencies', val: '2.4 GHz, 4.4 GHz (NATO Askeri Bant), 4.9 GHz (Kamu Güvenliği)' },
      { labelTr: 'Şifreleme', labelEn: 'Encryption', val: 'FIPS 140-2 Seviye 2/3 Onaylı Donanımsal AES-256 Mesh Tünelleme' },
      { labelTr: 'Kasa Standardı', labelEn: 'Chassis', val: 'IP67 Zorlu Dış Ortam Döküm Alüminyum Gövde (-40°C / +70°C)' },
    ],
    compliance: ['FIPS 140-2 Level 2', 'MIL-STD-810F', 'IP67', 'NATO Band IV'],
    datasheetContent: {
      partNumber: 'FT-ES440-INFRA-MESH',
      version: 'Fortress Product Sheet',
      descriptionTr:
        'Askeri üs güvenlik sistemleri ve sınır karakollarında kablo çekmenin imkansız olduğu yerlerde yüksek hızlı omurga oluşturan mesh radyo.',
      descriptionEn:
        'Ruggedized outdoor mesh access point engineered to withstand extreme weather while providing continuous cryptographic routing.',
      technicalOverviewTr:
        'FastPath protokolüyle her 5 milisaniyede en iyi alternatif hattı hesaplar, bir düğüm vurulsa bile ağ 100ms içinde alternatiften devam eder.',
      technicalOverviewEn:
        'Dynamic routing algorithms reroute packets across surviving mesh nodes within milliseconds in case of node destruction.',
      electricalSpecs: [{ key: 'Power Input', value: 'Standard 802.3at PoE+ or 12-24V DC auxiliary' }],
      physicalSpecs: [{ key: 'Weight', value: '2.8 kg sealed weatherproof enclosure' }],
      environmentalSpecs: [{ key: 'Temperature', value: '-40°C to +70°C operation' }],
    },
  },
  {
    id: 'fortress-emp820',
    imageUrl: '/images/partners/fortress/Hardware-Crypto-FPGA-and-TRNG.jpg',
    name: 'Fortress EMP820 Gömülü OEM Taktiksel Mesh Modülü',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Taktiksel Mesh & Askeri Kablosuz',
    categoryEn: 'Tactical Wireless Mesh',
    summaryTr:
      'İnsansız Hava Araçları (İHA), zırhlı kara robotları ve özel askeri donanımların içine entegre edilmek üzere tasarlanmış minyatür OEM mesh kartı.',
    summaryEn:
      'Embedded OEM tactical mesh board designed for direct integration into unmanned aerial vehicles (UAVs), robotics, and defense electronics.',
    specs: [
      { labelTr: 'Boyutlar / Ağırlık', labelEn: 'Form Factor', val: 'Ultra Kompakt OEM Kart Boyutu, Sadece 120 Gram' },
      { labelTr: 'Mesh Kapasitesi', labelEn: 'Mesh Capacity', val: 'FastPath Mesh ile 54 Mbps Gerçek Zamanlı HD Video & Telemetri' },
      { labelTr: 'Şifreleme', labelEn: 'Security', val: 'FIPS 140-2 Donanımsal AES-256 Şifreleyici Çip' },
      { labelTr: 'Arayüzler', labelEn: 'Interfaces', val: 'Ethernet TTL, Seri Port (RS-232/422), GPIO ve Çift RF Konnektör' },
    ],
    compliance: ['FIPS 140-2 Validation', 'MIL-STD-810G Titreşim & Şok', 'RoHS'],
    datasheetContent: {
      partNumber: 'FT-EMP820-OEM-BOARD',
      version: 'Fortress OEM Specs',
      descriptionTr:
        'globalforte.com anahtar kelimelerinde ve Fortress ürünlerinde yer alan EMP820, İHA ve askeri araç üreticilerinin doğrudan cihazına taktığı karttır.',
      descriptionEn:
        'OEM board offering native tactical ad-hoc mesh networking for drone manufacturers and unmanned ground reconnaissance platforms.',
      technicalOverviewTr:
        'Robotun kamerasından gelen görüntüyü ve telemetri verilerini havada şifreleyerek yer istasyonundaki ana mesh ağına bağlar.',
      technicalOverviewEn:
        'Encrypts telemetry and streaming sensor video directly at the payload source before transmitting over tactical RF.',
      electricalSpecs: [{ key: 'Power Supply', value: '5V - 12V DC low power draw' }],
      physicalSpecs: [{ key: 'Form Factor', value: 'Mini-PCIe / OEM standalone stack board' }],
      environmentalSpecs: [{ key: 'Vibration', value: 'Tested for airborne airframe vibration profiles' }],
    },
  },
  {
    id: 'fortress-ds310',
    name: 'Fortress DS310 NSA Suite B Donanımsal Kripto İstemcisi',
    imageUrl: '/images/partners/fortress/Hardware-Crypto-FPGA-and-TRNG.jpg',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Ağ Güvenliği & Donanımsal Şifreleme',
    categoryEn: 'Hardware Cryptographic Client',
    summaryTr:
      'Mobil komuta araçları ve taktiksel saha ekipleri için NSA Suite B kriptografik standartlarında donanımsal tünel açan taşınabilir şifreleme cihazı.',
    summaryEn:
      'Portable hardware encryption client enforcing NSA Suite B algorithms for field operations, forward command posts, and mobile headquarters.',
    specs: [
      { labelTr: 'Kripto Standardı', labelEn: 'Standard', val: 'NSA Suite B (AES-256, ECDSA P-384, ECDH P-384, SHA-384)' },
      { labelTr: 'FIPS Onayı', labelEn: 'Validation', val: 'FIPS 140-2 Seviye 2/3 Onaylı Donanım' },
      { labelTr: 'Ağ Hatları', labelEn: 'Network', val: 'Dual 10/100/1000 Ethernet (Kırmızı Hat / Siyah Hat Ayrımı)' },
      { labelTr: 'Kullanım', labelEn: 'Mobility', val: 'Sıfır İstemci Yazılımı (Bağlanan Bilgisayarda Program Gerektirmez)' },
    ],
    compliance: ['NSA Suite B Compliant', 'FIPS 140-2 Certified', 'MIL-STD-810F'],
    datasheetContent: {
      partNumber: 'FT-DS310-SUITE-B',
      version: 'Fortress Product Sheet',
      descriptionTr:
        'Sahadaki askeri dizüstü bilgisayarların internet üzerinden güvenli karargah ağına Suite B algoritmalarıyla bağlanmasını sağlar.',
      descriptionEn:
        'Hardware-enforced secure micro-gateway bridging field computing equipment into classified defense enterprise intranets.',
      technicalOverviewTr:
        'Kırmızı (gizli veri) ve Siyah (şifreli kamu ağı) hatları fiziksel olarak birbirinden yalıtılmıştır.',
      technicalOverviewEn:
        'Strict Red/Black physical bus separation prevents unintended data spillage between clear and encrypted domains.',
      electricalSpecs: [{ key: 'Input', value: '12V DC vehicle adapter or 100-240V AC pack' }],
      physicalSpecs: [{ key: 'Weight', value: '800 grams ruggedized aluminum casing' }],
      environmentalSpecs: [{ key: 'Operating', value: '-20°C to +60°C' }],
    },
  },
  {
    id: 'fortress-fips-client-773',
    imageUrl: '/images/partners/fortress/suite-b.jpg',
    name: 'Fortress Secure Client FIPS 140-2 Sertifika #773 VPN İstemcisi',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Savunma Yazılımı & Güvenli İstemci',
    categoryEn: 'Tactical VPN Software',
    summaryTr:
      'NIST FIPS 140-2 Doğrulama Sertifikası #773 sahibi, askeri dizüstü bilgisayarlarda çalışan yüksek güvenlikli IPsec/Katman-2 şifreleme yazılımı.',
    summaryEn:
      'NIST FIPS 140-2 Validation Certificate #773 certified software encryption client providing secure end-to-end tunneling for defense assets.',
    specs: [
      { labelTr: 'NIST Sertifikası', labelEn: 'NIST Certificate', val: 'FIPS 140-2 Doğrulama Sertifikası #773 (Resmi NIST Onaylı)' },
      { labelTr: 'Katman Desteği', labelEn: 'Layers', val: 'Katman 2 (Ethernet MACsec) ve Katman 3 (IPsec) Eşzamanlı Tünelleme' },
      { labelTr: 'Algoritma', labelEn: 'Algorithms', val: 'FIPS Onaylı AES-256, 3DES, HMAC-SHA-256' },
      { labelTr: 'Platform', labelEn: 'Platform', val: 'Windows XP/7/10/11, Windows Embedded, Linux Askeri Dağıtımlar' },
    ],
    compliance: ['NIST FIPS 140-2 Cert #773', 'DoD Directive 8500.2', 'Common Criteria'],
    datasheetContent: {
      partNumber: 'FT-SECURE-CLIENT-773',
      version: 'NIST Cert #773 Spec',
      descriptionTr:
        'globalforte.com arama etiketlerinde ve Fortress resmi belgelerinde özel olarak anılan, resmi FIPS #773 onaylı taktiksel istemci.',
      descriptionEn:
        'Cryptographic endpoint client specifically certified under NIST Certificate #773 for classified government mobile workers.',
      technicalOverviewTr:
        'Kablosuz Wi-Fi veya 3G/4G bağlantısı üzerinden geçerken veriyi işletim sisteminin ağ yığınında doğrudan şifreler.',
      technicalOverviewEn:
        'Intercepts NDIS kernel network frames to encrypt raw outgoing packets before hardware NIC transmission.',
      electricalSpecs: [{ key: 'Footprint', value: 'Kernel-mode driver, minimal CPU load' }],
      physicalSpecs: [{ key: 'Distribution', value: 'MSI enterprise installer with GPO deployment' }],
      environmentalSpecs: [{ key: 'Testing', value: 'Validated on NIST test harnesses' }],
    },
  },
  {
    id: 'fortress-af-secure-client',
    imageUrl: '/images/partners/fortress/suite-b.jpg',
    name: 'Fortress AF Secure Client FIPS 140-1 Sertifika #358 Taktik İstemcisi',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Savunma Yazılımı & Güvenli İstemci',
    categoryEn: 'Tactical VPN Software',
    summaryTr:
      'Hava Kuvvetleri ve müttefik hava unsurları için özel olarak geliştirilmiş, FIPS Sertifikası #358 onaylı güvenli taktiksel istemci.',
    summaryEn:
      'Air Force tactical secure client certified under FIPS 140-1 Certificate #358 for airborne operations and flight-line telemetry.',
    specs: [
      { labelTr: 'Sertifika', labelEn: 'Validation', val: 'FIPS 140-1 Sertifika #358 (Air Force & DoD Görev Onaylı)' },
      { labelTr: 'Görev Alanı', labelEn: 'Mission', val: 'Hava Üssü Uçuş Hattı Bakım Bilgisayarları & Taktik Saha Terminalleri' },
      { labelTr: 'Protokoller', labelEn: 'Protocols', val: 'Fortress Secure Protocol (FSP) & Donanım Anahtar Koruması' },
      { labelTr: 'Güvenlik', labelEn: 'Features', val: 'Ağ Bağlantısı Kesildiğinde Otomatik Acil Sıfırlama (Zeroize)' },
    ],
    compliance: ['NIST FIPS 140-1 Cert #358', 'US Air Force Flightline Approved'],
    datasheetContent: {
      partNumber: 'FT-AF-CLIENT-358',
      version: 'FIPS #358 Data Sheet',
      descriptionTr:
        'Hava Kuvvetleri yer bakım ekiplerinin uçak aviyonik sistemlerine bağlanırken kablosuz sinyallerini düşman dinlemelerine karşı koruyan istemci.',
      descriptionEn:
        'Flightline maintenance wireless security client preventing electromagnetic eavesdropping during avionics diagnostics.',
      technicalOverviewTr:
        'Özel şifreli protokolü sayesinde standart Wi-Fi dinleyicileri sinyali yalnızca anlamsız gürültü olarak görür.',
      technicalOverviewEn:
        'Masks SSID and payload traffic, preventing passive electronic intelligence sensors from detecting active node presence.',
      electricalSpecs: [{ key: 'Deployment', value: 'Ruggedized flightline Toughbook laptops' }],
      physicalSpecs: [{ key: 'Integrity', value: 'Digitally signed tamper-proof kernel binaries' }],
      environmentalSpecs: [{ key: 'Compliance', value: 'Military avionics ramp test certified' }],
    },
  },
  {
    id: 'fortress-maps',
    imageUrl: '/images/partners/fortress/MIMO.jpg',
    name: 'Fortress FC-MAPS Mesh Otomatik Konumlandırma & Ağ Yönetim Yazılımı',
    brandId: 'fortress',
    brandName: 'Fortress Technologies',
    categoryTr: 'Savunma Yazılımı & Yönetim Konsolu',
    categoryEn: 'Mesh Network Management',
    summaryTr:
      'Sahadaki tüm hareketli askeri araçların, helikopterlerin ve personelin mesh konumlarını coğrafi harita (GIS) üzerinde canlı gösteren yönetim yazılımı.',
    summaryEn:
      'Geospatial mesh management console displaying live topological positions, RF link quality, and encryption statuses for mobile assets.',
    specs: [
      { labelTr: 'Harita Desteği', labelEn: 'GIS Support', val: 'Askeri CADRG, GeoTIFF, Google Maps ve Özel Vektör Haritalar' },
      { labelTr: 'Canlı Telemetri', labelEn: 'Telemetry', val: 'Her Düğümün GPS Konumu, RF Sinyal Gücü (RSSI), Paket Kaybı' },
      { labelTr: 'Kripto Yönetimi', labelEn: 'Crypto Config', val: 'Havadan (Over-The-Air) Güvenli Anahtar Dağıtımı & Yenileme' },
      { labelTr: 'Alarm Sistemi', labelEn: 'Alarms', val: 'Hat Kopması, Jamming (Karıştırma) Tespiti ve Kurcalama Uyarıları' },
    ],
    compliance: ['STANAG 4586', 'DoD GIS Guidelines', 'FIPS 140-2 Management'],
    datasheetContent: {
      partNumber: 'FT-MAPS-SERVER-V4',
      version: 'Fortress MAPS Sheet',
      descriptionTr:
        'Operasyon komuta merkezinde dev ekranlarda sahadaki tüm zırhlı araçların kablosuz bağlantı durumunu harita üzerinde canlı izletir.',
      descriptionEn:
        'Situational awareness tactical mesh software providing visual situational picture for command staff during rapid field maneuvers.',
      technicalOverviewTr:
        'Düğüm hareket ettikçe linklerin kopmadan diğer düğüme nasıl devredildiğini görselleştirir, zayıf sinyalli bölgeleri uyarır.',
      technicalOverviewEn:
        'Calculates real-time RF propagation heatmaps across terrain elevation models to optimize relay vehicle positioning.',
      electricalSpecs: [{ key: 'Server Platform', value: 'Linux Red Hat / Windows Server workstation' }],
      physicalSpecs: [{ key: 'Client GUI', value: 'Multi-monitor tactical operations center view' }],
      environmentalSpecs: [{ key: 'Reliability', value: 'Hot-standby redundant GIS server cluster' }],
    },
  },

  // ==========================================
  // SPYRUS ADDITIONAL PRODUCTS
  // ==========================================
  {
    id: 'spyrus-hydra-mcafee-vip',
    imageUrl: '/images/partners/spyrus/spyrus9.jpg',
    name: 'SPYRUS Hydra PC VIP USB Şifreli Bellek (McAfee Korumalı)',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Token & Donanım Şifreleme',
    categoryEn: 'Secure Encrypted USB',
    summaryTr:
      'Donanımsal AES-256 şifreleme ve dahili McAfee antivirüs tarama motoru barındıran, zararlı yazılımların kurumsal ağa girmesini engelleyen VIP bellek.',
    summaryEn:
      'Military-grade hardware-encrypted USB drive with on-board McAfee anti-malware engine scanning all inbound and outbound files in real time.',
    specs: [
      { labelTr: 'Donanım Şifreleme', labelEn: 'Encryption', val: 'Dahili Kripto İşlemci ile Gerçek Zamanlı AES-256-CBC' },
      { labelTr: 'Antivirüs Motoru', labelEn: 'Antivirus', val: 'Dahili McAfee VirusScan Motoru (Bilgisayardan Bağımsız Çalışır)' },
      { labelTr: 'FIPS Seviyesi', labelEn: 'FIPS Level', val: 'FIPS 140-2 Seviye 3 Kurcalama Tespit Zırhı' },
      { labelTr: 'Kapasite', labelEn: 'Capacities', val: '16 GB, 32 GB, 64 GB, 128 GB Yüksek Hızlı SLC/MLC Flaş' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'McAfee Tested', 'RoHS', 'TAA Compliant'],
    datasheetContent: {
      partNumber: 'SP-HYDRA-VIP-MCAFEE',
      version: 'Spyrus VIP Brief',
      descriptionTr:
        'globalforte.com anahtar kelimelerinde "hydra pc protected vip usb encryption drives with mcafee antivirus scanning" olarak geçen resmi ürün.',
      descriptionEn:
        'Zero-trust portable flash storage solution sanitizing incoming files with embedded antivirus before permitting data read operations.',
      technicalOverviewTr:
        'İçine atılan her dosya donanım üzerindeki antivirüs motoru tarafından taranır; virüslü dosyalar ana makineye bulaşmadan izole edilir.',
      technicalOverviewEn:
        'Isolates files inside internal quarantine sandbox until embedded signature definitions verify payload clean status.',
      electricalSpecs: [{ key: 'Interface', value: 'SuperSpeed USB 3.0 / 2.0 compatible' }],
      physicalSpecs: [{ key: 'Enclosure', value: 'Ruggedized metal alloy tamper-evident casing' }],
      environmentalSpecs: [{ key: 'Waterproof', value: 'MIL-STD-810F immersion tested' }],
    },
  },
  {
    id: 'spyrus-secure-pocket-drive',
    imageUrl: '/images/partners/spyrus/securepd.png',
    name: 'SPYRUS Secure Pocket Drive Askeri Standartta Şifreli Taşınabilir SSD',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Token & Donanım Şifreleme',
    categoryEn: 'Secure Encrypted USB',
    summaryTr:
      'Yüksek kapasiteli, donanımsal XTS-AES 256 şifrelemeli ve FIPS 140-2 Seviye 3 sertifikalı taşınabilir harici SSD depolama birimi.',
    summaryEn:
      'High-capacity portable solid state drive equipped with hardware-enforced XTS-AES 256 encryption and tamper-destroy mechanisms.',
    specs: [
      { labelTr: 'Kapasite Seçenekleri', labelEn: 'Capacities', val: '256 GB, 512 GB, 1 TB, 2 TB Askeri Seviye SSD' },
      { labelTr: 'Kriptografik Koruma', labelEn: 'Crypto Core', val: 'Donanımsal XTS-AES 256-bit ve Donanımsal TRNG Anahtar Üreteci' },
      { labelTr: 'Kimlik Doğrulama', labelEn: 'Auth', val: 'Akıllı Kart Çipli PKI veya Çok Karakterli Güçlü Parola Girişi' },
      { labelTr: 'Fiziksel Güvenlik', labelEn: 'Physical', val: 'Magnezyum Alaşımlı Epoksi Kaplı Kasa, Su ve Toz Geçirmez (MIL-STD)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'MIL-STD-810G', 'IP68', 'NATO Secret Approved'],
    datasheetContent: {
      partNumber: 'SP-SECURE-POCKET-DRV',
      version: 'Spyrus Product Sheet',
      descriptionTr:
        'Saha operasyonlarında gizli keşif verilerini ve istihbarat haritalarını güvenle taşımak için üretilmiş kırılmaz şifreli SSD.',
      descriptionEn:
        'Tactical storage device trusted by intelligence agents and defense specialists transporting mission payloads into denied territory.',
      technicalOverviewTr:
        'Cihaz kasası açılmaya çalışıldığında içindeki kriptografik çip otomatik olarak voltaj boşaltarak anahtarları saniyenin binde birinde yok eder.',
      technicalOverviewEn:
        'Zeroization circuit purges master encryption keys within microseconds if physical tamper switches detect casing breach.',
      electricalSpecs: [{ key: 'Bus Speed', value: 'USB 3.1 Gen 2 up to 500 MB/s read/write' }],
      physicalSpecs: [{ key: 'Dimensions', value: '100 x 55 x 12 mm, 140 grams' }],
      environmentalSpecs: [{ key: 'Shock', value: 'Survives 3-meter drop onto concrete' }],
    },
  },
  {
    id: 'spyrus-pocketvault-3x',
    imageUrl: '/images/partners/spyrus/PocketVault.png',
    name: 'SPYRUS PocketVault P-3X Donanımsal Donanımlı Güvenli SSD',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Token & Donanım Şifreleme',
    categoryEn: 'Secure Encrypted USB',
    summaryTr:
      'Gelişmiş Eliptik Eğri Kriptografisi (ECC) ve FIPS 140-2 Seviye 3 sertifikalı donanım mikrodenetleyicisi ile korunan USB SSD sürücü.',
    summaryEn:
      'High-performance secure solid state drive featuring advanced Elliptic Curve Cryptography (ECC) and Suite B algorithm acceleration.',
    specs: [
      { labelTr: 'Kripto Algoritmaları', labelEn: 'Algorithms', val: 'ECC P-384, RSA 2048/4096, AES-256-XTS Donanım Çipi' },
      { labelTr: 'Kapasite', labelEn: 'Capacity', val: '128 GB - 512 GB Yüksek Hızlı SSD Flaş Bellek' },
      { labelTr: 'Sertifikasyon', labelEn: 'Validation', val: 'FIPS 140-2 Level 3 & Common Criteria Onaylı' },
      { labelTr: 'İşletim Sistemi', labelEn: 'OS Support', val: 'Windows, macOS, Linux, Android (Sürücüsüz Çalışma)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'NSA Suite B', 'Common Criteria EAL5+'],
    datasheetContent: {
      partNumber: 'SP-POCKETVAULT-P3X',
      version: 'Spyrus P-3X PB',
      descriptionTr:
        'globalforte.com Spyrus indirme merkezinde resmi teknik broşürü yer alan PocketVault P-3X, kurumsal veri sızıntılarına karşı tam korumadır.',
      descriptionEn:
        'FIPS 140-2 Level 3 encrypted storage platform with enterprise remote manageability and self-destruct security options.',
      technicalOverviewTr:
        'Donanım üzerinde çalışan güvenlik yazılımı, ana makinenin işletim sisteminden tamamen izole bir kripto ortamı sağlar.',
      technicalOverviewEn:
        'Executes cryptographic security services on isolated microchip independently of host machine OS.',
      electricalSpecs: [{ key: 'Connector', value: 'USB 3.0 Type-A connector' }],
      physicalSpecs: [{ key: 'Body', value: 'Anodized aluminum with laser-etched serial numbers' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-10°C to +60°C' }],
    },
  },
  {
    id: 'spyrus-rosetta-usb',
    imageUrl: '/images/partners/spyrus/spyrus6.jpg',
    name: 'SPYRUS Rosetta Series II USB Kripto Donanım Aygıtı',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Hardware Token & USB PKI',
    summaryTr:
      'Rosetta Series II akıllı kart çipini doğrudan USB arayüzü ile sunan, kart okuyucu gerektirmeyen kompakt FIPS 140-2 Seviye 3 token.',
    summaryEn:
      'Direct USB-form-factor cryptographic device implementing the full Rosetta Series II FIPS 140-2 Level 3 smartcard operating system.',
    specs: [
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Crypto Core', val: 'SPYRUS Rosetta SP1000 Kriptografik Mikrodenetleyici' },
      { labelTr: 'Algoritma Desteği', labelEn: 'Algorithms', val: 'Suite B (ECDSA P-384, ECDH, AES-256, SHA-384)' },
      { labelTr: 'Sertifikasyon', labelEn: 'Cert', val: 'FIPS 140-2 Seviye 3 Tamper-Evident Onaylı' },
      { labelTr: 'Arayüzler', labelEn: 'Standards', val: 'PKCS#11, Microsoft CAPI/CNG, CSP, PC/SC Emülasyonu' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'NSA Suite B', 'Common Criteria EAL5+'],
    datasheetContent: {
      partNumber: 'SP-ROSETTA-USB-II',
      version: 'Rosetta Series II PB',
      descriptionTr:
        'globalforte.com indirme listesinde DSRosettaSeriesIISC_USB.pdf adıyla yer alan resmi teknik ürün föyüne sahiptir.',
      descriptionEn:
        'Smartcard-in-a-key USB token designed for government PKI deployments where external smartcard readers are inconvenient.',
      technicalOverviewTr:
        'Harici kart okuyucuya gerek duymadan doğrudan USB portuna takılarak masaüstü ve dizüstü bilgisayarlarda akıllı kart gibi algılanır.',
      technicalOverviewEn:
        'Appears to Windows as a native CCID smartcard device without requiring specialized kernel drivers.',
      electricalSpecs: [{ key: 'Bus Supply', value: '5V DC via standard USB port' }],
      physicalSpecs: [{ key: 'Dimensions', value: '58 x 16 x 8 mm, 12 grams' }],
      environmentalSpecs: [{ key: 'Case', value: 'Impact-resistant polycarbonate' }],
    },
  },
  {
    id: 'spyrus-rosetta-sdhc',
    name: 'SPYRUS Rosetta SDHC Endüstriyel Şifreli Hafıza Kartı',
    imageUrl: '/images/partners/spyrus/RosettaSDHC-product-image.jpg',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Token & Donanım Şifreleme',
    categoryEn: 'Secure Memory Card',
    summaryTr:
      'Askeri el telsizleri, güvenli kameralar ve saha tabletleri için SDHC yuvasına takılan FIPS 140-2 Seviye 3 onaylı kriptografik hafıza kartı.',
    summaryEn:
      'Industrial SDHC memory card featuring built-in FIPS 140-2 Level 3 crypto engine and secure hardware key vault for mobile devices.',
    specs: [
      { labelTr: 'Form Faktörü', labelEn: 'Form Factor', val: 'Standart SD / SDHC Bellek Kartı Boyutu' },
      { labelTr: 'Depolama', labelEn: 'Storage', val: '8 GB, 16 GB, 32 GB Yüksek Hızlı Endüstriyel SLC Flaş' },
      { labelTr: 'Şifreleme', labelEn: 'Security', val: 'Donanımsal AES-256 Sektör Şifreleme & Kripto Akıllı Çip' },
      { labelTr: 'Dayanıklılık', labelEn: 'Durability', val: 'Geniş Çalışma Sıcaklığı (-40°C / +85°C), Şok ve X-Ray Koruması' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'SD Association Spec', 'MIL-STD-810G'],
    datasheetContent: {
      partNumber: 'SP-ROSETTA-SDHC-CARD',
      version: 'Rosetta SDHC PB',
      descriptionTr:
        'globalforte.com indirme merkezinde Rosetta_SDHC_Card.pdf dosyasıyla sunulan, askeri haberleşme cihazlarında kullanılan kripto kartı.',
      descriptionEn:
        'Engineered for tactical radios, drones, and rugged tablets needing removable storage that stays permanently encrypted.',
      technicalOverviewTr:
        'Cihazın SD yuvasına takıldığında hem yüksek hızlı veri deposu hem de donanımsal kimlik doğrulayıcı olarak eşzamanlı çalışır.',
      technicalOverviewEn:
        'Integrates a FIPS 140-2 Level 3 smartcard controller and high-speed flash controller onto a single ceramic substrate.',
      electricalSpecs: [{ key: 'Voltage', value: '2.7V to 3.6V standard SD bus power' }],
      physicalSpecs: [{ key: 'Form Factor', value: '32 x 24 x 2.1 mm standard SD format' }],
      environmentalSpecs: [{ key: 'Temperature', value: '-40°C to +85°C industrial wide-temp' }],
    },
  },
  {
    id: 'spyrus-rosetta-micro-ii',
    imageUrl: '/images/partners/spyrus/spyrus5.jpg',
    name: 'SPYRUS Rosetta Micro Series II Minyatür Kripto Çip',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Micro Hardware Security',
    summaryTr:
      'Akıllı telefonlar, gizli gözetim kameraları ve minyatür sensörler için MicroSD formatında tam teşekküllü FIPS kripto modülü.',
    summaryEn:
      'MicroSD form-factor hardware cryptographic module delivering Suite B public key cryptography to handhelds and covert devices.',
    specs: [
      { labelTr: 'Minyatür Boyut', labelEn: 'Form Factor', val: 'Standart MicroSD / TransFlash (15 x 11 x 1 mm)' },
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Crypto Chip', val: 'Dahili FIPS 140-2 Seviye 3 Onaylı Rosetta Güvenlik Denetleyicisi' },
      { labelTr: 'Algoritmalar', labelEn: 'Algorithms', val: 'Suite B (ECDSA, ECDH, AES-256-GCM, SHA-384)' },
      { labelTr: 'Kullanım', labelEn: 'Applications', val: 'Şifreli Taktik Telefon Görüşmesi, Saha Fotoğraf ve Video Şifreleme' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'MicroSD Spec', 'Common Criteria EAL5+'],
    datasheetContent: {
      partNumber: 'SP-ROSETTA-MICRO-II',
      version: 'Rosetta Micro PB',
      descriptionTr:
        'globalforte.com indirme merkezinde DSRosettaMicroSeriesII.pdf adıyla yer alan minyatür kripto donanımı.',
      descriptionEn:
        'Micro-sized hardware security module providing defense-grade cryptographic acceleration inside smartphones and covert gear.',
      technicalOverviewTr:
        'Telefonun MicroSD yuvasına takıldığında sesli görüşmeleri ve yazışmaları gerçek zamanlı olarak uçtan uca şifreler.',
      technicalOverviewEn:
        'Enables end-to-end encrypted voice calling and classified messaging on commercially available Android handsets.',
      electricalSpecs: [{ key: 'Interface', value: 'MicroSD SPI and SD bus mode' }],
      physicalSpecs: [{ key: 'Dimensions', value: '15 x 11 x 1 mm, < 0.5 grams' }],
      environmentalSpecs: [{ key: 'Operating', value: '-25°C to +85°C' }],
    },
  },
  {
    id: 'spyrus-mysafeid-ca',
    imageUrl: '/images/partners/spyrus/sems.png',
    name: 'SPYRUS MySafeID Certification Authority (CA) Sertifika Makamı',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'PKI & Sayısal Kimlik',
    categoryEn: 'Public Key Infrastructure (PKI)',
    summaryTr:
      'Savunma sanayii ve kurumsal şirketler için kendi bünyelerinde bağımsız ve yüksek güvenlikli kök sertifika makamı (CA) kurma yazılımı.',
    summaryEn:
      'Turnkey enterprise Certification Authority software engine managing high-assurance digital certificates and hardware token lifecycles.',
    specs: [
      { labelTr: 'Sertifika Türleri', labelEn: 'Cert Types', val: 'X.509 v3, eIDAS, Askeri PIV/CAC Uyumlu Sertifikalar' },
      { labelTr: 'Kripto Motoru', labelEn: 'Crypto Engine', val: 'FIPS 140-2 Seviye 3 Donanımsal HSM Entegrasyonu' },
      { labelTr: 'Protokoller', labelEn: 'Protocols', val: 'SCEP, CMP, EST, OCSP, CRL Dağıtım Noktaları' },
      { labelTr: 'Ölçeklenebilirlik', labelEn: 'Scalability', val: 'Milyonlarca Aktif Sertifika ve Revokasyon Yönetimi' },
    ],
    compliance: ['X.509 RFC 5280', 'FIPS 140-2', 'Common Criteria', 'DoD PKI Spec'],
    datasheetContent: {
      partNumber: 'SP-MYSAFEID-CA-ENG',
      version: 'Spyrus MySafeID PB',
      descriptionTr:
        'Kurumların yabancı sertifika sağlayıcılarına bağımlı olmadan kendi milli ve bağımsız PKI altyapılarını kurmasını sağlar.',
      descriptionEn:
        'Allows enterprises and defense bodies to operate sovereign root certificate authorities backed by physical HSMs.',
      technicalOverviewTr:
        'Kök anahtar oluşturma, ara sertifika imzalama ve CRL (iptal listesi) yayımlama adımlarını denetlenebilir kılar.',
      technicalOverviewEn:
        'Enforces four-eyes dual-authorization workflow for all critical certificate lifecycle operations.',
      electricalSpecs: [{ key: 'Platform', value: 'Hardened Linux OS / Windows Server cluster' }],
      physicalSpecs: [{ key: 'Backend', value: 'Direct PKCS#11 hardware security module driver' }],
      environmentalSpecs: [{ key: 'Security', value: 'Immutable tamper-proof audit trails' }],
    },
  },
  {
    id: 'spyrus-signal-identity',
    imageUrl: '/images/partners/spyrus/spyrus10.jpg',
    name: 'SPYRUS Signal Identity Manager Kimlik Yönetim Sistemi',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'PKI & Sayısal Kimlik',
    categoryEn: 'Identity & Access Management',
    summaryTr:
      'Tüm çalışanların donanımsal tokenlarını, akıllı kartlarını ve şifreleme anahtarlarını tek merkezden dağıtan ve yöneten kurumsal platform.',
    summaryEn:
      'Enterprise identity orchestrator provisioning credentials, enforcing smartcard policies, and managing distributed security keys.',
    specs: [
      { labelTr: 'Yönetim Alanı', labelEn: 'Scope', val: 'Rosetta Kartları, Hydra USB Sürücüleri ve P-384 Depolama Aygıtları' },
      { labelTr: 'Dizin Uyumu', labelEn: 'Directory', val: 'Microsoft Active Directory, Azure AD, Okta, LDAP' },
      { labelTr: 'Güvenlik Politikası', labelEn: 'Policy', val: 'Zorunlu Şifre Karmaşıklığı, Otomatik Cihaz Kilitleme ve İptal' },
      { labelTr: 'Raporlama', labelEn: 'Audit', val: 'Detaylı Cihaz Seri Numarası ve Kullanıcı Eşleştirme Kayıtları' },
    ],
    compliance: ['DoD Directive 8570', 'FIPS 140-2 Management', 'NIST SP 800-53'],
    datasheetContent: {
      partNumber: 'SP-SIGNAL-ID-MGR',
      version: 'DSSignalIdentityManager.pdf',
      descriptionTr:
        'globalforte.com indirme merkezinde resmi teknik broşürü yer alan Signal Identity Manager, token dağıtımını otomatikleştirir.',
      descriptionEn:
        'Streamlines mass credential issuance, token tracking, and key escrow for defense organizations and enterprises.',
      technicalOverviewTr:
        'Bir çalışan şirketten ayrıldığında veya cihaz kaybolduğunda, tek tıkla cihazın uzaktan anahtarlarını siler.',
      technicalOverviewEn:
        'Provides instant remote cryptographic zeroization commands to disable compromised or lost physical endpoints.',
      electricalSpecs: [{ key: 'Deployment', value: 'On-premise secure server deployment' }],
      physicalSpecs: [{ key: 'Console', value: 'Role-based web portal with MFA enforcement' }],
      environmentalSpecs: [{ key: 'Database', value: 'Encrypted SQL enterprise repository' }],
    },
  },
  {
    id: 'spyrus-par-mini-reader',
    imageUrl: '/images/partners/spyrus/spyrus8.jpg',
    name: 'SPYRUS PAR MiniUSB Akıllı Kart Okuyucu Donanımı',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Smartcard Reader Hardware',
    summaryTr:
      'Taşınabilir dizüstü bilgisayarlar için ultra hafif, dayanıklı ve FIPS standartlarına uygun USB mini akıllı kart okuyucu.',
    summaryEn:
      'Ultra-compact USB smartcard reader designed for mobile field laptops and secure government smartcard authentication.',
    specs: [
      { labelTr: 'Kart Uyumluluğu', labelEn: 'Card Support', val: 'ISO 7816 Sınıf A, B, C (5V, 3V, 1.8V) Temaslı Akıllı Kartlar' },
      { labelTr: 'Bağlantı', labelEn: 'Interface', val: 'USB 2.0 Full Speed (CCID Uyumlu, Sürücüsüz Tak-Çalıştır)' },
      { labelTr: 'Kart Yuvası', labelEn: 'Slot Lifespan', val: '100.000+ Kart Takma/Çıkarma Ömürlü Hassas Kontaklar' },
      { labelTr: 'Boyutlar', labelEn: 'Dimensions', val: 'Kredi Kartı Boyutundan Küçük, 25 Gram Ultra Hafif Gövde' },
    ],
    compliance: ['ISO 7816-1/2/3/4', 'PC/SC Compliant', 'USB CCID', 'CE', 'FCC Class B'],
    datasheetContent: {
      partNumber: 'SP-PAR-MINI-USB-PB',
      version: 'DSPARMiniUSB.pdf',
      descriptionTr:
        'globalforte.com indirme listesinde DSPARMiniUSB.pdf olarak yer alan, çalışanların çantasında yer kaplamayan akıllı kart okuyucu.',
      descriptionEn:
        'Rugged micro-sized smartcard reader trusted by field personnel requiring portable CAC/PIV card logon capabilities.',
      technicalOverviewTr:
        'Windows, Linux ve macOS sistemlerinde hiçbir sürücü kurmadan doğrudan kart okumaya başlar.',
      technicalOverviewEn:
        'Native CCID driver implementation enables instantaneous plug-and-play operation across all major desktop operating systems.',
      electricalSpecs: [{ key: 'Power', value: 'USB bus-powered 5V DC' }],
      physicalSpecs: [{ key: 'Dimensions', value: '65 x 30 x 10 mm, 25 grams' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '0°C to 55°C' }],
    },
  },
  {
    id: 'spyrus-crypto-toolbox',
    imageUrl: '/images/partners/spyrus/sems.png',
    name: 'SPYRUS Crypto Toolbox Geliştirici Kriptografik Kütüphanesi',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Yazılım & SDK',
    categoryEn: 'Cryptographic SDK & Toolbox',
    summaryTr:
      'Yazılım geliştiricilerin kendi kurumsal uygulamalarına NSA Suite B algoritmalarını ve SPYRUS donanımlarını entegre etmesi için kapsamlı SDK.',
    summaryEn:
      'Comprehensive developer software development kit (SDK) providing turnkey APIs for Suite B crypto, token signing, and HSM access.',
    specs: [
      { labelTr: 'Geliştirme Dilleri', labelEn: 'APIs', val: 'C/C++, Java (JNI/JCE), Microsoft .NET (C#), Python' },
      { labelTr: 'Kripto Algoritmalar', labelEn: 'Algorithms', val: 'ECDSA P-384/521, ECDH, AES-GCM, SHA-384, RSA 4096' },
      { labelTr: 'Donanım Desteği', labelEn: 'Hardware', val: 'Rosetta Kartları, Hydra USB, PocketVault ve LYNKS HSM' },
      { labelTr: 'Örnek Kodlar', labelEn: 'Samples', val: 'Hazır İmzalama, Şifreleme, Sertifika Doğrulama Kod Örnekleri' },
    ],
    compliance: ['FIPS 140-2 Validated Library', 'PKCS#11 v2.20', 'Microsoft CNG'],
    datasheetContent: {
      partNumber: 'SP-CRYPTO-TOOLBOX-SDK',
      version: 'DSCryptoToolbox.pdf',
      descriptionTr:
        'globalforte.com indirme merkezinde DSCryptoToolbox.pdf adıyla sunulan, savunma yazılımları için resmi kriptografik araç kiti.',
      descriptionEn:
        'Software developer toolkit streamlining the integration of government-grade cryptography into enterprise applications.',
      technicalOverviewTr:
        'Tüm karmaşık matematiksel eliptik eğri hesaplamalarını donanım çipine yaptırarak geliştiriciye basit bir API fonksiyonu sunar.',
      technicalOverviewEn:
        'Abstracts low-level hardware cryptographic protocols into intuitive high-level function calls for development teams.',
      electricalSpecs: [{ key: 'Compatibility', value: 'Cross-platform Windows, Linux, Android' }],
      physicalSpecs: [{ key: 'Packaging', value: 'Electronic software distribution with developer license' }],
      environmentalSpecs: [{ key: 'Documentation', value: 'Complete API reference guide and sample projects' }],
    },
  },
  {
    id: 'spyrus-sems',
    name: 'SPYRUS SEMS Güvenlik Girişimi Kurumsal Yönetim Sistemi',
    imageUrl: '/images/partners/spyrus/sems.png',
    brandId: 'spyrus',
    brandName: 'SPYRUS',
    categoryTr: 'Kriptografik Yönetim Platformu',
    categoryEn: 'Security Management Platform',
    summaryTr:
      'Kurum genelindeki binlerce şifreli USB bellek, taşınabilir SSD ve Rosetta kartının merkezi envanter ve uzaktan güvenlik politikası sunucusu.',
    summaryEn:
      'Security Enterprise Management System (SEMS) enforcing cryptographic governance and geo-fencing policies across portable devices.',
    specs: [
      { labelTr: 'Merkezi Kontrol', labelEn: 'Control', val: 'Şifreli Bellekleri Uzaktan Kilitleme, Şifre Sıfırlama, İmha Komutu' },
      { labelTr: 'Cihaz Desteği', labelEn: 'Devices', val: 'Tüm SPYRUS Hydra, PocketVault ve Rosetta Donanımları' },
      { labelTr: 'Coğrafi Sınır', labelEn: 'Geo-Fencing', val: 'Şirket/Üs Dışında Cihazın Kendini Otomatik Kilitlemesi Kuralı' },
      { labelTr: 'Mevzuat Uyumu', labelEn: 'Compliance', val: 'Tam Denetim Kaydı ve ISO 27001 / FIPS 140-2 Uyum Raporları' },
    ],
    compliance: ['FIPS 140-2 Management', 'NIST SP 800-88', 'DoD Directive 8140'],
    datasheetContent: {
      partNumber: 'SP-SEMS-ENTERPRISE-V5',
      version: 'DSSEMS.pdf',
      descriptionTr:
        'globalforte.com indirme merkezinde DSSEMS.pdf olarak listelenen, kaybolan veya çalınan şifreli belleklerin uzaktan imhasını sağlayan sistem.',
      descriptionEn:
        'Central management platform preventing sensitive data breaches from lost or stolen portable storage peripherals.',
      technicalOverviewTr:
        'Cihaz şirket dışı bir bilgisayara takıldığında internete bağlandığı anda merkezden silme komutunu alarak hafızasını temizler.',
      technicalOverviewEn:
        'Transmits over-the-air cryptographic wipe commands to connected peripherals violating zero-trust organizational boundaries.',
      electricalSpecs: [{ key: 'Deployment', value: 'On-premise appliance or secure cloud instance' }],
      physicalSpecs: [{ key: 'Console', value: 'Web dashboard with real-time geographical threat map' }],
      environmentalSpecs: [{ key: 'High Availability', value: 'Active-passive clustering' }],
    },
  },

  // ==========================================
  // CRYPTOMATHIC ADDITIONAL PRODUCTS
  // ==========================================
  {
    id: 'cryptomathic-ocsp',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic OCSP Responder Çevrimiçi Sertifika Doğrulama Sunucusu',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'PKI & Sayısal Kimlik',
    categoryEn: 'Public Key Infrastructure (PKI)',
    summaryTr:
      'Milyonlarca e-Devlet ve bankacılık işleminde sayısal sertifikaların geçerliliğini milisaniyeler içinde doğrulayan yüksek performanslı OCSP motoru.',
    summaryEn:
      'High-throughput Online Certificate Status Protocol (OCSP) engine delivering millisecond certificate validation under RFC 6960.',
    specs: [
      { labelTr: 'Doğrulama Kapasitesi', labelEn: 'Throughput', val: 'Saniyede 20.000+ İmzalı OCSP Yanıtı (Donanım HSM Hızlandırmalı)' },
      { labelTr: 'Protokol Uyum', labelEn: 'Standards', val: 'RFC 6960 (OCSP), RFC 5019 (Hafif OCSP Profili), X.509' },
      { labelTr: 'Önbellek & Güvenlik', labelEn: 'Caching', val: 'Hafıza İçi İmzalı Yanıt Önbelleği (In-Memory Pre-Signed Responses)' },
      { labelTr: 'Yüksek Erişilebilirlik', labelEn: 'HA', val: '%99.999 Kesintisiz Çalışma Süresi & Coğrafi Dağıtık Küme' },
    ],
    compliance: ['RFC 6960', 'RFC 5019', 'Common Criteria EAL4+', 'eIDAS Qualified'],
    datasheetContent: {
      partNumber: 'CM-OCSP-RESPONDER-PRO',
      version: 'Cryptomathic OCSP PB',
      descriptionTr:
        'globalforte.com indirme merkezinde OCSP_Responder.pdf adıyla sunulan, Türkiye ve dünyadaki kritik PKI sistemlerinin doğrulama omurgası.',
      descriptionEn:
        'Ultra-fast certificate revocation checking appliance trusted by national trust service providers and central clearing houses.',
      technicalOverviewTr:
        'Her sertifika kontrolü için veritabanına gitmek yerine önceden HSM ile imzalanmış yanıtları bellekten mikro-saniyede servis eder.',
      technicalOverviewEn:
        'Employs deterministic pre-signing architectures to eliminate cryptographic processing latency during peak transaction surges.',
      electricalSpecs: [{ key: 'Deployment', value: 'Enterprise Linux / VMware / Containerized' }],
      physicalSpecs: [{ key: 'Hardware Support', value: 'Direct Luna HSM & ProtectServer integration' }],
      environmentalSpecs: [{ key: 'Reliability', value: 'Carrier-grade 99.999% uptime cluster' }],
    },
  },
  {
    id: 'cryptomathic-primeink',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic PrimeInk Güvenli Belge İmzası & Baskı Koruma',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'Sayısal İmza & Belge Güvenliği',
    categoryEn: 'Digital Document Security',
    summaryTr:
      'Resmi belgelerin, diplomaların, tapuların ve faturaların sahteciliğe karşı güvenli 2D barkod ve sayısal imza ile korunmasını sağlayan platform.',
    summaryEn:
      'Document security platform embedding cryptographic 2D barcodes into printed diplomas, land deeds, and invoices to prevent forgery.',
    specs: [
      { labelTr: 'Koruma Yöntemi', labelEn: 'Security Mode', val: 'Görünmez Sayısal Filigran & Kriptografik Şifreli 2D Barkod' },
      { labelTr: 'Doğrulama', labelEn: 'Verification', val: 'Standart Akıllı Telefon Kamerasıyla Çevrimdışı Belge Doğrulama' },
      { labelTr: 'İmzalama Hızı', labelEn: 'Throughput', val: 'Günde 1.000.000+ Belgeyi Toplu İmzalamak ve Barkodlamak' },
      { labelTr: 'Entegrasyon', labelEn: 'Integration', val: 'ERP, SAP, e-Fatura, Üniversite Öğrenci İşleri ve Tapu Sistemleri' },
    ],
    compliance: ['eIDAS Compliant', 'ISO 32000 (PDF/A)', 'RFC 3161 Zaman Damgası'],
    datasheetContent: {
      partNumber: 'CM-PRIMEINK-DOC-SEC',
      version: 'PrimeInk_Technical_Brochure.pdf',
      descriptionTr:
        'globalforte.com indirme merkezinde PrimeInk_Technical_Brochure.pdf adıyla yer alan resmi belge güvenliği teknolojisi.',
      descriptionEn:
        'Anti-counterfeiting document infrastructure linking paper printouts to immutable cryptographic digital certificates.',
      technicalOverviewTr:
        'Belgenin üzerindeki metin değiştirilirse veya sahte bir mühür vurulursa, telefonla okutulan barkod belgenin tahrif edildiğini anında gösterir.',
      technicalOverviewEn:
        'Encapsulates document metadata inside a digitally signed high-density matrix readable even after physical photocopying.',
      electricalSpecs: [{ key: 'Platform', value: 'Java enterprise service stack' }],
      physicalSpecs: [{ key: 'Output', value: 'High-resolution PDF, TIFF, vector postscript print streams' }],
      environmentalSpecs: [{ key: 'Security', value: 'Hardware HSM-backed signing keys' }],
    },
  },
  {
    id: 'cryptomathic-tsa',
    imageUrl: '/images/partners/cryptomathic/logo.gif',
    name: 'Cryptomathic Time Stamping Authority (TSA) RFC 3161 Sunucusu',
    brandId: 'cryptomathic',
    brandName: 'Cryptomathic',
    categoryTr: 'PKI & Sayısal Kimlik',
    categoryEn: 'Public Key Infrastructure (PKI)',
    summaryTr:
      'Elektronik imzalara, finansal işlemlere ve resmi belgelere atomik saat hassasiyetinde yasal geçerli zaman damgası basan sunucu.',
    summaryEn:
      'Certified RFC 3161 Time Stamping Authority server binding UTC atomic clock timestamps to digital signatures with legal non-repudiation.',
    specs: [
      { labelTr: 'Standart Uyumu', labelEn: 'Standards', val: 'RFC 3161, RFC 5816, eIDAS Nitelikli Elektronik Zaman Damgası' },
      { labelTr: 'Zaman Doğruluğu', labelEn: 'Clock Source', val: 'GPS / Galileo Atomik Saat Referansı (NTP / PTP IEEE 1588)' },
      { labelTr: 'İmzalama Hızı', labelEn: 'Performance', val: 'Saniyede 5.000+ Zaman Damgası Belgesi (Donanım HSM ile)' },
      { labelTr: 'Denetim', labelEn: 'Audit Log', val: 'Değiştirilemez Kriptografik Olay Günlüğü & Sürekli Zaman Sapması Kontrolü' },
    ],
    compliance: ['RFC 3161', 'ETSI EN 319 421 / 422', 'eIDAS Qualified', 'FIPS 140-2 Level 3 HSM'],
    datasheetContent: {
      partNumber: 'CM-TSA-SERVER-RFC3161',
      version: 'Time_Stamping_Authority.pdf',
      descriptionTr:
        'globalforte.com indirme merkezinde Time_Stamping_Authority.pdf adıyla sunulan, mahkemelerde yasal delil niteliği taşıyan zaman damgası sistemi.',
      descriptionEn:
        'Enterprise TSA providing legally binding proof of timestamp for financial transactions, code signing, and electronic contracts.',
      technicalOverviewTr:
        'Zaman kaynağında 1 mikrosaniyelik bir sapma tespit edildiğinde sistem imzalama yapmayı otomatik olarak durdurur ve alarm verir.',
      technicalOverviewEn:
        'Halts automated stamping immediately if time drift from reference atomic clock exceeds calibrated tolerance thresholds.',
      electricalSpecs: [{ key: 'Server', value: 'Hardened Linux appliance with redundant power' }],
      physicalSpecs: [{ key: 'Time Source', value: 'Dual redundant GPS/GNSS receiver antenna inputs' }],
      environmentalSpecs: [{ key: 'Security', value: 'FIPS Level 3 hardware security boundary' }],
    },
  },

  // ==========================================
  // REDLINE COMMUNICATIONS ADDITIONAL PRODUCTS
  // ==========================================
  {
    id: 'redline-rtg-connect-ow',
    imageUrl: '/images/partners/redline/rdl-3000-new.jpg',
    name: 'Redline RTG Connect-OW Dış Ortam Kablosuz Terminali',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Kablosuz Geniş Bant & WiMAX',
    categoryEn: 'Broadband Wireless',
    summaryTr:
      'Liman konteyner vinçleri (RTG), maden sahaları ve zorlu açık alan endüstriyel tesisler için yüksek dayanımlı dış ortam kablosuz istemcisi.',
    summaryEn:
      'Rugged outdoor wireless subscriber terminal engineered for rubber-tired gantry (RTG) cranes, open-pit mines, and container ports.',
    specs: [
      { labelTr: 'Uygulama Alanı', labelEn: 'Application', val: 'Liman Konteyner Vinçleri (RTG), Açık Ocak Maden Kamyonları' },
      { labelTr: 'Frekanslar', labelEn: 'Frequencies', val: '2.0 - 6.0 GHz Geniş Bant Desteği (Lisanslı & Lisanssız Bantlar)' },
      { labelTr: 'Gövde Dayanımı', labelEn: 'Enclosure', val: 'IP67 / NEMA 4X Deniz Suyu ve Tuz Korozyonuna Dayanıklı Kasa' },
      { labelTr: 'Gecikme Süresi', labelEn: 'Latency', val: '< 3 ms Düşük Gecikmeyle PLC ve Otomasyon Kontrolü' },
    ],
    compliance: ['IP67 / NEMA 4X', 'MIL-STD-810G Titreşim & Şok', 'IEEE 802.16 Uyumlu', 'RoHS'],
    datasheetContent: {
      partNumber: 'RL-RTG-CONNECT-OW',
      version: 'Redline RTG Datasheet',
      descriptionTr:
        'globalforte.com anahtar kelimelerinde RTG Connect-OW olarak özel listelenen, limanlarda konteyner takibi için kullanılan terminal.',
      descriptionEn:
        'Industrial terminal delivering zero-packet-loss wireless telemetry for heavy crane machinery operating in harsh coastal environments.',
      technicalOverviewTr:
        'Vinç hareket ettikçe baz istasyonları arasında 50 milisaniyenin altında kesintisiz el değiştirme (handover) yapar.',
      technicalOverviewEn:
        'Executes fast Layer 2 roaming across cellular-style wireless sectors to guarantee continuous SCADA telemetry.',
      electricalSpecs: [{ key: 'Power Input', value: '18-56V DC or standard industrial PoE' }],
      physicalSpecs: [{ key: 'Enclosure', value: 'Heavy cast aluminum with marine-grade powder coat' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-40°C to +65°C' }],
    },
  },
  {
    id: 'redline-rtg-connect-ows',
    imageUrl: '/images/partners/redline/an-80i-new.jpg',
    name: 'Redline RTG Connect-OWS Güneş Enerjili (Solar) Saha Terminali',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Kablosuz Geniş Bant & WiMAX',
    categoryEn: 'Broadband Wireless',
    summaryTr:
      'Şebeke elektriği olmayan uzak petrol kuyuları, boru hatları ve sınır gözetim kulelerinde güneş panelleriyle çalışan ultra düşük güçlü terminal.',
    summaryEn:
      'Ultra-low-power solar-compatible outdoor wireless terminal designed for remote oil wellheads, pipeline SCADA, and border watchtowers.',
    specs: [
      { labelTr: 'Güç Tüketimi', labelEn: 'Power Draw', val: 'Ultra Düşük 8 Watt Güç Tüketimi (Güneş / Akü Sistemiyle %100 Uyumlu)' },
      { labelTr: 'Menzil', labelEn: 'Range', val: '50+ Kilometre Görüş Hattı (LOS) Noktadan Noktaya Bağlantı' },
      { labelTr: 'Kripto Güvenliği', labelEn: 'Security', val: 'FIPS 140-2 Uyumlu Donanımsal AES-128/256 Şifreleme' },
      { labelTr: 'Çalışma Sıcaklığı', labelEn: 'Temperature', val: '-40°C ile +75°C Çöl ve Kutup Sıcaklık Dayanımı' },
    ],
    compliance: ['ATEX Zone 2 / IECEx Patlama Koruması', 'IP67', 'MIL-STD-810G'],
    datasheetContent: {
      partNumber: 'RL-RTG-CONNECT-OWS',
      version: 'Redline Solar Specs',
      descriptionTr:
        'Elektrik kablosunun ulaşamadığı ıssız arazilerde güneş paneli ve aküyle yıllarca kesintisiz internet ve kamera yayını aktarır.',
      descriptionEn:
        'Off-grid wireless terminal optimized for renewable solar power installations across barren deserts and desolate mountain ranges.',
      technicalOverviewTr:
        'Akıllı uyku modu ve dinamik güç yönetimi sayesinde bulutlu havalarda bile pil tüketimini minimize eder.',
      technicalOverviewEn:
        'Dynamic power scaling adjusts RF amplifier output based on link budget to conserve battery reserves during extended overcast conditions.',
      electricalSpecs: [{ key: 'Voltage', value: '10-30V DC native solar panel input' }],
      physicalSpecs: [{ key: 'Mounting', value: 'Universal pole and tower bracket kit included' }],
      environmentalSpecs: [{ key: 'Sunlight', value: 'UV resistant coating, sun-shield cowl' }],
    },
  },
  {
    id: 'redline-rtg-connect-iws',
    imageUrl: '/images/partners/redline/redlines-management-suit.jpg',
    name: 'Redline RTG Connect-IWS Endüstriyel İç Ortam Kablosuz Terminali',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Kablosuz Geniş Bant & WiMAX',
    categoryEn: 'Broadband Wireless',
    summaryTr:
      'Fabrikalar, enerji santralleri ve metro istasyonları için DIN-ray montajlı, elektromanyetik parazitlere dayanıklı iç ortam terminali.',
    summaryEn:
      'DIN-rail mounted industrial indoor wireless subscriber unit designed for power substations, metro control rooms, and automated factories.',
    specs: [
      { labelTr: 'Montaj Tipi', labelEn: 'Mounting', val: 'Standart 35mm Endüstriyel DIN-Ray veya Duvar Montajı' },
      { labelTr: 'Gürültü Dayanımı', labelEn: 'Immunity', val: 'IEC 61850-3 ve IEEE 1613 Yüksek Elektromanyetik İzolasyon' },
      { labelTr: 'Portlar', labelEn: 'Interfaces', val: '4x 10/100/1000Base-T Ethernet + 2x RS-232/485 Seri Port' },
      { labelTr: 'Yedek Güç', labelEn: 'Power Input', val: 'Çift Yedekli 24/48V DC Besleme Girişi' },
    ],
    compliance: ['IEC 61850-3 Enerji Santrali Standardı', 'IEEE 1613', 'CE', 'UL 60950'],
    datasheetContent: {
      partNumber: 'RL-RTG-CONNECT-IWS',
      version: 'Redline IWS Sheet',
      descriptionTr:
        'Yüksek gerilim trafo merkezlerinde ve fabrika otomasyon panolarında parazitlerden etkilenmeden haberleşme sağlar.',
      descriptionEn:
        'Substation-hardened wireless communication node immune to electromagnetic interference generated by high-voltage switchgear.',
      technicalOverviewTr:
        'Galvanik olarak yalıtılmış portları sayesinde elektrik dalgalanmalarının ekipmana zarar vermesini önler.',
      technicalOverviewEn:
        'Features galvanic port isolation to safeguard internal circuitry from ground loop surges and electrostatic discharges.',
      electricalSpecs: [{ key: 'Input', value: 'Dual 18-56V DC terminal block' }],
      physicalSpecs: [{ key: 'Form', value: 'Compact metal DIN-rail case' }],
      environmentalSpecs: [{ key: 'Operating', value: '-40°C to +75°C fanless' }],
    },
  },
  {
    id: 'redline-ellipse-edge',
    imageUrl: '/images/partners/redline/rdl-3000-enterprise-new.jpg',
    name: 'Redline Ellipse & Edge Point-to-Multipoint Baz İstasyonu',
    brandId: 'redline',
    brandName: 'Redline Communications',
    categoryTr: 'Kablosuz Geniş Bant & WiMAX',
    categoryEn: 'Broadband Wireless',
    summaryTr:
      'Şehir güvenliği ve MOBESE projelerinde yüzlerce güvenlik kamerasını tek bir merkez kuleye bağlayan yüksek kapasiteli çok noktalı baz ünitesi.',
    summaryEn:
      'High-capacity Point-to-Multipoint (PMP) base station connecting hundreds of remote CCTV cameras into a centralized command node.',
    specs: [
      { labelTr: 'Kapasite', labelEn: 'Capacity', val: 'Sektör Başına 100+ Mbps Gerçek Veri Hızı ve 100 Abone Desteği' },
      { labelTr: 'Frekanslar', labelEn: 'Frequencies', val: '3.3 - 3.8 GHz ve 4.9 - 5.8 GHz Dinamik Frekans Seçimi (DFS)' },
      { labelTr: 'QoS Mekanizması', labelEn: 'QoS Protocol', val: 'Akıllı Dinamik Bant Genişliği Tahsisi (Kamera Yayınına Öncelik)' },
      { labelTr: 'Kapsama Alanı', labelEn: 'Coverage', val: '60°, 90°, 120° Sektör Antenleri ile 30 km Çapında Kapsama' },
    ],
    compliance: ['FIPS 140-2', 'IEEE 802.16d/e WiMAX', 'ETSI EN 302 326', 'FCC Part 90'],
    datasheetContent: {
      partNumber: 'RL-ELLIPSE-EDGE-BS',
      version: 'Redline Ellipse Sheet',
      descriptionTr:
        'globalforte.com anahtar kelimelerinde "Ellipse", "Edge", "MOBESE", "KGYS" olarak geçen şehir izleme kablosuz baz istasyonu.',
      descriptionEn:
        'Carrier-grade multipoint base station deployed in municipal smart surveillance backbones for traffic control and public safety.',
      technicalOverviewTr:
        'Redline patentli kablosuz MAC protokolü ile hava şartlarından ve diğer parazitlerden etkilenmeden kesintisiz video taşır.',
      technicalOverviewEn:
        'Employs proprietary non-contention TDD protocol to guarantee deterministic jitter-free video transmission for PTZ controls.',
      electricalSpecs: [{ key: 'Power', value: 'High power 802.3at PoE' }],
      physicalSpecs: [{ key: 'Weight', value: '3.6 kg all-outdoor unit' }],
      environmentalSpecs: [{ key: 'Wind Rating', value: 'Survival wind speed 200 km/h' }],
    },
  },

  // ==========================================
  // DIGIFORT ADDITIONAL PRODUCTS
  // ==========================================
  {
    id: 'digifort-ip-surveillance-suite',
    imageUrl: '/images/partners/digifort/digifort_enterprise.jpg',
    name: 'Digifort IP Surveillance Software Kapsamlı Gözetim Paketi',
    brandId: 'digifort',
    brandName: 'Digifort IP Surveillance System',
    categoryTr: 'Video Gözetim & Analitik',
    categoryEn: 'Video Management & Analytics',
    summaryTr:
      'Geniş kampüsler, kamu binaları ve havalimanları için merkezi ve dağıtık mimaride çalışan tam teşekküllü IP kamera gözetim yazılımı paketi.',
    summaryEn:
      'Comprehensive IP video surveillance software platform featuring multi-server distributed recording and intuitive video matrix.',
    specs: [
      { labelTr: 'Kamera Uyumluluğu', labelEn: 'Camera Brands', val: '10.000+ IP Kamera Modeli ve ONVIF Profile S/G/T Desteği' },
      { labelTr: 'Kayıt Performansı', labelEn: 'Recording Rate', val: 'Sunucu Başına 128 Kanal 4K Ultra HD Kesintisiz Kayıt' },
      { labelTr: 'Yedeklilik (Failover)', labelEn: 'Failover', val: 'N+1 Otomatik Sunucu Yük Devretme (Sıfır Kayıt Kaybı)' },
      { labelTr: 'Arayüzler', labelEn: 'Clients', val: 'Windows İstemci, Web Tarayıcı İstemcisi, iOS ve Android Mobil İstemcisi' },
    ],
    compliance: ['ONVIF Member', 'ISO 27001 Uyumlu', 'GDPR Masking', 'CE'],
    datasheetContent: {
      partNumber: 'DG-SURVEILLANCE-SUITE',
      version: 'Digifort_IP_Surveillance_Software.pdf',
      descriptionTr:
        'globalforte.com indirme merkezinde Digifort_IP_Surveillance_Software.pdf adıyla yer alan resmi teknik genel bakış broşürü.',
      descriptionEn:
        'Turnkey surveillance software engineered for mission-critical video infrastructure requiring zero server downtime.',
      technicalOverviewTr:
        'Gelişmiş hareket algılama ve akıllı bant genişliği sıkıştırması sayesinde depolama maliyetlerini %60 düşürür.',
      technicalOverviewEn:
        'Implements adaptive multi-streaming to deliver high-resolution video for recording and optimized sub-streams for remote viewing.',
      electricalSpecs: [{ key: 'Server Specs', value: 'Intel Xeon / AMD EPYC, 32GB RAM recommended' }],
      physicalSpecs: [{ key: 'Architecture', value: 'Multi-threaded 64-bit Windows Server service' }],
      environmentalSpecs: [{ key: 'Scalability', value: 'Unlimited cascaded servers' }],
    },
  },
  {
    id: 'digifort-ip-video-storage',
    imageUrl: '/images/partners/digifort/digifort_enterprise.jpg',
    name: 'Digifort IP Video Software & Dağıtık Depolama Motoru',
    brandId: 'digifort',
    brandName: 'Digifort IP Surveillance System',
    categoryTr: 'Video Gözetim & Analitik',
    categoryEn: 'Video Management & Storage',
    summaryTr:
      'Petabaytlarca video kaydını SAN, NAS, iSCSI ve yerel disk dizilerinde bozulmadan ve silinmeden saklayan kurumsal depolama yazılımı.',
    summaryEn:
      'High-throughput video storage management engine writing petabytes of continuous surveillance footage across SAN and NAS storage fabrics.',
    specs: [
      { labelTr: 'Depolama Hedefleri', labelEn: 'Storage Media', val: 'Doğrudan Ekli Depolama (DAS), SAN, NAS, iSCSI, RAID 5/6 Dizileri' },
      { labelTr: 'Veri Bütünlüğü', labelEn: 'Integrity', val: 'Her Kareye Donanımsal Sayısal İmza ve Filigran Ekleme (Mahkeme Kanıtı)' },
      { labelTr: 'Arşivleme Kuralları', labelEn: 'Archiving Rules', val: 'Otomatik Eski Kayıtları Sıkıştırma ve Soğuk Depolamaya Aktarma' },
      { labelTr: 'Arama Hızı', labelEn: 'Search Speed', val: 'Saniyeler İçinde 30 Günlük Kayıtta Belirli Bölge Hareketi Bulma' },
    ],
    compliance: ['Digital Evidence Chain of Custody', 'ONVIF Profile G', 'ISO 9001'],
    datasheetContent: {
      partNumber: 'DG-VIDEO-STORAGE-ENG',
      version: 'Digifort_IP_Video_Software.pdf',
      descriptionTr:
        'globalforte.com indirme merkezinde Digifort_IP_Video_Software.pdf olarak sunulan resmi depolama ve kayıt yönetim yazılımı.',
      descriptionEn:
        'High-speed disk write scheduler engineered to prevent video frame drops during continuous multi-hundred camera disk writes.',
      technicalOverviewTr:
        'Özel tampon bellek (RAM buffer) yönetimi sayesinde sabit disklerin yavaşlaması durumunda bile görüntü kaybı yaşanmaz.',
      technicalOverviewEn:
        'Circular memory buffer isolates disk bottlenecks from live video capture streams to ensure zero packet loss.',
      electricalSpecs: [{ key: 'Deployment', value: 'Supports Windows Server, Hyper-V, VMware' }],
      physicalSpecs: [{ key: 'Filesystem', value: 'Direct block writing bypasses NTFS file locks' }],
      environmentalSpecs: [{ key: 'Retention', value: 'Calculated retention policies up to 365+ days' }],
    },
  },
  {
    id: 'digifort-web-server',
    imageUrl: '/images/partners/digifort/digifort_mobile.jpg',
    name: 'Digifort Web Server & Mobil Yayın Ağ Geçidi',
    brandId: 'digifort',
    brandName: 'Digifort IP Surveillance System',
    categoryTr: 'Video Gözetim & Analitik',
    categoryEn: 'Video Streaming Gateway',
    summaryTr:
      'Herhangi bir web tarayıcısından (Chrome, Safari, Edge) eklentisiz HTML5 canlı kamera izleme ve mobil cihazlara H.264/H.265 yayın köprüsü.',
    summaryEn:
      'HTML5 plugin-free streaming gateway transcoding live and recorded surveillance feeds for web browsers and mobile tablets.',
    specs: [
      { labelTr: 'Tarayıcı Desteği', labelEn: 'Browsers', val: 'Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari (HTML5)' },
      { labelTr: 'Kod Çözücü Desteği', labelEn: 'Codecs', val: 'H.264, H.265, MJPEG Donanımsal GPU Hızlandırmalı Transcoding' },
      { labelTr: 'Kullanıcı Yetkisi', labelEn: 'Permissions', val: 'Kamera Başına Canlı İzleme, PTZ Kontrolü ve Kayıt İnceleme İzni' },
      { labelTr: 'Bant Genişliği', labelEn: 'Bandwidth Opt', val: 'Düşük Hızlı Mobil Hatlar İçin Otomatik Çözünürlük Düşürme' },
    ],
    compliance: ['HTML5 Native Video', 'HTTPS TLS 1.3', 'ONVIF Profile T'],
    datasheetContent: {
      partNumber: 'DG-WEB-GATEWAY-V7',
      version: 'Digifort Mobile PB',
      descriptionTr:
        'Yöneticilerin ve saha güvenlik ekiplerinin cep telefonundan veya dizüstü bilgisayardan kameralara anında bağlanmasını sağlar.',
      descriptionEn:
        'Secure streaming proxy shielding core recording servers from direct external internet exposure.',
      technicalOverviewTr:
        'Güvenlik sunucularını doğrudan internete açmak yerine DMZ bölgesinde konumlanarak güvenli tünelleme sağlar.',
      technicalOverviewEn:
        'Acts as an isolated DMZ reverse proxy enforcing TLS encryption and multi-factor operator authentication.',
      electricalSpecs: [{ key: 'GPU Support', value: 'NVIDIA NVENC / Intel QuickSync hardware transcoding' }],
      physicalSpecs: [{ key: 'Clients', value: 'Web, iOS, Android native applications' }],
      environmentalSpecs: [{ key: 'Security', value: 'Brute-force lockout and IP whitelist enforcement' }],
    },
  },

  // ==========================================
  // GLOBAL FORTE HOSTING & MANAGED SERVICES
  // (As featured on globalforte.com/web-hosting/)
  // ==========================================
  {
    id: 'gf-web-basic',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Web-Basic Kurumsal Hosting Paketi',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Güvenli Kurumsal Barındırma',
    categoryEn: 'Secure Enterprise Web Hosting',
    summaryTr:
      'globalforte.com barındırma bölümündeki Web-Basic paketi: Linux/Windows işletim sistemi, ASP, PHP, MySQL, Plesk Panel ve antispam koruması.',
    summaryEn:
      'Entry-level corporate web hosting package on resilient infrastructure with Linux/Windows choices, Plesk Panel, and antispam security.',
    specs: [
      { labelTr: 'Disk Alanı', labelEn: 'Storage', val: '10 GB Yüksek Hızlı SSD Kurumsal Depolama Alanı' },
      { labelTr: 'Aylık Trafik', labelEn: 'Bandwidth', val: '100 GB DDoS Korumalı Yedekli Bant Genişliği' },
      { labelTr: 'E-Posta Hesapları', labelEn: 'Email', val: '25 Kurumsal E-posta Hesabı + eSafe Antivirüs/Antispam' },
      { labelTr: 'Veritabanı', labelEn: 'Database', val: 'MySQL 8 / MS SQL Server & phpMyAdmin / Plesk Panel' },
    ],
    compliance: ['ISO 27001', 'Tier III Veri Merkezi', 'TSE Hizmet Yeterlilik'],
    datasheetContent: {
      partNumber: 'GF-HOSTING-BASIC-2026',
      version: 'Global Forte Web-Basic',
      descriptionTr:
        'globalforte.com/web-hosting/web-basic.html sayfasında sunulan resmi kurumsal web barındırma ve alan adı yönetim paketi.',
      descriptionEn:
        'Standard enterprise web hosting configuration engineered for corporate brochure websites and branch offices.',
      technicalOverviewTr:
        'Donanımsal güvenlik duvarı arkasında izole edilen sunucularda barındırılır; kötü niyetli botlara karşı 7/24 taranır.',
      technicalOverviewEn:
        'Hosted inside enterprise virtualization clusters safeguarded by perimeter network encryptors and firewalls.',
      electricalSpecs: [{ key: 'Data Center', value: 'Istanbul Tier III+ carrier-neutral facility' }],
      physicalSpecs: [{ key: 'Redundancy', value: 'N+1 UPS, automated diesel backup generators' }],
      environmentalSpecs: [{ key: 'Uptime SLA', value: '%99.9 Uptime Network SLA' }],
    },
  },
  {
    id: 'gf-web-standard',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Web-Standard Kurumsal Hosting Paketi',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Güvenli Kurumsal Barındırma',
    categoryEn: 'Secure Enterprise Web Hosting',
    summaryTr:
      'globalforte.com barındırma bölümündeki Web-Standard paketi: Genişletilmiş disk alanı, kurumsal e-posta kotası ve SSL hızlandırıcısı.',
    summaryEn:
      'Mid-tier enterprise web hosting package providing enhanced disk capacity, higher transfer quotas, and hardware SSL termination.',
    specs: [
      { labelTr: 'Disk Alanı', labelEn: 'Storage', val: '50 GB NVMe Kurumsal RAID-10 Depolama Alanı' },
      { labelTr: 'Aylık Trafik', labelEn: 'Bandwidth', val: '500 GB Yedekli Yüksek Hızlı Trafik Kotası' },
      { labelTr: 'E-Posta Hesapları', labelEn: 'Email', val: '100 Kurumsal E-posta Hesabı (SpamAssassin + eSafe)' },
      { labelTr: 'SSL Sertifikası', labelEn: 'SSL Certificate', val: 'Ücretsiz Kurumsal SSL Sertifikası & HTTP/2 Desteği' },
    ],
    compliance: ['ISO 27001', 'ISO 9001', 'Tier III+ Standartları'],
    datasheetContent: {
      partNumber: 'GF-HOSTING-STANDARD-2026',
      version: 'Global Forte Web-Standard',
      descriptionTr:
        'globalforte.com/web-hosting/web-standard.html sayfasında listelenen kurumsal orta ölçekli barındırma paketi.',
      descriptionEn:
        'Reliable corporate hosting environment tailored for growing business portals and transactional intranet sites.',
      technicalOverviewTr:
        'Günlük otomatik yedekleme ve SafeNet ProtectFile dosya şifreleme altyapısıyla müşteri verilerini korur.',
      technicalOverviewEn:
        'Incorporates daily snapshot backups and automated ransomware defense filters.',
      electricalSpecs: [{ key: 'Network', value: '10 Gbps redundant uplink peering' }],
      physicalSpecs: [{ key: 'Panel', value: 'Plesk Obsidian Enterprise control panel' }],
      environmentalSpecs: [{ key: 'Monitoring', value: '24/7/365 active SNMP performance telemetry' }],
    },
  },
  {
    id: 'gf-web-pro',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Web-Pro Yüksek Güvenlikli Hosting Paketi',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Güvenli Kurumsal Barındırma',
    categoryEn: 'Secure Enterprise Web Hosting',
    summaryTr:
      'globalforte.com barındırma bölümündeki Web-Pro paketi: Özel IP adresi, donanımsal WAF, yüksek işlemci tahsisi ve 7/24 öncelikli destek.',
    summaryEn:
      'Advanced enterprise hosting tier featuring dedicated static IP, hardware WAF firewall, and prioritized compute resources.',
    specs: [
      { labelTr: 'Disk Alanı', labelEn: 'Storage', val: '150 GB Ultra Hızlı NVMe Kurumsal Depolama' },
      { labelTr: 'Aylık Trafik', labelEn: 'Bandwidth', val: 'Sınırsız / Limitsiz Trafik (Unmetered Bandwidth)' },
      { labelTr: 'Özel IP & WAF', labelEn: 'IP & WAF', val: '1 Adet Tahsisli Kurumsal IP + Donanımsal Web Güvenlik Duvarı' },
      { labelTr: 'Kaynak Garantisi', labelEn: 'Dedicated Core', val: '4 vCPU & 8 GB RAM Garantili Sunucu Kaynağı' },
    ],
    compliance: ['PCI DSS Compliant Hosting', 'ISO 27001', 'KVKK Uyumlu Veri Merkezi'],
    datasheetContent: {
      partNumber: 'GF-HOSTING-PRO-2026',
      version: 'Global Forte Web-Pro',
      descriptionTr:
        'globalforte.com/web-hosting/web-pro.html sayfasında sunulan yüksek trafikli kurumsal portallar için profesyonel barındırma.',
      descriptionEn:
        'Engineered for critical customer portals, online payment services, and high-volume corporate portals.',
      technicalOverviewTr:
        'SQL enjeksiyonu, XSS ve DDoS gibi web açıklarını donanım seviyesinde filtreleyen WAF ile korunur.',
      technicalOverviewEn:
        'Guards web backends with active hardware Web Application Firewalls mitigating OWASP Top 10 vulnerabilities.',
      electricalSpecs: [{ key: 'Isolation', value: 'Dedicated containerized compute slice' }],
      physicalSpecs: [{ key: 'Security', value: 'Hardware-isolated network VLAN' }],
      environmentalSpecs: [{ key: 'SLA', value: '%99.95 Uptime SLA guarantee' }],
    },
  },
  {
    id: 'gf-web-max',
    imageUrl: '/images/mainlogo.png',
    name: 'Global Forte Web-Max Sunucu Kiralama & Dedicated Donanım Barındırma',
    brandId: 'globalforte',
    brandName: 'Global Forte Mühendislik',
    categoryTr: 'Güvenli Kurumsal Barındırma',
    categoryEn: 'Dedicated Server & Colocation',
    summaryTr:
      'globalforte.com barındırma bölümündeki Web-Max paketi: Müşteriye özel ayrılmış fiziksel sunucu, donanımsal HSM ve güvenlik duvarı arkasında tam kontrol.',
    summaryEn:
      'Dedicated bare-metal enterprise server and colocation hosting in secure datacenter cages with hardware HSM and firewall shielding.',
    specs: [
      { labelTr: 'Sunucu Donanımı', labelEn: 'Hardware', val: 'Fiziksel Dedicated Sunucu (Dual Intel Xeon / 64GB RAM / SAS RAID)' },
      { labelTr: 'Hat Kapasitesi', labelEn: 'Uplink', val: '1 Gbps Dedicated Port & 100+ Gbps DDoS Koruma Kalkanı' },
      { labelTr: 'Güvenlik Donanımı', labelEn: 'Security Gear', val: 'SafeNet / Fortinet Donanımsal Güvenlik Duvarı Arkasında İzolasyon' },
      { labelTr: 'Yönetim Desteği', labelEn: 'Managed SLA', val: '7/24 Kıdemli Sistem Mühendisi Desteği & Donanım Değişim Garantisi' },
    ],
    compliance: ['Tier III+ Uptime Institute', 'ISO 27001', 'ISO 22301 İş Sürekliliği', 'TSE-HYB'],
    datasheetContent: {
      partNumber: 'GF-HOSTING-MAX-DEDICATED',
      version: 'Global Forte Web-Max',
      descriptionTr:
        'globalforte.com/web-hosting/web-max.html sayfasındaki en üst düzey kurumsal kiralık sunucu ve sunucu barındırma (colocation) hizmeti.',
      descriptionEn:
        'Dedicated physical server environment deployed in locked datacenter cages for defense contractors, fintechs, and government agencies.',
      technicalOverviewTr:
        'Kabin düzeyinde biyometrik parmak izi okuyuculu kafeslerde barındırılır, sadece yetkili personele fiziksel erişim izni verilir.',
      technicalOverviewEn:
        'Biometrically secured server cages provide physical and digital isolation for classified corporate workloads.',
      electricalSpecs: [{ key: 'Power Distribution', value: 'Dual feed 2N redundant electrical feeds A+B' }],
      physicalSpecs: [{ key: 'Chassis', value: 'Enterprise 1U/2U rack servers from Dell / HPE' }],
      environmentalSpecs: [{ key: 'SLA', value: '%99.99 Donanımsal ve Hat Erişilebilirlik SLA' }],
    },
  },
  {
    id: 'safenet-sc330',
    name: 'SafeNet Smart Card 330',
    imageUrl: '/images/partners/safenet/smartcard-400.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Cryptographic Token & Smart Card',
    summaryTr: 'Kamu ve kurumsal kimlik projeleri için optimize edilmiş, uygun maliyetli yüksek güvenlikli kriptografik JavaCard akıllı kart.',
    summaryEn: 'Cost-effective high-assurance JavaCard smart card designed for enterprise and e-Government PKI deployments.',
    specs: [
      { labelTr: 'Standart', labelEn: 'Standard', val: 'ISO 7816 Class A/B/C' },
      { labelTr: 'İşletim Sistemi', labelEn: 'OS', val: 'JavaCard 3.0.4 / GlobalPlatform' },
      { labelTr: 'Bellek', labelEn: 'Memory', val: '80 KB Yüksek Güvenlikli EEPROM' },
      { labelTr: 'Sertifika', labelEn: 'Certification', val: 'Common Criteria EAL 4+ & FIPS 140-2 L2' },
    ],
    compliance: ['ISO 7816', 'Common Criteria EAL 4+', 'FIPS 140-2 Level 2'],
    datasheetContent: {
      partNumber: 'SF-SC330-PKI-80K',
      version: 'v2.1',
      descriptionTr: 'SafeNet SC330, kurumsal çalışan kimlik kartları, e-İmza ve Windows akıllı kart oturum açma sistemleri için ideal bir platformdur.',
      descriptionEn: 'SafeNet SC330 provides high-assurance smart card credentialing for enterprise logon, VPN access, and digital signatures.',
      technicalOverviewTr: 'JavaCard mimarisi sayesinde birden fazla applet çalıştırabilir; kurumsal rozet baskı makineleriyle tam uyumlu standart ISO formatındadır.',
      technicalOverviewEn: 'Complies with ISO 7816 standards with support for multi-application environments.',
      electricalSpecs: [
        { key: 'Çalışma Voltajı', value: '1.8V / 3V / 5V ISO 7816' },
        { key: 'İletişim Hızı', value: 'T=0, T=1 protokolleri (azami 115 kbps)' },
      ],
      physicalSpecs: [
        { key: 'Format', value: 'Standart ID-1 (85.6 x 53.98 x 0.76 mm)' },
        { key: 'Gövde Materyali', value: 'Lamine PVC / Kompozit Polikarbonat' },
      ],
      environmentalSpecs: [
        { key: 'Çalışma Sıcaklığı', value: '-25°C ila +85°C' },
        { key: 'Nem Dayanımı', value: '%95 Bağıl Nem' },
      ],
    },
  },
  {
    id: 'safenet-etoken-pro',
    name: 'SafeNet eToken PRO 72K / 32K Donanımsal USB Token',
    imageUrl: '/images/partners/safenet/etoken-pro.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Cryptographic Token & Smart Card',
    summaryTr: 'Dünya çapında milyonlarca kurumsal kullanıcı tarafından tercih edilen FIPS 140-2 Seviye 3 onaylı klasik PKI USB güvenlik anahtarı.',
    summaryEn: 'Flagship FIPS 140-2 Level 3 certified USB PKI smart card token deployed worldwide for multi-factor authentication.',
    specs: [
      { labelTr: 'Kripto Çekirdeği', labelEn: 'Crypto Engine', val: 'RSA 2048-bit, 3DES, SHA-256 Donanımsal' },
      { labelTr: 'Hafıza', labelEn: 'Memory', val: '72 KB / 32 KB Güvenli EEPROM' },
      { labelTr: 'Sertifikasyon', labelEn: 'Certification', val: 'FIPS 140-2 Seviye 3 Onaylı' },
      { labelTr: 'Arayüz', labelEn: 'Interface', val: 'USB 2.0 / 1.1 Tam Hızlı Tip A' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria EAL 4+', 'RoHS / WEEE'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-PRO-72K',
      version: 'Rev 5.4',
      descriptionTr: 'SafeNet eToken PRO, Windows Domain logon, güvenli uzaktan VPN erişimi ve resmi e-İmza işlemleri için donanımsal özel anahtar saklar.',
      descriptionEn: 'SafeNet eToken PRO secures enterprise access control, document digital signatures, and endpoint encryption.',
      technicalOverviewTr: 'Kriptografik anahtarlar token donanımı içinde üretilir ve hiçbir koşulda cihaz dışına çıkartılamaz.',
      technicalOverviewEn: 'On-board cryptographic key generation ensures private keys never export onto host computer memory.',
      electricalSpecs: [{ key: 'Power', value: 'USB Bus Powered (< 50mA)' }],
      physicalSpecs: [{ key: 'Casing', value: 'Sert Polikarbonat Kasa / Suya Dayanıklı' }],
      environmentalSpecs: [{ key: 'Operating Temp', value: '-20°C ila +70°C' }],
    },
  },
  {
    id: 'safenet-etoken-3400',
    name: 'SafeNet eToken 3400 Akıllı Kart & PKI Token',
    imageUrl: '/images/partners/safenet/etoken_3400.png',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Cryptographic Token & Smart Card',
    summaryTr: 'Kompakt form faktöründe kurumsal kimlik doğrulama ve veri koruma sağlayan FIPS sertifikalı USB güvenlik anahtarı.',
    summaryEn: 'Compact FIPS-certified USB security authenticator engineered for enterprise identity protection.',
    specs: [
      { labelTr: 'Standart', labelEn: 'Standard', val: 'FIPS 140-2 Seviye 3' },
      { labelTr: 'Desteklenen Kripto', labelEn: 'Crypto Support', val: 'RSA 2048, AES-256, SHA-2' },
      { labelTr: 'Yönetim Yazılımı', labelEn: 'Middleware', val: 'SafeNet Authentication Client (SAC)' },
      { labelTr: 'Gövde', labelEn: 'Housing', val: 'Korozyona Dayanıklı Koruyucu Kapaklı USB' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'CC EAL 4+'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-3400-PKI',
      version: 'Rev 2.0',
      descriptionTr: 'SafeNet eToken 3400, kurumsal ağlara güvenli erişim ve hassas e-posta şifrelemesi (S/MIME) için kullanılan güvenilir kimlik belirtecidir.',
      descriptionEn: 'The eToken 3400 delivers robust PKI hardware security for network access and email encryption.',
      technicalOverviewTr: 'Tak ve çalıştır mimarisiyle SAC istemcisi üzerinden merkezi olarak yönetilebilir.',
      technicalOverviewEn: 'Seamless integration with SafeNet Authentication Manager for centralized credential management.',
      electricalSpecs: [{ key: 'Power', value: 'USB Bus Powered' }],
      physicalSpecs: [{ key: 'Dimensions', value: '48 x 16 x 8 mm / 8g' }],
      environmentalSpecs: [{ key: 'Temperature', value: '-20°C to +65°C' }],
    },
  },
  {
    id: 'safenet-etoken-7300',
    name: 'SafeNet eToken 7300 Şifreli Flaş Bellek & Kripto Token',
    imageUrl: '/images/partners/safenet/etoken_7300.png',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Güvenli Taşınabilir Bellek & Kripto Token',
    categoryEn: 'Secure Flash Storage & PKI Token',
    summaryTr: 'Donanımsal AES-256 şifreli yüksek kapasiteli flaş bellek ile akıllı kart tabanlı PKI kimlik doğrulamayı tek cihazda buluşturan hibrit çözüm.',
    summaryEn: 'Hybrid security token integrating hardware-encrypted high-speed flash storage with smart-card PKI authentication.',
    specs: [
      { labelTr: 'Bellek Kapasitesi', labelEn: 'Storage', val: '16GB / 32GB / 64GB Donanımsal Şifreli Flaş' },
      { labelTr: 'Şifreleme Motoru', labelEn: 'Crypto Engine', val: 'Donanımsal AES-256 CBC/XTS Modu' },
      { labelTr: 'PKI Güvenliği', labelEn: 'PKI Security', val: 'FIPS 140-2 Seviye 3 Akıllı Kart Çipi' },
      { labelTr: 'Veri Koruması', labelEn: 'Data Protection', val: 'Yetkisiz Girişte Otomatik Kendi Kendini İmha (Zeroization)' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'Common Criteria EAL 5+', 'MIL-STD-810F'],
    datasheetContent: {
      partNumber: 'SF-ETOKEN-7300-SEC-FLASH',
      version: 'Rev 3.2',
      descriptionTr: 'SafeNet eToken 7300, kamu kurumları ve savunma yüklenicilerinin gizli belgeleri sahada güvenle taşıması için hem şifreli depolama hem de dijital imza sunar.',
      descriptionEn: 'eToken 7300 protects classified files in transit using hardware AES-256 encryption combined with strong PKI user authentication.',
      technicalOverviewTr: 'PIN kodu doğru girilmeden depolama alanına işletim sistemi düzeyinde dahi erişilemez; 10 hatalı denemede veriler kriptografik olarak silinir.',
      technicalOverviewEn: 'Storage partition remains completely invisible to the host OS until PKI PIN verification succeeds.',
      electricalSpecs: [{ key: 'USB Hızı', value: 'USB 2.0 Yüksek Hızlı Veri İletimi (20 MB/s Okuma)' }],
      physicalSpecs: [{ key: 'Gövde', value: 'Alüminyum Alaşımlı Darbeye ve Suya Dayanıklı Zırh' }],
      environmentalSpecs: [{ key: 'Sıcaklık', value: '-25°C ila +75°C' }],
    },
  },
  {
    id: 'safenet-smartcard-pro',
    name: 'SafeNet Smart Card PRO (JavaCard PKI)',
    imageUrl: '/images/partners/safenet/smartcard-pro.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Kriptografik Token & Akıllı Kart',
    categoryEn: 'Cryptographic Token & Smart Card',
    summaryTr: 'Kurumsal fiziksel ve mantıksal geçiş sistemleri için çok uygulamalı FIPS 140-2 Seviye 3 JavaCard akıllı kart.',
    summaryEn: 'Multi-application FIPS 140-2 Level 3 JavaCard smart card designed for converged enterprise identity and access.',
    specs: [
      { labelTr: 'Standart', labelEn: 'Form Factor', val: 'ISO 7816 ID-1 Kredi Kartı Formatı' },
      { labelTr: 'Kripto Algoritmaları', labelEn: 'Crypto Support', val: 'RSA 4096-bit, ECC P-256/384, AES' },
      { labelTr: 'Güvenlik Seviyesi', labelEn: 'Assurance', val: 'FIPS 140-2 Level 3 / CC EAL 5+' },
      { labelTr: 'Gövde Baskısı', labelEn: 'Card Customization', val: 'Kurumsal Fotoğraflı Kimlik Rozet Baskısına Uygun' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'ISO 7816', 'Common Criteria EAL 5+'],
    datasheetContent: {
      partNumber: 'SF-SC-PRO-JAVACARD-PKI',
      version: 'Rev 4.0',
      descriptionTr: 'SafeNet Smart Card PRO, yüksek güvenlikli kamu binaları ve finans kurumlarında hem kapı geçişi hem de bilgisayar oturum açma için tek kart çözümü sunar.',
      descriptionEn: 'Smart Card PRO provides high-assurance multi-factor authentication and digital signature capability on a single credential.',
      technicalOverviewTr: 'JavaCard mimarisi sayesinde kurumsal PKI appletlerinin yanı sıra özel müşteri uygulamalarını da güvenle çalıştırır.',
      technicalOverviewEn: 'Open JavaCard OS supports dynamic applet deployment for custom institutional requirements.',
      electricalSpecs: [{ key: 'Voltaj', value: 'ISO 7816 1.8V, 3V, 5V Destekli' }],
      physicalSpecs: [{ key: 'Boyutlar', value: '85.6 x 53.98 x 0.76 mm' }],
      environmentalSpecs: [{ key: 'Dayanıklılık', value: '100,000 Takma-Çıkarma Döngüsü' }],
    },
  },
  {
    id: 'safenet-etoken-ng-flash-anywhere',
    name: 'SafeNet eToken NG-FLASH Anywhere Sıfır İstemci',
    imageUrl: '/images/partners/safenet/etoken-ng-flash-anywhere.jpg',
    brandId: 'safenet',
    brandName: 'SafeNet (Thales)',
    categoryTr: 'Taşınabilir Güvenli Bellek & PKI Token',
    categoryEn: 'Portable Zero-Footprint PKI Flash Token',
    summaryTr: 'Yönetici yetkisi veya yazılım kurulumu gerektirmeden herhangi bir bilgisayarda güvenli SSL VPN ve web oturumu açan sıfır istemcili token.',
    summaryEn: 'Zero-footprint portable authenticator providing secure corporate web access from any PC without administrative privileges.',
    specs: [
      { labelTr: 'Kurulum Gereksinimi', labelEn: 'Installation', val: 'Sıfır İstemci (Zero Client) - Sürücüsüz Çalışma' },
      { labelTr: 'Dahili Yazılım', labelEn: 'Built-in Software', val: 'Taşınabilir Güvenli Tarayıcı & Otomatik VPN Bağlantısı' },
      { labelTr: 'Kripto Sertifikası', labelEn: 'Certification', val: 'FIPS 140-2 Seviye 3 Çip Koruması' },
      { labelTr: 'Depolama', labelEn: 'Flash Storage', val: 'Kullanıcı Verileri ve Uygulamalar İçin Flaş Bellek Bölümü' },
    ],
    compliance: ['FIPS 140-2 Level 3', 'CC EAL 4+'],
    datasheetContent: {
      partNumber: 'SF-ET-NG-FLASH-ANYWHERE',
      version: 'Rev 2.8',
      descriptionTr: 'SafeNet eToken NG-FLASH Anywhere, saha çalışanlarının internet kafelerden veya ev bilgisayarlarından arkalarında hiçbir iz bırakmadan güvenle kurumsal ağa bağlanmasını sağlar.',
      descriptionEn: 'Enables remote workers to securely access corporate applications from untrusted host computers leaving zero footprint.',
      technicalOverviewTr: 'Cihaz üzerindeki sanal oturum ortamı, oturum kapandığında tüm geçici çerezleri ve önbellek dosyalarını otomatik temizler.',
      technicalOverviewEn: 'Secure portable environment removes all transient cache data upon disconnection.',
      electricalSpecs: [{ key: 'Arayüz', value: 'USB 2.0 Hi-Speed' }],
      physicalSpecs: [{ key: 'Form Faktörü', value: 'Entegre Kordon Halkalı Darbeye Dayanıklı USB' }],
      environmentalSpecs: [{ key: 'Sıcaklık', value: '-20°C ila +65°C' }],
    },
  },
  {
    id: 'fortress-multicast',
    name: 'Fortress Multicast Security Gateway',
    imageUrl: '/images/partners/fortress/multicast.jpg',
    brandId: 'fortress',
    brandName: 'Fortress Technologies (General Dynamics)',
    categoryTr: 'Ağ Güvenliği & Donanımsal Şifreleme',
    categoryEn: 'Tactical Multicast Security Gateway',
    summaryTr: 'Taktik insansız hava araçları (İHA) ve durumsal farkındalık video akışları için donanımsal IGMP multicast hat içi şifreleme ağ geçidi.',
    summaryEn: 'Hardware multicast security gateway safeguarding live UAV feeds and mission-critical tactical video distribution.',
    specs: [
      { labelTr: 'Multicast Protokolü', labelEn: 'Multicast Protocol', val: 'IGMP v2/v3, PIM-SM/SSM Donanımsal Hat Hızı' },
      { labelTr: 'Kripto Güvenliği', labelEn: 'Crypto Assurance', val: 'FIPS 140-2 Level 2 & NSA Suite B AES-GCM' },
      { labelTr: 'Gecikme', labelEn: 'Latency', val: '< 5 mikrosaniye Ultra Düşük Gecikmeli Şifreleme' },
      { labelTr: 'Ağ Bağlantısı', labelEn: 'Throughput', val: 'Tel Hızında Gigabit Ethernet Çok Noktaya Yayın' },
    ],
    compliance: ['FIPS 140-2 Level 2', 'NSA Suite B', 'MIL-STD-810G'],
    datasheetContent: {
      partNumber: 'FT-MC-GATEWAY-1G',
      version: 'Rev 3.0',
      descriptionTr: 'Fortress Multicast Security Gateway, komuta kontrol merkezleri ile sahadaki zırhlı araçlar arasında canlı İHA video akışlarını şifrelerken bant genişliği tüketimini en aza indirir.',
      descriptionEn: 'The Fortress Multicast Security Gateway delivers wire-speed encryption for high-definition multicast video distribution.',
      technicalOverviewTr: 'Her alıcı için ayrı akış açmak yerine tek bir şifreli multicast akışı üzerinden binlerce kullanıcıya eşzamanlı gecikmesiz görüntü aktarır.',
      technicalOverviewEn: 'Eliminates unicast replication overhead by distributing a single encrypted multicast stream to authorized subscriber groups.',
      electricalSpecs: [{ key: 'Güç Beslemesi', value: '12-32V DC Taktik Araç Beslemesi veya 100-240V AC' }],
      physicalSpecs: [{ key: 'Kasa', value: 'Sağlamlaştırılmış 1U Yarım Raf veya Araç Montaj Kiti' }],
      environmentalSpecs: [{ key: 'Çalışma Sıcaklığı', value: '-40°C ila +65°C' }],
    },
  },

];
