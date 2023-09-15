import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import RecentActivityList from "../../components/tables/recentActivityList";

export default function RecentActivity() {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Recent Activity"
          description="This Are the lasted Activity Reports"
        />
        <RecentActivityList />
      </div>
    </MainDashboard>
  );
}
