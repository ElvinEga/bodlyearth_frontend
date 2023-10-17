import { useState, useEffect } from "react";
import MiniChart from "./MiniChart";

interface Content {
  level: number;
}

function Gauge(props: Content) {
  const [, setCurrentValue] = useState(props.level);
  useEffect(() => {
    setCurrentValue(props.level);
  }, [props]);

  return (
    <>
      <div className="pt-6">
        <div className="mx-auto">
          <div className="group flex flex-col">
            <div className="flex justify-center items-center">
              <MiniChart indexScore={props.level?.toFixed(2)} />
            </div>
            <div className="lg:block hidden mt-10">
              <div className="flex justify-between items-center gap-x-4 px-8">
                <div aria-label="one">
                  <div className="flex gap-2 items-center">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#24E500" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Exceptional
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#7fff00" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Better
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#FFFF00" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Satisfactory
                    </p>
                  </div>
                </div>
                <div aria-label="two">
                  <div className="flex items-center gap-2">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#F6435C" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Good
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#E32227" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Fair
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#BF181D" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Bad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gauge;
