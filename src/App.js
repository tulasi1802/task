import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ No BrowserRouter here
import './App.css';
import Login from './Login';
import Header from './Header';
import SideMenu from './SideMenu';
import Content from './Content';
import Footer from './Footer';
import PremiumSuccess from './PremiumSuccess';
import Account from './Account';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setSelectedMenu('Home');
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Header username={username} onLogout={handleLogout} />
      <div style={{ display: 'flex', minHeight: '80vh' }}>
        <SideMenu onMenuClick={setSelectedMenu} selectedMenu={selectedMenu} />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={<Content selectedMenu={selectedMenu} username={username} />}
            />
            <Route path="/premium-success" element={<PremiumSuccess />} />
              <Route path="/account" element={<Account username={username} />} />
          </Routes>
        

        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
