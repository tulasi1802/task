import React from 'react';

function Header({ username, onLogout }) {
  return (
    <header>
      <span className="logo">🎵 VibePlay</span>
      <div className="user-info">
        <span>{username}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Header;
