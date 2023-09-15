import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import TeamTable from "../../components/tables/team";

export default function TeamMembers() {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Team Members"
          description="Invite, Edit and Search Your Team Members"
        />
        <TeamTable />
      </div>
    </MainDashboard>
  );
}
