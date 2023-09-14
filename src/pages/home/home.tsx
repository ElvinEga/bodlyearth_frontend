import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";

const Home = () => {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          home="Home"
          title="Hello Admin"
          description="Here's What We have today"
        />
      </div>
    </MainDashboard>
  );
};
export default Home;
