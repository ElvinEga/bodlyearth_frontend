import React, { useState } from "react";
import L, { marker } from "leaflet";
import {
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
  Circle,
  useMap,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

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
      map.setView(latlng, 14);
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

  /*onEdited	function	hook to leaflet-draw's draw:edited event
onCreated	function	hook to leaflet-draw's draw:created event
onDeleted	function	hook to leaflet-draw's draw:deleted event
onMounted	function	hook to leaflet-draw's draw:mounted event
onEditStart	function	hook to leaflet-draw's draw:editstart event
onEditStop	function	hook to leaflet-draw's draw:editstop event
onDeleteStart	function	hook to leaflet-draw's draw:deletestart event
onDeleteStop	function	hook to leaflet-draw's draw:deletestop event
onDrawStart	function	hook to leaflet-draw's draw:drawstart event
onDrawStop	function	hook to leaflet-draw's draw:drawstop event
onDrawVertex	function	hook to leaflet-draw's draw:drawvertex event
onEditMove	function	hook to leaflet-draw's draw:editmove event
onEditResize	function	hook to leaflet-draw's draw:editresize event
onEditVertex	function	hook to leaflet-draw's draw:editvertex event*/
  return (
    <FeatureGroup>
      <EditControl
        onDrawStart={_onDrawStart}
        position="topleft"
        onEdited={_onEdited}
        onCreated={_onCreated}
        onDeleted={_onDeleted}
        draw={{
          marker: true,
          polyline: false,
          rectangle: false,
          circlemarker: false,
          circle: false,
          polygon: true,
        }}
      />
    </FeatureGroup>
  );
};

export default EditFeature;
