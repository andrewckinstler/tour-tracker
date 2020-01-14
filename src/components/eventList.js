import React from 'react';
import { EventTile } from './EventTile'

export const EventList = ({ events }) => {
  return (<div>
    <h2>event list</h2>
    {events.map(event => (
      <EventTile event={event}/>
    ))}
  </div>)
}