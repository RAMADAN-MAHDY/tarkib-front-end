"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "خزائن ملابس حسب الطلب",
    img: "/image_tarkib/WhatsApp Image 2025-09-03 at 15.55.18_fcd4b448.jpg",
    desc: "تصميم وتنفيذ خزائن ملابس تناسب ذوقك ومساحتك."
  },
  {
    title: "جدران ديكورية عصرية",
    img: "/image_tarkib/WhatsApp Image 2025-09-03 at 15.49.14_e0c8bc43.jpg",
    desc: "جدران ديكورية تضيف لمسة فخامة وعصرية لمنزلك."
  },
  {
    title: "تصاميم خاصة تناسبك",
    img: "/image_tarkib/WhatsApp Image 2025-09-03 at 15.55.17_4dc574fc.jpg",
    desc: "ننفذ أفكارك الخاصة ونحولها لواقع بجودة عالية."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-20 bg-gradient-to-b from-[#f9fafb] via-[#ffffff] to-[#f3f4f6] relative overflow-hidden">
      
      {/* خلفية سحرية خفيفة */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0ea5e9]/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#ec4899]/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl -translate-x-1/2 animate-ping-slow"></div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 text-primary text-center
                     bg-gradient-to-r from-[#0ea5e9] via-[#ec4899] to-[#facc15] bg-clip-text text-transparent">
        خدماتنا
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center cursor-pointer
                       hover:scale-105 hover:shadow-2xl transition-transform duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-[250px] h-[180px] mb-4 overflow-hidden rounded-xl shadow-lg">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover rounded-xl transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-base md:text-lg">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
