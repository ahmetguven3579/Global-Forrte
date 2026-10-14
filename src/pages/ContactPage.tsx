import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building2, Send, CheckCircle2, Clock, Printer, ShieldCheck, Wrench, Users } from 'lucide-react';
import { Lang } from '../types/index.ts';

interface ContactPageProps {
  lang: Lang;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const isTr = lang === 'TR';

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    department: 'teknik',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.organization.trim()) {
      setError(
        isTr
          ? 'Lütfen adınızı, kurumunuzu ve kurumsal e-posta adresinizi giriniz.'
          : 'Please enter your name, organization, and official email address.'
      );
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError(
        isTr
          ? 'Lütfen geçerli bir e-posta adresi giriniz.'
          : 'Please enter a valid email address.'
      );
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-24 bg-[#f7f7f4] min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8e1f2f] mb-2">
            <span>{isTr ? 'İletişim & Danışmanlık' : 'Contact & Inquiries'}</span>
            <span aria-hidden="true">·</span>
            <span>{isTr ? 'İstanbul Genel Merkezi' : 'Istanbul Headquarters'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isTr
              ? 'Projeleriniz İçin Bizimle İletişime Geçin'
              : 'Contact Global Forte Engineering Teams'}
          </h1>
          <p className="text-slate-700 text-sm sm:text-base mt-2 leading-relaxed font-medium">
            {isTr
              ? 'SafeNet HSM donanımları, Digifort video gözetimi, Redline kablosuz ağlar, Fortress taktik şifreleme ve kurumsal sistem entegrasyonu için doğrudan uzman mühendislik kadromuzla iletişime geçebilirsiniz.'
              : 'Reach certified systems engineers and advisors at our Istanbul headquarters for cryptographic hardware, surveillance, and carrier wireless solutions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7 bg-[#fcfbfb] border border-[#eeeeee] rounded-[24px] p-7 sm:p-8 shadow-[0_1px_0_rgba(17,24,39,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#ececec] pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold text-[#8e1f2f] uppercase tracking-[0.16em]">
                    {isTr ? 'Genel Merkez' : 'Headquarters'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                    İstanbul (Mecidiyeköy)
                  </h2>
                </div>
                <div className="p-3 bg-[#f8e6ea] text-[#8e1f2f] rounded-xl border border-[#eecdd4]">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-800 mb-8 font-medium">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#8e1f2f] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Global Forte Bilişim Teknolojileri ve Danışmanlık Ltd.</strong>
                    <span>Mecidiyeköy Mah. Başaran Sok. No: 2, Şişli 34387 İstanbul - Türkiye</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-[#8e1f2f] shrink-0" />
                  <div>
                    <span className="text-slate-600 text-xs block">{isTr ? 'Santral / Telefon:' : 'Switchboard / Phone:'}</span>
                    <span className="font-mono text-slate-900 font-bold">+90 (212) 279 2440</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Printer className="w-5 h-5 text-[#8e1f2f] shrink-0" />
                  <div>
                    <span className="text-slate-600 text-xs block">{isTr ? 'Faks:' : 'Fax:'}</span>
                    <span className="font-mono text-slate-900 font-bold">+90 (212) 279 0503</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Mail className="w-5 h-5 text-[#8e1f2f] shrink-0" />
                  <div>
                    <span className="text-slate-600 text-xs block">{isTr ? 'Kurumsal E-posta:' : 'Email Inquiries:'}</span>
                    <span className="font-mono text-slate-900 font-bold">info@globalforte.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-[#8e1f2f] shrink-0" />
                  <div>
                    <span className="text-slate-600 text-xs block">{isTr ? 'Çalışma Saatleri:' : 'Operating Hours:'}</span>
                    <span>{isTr ? 'Pazartesi - Cuma, 09:00 - 18:00 (GMT+3)' : 'Mon - Fri, 09:00 - 18:00 (GMT+3)'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#eeeeee] rounded-xl text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2 font-medium">
              <span className="font-bold text-slate-900">
                {isTr ? 'Merkez Laboratuvar & Sertifikasyon:' : 'Central Lab & Accreditations:'}
              </span>
              <div className="flex items-center gap-2 text-slate-800 font-mono text-[11px]">
                <span className="px-2 py-0.5 bg-white rounded border border-slate-200">ISO 9001</span>
                <span className="px-2 py-0.5 bg-[#f8e6ea] text-[#8e1f2f] rounded font-bold border border-[#eecdd4]">TSE-HYB</span>
                <span className="px-2 py-0.5 bg-white rounded border border-slate-200">ISO 27001</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-[#fcfbfb] border border-[#eeeeee] rounded-[20px] p-6 shadow-[0_1px_0_rgba(17,24,39,0.02)]">
              <div className="flex items-center gap-3 mb-2 text-[#8e1f2f]">
                <Wrench className="w-5 h-5" />
                <h3 className="text-sm font-bold text-slate-900">
                  {isTr ? 'Teknik Destek & Ar-Ge Laboratuvarı' : 'Technical Support & Test Lab'}
                </h3>
              </div>
              <p className="text-xs text-slate-700 mb-3 font-medium">
                {isTr
                  ? 'FIPS kripto modülleri yapılandırması, VMS kamera entegrasyonu ve kablosuz saha testi için mühendislik masası.'
                  : 'Hardware test bench, firmware updates, and direct RMA support.'}
              </p>
              <span className="text-xs font-mono font-bold text-slate-900">destek@globalforte.com</span>
            </div>

            <div className="bg-[#fcfbfb] border border-[#eeeeee] rounded-[20px] p-6 shadow-[0_1px_0_rgba(17,24,39,0.02)]">
              <div className="flex items-center gap-3 mb-2 text-[#8e1f2f]">
                <Users className="w-5 h-5" />
                <h3 className="text-sm font-bold text-slate-900">
                  {isTr ? 'Proje, Şartname & Satış Danışmanlığı' : 'Projects & Procurement'}
                </h3>
              </div>
              <p className="text-xs text-slate-700 mb-3 font-medium">
                {isTr
                  ? 'Kamu ihaleleri, KGYS şartnameleri, bayi kanal tedariki ve kurumsal teklif talepleri.'
                  : 'Tender technical compliance, channel distribution, and quotation requests.'}
              </p>
              <span className="text-xs font-mono font-bold text-slate-900">satis@globalforte.com</span>
            </div>

            <div className="bg-[#fcfbfb] border border-[#eeeeee] rounded-[20px] p-6 shadow-[0_1px_0_rgba(17,24,39,0.02)]">
              <div className="flex items-center gap-3 mb-2 text-[#8e1f2f]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-sm font-bold text-slate-900">
                  {isTr ? 'Güvenli Hosting & Altyapı Yönetimi' : 'Secure Hosting Operations'}
                </h3>
              </div>
              <p className="text-xs text-slate-700 mb-3 font-medium">
                {isTr
                  ? 'Tier-3 kurumsal veri merkezi sunucu barındırma, DNS ve e-posta altyapısı operasyonları.'
                  : 'Hosting infrastructure, DNS zone management, and server administration.'}
              </p>
              <span className="text-xs font-mono font-bold text-slate-900">hosting@globalforte.com</span>
            </div>
          </div>
        </div>

        <div className="bg-[#fcfbfb] border border-[#eeeeee] rounded-[24px] p-8 sm:p-10 shadow-[0_1px_0_rgba(17,24,39,0.02)] max-w-4xl mx-auto">
          <div className="max-w-xl mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {isTr ? 'Mühendislik ve Bilgi Talep Formu' : 'Inquiry & Technical Advisory Form'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
              {isTr
                ? 'İhtiyaç duyduğunuz ürün föyleri, şartname desteği veya proje teklifleri için formu doldurabilirsiniz.'
                : 'Submit your technical specifications or tender requirements directly to our engineering coordinators.'}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#ecfdf5] border border-[#bbf7d0] rounded-xl text-center">
              <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#166534] mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-emerald-950 mb-1">
                {isTr ? 'Mesajınız Başarıyla İletildi' : 'Your Message Has Been Received'}
              </h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto mb-5 font-medium">
                {isTr
                  ? 'Talebiniz ilgili teknik birimimize iletilmiştir. Yetkili mühendisimiz mesai saatleri içinde sizinle iletişime geçecektir.'
                  : 'Our certified engineering coordinator will review your request and get back to you promptly.'}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    organization: '',
                    email: '',
                    phone: '',
                    department: 'teknik',
                    message: '',
                  });
                }}
                className="px-4 py-2 bg-[#166534] text-white rounded-lg text-xs font-semibold hover:bg-[#14532d] transition-colors cursor-pointer shadow-xs"
              >
                {isTr ? 'Yeni Mesaj Gönder' : 'Send Another Inquiry'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-[#fef2f2] border border-[#fecaca] rounded-xl text-xs text-[#b91c1c] font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {isTr ? 'Adınız ve Soyadınız *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isTr ? 'Örn: Ahmet Yılmaz' : 'e.g. John Doe'}
                    className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8e1f2f] focus:ring-2 focus:ring-[#f3d7dc] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {isTr ? 'Kurum / Şirket Adı *' : 'Organization / Company *'}
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={isTr ? 'Örn: Savunma Sanayii / Banka' : 'e.g. Enterprise / Ministry'}
                    className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8e1f2f] focus:ring-2 focus:ring-[#f3d7dc] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {isTr ? 'Kurumsal E-posta Adresi *' : 'Corporate Email Address *'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@kurum.com.tr"
                    className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8e1f2f] focus:ring-2 focus:ring-[#f3d7dc] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {isTr ? 'Telefon Numarası' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+90 (___) ___ __ __"
                    className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8e1f2f] focus:ring-2 focus:ring-[#f3d7dc] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {isTr ? 'İlgilenilen Konu / Teknoloji Alanı' : 'Area of Interest'}
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#8e1f2f] focus:ring-2 focus:ring-[#f3d7dc] transition"
                >
                  <option value="hsm">{isTr ? 'Donanımsal Güvenlik Modülleri (SafeNet Luna / EFT HSM)' : 'Hardware Security Modules (HSM)'}</option>
                  <option value="digifort">{isTr ? 'Digifort IP Video Yönetimi & LPR Plaka Tanıma (VMS)' : 'Digifort Video Surveillance & LPR'}</option>
                  <option value="redline">{isTr ? 'Redline Communications Geniş Bant & WiMAX Ağları' : 'Redline Broadband Wireless'}</option>
                  <option value="fortress">{isTr ? 'Fortress Askeri Taktik Mesh & FC-X Kripto' : 'Fortress Tactical Mesh & Encryptors'}</option>
                  <option value="spyrus">{isTr ? 'SPYRUS Donanımsal Token & Rosetta Akıllı Kartlar' : 'SPYRUS Hardware Tokens'}</option>
                  <option value="cryptomathic">{isTr ? 'Cryptomathic CKMS & Nitelikli e-İmza' : 'Cryptomathic CKMS & Signer'}</option>
                  <option value="hosting">{isTr ? 'Güvenli Kurumsal Barındırma & Sunucu Altyapısı' : 'Secure Hosting & Servers'}</option>
                  <option value="genel">{isTr ? 'Genel Danışmanlık ve Şartname Desteği' : 'General Advisory & Specifications'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {isTr ? 'Mesajınız ve Proje Detayları' : 'Your Message / Requirements'}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isTr
                      ? 'Projeniz, kamera sayısı, veri bant genişliği veya kriptografik gereksinimleriniz hakkında bilgi veriniz...'
                      : 'Please describe your network parameters, security requirements, or project details...'
                  }
                  className="w-full bg-white border border-[#e5e7eb] rounded-xl px-3.5 py-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8e1f2f] focus:ring-2 focus:ring-[#f3d7dc] transition"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#8e1f2f] hover:bg-[#6d1623] rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isTr ? 'Formu Gönder' : 'Submit Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
