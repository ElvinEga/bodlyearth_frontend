import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import ResourcesList from "../../components/list/resorcesList";

export default function Resources() {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Resources"
          description="List of Documents that provides more details about the crops."
        />
        <ResourcesList />
      </div>
    </MainDashboard>
  );
}
