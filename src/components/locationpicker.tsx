/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  FeatureGroup,
  LayerGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css"; // Import leaflet CSS
import "leaflet-draw/dist/leaflet.draw.css"; // Import leaflet-draw CSS
import L, { LatLngTuple, LeafletMouseEvent } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon2x from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Define custom marker icon
const customMarkerIcon = new L.Icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Adjust the icon size as needed
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const defaultLatitude = -0.919238; // Default latitude (e.g., New York City)
const defaultLongitude = 36.80925; // Default longitude (e.g., New York City)

const LocationPickerMap: React.FC = () => {
  const [position, setPosition] = useState<LatLngTuple>([
    defaultLatitude,
    defaultLongitude,
  ]);
  const [polygon] = useState<LatLngTuple[]>([]);
  const featureGroupRef = useRef<L.FeatureGroup | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleMapClick = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);

    // Remove the previous marker when a new one is placed
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
    } else {
      // Create a new marker if it doesn't exist
      const newMarker = new L.Marker([lat, lng], {
        icon: customMarkerIcon,
      });
      markerRef.current = newMarker;
      newMarker.addTo(featureGroupRef.current!);
    }
  };

  const onDrawCreate = () => {
    if (featureGroupRef.current) {
      // const latLngs =
      //   featureGroupRef.current.toGeoJSON().features[0].geometry.coordinates[0];
      // setPolygon(latLngs);
    }
  };
  const _onDrawStart = () => {
    // const { lat, lng } = e.latlng;
    // setPosition([lat, lng]);
  };

  return (
    <div className="map-picker">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
        // onClick={handleMapClick}
      >
        <TileLayer
          url={`https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}`}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
          maxZoom={20}
          attribution='&copy; <a href="https://maps.google.com">Google Maps</a>'
        />
        <LayerGroup>
          <FeatureGroup ref={featureGroupRef}>
            <EditControl
              position="topleft"
              onCreated={onDrawCreate}
              onDrawStart={_onDrawStart}
              draw={{
                marker: true,
                polyline: false,
                rectangle: false,
                circlemarker: false,
                circle: false,
                polygon: {
                  allowIntersection: false,
                  drawError: {
                    color: "#e1e100",
                    timeout: 1000,
                  },
                  showArea: true,
                  metric: false,
                  shapeOptions: {
                    color: "#3388ff",
                  },
                  icon: new L.DivIcon({
                    iconSize: new L.Point(8, 8),
                    className: "leaflet-div-icon leaflet-editing-icon",
                  }),
                },
              }}
            />
          </FeatureGroup>
        </LayerGroup>
        {polygon.length > 0 && (
          <Polygon positions={polygon} color="#3388ff" fillOpacity={0.2} />
        )}
      </MapContainer>
      <div className="p-2">
        <span>Latitude: {position[0]}</span>
        <span className="ml-5">Longitude: {position[1]}</span>
      </div>
    </div>
  );
};

export default LocationPickerMap;
