import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './MapComponent.css';



class MapComponent extends Component {
  constructor() {
    super()
    this.state = {
      markers: [{
        "venue": {
          "name": "EagleBank Arena",
          "country": "United States",
          "region": "VA",
          "city": "Fairfax",
          "latitude": "38.8330513",
          "longitude": "-77.3098503"
      }
      }]
    }
  }
  
  render() {
    const position = [51.505, -0.09];
    return (
      <div className='leaflet-map'>
      <Map center={position} zoom={6} style={{
        height: '400px',
        width: '100%'
      }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {this.state.markers.map(marker => {
          return (
          <Marker position={[marker.venue.latitude, marker.venue.longitude]}>
            <Popup>hi</Popup>
          </Marker>
          )
        })}
        
      </Map>
      </div>
    );
  }
}


export default MapComponent