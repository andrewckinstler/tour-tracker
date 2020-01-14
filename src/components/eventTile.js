import React from 'react'; 
import { Link } from 'react-router-dom';

export const EventTile = ({ event }) => {
  return (
    <div>
      <h3><Link to={`/event/${event.id}`}>{event.venue.name}</Link></h3>
      <p>{event.venue.city}</p>
      <p>{event.description}</p>
    </div>
  )
}