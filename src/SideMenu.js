import React from 'react';
import { Link } from 'react-router-dom';


function SideMenu({ selectedMenu, onMenuClick }) {
  return (
    <div className="side-menu">
      <ul>
        <li onClick={() => onMenuClick('Home')}>Home</li>
        <li onClick={() => onMenuClick('Search')}>Search</li>
        <li onClick={() => onMenuClick('ListenNow')}>ListenNow</li>
        <li onClick={() => onMenuClick('Artists')}>Artists</li>
        <li onClick={() => onMenuClick('BookTickets')}>BookTickets</li>
        <li onClick={() => onMenuClick('Status')}>Status</li>
        <li onClick={() => onMenuClick('Products')}>Products</li>
        <li onClick={() => onMenuClick('Premium')}>Premium</li>
        <li>
          <Link to="/account" style={{ textDecoration: 'none', color: 'white' }}>
            Account
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
