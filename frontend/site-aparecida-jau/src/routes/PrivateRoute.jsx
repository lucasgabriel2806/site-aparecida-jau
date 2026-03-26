import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // não está logado
  if (!user) {
    return <Navigate to="/login" />;
  }

  /**
  // não é admin
  if (user.tipo !== "admin") {
    return <Navigate to="/" />;
  }
  */

  // é admin
  return children;
};

export default PrivateRoute;