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
              <MiniChart
                // @ts-ignore
                indexScore={props.level?.toFixed(2)}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gauge;
