'use client';

import { useState } from 'react';
import { handleWhatsAppClick, handlePhoneClick } from '@/lib/analytics';

const WA_HREF = 'https://wa.me/966531489160';
const TEL_HREF = 'tel:0531489160';

const faqs = [
  {
    q: 'ما هي الخدمات التي تقدمونها؟',
    a: 'نتخصص في ست خدمات رئيسية: حدادة أبواب وشبابيك، هناجر ومستودعات، بناء عظم، تشطيب، ديكور حديد، ودرابزين. نحرص في كل خدمة على تقديم حل يتناسب مع متطلبات مشروعكم بأعلى معايير الجودة.',
  },
  {
    q: 'كيف يمكنني التواصل للحصول على عرض سعر؟',
    a: 'يمكنك التواصل معنا مباشرةً عبر الاتصال على 0531489160 أو مراسلتنا عبر واتساب على نفس الرقم، وسنرد عليك في أقرب وقت لمناقشة تفاصيل مشروعك وتقديم تسعيرة واضحة.',
  },
  {
    q: 'هل تعملون على مشاريع خارج مدينة الدمام؟',
    a: 'مقرنا الرئيسي في الدمام، ونخدم كافة مدن المنطقة الشرقية (الخبر، الظهران، القطيف، الجبيل). للاستفسار عن مشاريع أخرى يرجى التواصل معنا.',
  },
  {
    q: 'ما هي مدة تنفيذ المشاريع عادةً؟',
    a: 'تختلف مدة التنفيذ حسب حجم وطبيعة المشروع. نحرص على وضع جدول زمني محدد ودقيق مع العميل قبل البدء والالتزام به حتى التسليم.',
  },
  {
    q: 'هل تقدمون معاينة واستشارة قبل البدء؟',
    a: 'نعم، نوفر خدمة المعاينة الميدانية والاستشارة الفنية لفهم متطلبات مشروعكم واقتراح أفضل الحلول والتصاميم الملائمة.',
  },
  {
    q: 'ما هي جودة المواد المستخدمة في أعمال الحدادة والبناء؟',
    a: 'نلتزم باستخدام أفضل خامات الحديد المعتمدة، ومواد البناء والدهانات المقاومة للصدأ والعوامل الجوية بالمنطقة الشرقية لضمان أعلى متانة.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: '6rem 0',
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Info */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <p className="section-label">الأسئلة الشائعة</p>
            <div className="gold-line" />
            <h2 className="section-title">
              أسئلة <span>شائعة</span>
            </h2>
            <p style={{ color: '#64748B', lineHeight: 1.9, fontSize: '1.02rem', marginBottom: '2rem', fontWeight: 500 }}>
              إجابات على أكثر الاستفسارات تكراراً حول أعمالنا وخدماتنا. وإذا كان لديك أي سؤال إضافي، فريقنا جاهز للإجابة فوراً.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                id="faq-call-btn"
                className="btn-primary"
                onClick={() => handlePhoneClick(TEL_HREF)}
                style={{ textAlign: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', width: '100%' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                اتصل بنا: 0531489160
              </button>
              <button
                id="faq-whatsapp-btn"
                className="btn-whatsapp"
                onClick={() => handleWhatsAppClick(WA_HREF)}
                style={{ textAlign: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', width: '100%' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                تواصل عبر واتساب
              </button>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: openIndex === i ? '#FFFBEB' : '#F8FAFC',
                  border: openIndex === i ? '1px solid #FDE68A' : '1px solid #E2E8F0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: openIndex === i ? '0 4px 15px rgba(245,158,11,0.08)' : 'none',
                }}
              >
                <button
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    gap: '1rem',
                    textAlign: 'right',
                  }}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: openIndex === i ? '#B45309' : '#1E293B',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-cairo)',
                    transition: 'color 0.2s',
                    textAlign: 'right',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    color: openIndex === i ? '#B45309' : '#64748B',
                    fontSize: '1.4rem',
                    flexShrink: 0,
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    background: openIndex === i ? '#FEF3C7' : '#E2E8F0',
                    borderRadius: '50%',
                  }}>
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div
                    id={`faq-panel-${i}`}
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      color: '#475569',
                      lineHeight: 1.9,
                      fontSize: '0.98rem',
                      fontWeight: 500,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
