import { connect } from 'react-redux';
import { ArtistCard } from '../../components/ArtistCard/ArtistCard';

const mapStateToProps = ({ currentArtist }) => ({
    artist: currentArtist
})

export default connect(mapStateToProps)(ArtistCard)