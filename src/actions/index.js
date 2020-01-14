export const setCurrentArtist = artist => ({
  type: 'SET_CURRENT_ARTIST',
  artist
});

export const setEvents = events => ({
  type: 'SET_EVENTS', 
  events
});

export const selectEvent = id => {
  console.log(id)
  return {
    type: 'SET_EVENT',
    id
  }
};

export const filterEvents = event => ({
  type: 'FILTER_EVENTS',
  event
});

export const toggleFavorite = favorite => ({
  type: 'TOGGLE_FAVORITE',
  favorite
});