import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUser } from "./UserProvider";

interface RequireAuthProps {
  allowedRoles: string[];
}

const Auth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  const { userData } = useUser();
  const location = useLocation();
  // const { auth } = useContext(AuthContext);

  return allowedRoles.find((role: string) =>
    userData.role_name.includes(role)
  ) ? (
    // auth.role.find(role => allowedRoles?.includes(role))
    <Outlet />
  ) : userData.role_name ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Auth;
