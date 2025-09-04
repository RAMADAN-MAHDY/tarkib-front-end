"use client";
import { useEffect, useState } from "react";

export default function ClickCountViewer() {
  const url = process.env.NEXT_PUBLIC_URL;

  const [whatsAppClicks, setWhatsAppClicks] = useState(0);
  const [telClicks, setTelClicks] = useState(0);

  useEffect(() => {
    const fetchClickCount = async (buttonId, setter) => {
      try {
        const res = await fetch(`${url}/api/click/${buttonId}`);
        const data = await res.json();
        if (data.success) {
          setter(data.clicks);
        }
      } catch (err) {
        console.error(`Error fetching ${buttonId} clicks:`, err);
      }
    };

    fetchClickCount("whatsApp", setWhatsAppClicks);
    fetchClickCount("tel", setTelClicks);
  }, []);

  return (
    <div className="max-w-sm mx-auto p-4 space-y-4">
      {/* WhatsApp Button */}
      <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between">
        <button className="bg-green-600 hover:bg-green-700 transition text-white font-semibold px-4 py-2 rounded-lg w-1/2">
          WhatsApp
        </button>
        <span className="text-gray-700 text-sm font-medium">
          نقرات: {whatsAppClicks}
        </span>
      </div>

      {/* Tel Button */}
      <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between">
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-4 py-2 rounded-lg w-1/2">
          Tel
        </button>
        <span className="text-gray-700 text-sm font-medium">
          نقرات: {telClicks}
        </span>
      </div>
    </div>
  );
}
