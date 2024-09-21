import React from 'react';

function ArtistDetails({ artist }) {
  return (
    <div className="artist-details">
      <h2>{artist.name}</h2>
      <img src={artist.photo_url} alt={`${artist.name}`} width="200" />
      <p><strong>Country:</strong> {artist.country}</p>
      <p><strong>Years Active:</strong> {artist.years_active}</p>
    </div>
  );
}

export default ArtistDetails;
