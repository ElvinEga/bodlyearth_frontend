export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden before:absolute before:top-1/2 before:left-1/2 before:bg-[url('/img/hero-gradient.svg')] before:bg-no-repeat before:bg-center before:w-full before:h-full before:-z-[1] before:transform before:-translate-y-1/2 before:-translate-x-1/2 dark:before:bg-[url('/img/hero-gradient-dark.svg')]">
        {/* Hero */}
        <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8" id="home">
          {/* Grid */}
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                Farm Scoring
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                Build climate and production risk model to score a farm from the
                comfort of your office
              </p>
              <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <a
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  Book A DEMO
                </a>
              </div>
            </div>
            {/* End Col */}
            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src="/img/hero_lady.svg"
                alt="Image Description"
              />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hero */}
      </div>
    </>
  );
}
