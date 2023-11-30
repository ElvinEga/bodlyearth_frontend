import Gauge from "../../components/Gauge";
import StackedBarChart from "../../components/HistoryChart";
import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import EngagementTable from "../../components/tables/engagement";
import axiosPrivate from "../../api/axiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { ScoreData } from "../../data/scoreData";
import { useState } from "react";

export default function Engagement() {
  const storedUserId = localStorage.getItem("userId");
  const [scoreList, setScore] = useState<ScoreData>();
  const getColor = (percentage: number) => {
    if (percentage <= 30) {
      return "bg-green-600"; // Green
    } else if (percentage <= 60) {
      return "bg-yellow-400"; // Yellow
    } else {
      return "bg-red-600"; // Red
    }
  };

  useQuery(["userDetails"], () => {
    const URL = `/risk/v1/location_scores/${storedUserId}/scores`;
    return axiosPrivate<ScoreData>({ method: "GET", url: URL })
      .then((data) => {
        setScore(data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  });

  const getAverageRisk = () => {
    // Calculate the average composite_total_score
    const totalScores = scoreList?.scores.reduce(
      (acc, score) => acc + score.composite_total_score,
      0
    );

    const averageScore = totalScores
      ? totalScores / (scoreList?.scores.length ?? 1)
      : 0;

    return averageScore;
  };

  const uniqueCrops = [
    ...new Set(scoreList?.scores.map((score) => score.crop)),
  ];

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
              <Gauge level={getAverageRisk()} />
              <div>
                <div className="lg:block hidden mt-16">
                  <div className="flex justify-between items-center gap-x-4 px-8">
                    <div aria-label="one">
                      <div className="flex gap-2 items-center">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#2ca049" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Low
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-8">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#f8c33a" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Medium
                        </p>
                      </div>
                    </div>
                    <div aria-label="two">
                      <div className="flex items-center gap-2">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#f6784e" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          High
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-8">
                        <svg
                          width={20}
                          height={8}
                          viewBox="0 0 20 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width={20} height={8} rx={4} fill="#BF181D" />
                        </svg>
                        <p className="text-xs font-medium leading-3 text-gray-800">
                          Very High
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] bg-card col-span-3">
            <div>
              <h3 className="font-semibold text-sm leading-none tracking-tight p-5">
                Top Searches Over Time
              </h3>
              <StackedBarChart data={scoreList?.scores || []} />
            </div>
          </div>
          <div className="bg-card text-card-foreground bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold text-sm leading-none tracking-tight">
                Average Crop Coposite Risk
              </h3>
              <div>
                {uniqueCrops.map((crop) => {
                  // Filter scores for the current crop
                  const cropScores =
                    scoreList?.scores.filter((score) => score.crop === crop) ??
                    [];

                  // Calculate average score for the current crop
                  const averageScore =
                    cropScores.reduce(
                      (acc, score) => acc + score.composite_total_score,
                      0
                    ) / cropScores.length;

                  return (
                    <div key={crop}>
                      <div className="py-3">
                        <div className="flex items-center gap-x-3">
                          <span className="text-base text-gray-500">
                            {crop}
                          </span>
                          <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                            <div
                              className={getColor(
                                Number(averageScore.toFixed(2))
                              )}
                              role="progressbar"
                              style={{
                                width: `${Number(averageScore.toFixed(0))}%`,
                              }}
                              aria-valuenow={Number(averageScore.toFixed(0))}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span className="text-xs text-gray-500">
                            {Number(averageScore.toFixed(0))}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <EngagementTable scoreList={scoreList} />
      </div>
    </MainDashboard>
  );
}
