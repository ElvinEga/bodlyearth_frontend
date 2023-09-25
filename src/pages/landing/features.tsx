export default function FeaturesSection() {
  return (
    <>
      {/* Card Blog */}
      <div className="bg-gray-50 dark:bg-slate-900">
        <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Customer stories
            </h2>
            <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
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
              <div className="aspect-w-16 aspect-h-10">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="Image Description"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Enter the location, loan period and the crop.
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
                  src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
                  alt="Image Description"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                View composite score and the pillars.
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
                  src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Image Description"
                />
              </div>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                View full report.
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
