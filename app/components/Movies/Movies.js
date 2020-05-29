import React, {useState, useEffect} from 'react';
import {getList} from '../../services/api-calls'

function Movies() {

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


  return (
    <div>
      <p>Populares en Taquilla:</p>
      <button onClick={()=> console.log(popularesList)}>Checking</button>
      {popularesList? <p>Check list</p> : <p>Loading...</p>}

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
