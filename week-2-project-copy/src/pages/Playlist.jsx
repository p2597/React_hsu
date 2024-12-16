import { useState } from 'react';


export default function Playlist(data) {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (data) => {
    setPlaylist((prev) => [...prev, data]);
  };

  const removeFromPlaylist = (index) => {
    setPlaylist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="playlist-container">
      <h1>My Playlist</h1>

      {playlist.length > 0 ? (
        <ul>
          {playlist.map((data, index) => (
            <li key={index} className="playlist-item">
              <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              <button onClick={() => removeFromPlaylist(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your playlist is empty. Start adding videos!</p>
      )}
    </div>
  );
}
