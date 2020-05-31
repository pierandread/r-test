import React, {useState, useEffect} from 'react';
import Slider from '../Slider/Slider'
import './movies.css'

function Movies() {


  return (
    <div className='list-container' id='list-container'>

      <h3>Populares en Taquilla:</h3>

      <Slider list={'populares-en-taquilla'} />

      <h3>Estrenos para toda la familia:</h3>

      <h3>Estrenos imprescindibles en taquilla:</h3>

      <h3>Estrenos espanoles:</h3>

      <h3>Si te perdiste:</h3>

      <h3>Especial X-men:</h3>

      <h3>Nuestras preferidas de la semana:</h3>

    </div>
  );
}

export default Movies;
