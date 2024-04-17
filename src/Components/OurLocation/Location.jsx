import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
const Location = () => {
    // Coordinates for Mirpur, Dhaka
    const mirpurCoordinates = [ 23.810331,  90.412521];
    // Set zoom level to show the whole city of Dhaka
    const ZOOM_LEVEL = 11;

    return (
        <div className='h-96'>
            <MapContainer center={mirpurCoordinates} zoom={ZOOM_LEVEL}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Marker for the location in Mirpur */}
                <Marker position={mirpurCoordinates}>
                    <Popup>
                        Mirpur, Dhaka, Bangladesh
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Location;
