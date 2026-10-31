'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: 'cladding' | 'mazalla' | 'pergola' | 'hadada';
  categoryLabel: string;
  alt: string;
}

const rawImages: PortfolioItem[] = [
  {
    id: 1,
    src: '/images/cladding-1.jpg',
    title: 'واجهات كلادينج بني مع شباك بني',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'واجهات كلادينج بني مودرن في الدمام'
  },
  {
    id: 2,
    src: '/images/mazalla-1.jpg',
    title: 'مظلات وسواتر قماشية للأحواش',
    category: 'mazalla',
    categoryLabel: 'مظلات وسواتر',
    alt: 'حوش مع مظلة زرقاء قماش بالدمام'
  },
  {
    id: 3,
    src: '/images/cladding-9.jpg',
    title: 'واجهات كلادينج فاخرة لفلل مودرن',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'واجهات فلة بيج فاتح كلادينج في الدمام'
  },
  {
    id: 4,
    src: '/images/pergola-1.jpg',
    title: 'برجولات خشبية وحديدية مع ليزر',
    category: 'pergola',
    categoryLabel: 'برجولات وجلسات',
    alt: 'برجولات وجلسات خارجية بالدمام'
  },
  {
    id: 5,
    src: '/images/cladding-3.jpg',
    title: 'تكسيات كلادينج خشبية مقاومة',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'تركيب كلادينج خشبي لواجهات المباني بالدمام'
  },
  {
    id: 6,
    src: '/images/cladding-5.jpg',
    title: 'ديكور جداري خشب وعشب صناعي',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'تكسيات جدارية خشبية مع عشب صناعي بالدمام'
  },
  {
    id: 7,
    src: '/images/mazalla-2.jpg',
    title: 'مظلات سيارات ومداخل مقوسة',
    category: 'mazalla',
    categoryLabel: 'مظلات وسواتر',
    alt: 'مظلات سيارات ومداخل قماشية بالدمام'
  },
  {
    id: 8,
    src: '/images/hadada-1.jpg',
    title: 'سواتر شرائح وبوابات حديد ليزر',
    category: 'hadada',
    categoryLabel: 'أعمال حدادة',
    alt: 'سواتر وبوابات حديد ليزر بالدمام'
  },
  {
    id: 9,
    src: '/images/cladding-13.jpg',
    title: 'كلادينج واجهات فلل عصرية راقية',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'واجهات فلل كلادينج بالدمام'
  },
  {
    id: 10,
    src: '/images/pergola-2.jpg',
    title: 'برجولات أسطح وحدائق بتصميم عصري',
    category: 'pergola',
    categoryLabel: 'برجولات وجلسات',
    alt: 'برجولات أسطح وحدائق مودرن بالدمام'
  },
  {
    id: 11,
    src: '/images/hadada-2.jpg',
    title: 'واجهات فلل متكاملة وبوابات حديد',
    category: 'hadada',
    categoryLabel: 'أعمال حدادة',
    alt: 'بوابات حديد وتكسيات بالدمام'
  },
  {
    id: 12,
    src: '/images/cladding-15.jpg',
    title: 'واجهات عمائر سكنية وتجارية كلادينج',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'كلادينج عمائر ومباني بالدمام'
  },
  {
    id: 13,
    src: '/images/cladding-18.jpg',
    title: 'تكسيات جدارية خارجية وديكور حدائق',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'تكسيات حدائق وجدران بالدمام'
  },
  {
    id: 14,
    src: '/images/cladding-7.jpg',
    title: 'ديكورات داخلية بانوهات ومرايا',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'ديكورات داخلية وبانوهات فوم بالدمام'
  },
  {
    id: 15,
    src: '/images/cladding-12.jpg',
    title: 'تكسيات وتشطيبات حديثة',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'تشطيبات وتكسيات فاخرة بالدمام'
  },
  {
    id: 16,
    src: '/images/cladding-20.jpg',
    title: 'ديكورات خشب ورخام فاخرة',
    category: 'cladding',
    categoryLabel: 'واجهات كلادينج',
    alt: 'ديكورات وتكسيات خشب ورخام بالدمام'
  },
];

