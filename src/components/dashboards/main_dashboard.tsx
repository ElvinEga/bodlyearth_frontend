import { Toaster } from "react-hot-toast";
import ChatBot from "../Chatbot";
import Navbar from "../navbar";
type contentProps = {
  children: JSX.Element;
};

const MainDashboard = ({ children }: contentProps) => {
  return (
    <>
      <Navbar />
      {/* ========== MAIN CONTENT ========== */}
      {/* <Sidebar /> */}
      {/* Content */}

      <div className="w-full p-16 pt-4 px-8 sm:px-8 md:px-16 lg:px-20">
        {children}
        <ChatBot />
        <Toaster />
      </div>

      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
};

export default MainDashboard;
