"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center gap-16 py-32 px-6 md:px-32
                 bg-gradient-to-b from-[#f9fafb] via-[#ffffff] to-[#f3f4f6] overflow-hidden"
    >
      {/* دوائر خلفية ديكورية متحركة */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0ea5e9]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#ec4899]/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-0 left-1/2 w-[28rem] h-[28rem] bg-[#facc15]/20 rounded-full blur-3xl -translate-x-1/2 animate-ping-slow"></div>

      {/* النص */}
      <motion.div
        className="flex-1 text-right max-w-xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-sm md:text-base uppercase tracking-widest text-[#0ea5e9]/80 font-semibold">
          من نحن
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight 
                     bg-gradient-to-r from-[#0ea5e9] via-[#ec4899] to-[#facc15] 
                     bg-clip-text text-transparent"
        >
          عن تراكيب
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
          متخصصين في تنفيذ الخزائن والجدران الديكورية بتصاميم عصرية وجودة عالية، 
          نضبط المساحة على حسب ذوقك ونحوّل أفكارك إلى واقع أنيق يليق بمستواك.
        </p>
      </motion.div>

      {/* الصورة */}
      <motion.div
        className="flex-1 flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl max-w-md">
          <Image
            src="/image_tarkib/WhatsApp Image 2025-09-03 at 15.55.18_fcd4b448.jpg"
            alt="جدار ديكوري من أعمال تراكيب"
            width={500}
            height={400}
            className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
          />

          {/* طبقة تأثير زجاجي متحرك */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          ></div>

          {/* كارد صغير يطفو */}
          <motion.div
            className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md shadow-lg 
                       rounded-xl px-4 py-2 text-sm md:text-base font-semibold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            ✨ تفاصيل عصرية
          </motion.div>
        </div>
      </motion.div>

      {/* أنيميشن إضافي للغلاف */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="w-full h-full bg-[radial-gradient(circle,rgba(14,165,233,0.05),transparent)] animate-gradient-move"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        ></motion.div>
      </div>
    </section>
  );
}
