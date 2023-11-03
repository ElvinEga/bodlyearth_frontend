import MainDashboard from "../../components/dashboards/main_dashboard";

export default function HelpPage() {
  return (
    <MainDashboard>
      <div>
        <>
          {/* Contact Us */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                  Get in touch
                </h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our team would love to hear from you.
                </p>
              </div>
              <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                {/* Card */}
                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                  <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Fill in the form
                  </h2>
                  <form>
                    <div className="grid gap-4">
                      {/* Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="hs-firstname-contacts-1"
                            className="sr-only"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="hs-firstname-contacts-1"
                            id="hs-firstname-contacts-1"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="First Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="hs-lastname-contacts-1"
                            className="sr-only"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="hs-lastname-contacts-1"
                            id="hs-lastname-contacts-1"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      {/* End Grid */}
                      <div>
                        <label
                          htmlFor="hs-email-contacts-1"
                          className="sr-only"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="hs-email-contacts-1"
                          id="hs-email-contacts-1"
                          autoComplete="email"
                          className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <label htmlFor="hs-phone-number-1" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="hs-phone-number-1"
                          id="hs-phone-number-1"
                          className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Phone Number"
                        />
                      </div>
                      {/* Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="hs-firstname-contacts-1"
                            className="sr-only"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="hs-firstname-contacts-1"
                            id="hs-firstname-contacts-1"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="First Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="hs-lastname-contacts-1"
                            className="sr-only"
                          >
                            Company Website
                          </label>
                          <input
                            type="text"
                            name="hs-lastname-contacts-1"
                            id="hs-lastname-contacts-1"
                            className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      {/* End Grid */}
                      <div>
                        <label
                          htmlFor="hs-about-contacts-1"
                          className="sr-only"
                        >
                          Message
                        </label>
                        <textarea
                          id="hs-about-contacts-1"
                          name="hs-about-contacts-1"
                          rows={4}
                          className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                          placeholder="Details"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div className="mt-4 grid">
                      <button
                        type="submit"
                        className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Card */}
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {/* Icon Block */}
                  <div className="flex gap-x-7 py-6">
                    <i className="bi bi-envelope text-3xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Our Email Address
                      </h3>
                      <p className="mt-1 text-2xl text-gray-500">
                        info@adaptacs.com
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className="flex gap-x-7 py-6">
                    <svg
                      className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Call For Agricultural Requests
                      </h3>
                      <p className="mt-1 text-2xl text-gray-500">
                        +254 723083567
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className=" flex gap-x-7 py-6">
                    <i className="bi bi-telephone text-3xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Call For General Requests
                      </h3>
                      <p className="mt-1 text-2xl text-gray-500">
                        +254 725398993
                      </p>
                    </div>
                  </div>
                  {/* End Icon Block */}
                  {/* Icon Block */}
                  <div className=" flex gap-x-7 py-6"></div>
                  {/* End Icon Block */}
                </div>
              </div>
            </div>
          </div>
          {/* End Contact Us */}
        </>
      </div>
    </MainDashboard>
  );
}
