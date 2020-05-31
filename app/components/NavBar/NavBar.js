import React from 'react';
import './navbar.css';


function NavBar() {


  return (
    <div className="navBar">
      <h2 className="navText">{window.location.pathname==='/'? 'Rakuten TV' : 'movie'}</h2>
    </div>
  );
}

export default NavBar;
