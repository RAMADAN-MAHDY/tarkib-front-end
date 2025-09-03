import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center gap-3">
        <Image
          src="/image_tarkib/WhatsApp Image 2025-09-03 at 15.46.00_335e941d.jpg"
          alt="شعار تراكيب"
          width={48}
          height={48}
          className="rounded-full border border-gray-200 shadow-sm"
        />
        <span className="text-xl font-bold text-gray-800">تراكيب</span>
      </div>
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="#hero" className="hover:text-primary">الرئيسية</a>
        <a href="#services" className="hover:text-primary">خدماتنا</a>
        <a href="#contact" className="hover:text-primary">تواصل معنا</a>
      </nav>
      <a
        href="https://wa.me/966568761334"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-colors"
      >
        تواصل عبر واتساب
      </a>
    </header>
  );
}
