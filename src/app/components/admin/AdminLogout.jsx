"use client";

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_URL_chatAi;

export default function AdminLogout({ onLogout }) {
  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/admin/logout`, {}, { withCredentials: true });
      if (onLogout) onLogout();
    } catch (err) {
      alert('فشل تسجيل الخروج');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition shadow"
    >
      تسجيل خروج
    </button>
  );
}
