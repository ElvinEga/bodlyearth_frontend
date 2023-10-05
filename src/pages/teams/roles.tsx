import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import RolesTable from "../../components/tables/rolesTable";

export default function Roles() {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Roles"
          description="Create and Set Permissions To Roles For Your Team Members"
        />
        <RolesTable />
      </div>
    </MainDashboard>
  );
}
