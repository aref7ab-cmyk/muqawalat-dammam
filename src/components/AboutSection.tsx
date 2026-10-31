'use client';

import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.87-5.83m-3.71 3.75l-7.46-7.46a2.67 2.67 0 010-3.77 2.67 2.67 0 013.77 0l7.46 7.46m-3.77 3.77l3.77-3.77" />
      </svg>
    ),
    title: 'خبرة واحترافية',
    desc: 'فريق عمل متمرس يمتلك مهارات عالية في أعمال الحدادة والمقاولات العامة وتنفيذ أدق التفاصيل.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'جودة المواد والعمل',
    desc: 'نستخدم أفضل أنواع الحديد ومواد البناء المعتمدة لضمان متانة وطول عمر كل مشروع.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'دقة في المواعيد',
    desc: 'نلتزم بالجدول الزمني المتفق عليه ونسلم المشاريع في موعدها المحدد دون تأخير.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6H2.25m0 0v8.25m0 0h1.5a.75.75 0 01.75.75v.75m0 0H2.25m19.5-8.25h-1.5a.75.75 0 01-.75-.75V6m0 0h1.5m0 0V4.5m0 9.75h-1.5a.75.75 0 01-.75-.75v-.75m0 0h1.5m0 0V15m-15 0h15" />
      </svg>
    ),
    title: 'أسعار مناسبة',
    desc: 'عروض أسعار شفافة ومنافسة تناسب متطلباتكم مع الحفاظ على أعلى معايير الجودة.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">من نحن</p>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="section-title">
            رواد في <span>المقاولات والحدادة</span> بالدمام
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            نقدم حلولاً متكاملة في المقاولات العامة والحدادة والديكور في الدمام، تجمع بين الحرفية العالية وأحدث أساليب البناء الحديث
          </p>
        </div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '4rem',
        }}>
          {/* Image */}
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '420px',
            gridColumn: 'span 1',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '1px solid #E2E8F0',
          }}>
            <Image
              src="/images/cladding-13.jpg"
              alt="مقاولات الدمام - كلادينج - مظلات - هناجر"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            {/* Subtle overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(30,41,59,0.4) 0%, transparent 60%)',
            }} />
          </div>

          {/* Text */}
          <div style={{ padding: '0.5rem' }}>
            <p className="section-label">رؤيتنا</p>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#1E293B',
              marginBottom: '1.25rem',
              lineHeight: 1.3,
            }}>
              نبني الثقة من خلال الجودة والإتقان في كل عمل ننجزه
            </h3>
            <p style={{
              color: '#475569',
              lineHeight: 1.9,
              marginBottom: '1.25rem',
              fontSize: '1rem',
            }}>
              نحن مؤسسة رائدة في المنطقة الشرقية متخصصة في أعمال المقاولات العامة والحدادة والديكور. نفتخر بتقديم مجموعة شاملة من الخدمات تشمل حدادة الأبواب والشبابيك، بناء وتنفيذ الهناجر والمستودعات، بناء عظم وتشطيب، بالإضافة إلى ديكور الحديد والدرابزين العصري.
            </p>
            <p style={{
              color: '#475569',
              lineHeight: 1.9,
              marginBottom: '2rem',
              fontSize: '1rem',
            }}>
              نضع رضا العميل وسلامة التنفيذ على رأس أولوياتنا، ونحرص دائماً على تطبيق أعلى المعايير الهندسية والفنية في كل مرحلة من مراحل العمل.
            </p>
            <a href="#services" className="btn-primary">
              تعرف على خدماتنا
            </a>
          </div>
        </div>

        {/* Features grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {features.map((feat, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.08))',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                color: '#D97706',
              }}>
                {feat.icon}
              </div>
              <h4 style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#1E293B',
                marginBottom: '0.75rem',
              }}>
                {feat.title}
              </h4>
              <p style={{
                color: '#64748B',
                fontSize: '0.92rem',
                lineHeight: 1.8,
              }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
