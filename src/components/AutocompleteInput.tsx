import React, { useState, useRef, useCallback } from "react";
import { StandaloneSearchBox, useLoadScript } from "@react-google-maps/api";

type SearchBox = google.maps.places.SearchBox;

const libraries = ["places"];
const googleMapsApiKey = import.meta.env.VITE_MAP_API_KEY;

interface AutocompleteInputProps {
  onLocationSelect: (location: { lat: number; lng: number } | null) => void;
  value?: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  onLocationSelect,
  value,
}) => {
  const searchBoxRef = useRef<SearchBox>();

  // Handle event when the search box is loaded
  const onSearchBoxLoad = useCallback((searchBox: SearchBox) => {
    searchBoxRef.current = searchBox;
  }, []);

  // Handle event when the location is changed
  const onPlacesChanged = () => {
    const searchBox = searchBoxRef.current;

    if (!searchBox) return;

    // Get the place results from the search box
    const places = searchBox.getPlaces();
    if (!places || places.length === 0) return;

    // Get the lat and lng of the first result
    const lat = places[0].geometry?.location?.lat();
    const lng = places[0].geometry?.location?.lng();

    console.log(places[0]);

    // Set the coordinates state
    if (lat && lng) {
      onLocationSelect({
        lat: lat,
        lng: lng,
      });
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  if (!isLoaded) {
    return null; // Handle the case when the script is not yet loaded
  }

  return (
    <div>
      <StandaloneSearchBox
        onLoad={onSearchBoxLoad}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          id="input-label"
          className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Enter a Location"
        />
      </StandaloneSearchBox>
      <p className="text-gray-500 text-sm pt-2">{value}</p>
    </div>
  );
};

export default AutocompleteInput;
