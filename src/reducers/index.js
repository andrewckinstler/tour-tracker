import { combineReducers } from 'redux';

import { currentArtist } from './currentArtist';
import { allEvents } from './allEvents';

const rootReducer = combineReducers({
  currentArtist,
  allEvents
});

export default rootReducer;