import { connect } from 'react-redux';
import { EventPageComponent } from '../components/EventPageComponent';

const mapStateToProps = (state, { eventId }) => ({
    event: state.allEvents.find(event => (eventId === event.id))
})

export default connect(mapStateToProps)(EventPageComponent)