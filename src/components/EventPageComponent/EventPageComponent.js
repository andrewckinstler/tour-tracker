import React from 'react';
import './EventPageComponent.scss';
import moment from 'moment';

export const EventPageComponent = ({event}) => {
  return (
    <div>
      <h3>{event.venue.name}</h3>
      <div className='event-page-component'>
        {moment(event.datetime).calendar()}
        <p>{event.venue.city}, {event.venue.region}, {event.venue.country}</p>
        <div>Lineup:<ul>{event.lineup.map(artist => {return (<li>{artist}</li>)})}</ul></div>
        <p>Description: {!event.description ? 'N/A' : event.description}</p>
      </div>
    </div>
  )
}
