'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { handleWhatsAppClick, trackEvent } from '@/lib/analytics';

const WA_HREF = 'https://wa.me/966531489160';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#FFFFFF',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/cladding-1.jpg"
          alt="مقاولات الدمام - كلادينج - مظلات - هناجر"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }}
        />
        {/* Soft white overlay with gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.92) 100%)',
        }} />
        {/* Amber accent overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(245,158,11,0.06) 0%, transparent 60%)',
        }} />
      </div>

      {/* Decorative shapes */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        border: '1px solid rgba(245,158,11,0.2)',
        animation: 'spin 20s linear infinite',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '220px',
        height: '220px',
        borderRadius: '50%',
        border: '1px solid rgba(30,41,59,0.08)',
        animation: 'spin 30s linear infinite reverse',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '8.5rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#FEF3C7',
              border: '1px solid #FDE68A',
              borderRadius: '50px',
              padding: '0.45rem 1.25rem',
              marginBottom: '1.75rem',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#F59E0B',
              display: 'block',
              animation: 'pulse-gold 2s infinite',
            }} />
            <span style={{ color: '#92400E', fontWeight: 700, fontSize: '0.92rem' }}>
              الدمام والمنطقة الشرقية - المملكة العربية السعودية
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(1.85rem, 4.5vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.25,
              marginBottom: '1rem',
              color: '#1E293B',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.2s',
            }}
          >
            مقاول عام في الدمام - كلادينج، مظلات وسواتر، هناجر ومستودعات
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '1.5rem',
              color: '#F59E0B',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.25s',
            }}
          >
            حدادة وبناء وتشطيب وديكور باحترافية
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
              color: '#334155',
              marginBottom: '2.5rem',
              lineHeight: 1.9,
              fontWeight: 500,
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.35s',
            }}
          >
            مقاولات عامة في الدمام والمنطقة الشرقية - متخصصون في واجهات كلادينج، مظلات وسواتر، هناجر ومستودعات، حدادة أبواب وشبابيك، بناء عظم وتشطيب، ديكور حديد ودرابزين بجودة عالية وضمان
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s ease 0.5s',
            }}
          >
            <a href="#contact" id="hero-contact-btn" className="btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              تواصل معنا
            </a>
            <button
              id="hero-whatsapp-btn"
              className="btn-whatsapp"
              onClick={() => handleWhatsAppClick(WA_HREF)}
              style={{ fontSize: '1.05rem', padding: '1rem 2.25rem', cursor: 'pointer', border: 'none' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              واتساب
            </button>
            <a
              id="hero-portfolio-btn"
              href="#portfolio"
              className="btn-secondary"
              style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}
              onClick={() => trackEvent('view_gallery')}
            >
              معرض الأعمال
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '3.5rem',
              flexWrap: 'wrap',
              opacity: loaded ? 1 : 0,
              transition: 'all 0.7s ease 0.7s',
            }}
          >
            {[
              { label: 'مشروع منجز', value: '١٠٠+' },
              { label: 'عميل راضٍ', value: '٨٠+' },
              { label: 'خدمة متكاملة', value: '٦' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#F59E0B',
                  lineHeight: 1.1,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#64748B', marginTop: '0.25rem', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: 2,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 1s ease 1.2s',
      }}>
        <span style={{ fontSize: '0.78rem', color: '#64748B', letterSpacing: '0.1em', fontWeight: 600 }}>تصفح</span>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(245,158,11,0.5)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px',
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: '#F59E0B',
            borderRadius: '2px',
            animation: 'scrollBounce 1.5s ease infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
