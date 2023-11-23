// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import leaflet CSS
import "leaflet-draw/dist/leaflet.draw.css"; // Import leaflet-draw CSS
import { GeoJSON } from "react-leaflet/GeoJSON";
import { LatLngTuple } from "leaflet";
import EditFeature from "./EditFeature";

const CENTER_LAT = -0.362256735;
const CENTER_LON = 35.3099136;

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.svg", // Path to your custom marker icon
  iconSize: [40, 40], // Set the size of your icon
  iconAnchor: [16, 32], // Set the anchor point for the icon
  popupAnchor: [0, -32], // Set the anchor point for the popup
});

function SetViewOnLocationChange({ mapLocation }) {
  const map = useMap();
  // map.setView(mapLocation, map.getZoom());
  map.setView(mapLocation, 18);
  // map.invalidateSize();
  return (
    <Marker position={mapLocation} icon={customIcon}>
      <Popup>{`lat: ${mapLocation[0]} lon:${mapLocation[1]}`}</Popup>
    </Marker>
  );
}

interface MapComponentProps {
  mapLocation: LatLngTuple | null;
  onMarkerPlaced: () => void;
  onMarkerClear: () => void;
}

const MapComponent: React.FC<MapComponentProps> = ({
  mapLocation,
  onMarkerPlaced,
  onMarkerClear,
}) => {
  const bioFile = "/json/biodiversity.json";
  const geoJSONStyle = {
    fillColor: "red",
    weight: 2,
    opacity: 0.45,
    color: "transparent",
    fillOpacity: 0.45,
  };

  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch(bioFile)
      .then((response) => response.json())
      .then((data) => setGeojsonData(data))
      .catch((error) => console.error("Error fetching GeoJSON:", error));
  }, []);

  return (
    <div className="map-picker">
      {/* <div className="p-2">
        <span className="text-sm">Latitude: {mapLocation?.lat}</span>
        <span className="ml-5 text-sm">Longitude: {mapLocation?.lng}</span>
      </div> */}
      <MapContainer
        center={[CENTER_LAT, CENTER_LON]}
        zoom={17}
        style={{ height: "380px", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url={`https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}`}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
          maxZoom={20}
          attribution='&copy; <a href="https://maps.google.com">Google Maps</a>'
        />
        <EditFeature
          onMarkerPlaced={onMarkerPlaced}
          onMarkerClear={onMarkerClear}
        />

        {geojsonData && <GeoJSON data={geojsonData} style={geoJSONStyle} />}

        {mapLocation ? (
          <SetViewOnLocationChange mapLocation={mapLocation} />
        ) : (
          ""
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
