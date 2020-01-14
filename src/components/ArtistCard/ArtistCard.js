import React from 'react';
import './ArtistCard.scss';

export const ArtistCard = ({ artist }) => (
    <div className='artist-card'>
      <div className='artist-wrapper'>
      <img src={artist.thumb_url} />
      <div>
        <h2>{artist.name}</h2>
        <a href={artist.url}>Profile</a>
        <p>Upcoming events:</p>
        <h3>{artist.upcoming_event_count}</h3>
        </div>
      </div>
    </div>
)