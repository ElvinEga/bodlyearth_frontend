import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

interface RequireAuthProps {
  allowedRoles: string[];
}

const Auth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return allowedRoles.find((role: string) => auth?.role?.includes(role)) ? (
    // auth.role.find(role => allowedRoles?.includes(role))
    <Outlet />
  ) : auth?.name ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Auth;
