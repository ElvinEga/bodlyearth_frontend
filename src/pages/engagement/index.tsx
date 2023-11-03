import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import EngagementTable from "../../components/tables/engagement";

export default function Engagement() {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="My History"
          description="Search, Edit and View Scores For Land Profiles"
        />
        <EngagementTable />
      </div>
    </MainDashboard>
  );
}
