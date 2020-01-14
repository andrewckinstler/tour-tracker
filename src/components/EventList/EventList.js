import React from 'react';
import { EventTile } from '../EventTile/EventTile';
import './EventList.scss';

export const EventList = ({ events }) => {
  return (<div className='event-list'>
    <h2>event list</h2>
    {events.map(event => (
      <EventTile event={event}/>
    ))}
  </div>)
}