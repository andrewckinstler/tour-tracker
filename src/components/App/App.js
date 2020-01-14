// technology imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// stylesheet import
import './App.scss';

// component imports
import Header from '../Header/Header';

// container imports
import MapContainer from '../../containers/MapContainer/MapContainer';
import EventContainer from '../../containers/EventContainer/EventContainer';
import EventPageContainer from '../../containers/EventPageContainer/EventPageContainer';
import ArtistPageContainer from '../../containers/ArtistPageContainer/ArtistPageContainer';

// api call imports
import { getArtist, getEvents } from '../../apiCalls/apiCalls.js';

// actions import
import { setCurrentArtist, setEvents, filterEvents, toggleFavorite } from '../../actions';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    const artist = await this.fetchArtist();
    await this.fetchEvents(artist);
    this.setState({isLoading: false});
  }

  fetchArtist = async () => {
    try {
      const artist = await getArtist();
      this.props.setCurrentArtist(artist);
      return artist
    }
    catch {
      console.log('artist')
    }
  }

  fetchEvents = async artist => {
    try {
      const events = await getEvents(artist);
      this.props.setEvents(events);
    }
    catch{
      console.log('events')
    }
  }

  render() {
    return !this.state.isLoading ?
    (
      <div className='app'>
        <Header />
        <Route exact path='/' render={() => (
          <>
          <ArtistPageContainer />
          <div style={{height: '400px'}}>
            <MapContainer />
          </div>
          <EventContainer />
          </>
        )} />
        <Route path='/event/:id' render={({ match }) => {
        return (<EventPageContainer eventId={match.params.id}/>)
      }} />
      </div>
    )
    : null
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setCurrentArtist,
    setEvents,
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);