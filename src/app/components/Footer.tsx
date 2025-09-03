import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
      <div className="flex items-center gap-2">
        <Image
          src="/image_tarkib/WhatsApp Image 2025-09-03 at 15.46.00_335e941d.jpg"
          alt="شعار تراكيب صغير"
          width={32}
          height={32}
          className="rounded-full border border-gray-700"
        />
        <span className="font-bold text-lg">تراكيب</span>
      </div>
      <div className="text-sm text-gray-300">© 2025 تراكيب – جميع الحقوق محفوظة.</div>
      <div className="flex gap-3">
        {/* روابط السوشيال ميديا مستقبلًا */}
        <span className="text-gray-500">تابعنا قريبًا</span>
      </div>
    </footer>
  );
}
