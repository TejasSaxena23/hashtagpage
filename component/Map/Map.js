import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-defaulticon-compatibility"
import { MapContainer, TileLayer ,Marker, Popup } from 'react-leaflet'

function Map() {
    return ( 
        <div className="map1">
        <MapContainer center={[37.3773224,-122.0296618]} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            />
            <Marker  position={[37.3773224,-122.0296618]} draggable ={true} animate = {true}>
            <Popup>Hashtag Inc| Full stack development</Popup>
             </Marker>
        </MapContainer>
        </div>
     );
}


export default Map;