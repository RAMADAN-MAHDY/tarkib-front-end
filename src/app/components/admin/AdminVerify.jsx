"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLogin from './AdminLogin';
import AdminLogout from './AdminLogout';

const API_URL = process.env.NEXT_PUBLIC_URL_chatAi;

export default function AdminVerify({ onVerify }) {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const verify = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/admin/verify`, { withCredentials: true });
        if (res.status === 200) {
          setIsVerified(true);
          setAdmin(res.data.admin);
          if (onVerify) onVerify(true);
        }
      } catch {
        setIsVerified(false);
        setAdmin(null);
        if (onVerify) onVerify(false);
      } finally {
        setLoading(false);
      }
    };
    verify();
    // eslint-disable-next-line
  }, []);

  const handleLogin = () => {
    setIsVerified(true);
    setAdmin('admin');
    if (onVerify) onVerify(true);
  };

  const handleLogout = () => {
    setIsVerified(false);
    setAdmin(null);
    if (onVerify) onVerify(false);
  };

  if (loading) return <div className="flex justify-center items-center min-h-[40vh] text-blue-600">جاري التحقق...</div>;

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {isVerified ? (
        <div className="flex flex-col items-center gap-4 bg-white rounded-xl shadow p-6">
          <div className="text-lg font-semibold text-green-600">مرحباً، {admin}!</div>
          <AdminLogout onLogout={handleLogout} />
        </div>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
}
