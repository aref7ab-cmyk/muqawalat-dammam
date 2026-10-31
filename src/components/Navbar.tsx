'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { handleWhatsAppClick, handlePhoneClick } from '@/lib/analytics';

const WA_HREF = 'https://wa.me/966531489160';
const TEL_HREF = 'tel:0531489160';
const IG_HREF = 'https://www.instagram.com/blacksmithing_and_decoration_a';

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'معرض الأعمال', href: '#portfolio' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: '#FFFFFF',
          boxShadow: scrolled
            ? '0 4px 20px rgba(0, 0, 0, 0.1)'
            : '0 2px 10px rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid #e2e8f0',
          padding: scrolled ? '0.75rem 0' : '1.1rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="#home" onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#1E293B',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                مقاولات عامة <span style={{ color: '#F59E0B' }}>بالدمام</span>
              </span>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#64748B',
                letterSpacing: '0.04em',
              }}>
                حدادة • ديكور • بناء
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul
            style={{
              display: 'flex',
              gap: '0.25rem',
              listStyle: 'none',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: '#1E293B',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = '#F59E0B';
                    (e.target as HTMLElement).style.background = 'rgba(245,158,11,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = '#1E293B';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                id="nav-call-btn"
                className="btn-primary"
                onClick={() => handlePhoneClick(TEL_HREF)}
                style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem', cursor: 'pointer', border: 'none' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                اتصل الآن
              </button>
            </li>
            <li>
              <a
                id="nav-instagram-btn"
                href={IG_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تابعنا على انستغرام"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'white',
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                انستغرام
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            id="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger-btn"
            aria-label="فتح القائمة"
          >
            <span style={{
              display: 'block',
              width: '26px',
              height: '2px',
              background: '#1E293B',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '26px',
              height: '2px',
              background: '#1E293B',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: isOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '26px',
              height: '2px',
              background: '#1E293B',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 999,
          background: '#FFFFFF',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          paddingTop: '5rem',
          boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              color: '#1E293B',
              textDecoration: 'none',
              fontSize: '1.4rem',
              fontWeight: 700,
              padding: '0.75rem 2rem',
              borderBottom: '1px solid #f1f5f9',
              width: '80%',
              textAlign: 'center',
              transition: 'color 0.2s ease',
              animationDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#F59E0B'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1E293B'}
          >
            {link.label}
          </a>
        ))}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button id="mobile-call-btn" className="btn-primary" onClick={() => { handlePhoneClick(TEL_HREF); handleLinkClick(); }} style={{ border: 'none', cursor: 'pointer' }}>
            اتصل الآن
          </button>
          <button id="mobile-whatsapp-btn" className="btn-whatsapp" onClick={() => { handleWhatsAppClick(WA_HREF); handleLinkClick(); }} style={{ border: 'none', cursor: 'pointer' }}>
            واتساب
          </button>
          <a
            id="mobile-instagram-btn"
            href={IG_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تابعنا على انستغرام"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.75rem 1.75rem',
              fontSize: '1rem',
              fontWeight: 700,
              borderRadius: '50px',
              textDecoration: 'none',
              cursor: 'pointer',
              color: 'white',
              background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            انستغرام
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
