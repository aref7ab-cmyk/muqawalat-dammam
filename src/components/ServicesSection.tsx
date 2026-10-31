'use client';

import Image from 'next/image';
import { handleWhatsAppClick, handlePhoneClick } from '@/lib/analytics';

const WA_HREF = 'https://wa.me/966531489160';
const TEL_HREF = 'tel:0531489160';

const services = [
  {
    title: "واجهات كلادينج",
    desc: "تنفيذ واجهات كلادينج حديثة بجودة عالية وتشطيب احترافي يدوم طويلا",
    img: "/images/cladding-1.jpg",
    alt: "مقاولات الدمام - كلادينج - مظلات - هناجر"
  },
  {
    title: "مظلات وسواتر",
    desc: "تركيب جميع أنواع المظلات والسواتر بجودة عالية وتصاميم عصرية",
    img: "/images/mazalla-1.jpg",
    alt: "مقاولات الدمام - كلادينج - مظلات - هناجر"
  },
  {
    title: "واجهات كلادينج فاخرة",
    desc: "واجهات فلل كلادينج فاخرة بتصاميم عصرية وجودة مضمونة",
    img: "/images/cladding-9.jpg",
    alt: "مقاولات الدمام - كلادينج - مظلات - هناجر"
  },
  {
    title: "برجولات وجلسات خارجية",
    desc: "تصميم وتنفيذ أحدث البرجولات الخشبية والمعدنية للحدائق والأسطح بتشطيبات راقية",
    img: "/images/pergola-1.jpg",
    alt: "مقاولات الدمام - كلادينج - مظلات - هناجر"
  }
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: '6rem 0',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">خدماتنا</p>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">
            ماذا <span>نُقدم</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            نقدم حلولاً متكاملة في واجهات الكلادينج والمظلات والسواتر والبرجولات بأعلى معايير الدقة والإتقان
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              id={`service-${i}`}
              className="card-hover"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <Image
                  src={service.img}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30,41,59,0.25) 0%, transparent 60%)',
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#1E293B',
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#475569',
                  fontSize: '0.94rem',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                  flexGrow: 1,
                }}>
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#D97706',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.gap = '0.7rem';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.gap = '0.4rem';
                  }}
                >
                  استفسر عن الخدمة
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </a>
              </div>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #F59E0B, #FBBF24)',
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: '#64748B', marginBottom: '1.5rem', fontSize: '1.05rem', fontWeight: 600 }}>
            هل تحتاج مشروعاً؟ نسعد بخدمتك دائماً
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              id="services-call-btn"
              className="btn-primary"
              onClick={() => handlePhoneClick(TEL_HREF)}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              اتصل الآن: 0531489160
            </button>
            <button
              id="services-whatsapp-btn"
              className="btn-whatsapp"
              onClick={() => handleWhatsAppClick(WA_HREF)}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              تواصل واتساب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
