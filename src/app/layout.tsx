import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

const BASE_URL = "https://muqawalat-dammam.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "مقاولات عامة الدمام | حداد مظلات وسواتر كلادينج هناجر 0531489160",
    template: "%s | مقاولات عامة الدمام",
  },
  description: "مقاولات عامة في الدمام والمنطقة الشرقية - متخصصون في واجهات كلادينج، مظلات وسواتر، هناجر ومستودعات، حدادة أبواب وشبابيك، بناء عظم وتشطيب، ديكور حديد ودرابزين بجودة عالية وضمان - اتصل 0531489160",
  keywords: "مقاولات الدمام, حداد الدمام, مظلات الدمام, سواتر الدمام, كلادينج الدمام, هناجر الدمام, حدادة الدمام, مقاول الدمام, بناء الدمام, ديكور حديد الدمام",
  authors: [{ name: "مقاولات عامة الدمام" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "مقاولات عامة الدمام | حداد مظلات وسواتر كلادينج هناجر 0531489160",
    description: "مقاولات عامة في الدمام والمنطقة الشرقية - متخصصون في واجهات كلادينج، مظلات وسواتر، هناجر ومستودعات، حدادة أبواب وشبابيك، بناء عظم وتشطيب، ديكور حديد ودرابزين بجودة عالية وضمان - اتصل 0531489160",
    url: BASE_URL,
    type: "website",
    locale: "ar_SA",
    siteName: "مقاولات عامة الدمام",
  },
  twitter: {
    card: "summary_large_image",
    title: "مقاولات عامة الدمام | حداد مظلات وسواتر كلادينج هناجر 0531489160",
    description: "مقاولات عامة في الدمام والمنطقة الشرقية - متخصصون في واجهات كلادينج، مظلات وسواتر، هناجر ومستودعات، حدادة أبواب وشبابيك، بناء عظم وتشطيب، ديكور حديد ودرابزين بجودة عالية وضمان - اتصل 0531489160",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "مقاولات عامة الدمام",
  "telephone": "+966531489160",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "الدمام",
    "addressRegion": "الشرقية",
    "addressCountry": "SA",
  },
  "description": "مقاولات عامة في الدمام والمنطقة الشرقية - متخصصون في واجهات كلادينج، مظلات وسواتر، هناجر ومستودعات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
