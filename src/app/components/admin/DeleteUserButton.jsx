"use client";
import { useState } from "react";

export default function ConfirmDeleteButton({ userId, onDeleted }) {
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_chatAi}/DELETusers/${userId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "فشل في الحذف");

      onDeleted?.(); // تنفيذ تحديث خارجي
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setConfirming(false);
    }
  };

  return (
    <div className="relative inline-block">
      {!confirming ? (
        <button
          onClick={() => setConfirming(true)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm"
        >
          🗑️ حذف
        </button>
      ) : (
        <div className="absolute top-[-10px] right-[-220px] bg-white shadow-xl border border-gray-200 rounded-md p-3 z-50 w-52">
          <p className="text-sm text-gray-800 mb-2">هل أنت متأكد من الحذف؟</p>
          <div className="flex gap-2">
            <button
              onClick={handleDelete}
              disabled={loading}
              className="bg-red-600 text-white text-sm px-2 py-1 rounded hover:bg-red-700 transition disabled:opacity-50"
            >
              {loading ? "جارٍ الحذف..." : "تأكيد"}
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="bg-gray-300 text-sm px-2 py-1 rounded hover:bg-gray-400 transition"
            >
              إلغاء
            </button>
          </div>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      )}
    </div>
  );
}
