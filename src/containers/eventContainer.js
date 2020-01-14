import { connect } from 'react-redux';
import { EventList } from '../components/EventList';

const mapStateToProps = state => ({
  events: state.allEvents
})

export default connect(mapStateToProps)(EventList)