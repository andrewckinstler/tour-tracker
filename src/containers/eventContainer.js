import React from 'react';
import { connect } from 'react-redux';
import { EventList } from '../components/eventList';

const mapStateToProps = state => ({
  events: state.allEvents
})

export default connect(mapStateToProps)(EventList)