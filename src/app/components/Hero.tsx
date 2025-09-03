"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center 
               overflow-hidden bg-gradient-to-br from-[#2f4f4f]/10 via-white to-[#2f4f4f]/10"
    >
      {/* Blobs الخلفية المتحركة */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#2f4f4f]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
      />
      <motion.div
        className="absolute top-20 -right-40 w-96 h-96 bg-[#ff69b4]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
      />
      <motion.div
        className="absolute -bottom-40 left-20 w-96 h-96 bg-[#ffd700]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
      />

      {/* اللوجو */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <Image
          src="/image_tarkib/WhatsApp Image 2025-09-03 at 15.46.00_335e941d.jpg"
          alt="شعار تراكيب"
          width={280}
          height={90}
          className="rounded-full shadow-[0px_20px_20px_rgba(233,123,123,0.4)]  border-[5px] border-[#aaec0f9c]"
          priority
        />
      </motion.div>

      {/* النص */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
      >
        اهلاً بك في <span className="text-[#2f4f4f]">تراكيب</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
      >
        نصمم وننفذ الجدران والخزائن العصرية بجودة عالية، ونحوّل أفكارك إلى واقع أنيق.
      </motion.p>

      {/* زر CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full bg-[#354] text-white font-medium text-lg shadow-lg 
                 hover:shadow-xl transition-all duration-300"
        onClick={scrollToAbout}
      >
        اكتشف المزيد
      </motion.button>

      {/* زر النزول */}
      <motion.div
        className="absolute bottom-10 cursor-pointer text-[#2f4f4f]"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
}
