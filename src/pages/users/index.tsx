import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import UsersTable from "../../components/tables/users";

export default function UsersList() {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Users List"
          description="Invite, Edit and Search Your Team Members"
        />
        <UsersTable />
      </div>
    </MainDashboard>
  );
}
