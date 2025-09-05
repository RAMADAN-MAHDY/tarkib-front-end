import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
  display: "swap",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "تراكيب | نجارة وديكورات حديثة وخزائن حسب الطلب",
  description: "مؤسسة تراكيب متخصصة في تنفيذ الخزائن والجدران الديكورية بتصاميم عصرية وجودة عالية في السعودية. نجارة، خزائن، ديكور حديث، جدران ديكورية، تنفيذ حسب الطلب.",
  keywords: [
    "تراكيب", "نجارة", "خزائن", "ديكور حديث", "جدران ديكورية", "خزائن ملابس", "تصاميم عصرية", "ديكورات", "تنفيذ حسب الطلب", "مؤسسة تراكيب"
  ],
  openGraph: {
    title: "تراكيب | نجارة وديكورات حديثة وخزائن حسب الطلب",
    description: "مؤسسة تراكيب متخصصة في تنفيذ الخزائن والجدران الديكورية بتصاميم عصرية وجودة عالية في السعودية.",
    type: "website",
    locale: "ar_SA",
    // url: "https://tarakib.sa/",
    siteName: "تراكيب"
  },
  twitter: {
    card: "summary_large_image",
    title: "تراكيب | نجارة وديكورات حديثة وخزائن حسب الطلب",
    description: "مؤسسة تراكيب متخصصة في تنفيذ الخزائن والجدران الديكورية بتصاميم عصرية وجودة عالية في السعودية."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
        <head>
                <meta name="google-site-verification" content="6NkDuQUFW4FrvJrL8w7hefEj9Oban0KKQDSuSYOHwpc" />
                <meta name="author" content="شركة تراكيب للاثاث والديكورات" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="SA" />
                <meta name="geo.placename" content=" تراكيب للاثاث والديكورات " />
                <meta name="theme-color" content="#059669" />
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/image_tarkib/WhatsApp Image 2025-09-03 at 15.46.00_335e941d.jpg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                {/* <link rel="preload" href="/animation/EbAMuFGCsN.lottie" as="fetch" type="application/json" crossOrigin="anonymous" /> */}

                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "شركة تراكيب للاثاث والديكورات",
  "image": "/image_tarkib/WhatsApp Image 2025-09-03 at 15.46.00_335e941d.jpg",
  "url": "https://nazafaa.com",
  "telephone": "0568761334",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "الخرج",
    "addressRegion": "الرياض",
    "addressCountry": "SA"
  },
  "description": "شركة تنظيف فلل وشقق ومكاتب بالخرج والرياض، مكافحة الحشرات، أسعار مناسبة وجودة عالية.",
  "areaServed": ["الخرج", "الرياض"],
  "priceRange": "$$",
  "openingHours": "Su-Sa 08:00-22:00"
}
        `}} />
            </head>
      <body
        className={`${cairo.variable} antialiased bg-white text-gray-900`}
        style={{fontFamily: 'inherit'}}
      >
        {children}
      </body>
    </html>
  );
}
