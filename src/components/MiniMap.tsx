import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "../css/phoneInput.module.css";

// Define the position (latitude and longitude) of the marker
interface MapWithMarkerProps {
  markerPosition: [number, number];
}

// Custom marker icon
const customIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function SetViewOnLocationChange({
  mapLocation,
}: {
  mapLocation: [number, number];
}) {
  const map = useMap();
  // map.setView(mapLocation, map.getZoom());
  map.setView(mapLocation, 17);
  return (
    <Marker position={mapLocation} icon={customIcon}>
      <Popup>{`lat: ${mapLocation[0]} lon:${mapLocation[1]}`}</Popup>
    </Marker>
  );
}
const MapWithMarker: React.FC<MapWithMarkerProps> = ({ markerPosition }) => {
  return (
    <div className="map-picker">
      <MapContainer
        center={markerPosition}
        zoom={17}
        zoomControl={false}
        style={{ height: "400px", width: "380px" }}
      >
        {/* <ComponentResize /> */}
        <TileLayer
          url={`https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}`}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        {markerPosition ? (
          <SetViewOnLocationChange mapLocation={markerPosition} />
        ) : (
          ""
        )}
      </MapContainer>
    </div>
  );
};

export default MapWithMarker;
