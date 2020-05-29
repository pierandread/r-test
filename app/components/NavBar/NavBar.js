import React from 'react';
import './navbar.css';


function NavBar() {


  return (
    <div>
      <p className="test">{window.location.pathname==='/'? 'Rakuten TV' : 'movie'}</p>
    </div>
  );
}

export default NavBar;
