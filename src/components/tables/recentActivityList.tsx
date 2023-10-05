import Flag from "react-flagkit";
import { requestActivityData } from "../../data/requestData";

export default function RecentActivityList() {
  return (
    <>
      {/* Card */}
      <div className="max-w-[85rem] mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div>
                {/* Table */}
                <table className="min-w-full">
                  <thead className="bg-white dark:bg-slate-800">
                    <tr>
                      <th
                        scope="col"
                        className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-lg font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Today
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {requestActivityData.map((data) => (
                      <tr>
                        <td className="h-px w-px">
                          <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                                <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                                  {data.company.charAt(0)}
                                </span>
                              </span>
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                  {data.company}{" "}
                                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-200">
                                    ({data.name}) has submitted a request to
                                    create in{" "}
                                    <Flag
                                      size={24}
                                      className="inline-flex items-center"
                                      country={data.countryCode}
                                    />{" "}
                                    <span className="inline-flex text-sm font-semibold text-gray-800">
                                      {data.country}
                                    </span>
                                  </span>
                                </span>
                                <span className="block text-sm text-gray-500">
                                  {data.created}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </>
  );
}
