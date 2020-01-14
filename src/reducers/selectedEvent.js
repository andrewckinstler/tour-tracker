export const selectedEvent = (state = null, action) => {
  console.log(action)
  // console.log('hi')
  switch (action.type) {
    case 'SET_EVENT':
      return action.id;
    default:
      return state 
  }
};

// action.events.find(event => {
//   // console.log(state.allEvents)
//   return event.id === action.id})