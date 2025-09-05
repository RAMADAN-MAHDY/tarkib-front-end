import ClickCountViewer from '../components/admin/ClickCountViewer';
export default function UsersPage() {
  return <>
  <ClickCountViewer/>
  <UsersList />;
  
  
  </> 
}

import UsersList from "../components/admin/UsersList";
import ClickCountViewer from '../components/admin/ClickCountViewer';
import AdminVerify from '../components/admin/AdminVerify';

export default function UsersPage() {
  return (
    <>
      <AdminVerify />
      <ClickCountViewer />
      <UsersList />
    </>
  );
}
