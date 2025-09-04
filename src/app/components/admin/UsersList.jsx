"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmDeleteButton from "./DeleteUserButton.jsx";
export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const apiUrl = process.env.NEXT_PUBLIC_URL;

    const fetchUsers = async () => {
        try {
            const res = await fetch(`${apiUrl}/users`);
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            console.error("خطأ في تحميل المستخدمين:", err);
        } finally {
            setLoading(false);
        }
    };

    
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10 text-blue-600 font-bold animate-pulse">
                جاري تحميل قائمة المستخدمين...
            </div>
        );
    }

    if (!users.length) {
        return (
            <div className="text-center py-10 text-gray-500">
                لا يوجد مستخدمون حتى الآن.
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                قائمة العملاء
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border divide-y divide-gray-200 text-sm">
                    <thead className="bg-blue-100 text-blue-800 font-semibold">
                        <tr>
                            <th className="px-4 py-3 text-right">الاسم</th>
                            <th className="px-4 py-3 text-right">رقم الجوال</th>
                            <th className="px-4 py-3 text-center">الإجراء</th>
                            <th className="px-4 py-3 text-center">التفاق</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="px-4 py-3">{user.fullName || "—"}</td>
                                <td className="px-4 py-3">{user.phone || "—"}</td>
                                <td className="px-4 py-3 text-center">
                                    <button
                                        onClick={() => router.push(`/users/${user._id}`)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm"
                                    >
                                        عرض التفاصيل
                                    </button>
                                </td>
                                <td className="px-4 py-3">{user.agreement ? "✅" : "❌"}</td>
                                <td className="px-4 py-3 text-center">
                                    <ConfirmDeleteButton
                                        userId={user._id}
                                        onDeleted={() => fetchUsers()} // تعيد تحميل القائمة
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
