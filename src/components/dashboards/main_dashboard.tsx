import BreadHeader from "../breadheader";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

const MainDashboard = () => {
  return (
    <>
      <Navbar />
      {/* ========== MAIN CONTENT ========== */}
      <Sidebar />
      {/* Content */}
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <BreadHeader home="Dashboard" title="Title" description="Description" />
      </div>
      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
};

export default MainDashboard;
