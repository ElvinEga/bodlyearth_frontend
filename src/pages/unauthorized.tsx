import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
  return (
    <>
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        <header className="mb-auto flex justify-center z-50 w-full py-4">
          <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
            <Link to="/">
              <img alt="Adapta" className="w-56 mx-auto" src="/img/logo.png" />
            </Link>
          </nav>
        </header>
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 sm:text-7xl dark:text-white">
            Access Restricted
          </h1>
          <h1 className="block text-2xl font-bold text-white" />
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Sorry, you are not authorized to access this Pgae.
          </p>
          <div className="mt-10 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <a
              className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="/"
            >
              <i className="bi bi-chevron-left text-lg" />
              Go back Home
            </a>
            <a
              className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3.5 text-center border  border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-600 hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition py-3 px-4"
              href="/help"
            >
              <i className="bi bi-question-circle text-lg" />
              Request Assitance
            </a>
          </div>
        </div>
        <footer className="mt-auto text-center py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">
              ©ADAPTA All Rights Reserved. 2023.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default UnauthorizedPage;
