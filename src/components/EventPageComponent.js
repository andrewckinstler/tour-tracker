import React from 'react';

export const EventPageComponent = ({event}) => {
  console.log(event)
  return (
    <div>
      <h3>{event}</h3>
    </div>
  )
}