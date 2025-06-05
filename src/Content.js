import { useState } from 'react';
import artists from './artists.json';
import BookTickets from './BookTickets';
import Status from './Status';
import albums from './albums.json';
import HomePage from './HomePage';
import ProductTable from './ProductTable';
import Premium from './Premium'; // ✅ Import the Premium component
import Account from './Account';

function Content({ selectedMenu, username }) {
  const [query, setQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const playAudio = (src) => {
    if (currentAudio) currentAudio.pause();
    const audio = new Audio(src);
    audio.play();
    setCurrentAudio(audio);
  };

  if (selectedMenu === 'Artists') {
    return (
      <div className="main-content">
        <h2>Popular Artists</h2>
        {selectedArtist ? (
          <div>
            <h3>{selectedArtist.name}</h3>
            <img src={selectedArtist.url} alt={selectedArtist.name} />
            <p>{selectedArtist.description}</p>
            {selectedArtist.songs?.map((song, i) => (
              <div key={i}>
                🎵 {song.title}
                <audio controls src={song.audio} />
              </div>
            ))}
            <button onClick={() => setSelectedArtist(null)}>Back</button>
          </div>
        ) : (
          <div className="card-grid">
            {artists.map((artist) => (
              <div className="card" key={artist.id} onClick={() => setSelectedArtist(artist)}>
                <img src={artist.url} alt={artist.name} />
                <p>{artist.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (selectedMenu === 'Search') {
    const filtered = artists.filter((artist) =>
      artist.name.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <div className="main-content">
        <h2>Search Artists</h2>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="card-grid">
          {filtered.map((artist) => (
            <div className="card" key={artist.id} onClick={() => setSelectedArtist(artist)}>
              <img src={artist.url} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (selectedMenu === 'BookTickets') {
    return (
      <div className="main-content">
        <BookTickets onBook={(ticket) => setTickets([...tickets, ticket])} />
      </div>
    );
  }

  if (selectedMenu === 'Status') {
    return (
      <div className="main-content">
        <h2>Booking Status</h2>
        <Status tickets={tickets} />
      </div>
    );
  }

  if (selectedMenu === 'Home') {
    return <HomePage username={username} />;
  }

  if (selectedMenu === 'ListenNow') {
    return (
      <div className="main-content">
        {selectedAlbum ? (
          <div>
            <h3>{selectedAlbum.title}</h3>
            {selectedAlbum.songs.map((song, i) => (
              <div key={i}>
                🎵 {song.title}
                <button onClick={() => playAudio(song.audio)}>Play</button>
              </div>
            ))}
            <button onClick={() => setSelectedAlbum(null)}>Back</button>
          </div>
        ) : (
          <div className="card-grid">
            {albums.map((album) => (
              <div className="card" key={album.id} onClick={() => setSelectedAlbum(album)}>
                <img src={album.cover} alt={album.title} />
                <p>{album.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (selectedMenu === 'Products') {
    return <ProductTable />;
  }

  if (selectedMenu === 'Premium') {
    return <Premium />; // ✅ Show PayPal payment only here
  }
if (selectedMenu === 'Account') {
  return <Account username={username} />;
}
  return (
    <div className="main-content">
      <h2>Welcome, {username}!</h2>
    </div>
  );
  
}

export default Content;
