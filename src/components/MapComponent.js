import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './MapComponent.css';



export const MapComponent = ({ events }) => {
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
        {events.map(event => {
          return (
          <Marker position={[event.venue.latitude, event.venue.longitude]}>
            <Popup>hi</Popup>
          </Marker>
          )
        })}
      </Map>
      </div>
    );
  }
