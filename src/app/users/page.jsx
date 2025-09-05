"use client";
import UsersList from '../components/admin/UsersList';
import ClickCountViewer from '../components/admin/ClickCountViewer';
import AdminVerify from '../components/admin/AdminVerify';


import { useState } from 'react';

export default function UsersPage() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      <AdminVerify onVerify={setIsVerified} />
      {isVerified && <>
        <ClickCountViewer />
        <UsersList />
      </>}
    </>
  );
}
