import React, {useEffect, useState} from 'react';
import {DirectionsRenderer, GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

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
        lat: source.lat,
        lng: source.lng,
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
        if (isLoaded) {
            try {
                const directionsService = new window.google.maps.DirectionsService();
                const origin = new window.google.maps.LatLng(source.lat, source.lng);
                const destinations = [
                    new window.google.maps.LatLng(target.lat, target.lng), // Los Angeles, CA
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
            } catch (error) {
                console.error('Error loading or processing directions:', error);
            }
        }
    }, [isLoaded, source, target]);

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
                {target.lat > 51 && target.lat < 52 && target.lng > -0.5 && target.lng < 0 && <Marker
                  position={{lat: 51.5374, lng: -0.1378}} // Coordinates for London
                  title="London, UK - Brexit is a considered risk"
                  label="RISK"
                  icon={{
                      url: 'http://maps.google.com/mapfiles/ms/icons/black-dot.png',
                      scaledSize: new window.google.maps.Size(32, 32),
                  }}
                />}

                <Marker
                    position={{lat: 39.7392, lng: -104.9903}}
                    title="Denver, CO"
                    label="D"
                    icon={{
                        url: 'http://maps.google.com/mapfiles/ms/icons/black-dot.png',
                        scaledSize: new window.google.maps.Size(32, 32),
                    }}
                />

                <Marker
                    position={{lat: 36.1699, lng: -115.1398}}
                    title="Las Vegas, NV"
                    label="L"
                    icon={{
                        url: 'http://maps.google.com/mapfiles/ms/icons/black-dot.png',
                        scaledSize: new window.google.maps.Size(32, 32),
                    }}
                />
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
