import { connect } from 'react-redux';
import { MapComponent } from '../components/MapComponent';

const mapStateToProps = state => ({
  events: state.allEvents
})

export default connect(mapStateToProps)(MapComponent)