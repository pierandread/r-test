import React, {useState, useEffect} from 'react';
import {getList} from '../../services/api-calls';
import Movie from '../Movie/Movie';
import './movies.css'

function Movies() {

  //TODO: consider rejected promise for rendering, try to not reload if coming back to the page
  useEffect(() => {
    getList('populares-en-taquilla').then(list=> setPopularesList(list));
    getList('estrenos-para-toda-la-familia').then(list=> setEstrenosFamiliaList(list));
    getList('estrenos-imprescindibles-en-taquilla').then(list=> setEstrenosTaquillaList(list));
    getList('estrenos-espanoles').then(list=> setEstrenosEspanolesList(list));
    getList('si-te-perdiste').then(list=> setPerdisteList(list));
    getList('especial-x-men').then(list=> setXmenList(list));
    getList('nuestras-preferidas-de-la-semana').then(list=> setSemanaList(list));
  }, [])

  const [popularesList, setPopularesList] = useState(null)
  const [estrenosFamiliaList, setEstrenosFamiliaList] = useState(null)
  const [estrenosTaquillaList, setEstrenosTaquillaList] = useState(null)
  const [estrenosEspanolesList, setEstrenosEspanolesList] = useState(null)
  const [perdisteList, setPerdisteList] = useState(null)
  const [xmenList, setXmenList] = useState(null)
  const [semanaList, setSemanaList] = useState(null)
  const [movingList, setMovingList] = useState(0)

  return (
    <div>
      <p>Populares en Taquilla:</p>
      <button onClick={()=> movingList!==0 && setMovingList(movingList+310)}>left</button>

      <div className='list' style={{"transform": `translateX(${movingList}px)`}}>
        {popularesList? popularesList.data.contents.data.map((movie,idx) => <Movie key={idx} movie={movie}/>) : <p>Loading...</p>}
      </div>
      <button onClick={()=> setMovingList(movingList-310)}>right</button>

      <p>Estrenos para toda la familia:</p>
      {estrenosFamiliaList? <p>Check list</p> : <p>Loading...</p>}

      <p>Estrenos imprescindibles en taquilla:</p>
      {estrenosTaquillaList? <p>Check list</p> : <p>Loading...</p>}

      <p>Estrenos espanoles:</p>
      {estrenosEspanolesList? <p>Check list</p> : <p>Loading...</p>}

      <p>Si te perdiste:</p>
      {perdisteList? <p>Check list</p> : <p>Loading...</p>}

      <p>Especial X-men:</p>
      {xmenList? <p>Check list</p> : <p>Loading...</p>}

      <p>Nuestras preferidas de la semana:</p>
      {semanaList? <p>Check list</p> : <p>Loading...</p>}

    </div>
  );
}

export default Movies;
