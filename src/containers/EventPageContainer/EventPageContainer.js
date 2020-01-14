import { connect } from 'react-redux';
import { EventPageComponent } from '../../components/EventPageComponent/EventPageComponent';

const mapStateToProps = (state, { eventId }) => ({
    event: state.allEvents.find(event => (eventId === event.id))
})

export default connect(mapStateToProps)(EventPageComponent)