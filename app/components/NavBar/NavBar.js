import React, { useContext } from 'react';
import MovieTitleContext from '../../reactContext/movieTitle';
import './navbar.css';


function NavBar() {

  const {movieTitleContext} = useContext(MovieTitleContext);

  return (
    <div className="navBar">
      <h2 className="navText">{movieTitleContext? movieTitleContext : 'Rakuten TV'}</h2>
    </div>
  );
}

export default NavBar;
