// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FeatureGroup, useMap } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.svg", // Path to your custom marker icon
  iconSize: [40, 40], // Set the size of your icon
  iconAnchor: [16, 32], // Set the anchor point for the icon
  popupAnchor: [0, -32], // Set the anchor point for the popup
});

const EditFeature = ({ onMarkerPlaced, onMarkerClear }) => {
  let existingLayer = [];
  const map = useMap();
  const _onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);

    // this._onChange();
  };

  const _onCreated = (e) => {
    let type = e.layerType;
    let layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
      const latlng = layer.getLatLng();
      existingLayer.push(layer);
      console.log("_onCreated: markerPosition", existingLayer);
      onMarkerPlaced(latlng);
      console.log("hook lat lng", latlng);
      map.setView(latlng, map.getZoom());
    } else {
      console.log("_onCreated: something else created:", type, e);
    }
    console.log("coords", layer.getLatLng());
  };

  const _onDrawStart = (e) => {
    console.log("_onDrawStart", e);
    for (const layer of existingLayer) {
      map.removeLayer(layer);
    }
  };

  const _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
      onMarkerClear();
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);
  };

  const _onMounted = (drawControl) => {
    console.log("_onMounted", drawControl);
  };

  const _onEditStart = (e) => {
    console.log("_onEditStart", e);
  };

  const _onEditStop = (e) => {
    console.log("_onEditStop", e);
  };

  const _onDeleteStart = (e) => {
    console.log("_onDeleteStart", e);
  };

  const _onDeleteStop = (e) => {
    console.log("_onDeleteStop", e);
  };

  // Set the initial zoom level
  const initialZoom = map.getZoom();

  return (
    <FeatureGroup>
      <EditControl
        onDrawStart={_onDrawStart}
        position="topright"
        onEdited={_onEdited}
        onCreated={_onCreated}
        onDeleted={_onDeleted}
        draw={{
          marker: {
            icon: customIcon, // Set the custom marker icon
          },
          // marker: true,
          polyline: false,
          rectangle: false,
          circlemarker: false,
          circle: false,
          polygon: false,
        }}
        view={{
          zoom: initialZoom, // Set the initial zoom level
        }}
      />
    </FeatureGroup>
  );
};

export default EditFeature;
