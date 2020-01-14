import React from 'react';

export const EventPageComponent = ({event}) => {
  console.log(event)
  return (
    <div>
      <h3>{event.venue.name}</h3>
    </div>
  )
}