// Explicit filter to only allow files matching cladding-*, mazalla-*, hadada-*, or pergola-*
const validFilenamePattern = /^\/images\/(cladding-|mazalla-|hadada-|pergola-).+\.jpg$/;
const validPortfolioImages = rawImages.filter(item => validFilenamePattern.test(item.src));

const categories = [
  { key: 'all', label: 'جميع الأعمال' },
  { key: 'cladding', label: 'واجهات كلادينج' },
  { key: 'mazalla', label: 'مظلات وسواتر' },
  { key: 'pergola', label: 'برجولات وجلسات' },
  { key: 'hadada', label: 'أعمال حدادة' },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedImages = useMemo(() => {
    if (selectedCategory === 'all') return validPortfolioImages;
    return validPortfolioImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === displayedImages.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') prevImage();
    if (e.key === 'ArrowLeft') nextImage();
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: '6rem 0',
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p className="section-label">معرض أعمالنا الحقيقية</p>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">
            من <span>مشاريعنا المنفذة</span> بالدمام
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            صور حقيقية 100% من مشاريعنا المنفذة في واجهات الكلادينج والمظلات والسواتر والبرجولات
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.65rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: '50px',
                  border: isActive ? '2px solid #F59E0B' : '1px solid #E2E8F0',
                  background: isActive ? '#F59E0B' : '#F8FAFC',
                  color: isActive ? '#1E293B' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(245,158,11,0.3)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {displayedImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '4/3',
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Image
                src={img.src}
                alt="مقاولات الدمام - كلادينج - مظلات - هناجر"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.06)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
              />
              {/* Overlay with title and tag */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
              >
                <span style={{
                  alignSelf: 'flex-start',
                  background: '#F59E0B',
                  color: '#1E293B',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '50px',
                  marginBottom: '0.5rem',
                }}>
                  {img.categoryLabel}
                </span>
                <h4 style={{
                  color: '#FFFFFF',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  lineHeight: 1.4,
                  marginBottom: '0.25rem',
                }}>
                  {img.title}
                </h4>
                <span style={{ color: '#FDE68A', fontSize: '0.8rem', fontWeight: 600 }}>
                  اضغط للتكبير والمشاهدة 🔍
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: '4.5rem',
          textAlign: 'center',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '24px',
          padding: '3rem 2rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
        }}>
          <h3 style={{
            fontSize: '1.65rem',
            fontWeight: 800,
            color: '#1E293B',
            marginBottom: '0.75rem',
          }}>
            هل ترغب في تنفيذ مشروع مماثل؟
          </h3>
          <p style={{ color: '#64748B', marginBottom: '1.75rem', fontSize: '1.02rem', fontWeight: 500 }}>
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر فوري
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0531489160" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              اتصال مباشر: 0531489160
            </a>
            <a href="https://wa.me/966531489160" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              مراسلة عبر واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && displayedImages[currentIndex] && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.97)',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="معاينة الصورة"
        >
          {/* Top Bar with title and close button */}
          <div style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10001,
          }}>
            <div style={{
              color: 'white',
              background: 'rgba(255,255,255,0.15)',
              padding: '0.4rem 1.1rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 700,
            }}>
              {currentIndex + 1} / {displayedImages.length}
            </div>

            <div style={{ color: '#FDE68A', fontWeight: 700, fontSize: '1.05rem' }}>
              {displayedImages[currentIndex].title}
            </div>

            <button
              onClick={closeLightbox}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: 'white',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="إغلاق"
            >
              ✕
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#F59E0B',
              border: 'none',
              color: '#1E293B',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.6rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
              fontWeight: 900,
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
            aria-label="الصورة السابقة"
          >
            ›
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#F59E0B',
              border: 'none',
              color: '#1E293B',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.6rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
              fontWeight: 900,
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}
            aria-label="الصورة التالية"
          >
            ‹
          </button>

          {/* Image display */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '80vh',
              width: '900px',
              height: '650px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            }}
          >
            <Image
              src={displayedImages[currentIndex].src}
              alt="مقاولات الدمام - كلادينج - مظلات - هناجر"
              fill
              sizes="90vw"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
