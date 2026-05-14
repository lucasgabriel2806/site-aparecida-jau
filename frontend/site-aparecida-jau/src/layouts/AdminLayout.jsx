import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";

const AdminLayout = () => {

  return (

    <>
      <AdminNavbar />

      <Outlet />
    </>

  )

}

export default AdminLayout; 