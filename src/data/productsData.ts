import { Product, PartnerBrand } from '../types/index.ts';

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    id: 'redline',
    name: 'Redline Communications',
    logoUrl: './images/partners/redline/logo.jpg',
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
    logoUrl: './images/partners/digifort/logo.png',
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
    logoUrl: './images/partners/safenet/logo.png',
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
    logoUrl: './images/partners/fortress/logo.jpg',
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
    logoUrl: './images/partners/spyrus/logo.gif',
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
    logoUrl: './images/partners/cryptomathic/logo.gif',
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
    logoUrl: './images/mainlogo.png',
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
    imageUrl: './images/partners/redline/an-80i-new.jpg',
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
    imageUrl: './images/partners/redline/rdl-3000-new.jpg',
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
    imageUrl: './images/partners/redline/rdl-3000-elte-mt-new.jpg',
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
    imageUrl: './images/partners/redline/rdl-3000-enterprise-new.jpg',
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
    imageUrl: './images/partners/redline/ras-nomadic.jpg',
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
    imageUrl: './images/partners/redline/rdl-2000-new.jpg',
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
    imageUrl: './images/partners/redline/rdl-5000-new.jpg',
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
    imageUrl: './images/partners/redline/an-100ux-redmax-base-station.jpg',
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
    imageUrl: './images/partners/redline/redmax-subscriber-unit-su-o.jpg',
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
    imageUrl: './images/partners/redline/rdl-2000-new.jpg',
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
    imageUrl: './images/partners/redline/redlines-management-suit.jpg',
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
    imageUrl: './images/partners/digifort/digifort_enterprise.jpg',
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
    imageUrl: './images/partners/digifort/digifort_enterprise.jpg',
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
    imageUrl: './images/partners/digifort/digifort_evidence.jpg',
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
    imageUrl: './images/partners/digifort/digifort_analytics.jpg',
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
    imageUrl: './images/partners/digifort/digifort_lpr_system.jpg',
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
    imageUrl: './images/partners/digifort/digifort_analytics.jpg',
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
    imageUrl: './images/partners/digifort/digifort_biopass.jpg',
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
    imageUrl: './images/partners/digifort/digifort_keyboard_controller.jpg',
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
    imageUrl: './images/partners/digifort/digifort_evidence.jpg',
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
    imageUrl: './images/partners/digifort/digifort_evidence.jpg',
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
    imageUrl: './images/partners/digifort/digifort_alarm_and_automation_module.jpg',
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
    imageUrl: './images/partners/digifort/digifort_mobile.jpg',
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
    imageUrl: './images/partners/safenet/luna-sa.jpg',
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
    imageUrl: './images/partners/safenet/luna_pcie_img.png',
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
    imageUrl: './images/partners/safenet/luna-g5.jpg',
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
    imageUrl: './images/partners/safenet/luna-ca4-token.jpg',
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
    imageUrl: './images/partners/safenet/protect-host-eft.jpg',
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
    imageUrl: './images/partners/safenet/protect-server-new.jpg',
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
    imageUrl: './images/partners/safenet/ethernet-encryptor.jpg',
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
    imageUrl: './images/partners/safenet/datasecure.jpg',
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
    imageUrl: './images/partners/safenet/tokenization.jpg',
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
    imageUrl: './images/partners/safenet/datasecure.jpg',
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
    imageUrl: './images/partners/safenet/protectfile.jpg',
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
    imageUrl: './images/partners/safenet/protect-drive.JPG',
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
    imageUrl: './images/partners/safenet/datasecure.jpg',
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
    imageUrl: './images/partners/safenet/etoken-5100.jpg',
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
    imageUrl: './images/partners/safenet/ikey-2032.jpg',
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
    imageUrl: './images/partners/fortress/FC-X-Inline-Network-Encryptors.jpg',
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
    imageUrl: './images/partners/fortress/FC-X-Inline-Network-Encryptors.jpg',
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
    imageUrl: './images/partners/fortress/ES520-Deployable-Mesh-Point.jpg',
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
    imageUrl: './images/partners/fortress/ES210-Tactical-Mesh-Point.png',
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
    imageUrl: './images/partners/fortress/ES520-Deployable-Mesh-Point.jpg',
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
    imageUrl: './images/partners/fortress/ES820-Vehicle-Mesh-Point.jpg',
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
    imageUrl: './images/partners/fortress/ES2440-High-Capacity-Mesh-Point.jpg',
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
    imageUrl: './images/partners/fortress/RF-Performance.jpg',
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
    imageUrl: './images/partners/fortress/suite-b.jpg',
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
    imageUrl: './images/partners/spyrus/spyrus1.png',
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
    imageUrl: './images/partners/spyrus/spyrus2.jpg',
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
    imageUrl: './images/partners/spyrus/PocketVault.png',
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
    imageUrl: './images/partners/spyrus/PocketVaultSD.png',
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
    imageUrl: './images/partners/spyrus/spyrus5.jpg',
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
    imageUrl: './images/partners/spyrus/RosettaSDHC-product-image.jpg',
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
    imageUrl: './images/partners/spyrus/spyrus11.jpg',
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
    imageUrl: './images/partners/spyrus/securepd.png',
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
    imageUrl: './images/partners/spyrus/spyrus8.jpg',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/partners/cryptomathic/logo.gif',
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
    imageUrl: './images/mainlogo.png',
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
    imageUrl: './images/mainlogo.png',
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
    imageUrl: './images/mainlogo.png',
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
];
