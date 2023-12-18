import React, { useRef, useCallback } from "react";
import { StandaloneSearchBox, useLoadScript } from "@react-google-maps/api";

type SearchBox = google.maps.places.SearchBox;

const libraries = ["places"];
const googleMapsApiKey = import.meta.env.VITE_MAP_API_KEY;

interface AutocompleteInputProps {
  onLocationSelect: (location: { lat: number; lng: number } | null) => void;
  value?: string;
  title?: string;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  onLocationSelect,
  value,
  title,
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
    // @ts-ignore
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
        <div className="relative lg:w-64 xl:w-80">
          <input
            type="text"
            id="input-label"
            className="h-10 py-3 px-4 pl-11  block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder={title || `Enter a Location`}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
            <i className="bi bi-search"></i>
          </div>
        </div>
      </StandaloneSearchBox>
      {!title ? <p className="text-gray-500 text-xs pt-2">{value}</p> : null}
    </div>
  );
};

export default AutocompleteInput;
