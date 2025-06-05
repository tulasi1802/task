import { useState } from 'react';

function BookTickets({ onBook }) {
  const artists = [
    {
      id: 1,
      name: 'Taylor Swift',
      url: 'taylorswift.jfif', 
      concerts: [
        { region: 'New York', date: '2025-07-10' },
        { region: 'Los Angeles', date: '2025-07-15' },
      ],
    },
    {
      id: 2,
      name: 'The Weeknd',
      url: 'weekend.jfif',
      concerts: [
        { region: 'Chicago', date: '2025-08-05' },
        { region: 'Houston', date: '2025-08-10' },
      ],
    },
  ];

  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [ticketsCount, setTicketsCount] = useState(1);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');


  function handleBookClick() {
    if (!selectedArtist || !selectedConcert) {
      setMessageType('error');
      setMessage('Please select artist and concert.');
      return;
    }
    if (ticketsCount < 1) {
      setMessageType('error');
      setMessage('Enter a valid number of tickets.');
      return;
    }
    setMessage('');
    setShowUserForm(true);
  }

 
  function handleUserSubmit(e) {
    e.preventDefault();

    if (!userName.trim() || !userEmail.trim()) {
      setMessageType('error');
      setMessage('Please enter your name and email.');
      return;
    }

    const ticket = {
      artistName: selectedArtist.name,
      region: selectedConcert.region,
      date: selectedConcert.date,
      tickets: ticketsCount,
      userName,
      userEmail,
      id: Date.now(),
    };

    onBook(ticket);
    setMessageType('success');
    setMessage('Tickets booked successfully!');

    
    setShowUserForm(false);
    setTimeout(() => {
      setSelectedArtist(null);
      setSelectedConcert(null);
      setTicketsCount(1);
      setUserName('');
      setUserEmail('');
      setMessage('');
      setMessageType('');
    }, 2000);
  }

  return (
    <div className="container">
      <h2 className="title">Book Concert Tickets</h2>

      {message && (
        <p className={`message ${messageType === 'success' ? 'success' : 'error'}`}>
          {message}
        </p>
      )}

      
      <div className="artists">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className={`artist-card ${selectedArtist?.id === artist.id ? 'selected' : ''}`}
            onClick={() => {
              setSelectedArtist(artist);
              setSelectedConcert(null);
              setMessage('');
              setShowUserForm(false);
            }}
          >
            <img src={artist.url} alt={artist.name} className="artist-image" />
            <div className="artist-name">{artist.name}</div>
          </div>
        ))}
      </div>

      {selectedArtist && (
        <>
          <h3 style={{color:"black"}}>Choose Concert for {selectedArtist.name}:</h3>
          <select
            value={selectedConcert ? JSON.stringify(selectedConcert) : ''}
            onChange={(e) => {
              setSelectedConcert(JSON.parse(e.target.value));
              setMessage('');
              setShowUserForm(false);
            }}
            className="concert-select"
          >
            <option value="">--Select Concert--</option>
            {selectedArtist.concerts.map((concert, index) => (
              <option key={index} value={JSON.stringify(concert)}>
                {concert.region} - {concert.date}
              </option>
            ))}
          </select>

          <br />

          <label>
            Tickets:
            <input
              type="number"
              min="1"
              value={ticketsCount}
              onChange={(e) => {
                setTicketsCount(parseInt(e.target.value) || 1);
                setMessage('');
                setShowUserForm(false);
              }}
              className="tickets-input"
            />
          </label>

          <br />

          {!showUserForm && (
            <button onClick={handleBookClick} className="book-button">
              Book Tickets
            </button>
          )}

       
          {showUserForm && (
            <form onSubmit={handleUserSubmit} className="user-form">
              <h3>Enter Your Details</h3>

              <label>
                Name:
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="user-input"
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="user-input"
                />
              </label>

              <button type="submit" className="confirm-button">
                Confirm Booking
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default BookTickets;
