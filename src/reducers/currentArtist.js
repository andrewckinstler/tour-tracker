export const currentArtist = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ARTIST': 
      return action.artist;
    default: 
      return state;
  }
}