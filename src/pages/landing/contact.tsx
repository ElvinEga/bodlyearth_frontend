export default function ContactSection() {
  return (
    <>
      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-16 mx-auto ">
          {/* Title */}
          <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
            <h2 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-4xl dark:text-white">
              Get in touch
            </h2>
            <p className="mt-2 mb-16 text-gray-600 dark:text-gray-400 text-xl">
              Our team would love to hear from you.
            </p>
          </div>
          {/* End Title */}
          <div className="flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              />
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Washington DC, Mexico City, Nairobi</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    info@adaptacs.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+254723083567</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:mt-0">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Contact Us
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
                      <label htmlFor="hs-email-contacts-1" className="sr-only">
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
                      <label htmlFor="hs-about-contacts-1" className="sr-only">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
