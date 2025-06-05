import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!password) {
      alert('Please enter your password!');
      return;
    }
    onLogin(username);
  };

  return (
    <div className="login" style={{backgroundImage: `url('music.webp')`}}>
      <h2>Login to VibePlay</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
