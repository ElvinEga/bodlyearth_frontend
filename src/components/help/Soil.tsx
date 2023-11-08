export default function SoilHelp() {
  return (
    <>
      {/* Card */}
      <div className="text-gray-800 body-font">
        <h1 className="pb-2 pt-2 text-lg font-medium text-gray-900 dark:text-white">
          Topsoil fertility
        </h1>

        <p className="leading-relaxed text-base pb-3">
          Soil Organic Carbon (SOC) is one of the measures of Topsoil fertility.
          It is the amount of carbon stored in the soil in the form of organic
          matter. It is primarily derived from the decomposition of plants,
          animals, microbes, leaves, and wood on the ground. In a garden, when
          leaves fall off the trees and plants die, they fall onto the ground.
          With time, tiny creatures, often fungi, break down these bits and mix
          them into the soil. This mixture of broken-down plants, animals, and
          any other material is organic matter.
        </p>
        <p className="leading-relaxed text-base pb-3">
          Organic matter is important in the soil because it helps the soil hold
          nutrients and water that support plant growth.
        </p>
        <p className="leading-relaxed text-base pb-1">
          To improve soil organic matter content:
        </p>
        <ul className="list-disc list-inside p-3">
          <li className="mb-2">
            Practice Mulching: Apply mulches like crop residue and wood chips on
            the soil surface.
          </li>

          <li className="mb-2">
            Cover cropping: Plant crops that can add organic matter to the soil.
          </li>

          <li className="mb-2">
            Reduce tillage or practice no-tillage farming: Minimal soil tillage
            prevents the breakdown of organic matter and releases carbon
            dioxide, thus retaining organic carbon in the soil.
          </li>

          <li className="mb-2">
            Green Manure: Grow green manure crops that are later incorporated
            into the soil.
          </li>
        </ul>

        <h1 className="pb-2 pt-2 text-lg font-medium text-gray-900 dark:text-white">
          Soil PH
        </h1>
        <p className="leading-relaxed text-base pb-3">
          This is the measure of acidity or alkalinity of the soil determined by
          the presence of hydrogen ions or hydroxide ions. The soil pH scale
          runs from 0 to 14. A pH of 7 is considered neutral, meaning the soil
          is neither acidic nor alkaline. A pH below 7 is considered acidic
          (like lemon juice) and a pH above 7 is considered alkaline (like
          baking soda).
        </p>
        <p className="leading-relaxed text-base pb-3">
          The pH of your soil affects how well plants can absorb different
          nutrients from the soil. Some plants prefer it a bit acidic, like
          blueberries, tea, etc. while others, like asparagus, dates, and
          eggplants prefer it more alkaline. Most plants like it somewhere in
          the middle, between 6 to 7.0.
        </p>
        <p className="leading-relaxed text-base pb-3">
          It is important to manage soil pH because it helps plants get all the
          nutrients required to grow thus becoming healthy. If soil pH isn’t
          right, a farmer may need to add limestone (agricultural lime) to make
          acidic soil less acidic and gypsum (calcium sulfate), to make alkaline
          soils less alkaline.
        </p>
        <ul className="list-disc list-inside p-3">
          <li className="mb-2">
            Loss of topsoil: Erosion removes fertile topsoil, which can reduce
            soil quality for agriculture and affect plant growth.
          </li>

          <li className="mb-2">
            Sedimentation: Sediment eroded by water can accumulate in rivers,
            lakes, and reservoirs, potentially causing water quality issues and
            increasing the risk of flooding.
          </li>

          <li className="mb-2">
            Habitat degradation: Erosion can alter natural landscapes,
            disrupting ecosystems and wildlife habitats.
          </li>

          <li className="mb-2">
            Infrastructure damage: Erosion can damage roads, bridges, and other
            structures located near waterways.
          </li>
        </ul>
        <h1 className="pb-2 pt-2 text-lg font-medium text-gray-900 dark:text-white">
          Nutrient Holding Capacity
        </h1>

        <p className="leading-relaxed text-base pb-3">
          Nutrient Holding Capacity (NHC), commonly referred to as Cation
          Exchange Capacity (CEC) is the ability of a soil to retain, exchange,
          and supply essential nutrients (positively charged ions, known as
          cations), to plant roots. These cations include nutrients like calcium
          (Ca²⁺), magnesium (Mg²⁺), potassium (K⁺), and others, which are vital
          for plant growth.
        </p>
        <p className="leading-relaxed text-base pb-3">
          High CEC means the soil can hold a lot of nutrients. This is great for
          plants because they will have more food to eat. If the soil has low
          CEC, it cannot hold many nutrients and thus can be easily washed away
          during erosion.
        </p>
        <p className="leading-relaxed text-base pb-2">
          To improve the NHC of the soil:
        </p>
        <ul className="list-disc list-inside p-3">
          <li className="mb-2">
            Incorporate organic matter such as compost, well-rotted manure, or
            cover crops into the soil. Organic matter has a high CEC and can
            significantly improve the soil's nutrient-holding capacity.
          </li>

          <li className="mb-2">
            Apply mulch to the soil surface to gradually add organic matter over
            time. Mulch helps improve soil structure, moisture retention, and
            microbial activity, contributing to higher CEC.
          </li>

          <li className="mb-2">
            Implement erosion control measures to prevent the loss of topsoil,
            which is rich in organic matter. This helps maintain or increase CEC
            over time.
          </li>

          <li className="mb-2">
            Rotate crops and incorporate cover crops that add organic matter to
            the soil. Legumes, such as soybean, clover, and peas, can fix
            atmospheric nitrogen, enhancing soil fertility and CEC.
          </li>

          <li className="mb-2">
            Adjust the soil's pH using lime (for acidic soils) or gypsum (for
            sodic/alkaline soils). Proper pH levels can improve CEC by making
            nutrients more available for plants.
          </li>

          <li className="mb-2">
            Avoid over-fertilization, which can lead to nutrient imbalances and
            negatively affect CEC. Follow recommended nutrient application rates
            based on soil testing.
          </li>

          <li className="mb-2">
            The addition of clay minerals to sandy soils can increase CEC.
            Combining clay with organic matter can further enhance CEC.
          </li>

          <li className="mb-2">
            Regular soil testing helps monitor CEC levels and nutrient status.
            Adjust soil management practices based on test results.
          </li>
        </ul>

        <p className="leading-relaxed text-base pb-3">
          Remember that improving CEC is a gradual process, and the extent to
          which you can enhance it depends on your soil type, climate, and local
          conditions. Soil management should be tailored to the specific needs
          of your farm. Regular soil testing and a long-term approach to soil
          improvement are key to sustainable and productive agriculture.
        </p>
      </div>
      {/* End Card */}
    </>
  );
}
