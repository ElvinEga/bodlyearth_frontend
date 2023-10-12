/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  FeatureGroup,
  LayerGroup,
  useMap,
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
  // const markerRef = useRef<L.Marker | null>(null);
  const mapRef = useRef();
  let existingLayer = [];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment

  const _onCreated = (e) => {
    const type = e.layerType;
    const layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
      const latlng = layer.getLatLng();
      existingLayer.push(layer);
      console.log("_onCreated: markerPosition", existingLayer);
      // onMarkerPlaced(latlng);
      map.setView(latlng, 14);
    } else {
      console.log("_onCreated: something else created:", type, e);
    }
    console.log("coords", layer.getLatLng());
  };
  const _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);
  };

  const onDrawCreate = () => {
    if (featureGroupRef.current) {
      // const latLngs =
      //   featureGroupRef.current.toGeoJSON().features[0].geometry.coordinates[0];
      // setPolygon(latLngs);
    }
  };
  const _onDrawStart = () => {
    console.log("_onDrawStart", e);
    for (const layer of existingLayer) {
      map.removeLayer(layer);
    }
  };

  return (
    <div className="map-picker">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
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
              onDrawStart={_onDrawStart}
              position="topleft"
              // onEdited={_onEdited}
              onCreated={_onCreated}
              onDeleted={_onDeleted}
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
