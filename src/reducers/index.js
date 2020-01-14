import { combineReducers } from 'redux';

import { currentArtist } from './currentArtist';
import { allEvents } from './allEvents';
import { selectedEvent } from './selectedEvent'

const rootReducer = combineReducers({
  currentArtist,
  allEvents,
  selectedEvent
});

export default rootReducer;