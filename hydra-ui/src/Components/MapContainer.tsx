import React, {useEffect, useState} from 'react';
import {DirectionsRenderer, GoogleMap, Marker, useJsApiLoader, InfoWindow} from '@react-google-maps/api';
const MapContainer = ({source, target}: any) => {
    const mapStyles = {
        height: '70vh',
        width: '100%',
    };
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCwvFpQ0V-PWfjy-7e3BAng9p_Usld3oOU',
    });
    const defaultCenter = {
        lat: 40.12150192260742,
        lng: -100.45039367675781,
    };
    const locations = [
        {
          name: 'Denver, CO',
          location: {
            lat: 39.7392,
            lng: -104.9903,
          },
          risk: 'Possible dangerous weather phenomenon',
        },
        {
            name: 'Las Vegas, NV',
            location: {
                lat: 36.1699,
                lng: -115.1398,
            },
            risk: 'Road closed because of construction',
        },
        // Add more locations as needed
      ];
    const [routes, setRoutes] = useState<any[]>([]);
    const [markers, setMarkers] = useState<any[]>([]);
    const [activeMarker, setActiveMarker] = useState<number>(0);
    const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);

  const onMarkerClick = (index: number) => {
    setActiveMarker(index);
    setShowInfoWindow(true);
  };

  const onCloseInfoWindow = () => {
    setActiveMarker(0);
    setShowInfoWindow(false);
  };

    const directionsCallback = (result: any, status: any) => {
        if (status === 'OK') {
            setRoutes((prevRoutes) => [...prevRoutes, result]);
        } else {
            console.error(`Directions request failed due to ${status}`);
        }
    };


    useEffect(() => {
        if (isLoaded) {
            try {
                const directionsService = new window.google.maps.DirectionsService();
                const origin = new window.google.maps.LatLng(40.12150192260742, -100.45039367675781);
                const destinations = [
                    new window.google.maps.LatLng(source.lat, source.lng), // Los Angeles, CA
                    new window.google.maps.LatLng(target.lat, target.lng), // San Francisco, CA
                    // Add more destinations as needed
                ];
                destinations.forEach((destination, index) => {
                    directionsService.route(
                        {
                            origin: origin,
                            destination: destination,
                            travelMode: window.google.maps.TravelMode.DRIVING,
                        },
                        (result, status) => directionsCallback(result, status)
                    );
                });
                const newMarkers = locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={location.location}
                        icon={{
                            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                            scaledSize: new window.google.maps.Size(32, 32),
                        }}
                        onClick={() => onMarkerClick(index)}
                    />
                ));
                setMarkers((prevMarkers) => [...prevMarkers, ...newMarkers]);

            } catch (error) {
                console.error('Error loading or processing directions:', error);
            }
        }
    }, [isLoaded]);
    return (
        isLoaded ? (
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={4}
                center={defaultCenter}
            >
                {routes.map((route, index) => (
                    <DirectionsRenderer
                        key={index}
                        directions={route}
                        options={{polylineOptions: {strokeColor: getColor(index)}}}
                    />
                ))}
                <div>
                {markers}
                {showInfoWindow && (
                    <InfoWindow
                    position={locations[activeMarker].location}
                    onCloseClick={onCloseInfoWindow}
                    >
                    <div>
                        <h1>Info about <b>{locations[activeMarker].name}</b></h1>
                        <p>{locations[activeMarker].risk}</p>
                        {/* Add your information here */}
                    </div>
                    </InfoWindow>
                )}
                </div>

            </GoogleMap>
        ) : <></>
    );
};
// Function to get a distinct color for each route
const getColor = (index: number): string => {
    const colors = ['blue', 'green', 'red']; // Add more colors as needed
    return colors[index % colors.length];
};
export default MapContainer;
