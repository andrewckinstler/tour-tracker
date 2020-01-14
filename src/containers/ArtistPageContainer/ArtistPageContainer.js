import { connect } from 'react-redux';
import { ArtistCard } from '../../components/ArtistCard';

const mapStateToProps = ({ currentArtist }) => ({
    artist: currentArtist
})

export default connect(mapStateToProps)(ArtistCard)