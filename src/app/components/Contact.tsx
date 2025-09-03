"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // هنا تقدر تضيف منطق إرسال البيانات لاحقًا
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">تواصل معنا</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex-1 text-center md:text-right">
          <div className="mb-4 text-lg text-gray-700">
            <span className="font-semibold">رقم الجوال:</span> <a href="tel:0568761334" className="text-primary font-bold">0568761334</a>
          </div>
          <a
            href="https://wa.me/966568761334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-colors mb-6"
          >
            تواصل عبر واتساب
          </a>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 max-w-md w-full">
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="tel"
            name="phone"
            placeholder="رقم الجوال"
            value={form.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="رسالتك"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-bold text-lg shadow-md transition-colors"
            disabled={sent}
          >
            {sent ? "تم الإرسال!" : "إرسال"}
          </button>
        </form>
      </div>
    </section>
  );
}
