export default function FeaturesSection() {
  return (
    <>
      {/* Card Blog */}
      <div className="bg-gray-50 dark:bg-slate-900" id="features">
        <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Calculate climate score in three simple steps
            </h2>
            <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">
              We'll walk you through the straightforward process of calculating
              your Climate Score using ADAPTA CS. ADAPTA CS simplifies the
              complex task of assessing climate-related risks for your farm.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}
            <a
              className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
              href="#"
            >
              <div className="aspect-w-16 h-96">
                <img
                  className="w-full object-cover rounded-xl"
                  src="/img/screenshot1.png"
                  alt="Image Description"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                <i className="bi bi-1-circle text-blue-500 text-2xl"></i> Enter
                the location, loan period and the crop.
              </h3>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
              href="#"
            >
              <div className="aspect-w-16 h-96">
                <img
                  className="w-full object-cover rounded-xl"
                  src="/img/screenshot2.png"
                  alt="Image Description"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                <i className="bi bi-2-circle text-blue-500 text-2xl"></i> View
                composite score and the pillars.
              </h3>
            </a>
            {/* End Card */}
            {/* Card */}
            <a
              className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-10">
                <img
                  className="w-full object-cover rounded-xl"
                  src="/img/screenshot3.png"
                  alt="Image Description"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                <i className="bi bi-3-circle text-blue-500 text-2xl"></i> View
                full generated report.
              </h3>
            </a>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Card Blog */}
    </>
  );
}
