/**
 * Map.jsx
 *
 * Map component to show animal location using React Leaflet
 *
 * Author: Collin Lanier
 * Date: April 5, 2025
 */

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Box, Heading } from "@radix-ui/themes";

// Default map center (Austin, TX)
const DEFAULT_CENTER = [30.75, -97.48];

// Update the map view when selectedAnimal changes
const RecenterMap = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);

  return null;
};

const Map = ({ selectedAnimal }) => {
  const position = selectedAnimal
    ? [selectedAnimal.location_lat, selectedAnimal.location_long]
    : DEFAULT_CENTER;

  return (
    <Box>
      <Heading mb="2" size="4">
        Animal Map
      </Heading>
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RecenterMap position={position} />
        {selectedAnimal && (
          <Marker position={position}>
            <Popup>
              <strong>{selectedAnimal.name || "No Name"}</strong>
              <br />
              Breed: {selectedAnimal.breed}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </Box>
  );
};

export default Map;
