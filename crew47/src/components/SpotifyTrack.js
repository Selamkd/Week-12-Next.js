import React from 'react';
import teamData from '../database/teamData.json';

const SpotifyTrack = ({ trackId }) => {
  const spotifyEmbedUrl = `https://open.spotify.com/embed/track/${trackId}`;

  return (
    <iframe
      src={spotifyEmbedUrl}
      width="300"
      height="380"
      allowTransparency="true"
      allow="encrypted-media"
      className="spotify-container"
    />
  );
};

export default SpotifyTrack;
