import React from 'react'; 
import { Link } from 'react-router-dom';

export const EventTile = ({ event }) => {
  return (
    <div>
      <h3><Link to={event.id}>{event.venue.name}</Link></h3>
    </div>
  )
}