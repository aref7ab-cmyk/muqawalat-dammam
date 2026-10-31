'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { handleWhatsAppClick, handlePhoneClick, handleQuoteClick, trackEvent } from '@/lib/analytics';

export interface ServicePageData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  faqs: { q: string; a: string }[];
}

interface Props {
  data: ServicePageData;
}

const PHONE = '0531489160';
const WA_HREF = 'https://wa.me/966531489160';
const TEL_HREF = 'tel:0531489160';

export default function ServicePageLayout({ data }: Props) {
  return (
    <>
      <Navbar />
      <main style={{ background: '#FFFFFF' }}>
        {/* Hero */}
        <section
          style={{
            position: 'relative',
            minHeight: '55vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: '#FFFFFF',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src={data.image}
              alt="مقاولات الدمام - كلادينج - مظلات - هناجر"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
            }} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2, padding: '9rem 1.5rem 5rem' }}>
            <Link
              href="/#services"
              style={{
                color: '#64748B',
                fontSize: '0.92rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '1.5rem',
                fontWeight: 700,
              }}
            >
              ← العودة للخدمات
            </Link>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                color: '#1E293B',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              <span>{data.title}</span>
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#475569',
              maxWidth: '650px',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              fontWeight: 500,
            }}>
              {data.subtitle}
            </p>
            {/* CTA buttons - top */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                id="service-hero-whatsapp-btn"
                className="btn-whatsapp"
                onClick={() => {
                  trackEvent('view_service', { service: data.title });
                  handleWhatsAppClick(WA_HREF);
                }}
                style={{ fontSize: '1.05rem', padding: '1rem 2rem', cursor: 'pointer' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                تواصل واتساب
              </button>
              <button
                id="service-hero-quote-btn"
                className="btn-primary"
                onClick={() => {
                  handleQuoteClick();
                  handlePhoneClick(TEL_HREF);
                }}
                style={{ fontSize: '1.05rem', padding: '1rem 2rem', cursor: 'pointer' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                اطلب عرض سعر: {PHONE}
              </button>
            </div>
          </div>
        </section>

        {/* Description + Features */}
        <section style={{ padding: '5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
<<<<<<< HEAD
            {data.title === 'مظلات الدمام' && (
              <div className="mb-8">
                <img
                  src="/images/5.jpg"
                  alt="مظلات الدمام"
                  className="w-full h-[500px] object-cover rounded-xl"
                />
              </div>
            )}
            <p style={{ color: '#3a3a3a', fontSize: '1.08rem', lineHeight: 2, marginBottom: '2.5rem' }}>
=======
            <p style={{ color: '#334155', fontSize: '1.08rem', lineHeight: 2, marginBottom: '2.5rem', fontWeight: 500 }}>
>>>>>>> cc52501 (feat(seo): optimize meta tags, jsonld schema, alt attributes and update footer)
              {data.description}
            </p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E293B', marginBottom: '1.5rem' }}>
              مميزات الخدمة
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {data.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', color: '#475569', fontSize: '1rem', lineHeight: 1.7 }}>
                  <span style={{ color: '#F59E0B', fontWeight: 800, flexShrink: 0, fontSize: '1.1rem' }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1E293B', marginBottom: '2.5rem', textAlign: 'center' }}>
              أسئلة شائعة عن <span style={{ color: '#F59E0B' }}>{data.title}</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {data.faqs.map((faq, i) => (
                <div
                  key={i}
                  itemScope
                  itemType="https://schema.org/Question"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  }}
                >
                  <h3
                    itemProp="name"
                    style={{ color: '#1E293B', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.75rem' }}
                  >
                    {faq.q}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" style={{ color: '#475569', lineHeight: 1.9, fontSize: '0.98rem' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{
          padding: '4.5rem 0',
          background: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
          textAlign: 'center',
        }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 900, color: '#1E293B', marginBottom: '0.75rem' }}>
              جاهز لبدء مشروعك؟
            </h2>
            <p style={{ color: '#64748B', marginBottom: '2rem', fontSize: '1.05rem', fontWeight: 500 }}>
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر فوري
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                id="service-bottom-whatsapp-btn"
                className="btn-whatsapp"
                onClick={() => {
                  handleQuoteClick();
                  handleWhatsAppClick(WA_HREF);
                }}
                style={{ fontSize: '1.05rem', padding: '1rem 2.25rem', cursor: 'pointer' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                طلب عرض سعر واتساب
              </button>
              <button
                id="service-bottom-call-btn"
                className="btn-primary"
                onClick={() => handlePhoneClick(TEL_HREF)}
                style={{ fontSize: '1.05rem', padding: '1rem 2.25rem', cursor: 'pointer' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                اتصل: {PHONE}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
