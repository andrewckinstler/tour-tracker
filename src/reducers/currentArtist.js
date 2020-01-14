export const currentArtist = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ARTIST': 
    console.log('hi', action)
      return action.artist;
    default: 
      return state;
  }
}