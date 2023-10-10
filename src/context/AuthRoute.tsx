import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useUser } from "./UserProvider";

interface RequireAuthProps {
  allowedRoles: string[];
}

const Auth: React.FC<RequireAuthProps> = ({ allowedRoles }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const { auth } = useContext(AuthContext);
  const { userData } = useUser();
  const location = useLocation();

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
