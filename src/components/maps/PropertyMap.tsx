import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

interface PropertyMapProps {
  latitude: number;
  longitude: number;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ latitude, longitude }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      zoom={15}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName="w-full h-[400px] rounded-lg"
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
};

export default PropertyMap;