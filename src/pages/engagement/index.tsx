import Gauge from "../../components/Gauge";
import SplineChart from "../../components/HistoryChart";
import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import EngagementTable from "../../components/tables/engagement";

export default function Engagement() {
  const getColor = (percentage: number) => {
    if (percentage <= 30) {
      return "bg-green-600"; // Green
    } else if (percentage <= 60) {
      return "bg-yellow-400"; // Yellow
    } else {
      return "bg-red-600"; // Red
    }
  };

  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="My History"
          description="Search, Edit and View Scores For Land Profiles"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
          <div className="bg-card text-card-foreground bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold text-sm leading-none tracking-tight">
                Average Composite Risk
              </h3>
              <Gauge level={41.8} />
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] bg-card col-span-3">
            <div>
              <h3 className="font-semibold text-sm leading-none tracking-tight p-5">
                Top Searches Over Time
              </h3>
              <SplineChart />
            </div>
          </div>
          <div className="bg-card text-card-foreground bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold text-sm leading-none tracking-tight">
                Average Crop Coposite Risk
              </h3>
              <div>
                <div className="py-3">
                  <div className="flex items-center gap-x-3">
                    <span className="text-base text-gray-500">Tea</span>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                      <div
                        className={getColor(48)}
                        role="progressbar"
                        style={{
                          width: `48%`,
                        }}
                        aria-valuenow={48}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span className="text-xs text-gray-500">48.0/100</span>
                  </div>
                </div>
                <div className="py-3">
                  <div className="flex items-center gap-x-3">
                    <span className="text-base text-gray-500">Maize</span>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                      <div
                        className={getColor(20)}
                        role="progressbar"
                        style={{
                          width: `35%`,
                        }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span className="text-xs text-gray-500">35.5/100</span>
                  </div>
                </div>
                <div className="py-3">
                  <div className="flex items-center gap-x-3">
                    <span className="text-base text-gray-500">Grass</span>
                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                      <div
                        className={getColor(20)}
                        role="progressbar"
                        style={{
                          width: `58%`,
                        }}
                        aria-valuenow={58}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <span className="text-xs text-gray-500">58/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EngagementTable />
      </div>
    </MainDashboard>
  );
}
