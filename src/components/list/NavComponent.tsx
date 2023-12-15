import React from "react";

interface Data {
  categories: string[];
}

const data: Data = {
  categories: [
    "AGRICULTURE",
    "CLIMATE",
    "CONSERVATION",
    "GOVERNANCE",
    "HAZARDS",
    "HEALTH",
    "INFRASTRUCTURE",
    "LAND USE",
    "MARINE AND COASTAL",
    "POPULATION",
    "POVERTY",
    "REMOTE SENSING",
    "SUSTAINABILITY",
    "URBAN",
    "WATER",
  ],
};

const NavComponent: React.FC = () => {
  return (
    <nav
      className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
      data-hs-accordion-always-open=""
    >
      <ul className="space-y-1.5">
        {data.categories.map((category, index) => (
          <li className="hs-accordion" id="account-accordion" key={index}>
            <a
              className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-green-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
              href="javascript:;"
            >
              <i className="bi bi-caret-right-fill"></i>
              {category}
            </a>
            <div
              id="account-accordion-child"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
              <ul className="pt-2 pl-2">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/team"
                  >
                    Sub Item 1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/roles"
                  >
                    SubItem 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;
