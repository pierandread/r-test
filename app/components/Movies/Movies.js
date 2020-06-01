import React, {useContext} from 'react';
import Slider from '../Slider/Slider';
import MovieTitleContext from '../../reactContext/movieTitle';
import './movies.css';

function Movies() {

  const {setMovieTitleContext}  = useContext(MovieTitleContext);
  setMovieTitleContext('');

  return (
    <div className='list-container' id='list-container'>

      <h3>Populares en Taquilla:</h3>

        <Slider list={'populares-en-taquilla'} />

      <h3>Estrenos para toda la familia:</h3>

        <Slider list={'estrenos-para-toda-la-familia'} />

      <h3>Estrenos imprescindibles en taquilla:</h3>

        <Slider list={'estrenos-imprescindibles-en-taquilla'} />

      <h3>Estrenos espanoles:</h3>

        <Slider list={'estrenos-espanoles'} />

      <h3>Si te perdiste:</h3>

        <Slider list={'si-te-perdiste'} />

      <h3>Especial X-men:</h3>

        <Slider list={'especial-x-men'} />

      <h3>Nuestras preferidas de la semana:</h3>

        <Slider list={'nuestras-preferidas-de-la-semana'} />

    </div>
  );
}

export default Movies;
