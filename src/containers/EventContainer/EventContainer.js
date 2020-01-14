import { connect } from 'react-redux';
import { EventList } from '../../components/EventList/EventList';

const mapStateToProps = state => ({
  events: state.allEvents
})

export default connect(mapStateToProps)(EventList)