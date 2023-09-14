import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const CENTER_LAT = -0.919238;
const CENTER_LON = 36.80925;

const LocationPickerMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Function to handle marker click
  const handleMarkerClick = (location: { lat: number; lng: number } | null) => {
    setSelectedLocation(location);
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        zoom={14}
        center={{ lat: 0, lng: 0 }} // Set your default center location
      >
        {selectedLocation && (
          <Marker
            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            onClick={() => handleMarkerClick(null)}
          />
        )}
        {/* You can add more markers as needed */}
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationPickerMap;
