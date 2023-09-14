interface Content {
  home?: string;

  detail?: string;

  title?: string;

  description?: string;
}

const BreadHeader = (props: Content) => {
  return (
    <>
      {/* Page Heading */}
      <header className="mb-5 dark:border-gray-700">
        {props.detail != null ? (
          <ol
            className="mb-2 flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            <li className="text-sm">
              <a
                className="flex items-center text-gray-500 hover:text-blue-600"
                href="#"
              >
                {props.home}
                <svg
                  className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
              aria-current="page"
            >
              {props.detail}
            </li>
          </ol>
        ) : (
          <p className="mb-2 text-sm font-semibold text-blue-600">
            {props.home}
          </p>
        )}
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          {props.title}
        </h1>
        <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
          {props.description}
        </p>
      </header>
      {/* End Page Heading */}
    </>
  );
};

export default BreadHeader;
