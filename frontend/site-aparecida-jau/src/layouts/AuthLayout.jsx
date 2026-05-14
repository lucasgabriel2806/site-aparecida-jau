import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )

}

export default AuthLayout;