import React from 'react'; 
import { Link } from 'react-router-dom';
import moment from 'moment';

export const EventTile = ({ event }) => {
  return (
    <div>
<p>{moment(event.datetime).calendar()}</p>
      <h3><Link to={`/event/${event.id}`}>
      {event.venue.name}</Link></h3>
      <p>{event.venue.city}</p>
      <p>{event.description}</p>
    </div>
  )
}