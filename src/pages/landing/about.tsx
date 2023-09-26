export default function AboutSection() {
  return (
    <>
      {/* Features */}
      <div
        className="max-w-[85rem] px-4 mt-24 sm:px-6 lg:px-8  mx-auto"
        id="about"
      >
        <div className="max-w-3xl text-center mx-auto mt-16">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
            Designed for risk management tool globally and helps{" "}
            <span className="text-blue-600">financial intermediaries.</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            We developed ADAPTA CS to transform the way we assess food and
            agricultural risk. Our SaaS leverages climate, soil, water, and
            biodiversity data to provide a score that can guide you on risks at
            the farm level while providing you with mitigation solutions to
            lower such risks.
          </p>
        </div>
        {/* Tab Nav */}

        <nav className="max-w-6xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          <button
            type="button"
            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
            role="tab"
          >
            <span className="md:flex">
              <svg
                className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
              <span className="md:grow md:ml-5">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  Reduce early due diligence costs
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  Our advanced climate risk assessment tools streamline the due
                  diligence process, saving you time and resources.
                </span>
              </span>
            </span>
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
            id="tabs-with-card-item-2"
            data-hs-tab="#tabs-with-card-2"
            aria-controls="tabs-with-card-2"
            role="tab"
          >
            <span className="md:flex">
              <svg
                className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                />
              </svg>
              <span className="md:grow md:ml-5">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  Reduce losses by enhancing your climate resilience
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  By identifying and addressing climate risks, you can minimize
                  losses and protect your assets.
                </span>
              </span>
            </span>
          </button>
          <button
            type="button"
            className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
            id="tabs-with-card-item-3"
            data-hs-tab="#tabs-with-card-3"
            aria-controls="tabs-with-card-3"
            role="tab"
          >
            <span className="md:flex">
              <svg
                className="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
              </svg>
              <span className="md:grow md:ml-5">
                <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                  Increase your agricultural lending
                </span>
                <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                  With improved climate risk assessment capabilities, you can
                  confidently extend credit to more farmers and increasing
                  revenue.
                </span>
              </span>
            </span>
          </button>
        </nav>
        {/* End Tab Nav */}
        {/* Tab Content */}
        <div className="mt-12 md:mt-16">
          <div
            id="tabs-with-card-1"
            role="tabpanel"
            aria-labelledby="tabs-with-card-item-1"
          >
            {/* Devices */}
            <div className="max-w-[1140px] lg:pb-32 relative">
              {/* Mobile Device */}
              <figure className="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
                <div className="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                  <img
                    className="max-w-full h-auto rounded-[1.25rem]"
                    src="/img/screenshot_phone.jpg"
                    alt="Image Description"
                  />
                </div>
              </figure>
              {/* End Mobile Device */}
              {/* Browser Device */}
              <figure className="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                <div className="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <span className="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  </div>
                  <div className="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                    www.adaptacs.com
                  </div>
                </div>
                <div className="bg-gray-800 rounded-b-lg">
                  <img
                    className="max-w-full h-auto rounded-b-lg"
                    src="/img/screenshot_laptop.jpg"
                    alt="Image Description"
                  />
                </div>
              </figure>
              {/* End Browser Device */}
            </div>
            {/* End Devices */}
          </div>
        </div>
        {/* End Tab Content */}
      </div>
      {/* End Features */}
    </>
  );
}
