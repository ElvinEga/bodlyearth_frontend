import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
