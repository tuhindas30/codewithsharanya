import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const PrivateRoute = ({ path, ...rest }) => {
  const { token } = useAuth();

  return token ? (
    <Outlet />
  ) : (
    <Navigate state={{ from: path }} replace to="/" />
  );
};

export default PrivateRoute;