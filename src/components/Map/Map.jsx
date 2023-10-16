import React, {useMemo} from 'react';
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    })
    const center = useMemo(()=> {
        return {lat: 16.059942, lng: 108.209742}
    }, [])
    if (!isLoaded) return <div>Loading...</div>
    return (
        <>
            <GoogleMap zoom={18} center={center} mapContainerClassName="relative w-full h-full">
                <MarkerF position={center}/>
            </GoogleMap>
        </>
    );
};

export default Map;