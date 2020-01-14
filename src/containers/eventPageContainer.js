import { connect } from 'react-redux';
import { EventPageComponent } from '../components/EventPageComponent';
import React from 'react';
import { Component } from 'react';

export const mapStateToProps = ({ events, selectedEvent}) => ({
    selectedEvent
})

export default connect(mapStateToProps)(EventPageComponent)