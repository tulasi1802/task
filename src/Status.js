function Status({ tickets }) {
  if (tickets.length === 0) {
    return <p>No bookings yet.</p>;
  }

  const containerStyle = {
  width:"150vh",
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: 'grey',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    color: 'black',
  };

  const thStyle = {
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    border: '1px solid #999',
  };

  const tdStyle = {
    padding: '10px',
    border: '1px solid #999',
  };

  const statusStyle = {
    ...tdStyle,
    color: 'green',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h3>🎟️ Your Bookings</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Artist</th>
            
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Tickets</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td style={tdStyle}>{ticket.artistName}</td>
              
              <td style={tdStyle}>{ticket.date}</td>
              <td style={tdStyle}>{ticket.tickets}</td>
              <td style={statusStyle}>Booked</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Status;
