import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '70vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: 40.12150192260742,
    lng: -100.45039367675781
  };

  const [routes, setRoutes] = useState<any[]>([]);

  const directionsCallback = (result: any, status: any) => {
    if (status === 'OK') {
      setRoutes((prevRoutes) => [...prevRoutes, result]);
    } else {
      console.error(`Directions request failed due to ${status}`);
    }
  };

  useEffect(() => {
	try {
	  const directionsService = new window.google.maps.DirectionsService();
	  const origin = new window.google.maps.LatLng(40.12150192260742, -100.45039367675781);
	  const destinations = [
		new window.google.maps.LatLng(34.0522, -118.2437), // Los Angeles, CA
		new window.google.maps.LatLng(37.7749, -122.4194), // San Francisco, CA
		// Add more destinations as needed
	  ];

	  destinations.forEach((destination, index) => {
		directionsService.route(
		  {
			origin: origin,
			destination: destination,
			travelMode: window.google.maps.TravelMode.DRIVING
		  },
		  (result, status) => directionsCallback(result, status)
		);
	  });
	} catch (error) {
	  console.error('Error loading or processing directions:', error);
	}
  }, []);


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
        {routes.map((route, index) => (
          <DirectionsRenderer
            key={index}
            directions={route}
            options={{ polylineOptions: { strokeColor: getColor(index) } }}
          />
        ))}
        <Marker
          position={defaultCenter}
          title="My location"
        />
      </GoogleMap>
    </LoadScript>
  );
};

// Function to get a distinct color for each route
const getColor = (index: number): string => {
  const colors = ['blue', 'green', 'red']; // Add more colors as needed
  return colors[index % colors.length];
};

export default MapContainer;
