'use client';

import { handleWhatsAppClick, handlePhoneClick } from '@/lib/analytics';

const WA_HREF = 'https://wa.me/966531489160';
const TEL_HREF = 'tel:0531489160';
const IG_HREF = 'https://www.instagram.com/blacksmithing_and_decoration_a';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      padding: '4rem 0 0',
      color: '#1E293B',
    }}>
      <div className="container">
        {/* Main footer content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                fontSize: '1.35rem',
                fontWeight: 900,
                color: '#1E293B',
                lineHeight: 1.2,
              }}>
                مقاولات عامة <span style={{ color: '#F59E0B' }}>في الدمام</span>
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: '#64748B',
                marginTop: '0.25rem',
                fontWeight: 600,
              }}>
                حدادة • ديكور • بناء
              </div>
            </div>
            <p style={{
              color: '#475569',
              fontSize: '0.94rem',
              lineHeight: 1.9,
              marginBottom: '1.5rem',
            }}>
              مؤسسة متخصصة في أعمال المقاولات العامة والحدادة والديكور والبناء بالدمام وكافة مدن المنطقة الشرقية.
            </p>
            {/* Social-like contact buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                id="footer-call-btn"
                onClick={() => handlePhoneClick(TEL_HREF)}
                style={{
                  width: '44px',
                  height: '44px',
                  background: '#FEF3C7',
                  border: '1px solid #FDE68A',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: '#B45309',
                  cursor: 'pointer',
                }}
                aria-label="اتصال هاتفي"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>
              <button
                id="footer-whatsapp-btn"
                onClick={() => handleWhatsAppClick(WA_HREF)}
                style={{
                  width: '44px',
                  height: '44px',
                  background: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: '#16A34A',
                  cursor: 'pointer',
                }}
                aria-label="مراسلة واتساب"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
              <a
                id="footer-instagram-btn"
                href={IG_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تابعنا على انستغرام"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#1E293B',
              marginBottom: '1.25rem',
            }}>
              روابط سريعة
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'الرئيسية', href: '#home' },
                { label: 'من نحن', href: '#about' },
                { label: 'خدماتنا', href: '#services' },
                { label: 'معرض الأعمال', href: '#portfolio' },
                { label: 'الأسئلة الشائعة', href: '#faq' },
                { label: 'تواصل معنا', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#F59E0B'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#475569'}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#1E293B',
              marginBottom: '1.25rem',
            }}>
              خدماتنا
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                'حدادة أبواب وشبابيك بالدمام',
                'هناجر ومستودعات ومخازن',
                'بناء عظم وتشطيبات داخلية وخارجية',
                'ديكور حديد فني وعصري',
                'درابزين سلالم وبلكونات',
                'مقاولات عامة وترميم وصيانة',
              ].map((serv, i) => (
                <li key={i} style={{ color: '#475569', fontSize: '0.94rem', fontWeight: 500 }}>
                  {serv}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info column */}
          <div>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#1E293B',
              marginBottom: '1.25rem',
            }}>
              معلومات الاتصال
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a
                  href={TEL_HREF}
                  style={{ color: '#1E293B', textDecoration: 'none', fontWeight: 800, fontSize: '1.05rem' }}
                >
                  0531489160
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#16A34A">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#16A34A', textDecoration: 'none', fontWeight: 800, fontSize: '1.05rem' }}
                >
                  واتساب: 0531489160
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span style={{ color: '#475569', fontSize: '0.94rem', fontWeight: 600 }}>الدمام، المنطقة الشرقية، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center py-6 border-t mt-8">
          <p className="text-sm text-gray-600">© 2026 مقاولات عامة في الدمام - حدادة وديكور وبناء</p>
          <p className="mt-3 text-sm text-gray-500">
            تصميم وتطوير الموقع:{' '}
            <a 
              href="https://wa.me/967781040510?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%A3%D8%A8%D9%88%20%D9%8A%D8%AD%D9%8A%D9%89%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-black underline hover:text-blue-600"
            >
              أبو يحيى للتصميم | 781040510
            </a>
          </p>
        </div>
      </div>

      {/* Floating Buttons Group */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '1.5rem',
          display: 'flex',
          flexDirection: 'row',
          gap: '0.75rem',
          zIndex: 9999,
          alignItems: 'center',
        }}
      >
        {/* WhatsApp */}
        <button
          id="float-whatsapp-btn"
          className="float-whatsapp"
          onClick={() => handleWhatsAppClick(WA_HREF)}
          aria-label="تواصل عبر واتساب"
          style={{ border: 'none', cursor: 'pointer' }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>

        {/* Instagram */}
        <a
          id="float-instagram-btn"
          className="float-instagram"
          href={IG_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تابعنا على انستغرام"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
