import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { UserData } from "../data/userData";

interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserData>({
    access_token: "",
    token_type: "",
    id: "",
    first_name: "",
    last_name: "",
    role_name: "",
    email: "",
    is_otp_enabled: false,
  });

  useEffect(() => {
    // Check if user data is available in localStorage
    const storedUserData = localStorage.getItem("user_data");
    if (storedUserData) {
      // If available, parse it and set it in the state
      const parsedUserData = JSON.parse(storedUserData) as UserData;
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
