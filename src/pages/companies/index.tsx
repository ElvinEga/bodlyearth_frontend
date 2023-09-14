import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import CompaniesTable from "../../components/tables/companies";

export default function Companies() {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Companies"
          description="List Of Companies Registred in ADAPTA"
        />
        <CompaniesTable />
      </div>
    </MainDashboard>
  );
}
