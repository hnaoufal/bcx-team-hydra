import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '70vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: 40.12150192260742,
    lng: -100.45039367675781
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCwvFpQ0V-PWfjy-7e3BAng9p_Usld3oOU"
      libraries={['maps', 'marker']}
      version="beta"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={4}
        center={defaultCenter}
      >
        <Marker
          position={defaultCenter}
          title="My location"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
