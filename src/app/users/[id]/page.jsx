"use client";
import { useEffect, useState } from "react";
import { useParams , useRouter } from "next/navigation";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${apiUrl}/users/${id}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("❌ خطأ في تحميل التفاصيل:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10 text-blue-600 font-bold">جاري تحميل التفاصيل...</div>;
  }

  if (!user) {
    return <div className="text-center mt-10 text-red-500 font-bold">تعذر تحميل البيانات.</div>;
  }

  return (
    <div className="relative max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
  <p
  onClick={() => router.push(`/users`)}
  className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full text-red-600 text-3xl font-bold bg-white shadow-md hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
>
  ×
</p>


      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">تفاصيل الطلب</h2>

      <div className="space-y-4 text-sm text-gray-700">
        <p><strong>🧑 الاسم:</strong> {user.fullName || "—"}</p>
        <p><strong>📱 الجوال:</strong> {user.phone || "—"}</p>
        <p><strong>📍 الموقع:</strong> {user.location || "—"}</p>
        <p><strong>🧹 نوع الخدمة:</strong> {user.service || "—"}</p>
        <p><strong>📅 التاريخ:</strong> {user.date || "—"}</p>
        <p><strong>⏰ الوقت:</strong> {user.time || "—"}</p>
        <p><strong>✅ تم الاتفاق:</strong> {user.agreement ? "نعم" : "لا"}</p>
      </div>

      <h3 className="mt-6 mb-2 font-bold text-lg text-blue-600">📜 المحادثة:</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-sm">
        {user.chatHistory?.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${
              msg.role === "user"
                ? "bg-blue-100 text-right"
                : "bg-green-100 text-left"
            }`}
          >
            <strong className="block mb-1">{msg.role === "user" ? "العميل:" : "المساعد:"}</strong>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
