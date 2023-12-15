import { Toaster } from "react-hot-toast";
import ChatBot from "../Chatbot";
import Sidebar from "../sidebar";
type contentProps = {
  children: JSX.Element;
};

const MainDashboard = ({ children }: contentProps) => {
  return (
    <>
      {/* <Navbar /> */}
      {/* ========== MAIN CONTENT ========== */}
      <Sidebar />
      {/* Content */}

      <div className="w-full pt-7 px-4 sm:px-6 md:px-8 lg:ps-96">
        {children}
        {/* <ChatBot /> */}
        <Toaster />
      </div>

      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
};

export default MainDashboard;
