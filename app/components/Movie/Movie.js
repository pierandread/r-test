import React from 'react';
import { Link } from "react-router-dom";
import './movie.css';

function Movie({movie}) {
  return (
    <div className='box'>
      <Link to={"/movie/" + movie.id}>
        <img alt={movie.title} src={movie.images.artwork} className='img'/>
      </Link>
    </div>
  )
}

export default Movie;

