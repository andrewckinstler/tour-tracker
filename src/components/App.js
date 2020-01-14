// technology imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// stylesheet import
import '../stylesheets/App.scss';

// component imports
import Header from './Header';
import { EventPageComponent } from './EventPageComponent';

// container imports
import MapContainer from '../containers/MapContainer';
import EventContainer from '../containers/EventContainer';
import EventPageContainer from '../containers/EventPageContainer';

// api call imports
import {getArtist, getEvents} from '../apiCalls/apiCalls.js';

// actions import
import { setCurrentArtist, setEvents, selectEvent, filterEvents, toggleFavorite } from '../actions';

export class App extends Component {

  componentDidMount() {
    this.fetchArtist();
    this.fetchEvents();
  }

  fetchArtist = async () => {
    try {
      const artist = await getArtist();
      this.props.setCurrentArtist(artist);
    }
    catch {
      console.log('artist')
    }
  }

  fetchEvents = async () => {
    try {
      const events = await getEvents();
      this.props.setEvents(events);
    }
    catch{
      console.log('events')
    }
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Route exact path='/' render={() => (
          <>
          <div style={{height: '400px'}}>
            <MapContainer />
          </div>
          <EventContainer />
          </>
        )} />
        <Route path='/event/:id' render={({ match }) => {
        this.props.selectEvent(match.params.id)
        return (<EventPageContainer event={match.params.id}/>)
      }} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setCurrentArtist,
    setEvents,
    selectEvent
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);