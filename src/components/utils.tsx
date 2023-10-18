import {
  point,
  polygon,
  multiPolygon,
  booleanPointInPolygon,
} from "@turf/turf";
async function isInProtectedArea(coordinates) {
  const pointFeature = point(coordinates);

  try {
    const response = await fetch("/json/biodiversity.json");
    const geojsonLayerData = await response.json();
    let poly;
    const isInAnyPolygon = geojsonLayerData.features.some((feature) => {
      // console.log('feature: ', feature)
      if (feature.geometry.type === "Polygon") {
        poly = polygon(feature.geometry.coordinates);
      } else if (feature.geometry.type === "multipolygon") {
        poly = multiPolygon(feature.geometry.coordinates);
      }
      const isInside = booleanPointInPolygon(pointFeature, poly);
      // console.log('found: ', isInside)
      return isInside;
    });
    // console.log("isinprotectedareafunc()", isInAnyPolygon);
    return isInAnyPolygon;
  } catch (error) {
    console.error("Error fetching or processing GeoJSON data:", error);
    return false;
  }
}

export { isInProtectedArea };
