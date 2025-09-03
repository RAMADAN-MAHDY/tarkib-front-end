"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// مجموعة الصور
const images = [
  "WhatsApp Image 2025-09-03 at 15.49.06_7c97c431.jpg",
  "WhatsApp Image 2025-09-03 at 15.49.07_37c3b399.jpg",
  "WhatsApp Image 2025-09-03 at 15.49.08_8d4fe705.jpg",
  "WhatsApp Image 2025-09-03 at 15.49.09_2d1a3f28.jpg",
  "WhatsApp Image 2025-09-03 at 15.49.09_b3d85f66.jpg",
  "WhatsApp Image 2025-09-03 at 15.49.10_3bdb1880.jpg",
  "WhatsApp Image 2025-09-03 at 15.49.11_1c9c2981.jpg",
  "WhatsApp Image 2025-09-03 at 15.55.17_4dc574fc.jpg",
  "WhatsApp Image 2025-09-03 at 15.55.18_fcd4b448.jpg",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const selectSlide = (idx: number) => setCurrent(idx);

  return (
    <section id="gallery" className="py-16 px-4 md:px-16 bg-gray-50 relative overflow-hidden">
      {/* عنوان فنان */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center
                     bg-gradient-to-r from-[#0ea5e9] via-[#ec4899] to-[#facc15]
                     bg-clip-text text-transparent">
        معرض الأعمال
      </h2>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        {/* الصور الرئيسية */}
        <AnimatePresence initial={false} mode="wait">
  <motion.div
    key={current}
    initial={{ opacity: 0 }}   // فقط opacity
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl"
  >
    <Image
      src={`/image_tarkib/${images[current]}`}
      alt={`عمل رقم ${current + 1}`}
      fill
      className="object-cover w-full h-full"
    />
  </motion.div>
</AnimatePresence>


        {/* أزرار التنقل */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-lg"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-lg"
        >
          &#10095;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            onClick={() => selectSlide(idx)}
            className={`w-20 h-14 md:w-28 md:h-20 overflow-hidden rounded-lg shadow-md border-2
                        ${current === idx ? "border-[#0ea5e9]" : "border-transparent"}`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={`/image_tarkib/${img}`}
              alt={`تصغير عمل رقم ${idx + 1}`}
              width={112}
              height={80}
              className="object-cover w-full h-full"
            />
          </motion.button>
        ))}
      </div>

      {/* Grid إضافي للصور */}
      {/* <motion.div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Image
              src={`/image_tarkib/${img}`}
              alt={`عمل إضافي ${idx + 1}`}
              width={300}
              height={200}
              className="w-full h-40 md:h-48 object-cover"
            />
          </motion.div>
        ))}
      </motion.div> */}

      
    </section>
  );
}
