import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

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
const MapWithMarker: React.FC<MapWithMarkerProps> = ({ markerPosition }) => {
  return (
    <div className="map-picker">
      <MapContainer
        center={markerPosition}
        zoom={17}
        zoomControl={false}
        style={{ height: "400px", width: "400px" }}
      >
        <TileLayer
          url={`https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}`}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
          maxZoom={17}
        />
        <Marker position={markerPosition} icon={customIcon}>
          <Popup>
            A sample location.{" "}
            {/* You can customize this popup with more details */}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithMarker;
