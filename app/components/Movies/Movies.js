import React, {useEffect} from 'react';
import {getList} from '../../services/api-calls'

function Movies() {

  useEffect(() => {
    getList('populares-en-taquilla');
  }, [])

  return (
    <div>
      <p>Populares en Taquilla:</p>

      <p>Estrenos para toda la familia:</p>

      <p>Estrenos imprescindibles en taquilla:</p>

      <p>Estrenos espanoles:</p>

      <p>Estrenos espanoles:</p>

      <p>Si te perdiste:</p>

      <p>Especial X-men:</p>

      <p>Nuestras preferidas de la semana:</p>


    </div>
  );
}

export default Movies;
