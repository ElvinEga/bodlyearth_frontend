export default function ProductsSection() {
  return (
    <>
      <section className="text-gray-600 body-font" id="product">
        <div className="container px-5 py-24 mx-auto">
          <div className="max-w-2xl text-center mx-auto mb-20">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
              Global Impact and Climate Finance{" "}
              <span className="text-blue-600">simple</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Discover a New Era in Agricultural Risk Assessment and Mitigation.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/img/statistic_data.svg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                ADAPTA Deep Dive
              </h2>
              <p className="leading-relaxed text-base">
                The ADAPTA Deep Dive involves field due diligence where we
                collect soil, water, and environmental data to validate the
                early score from ADAPTA CS. It involves taking soil, water, and
                tissue samples for analysis and interviewing stakeholders to
                understand the local environment and situations. The information
                and results from Deep Dive and Early score then inform a
                detailed Climate Adaptation Plan for the client.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Request A Deep Dive
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/img/server_security2.svg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Security & Protection
              </h2>
              <p className="leading-relaxed text-base">
                At ADAPTA, we are committed to providing a secure and safe
                platform for our users. We understand the importance of security
                and have implemented several measures to ensure that your data
                is protected. If you have any questions about our security
                measures, please do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
