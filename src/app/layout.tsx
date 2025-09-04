import type { Metadata } from "next";
import { Geist, Geist_Mono , Cairo } from "next/font/google";
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
