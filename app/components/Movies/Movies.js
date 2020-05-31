import React, {useState, useEffect} from 'react';
import {getList} from '../../services/api-calls';
import Movie from '../Movie/Movie';
import './movies.css'

function Movies() {

  //TODO: consider rejected promise for rendering, try to not reload if coming back to the page


  // !(popularesList) && getList('populares-en-taquilla').then(list=> setPopularesList(list));

  const [popularesList, setPopularesList] = useState(null)
  const [estrenosFamiliaList, setEstrenosFamiliaList] = useState(null)
  const [estrenosTaquillaList, setEstrenosTaquillaList] = useState(null)
  const [estrenosEspanolesList, setEstrenosEspanolesList] = useState(null)
  const [perdisteList, setPerdisteList] = useState(null)
  const [xmenList, setXmenList] = useState(null)
  const [semanaList, setSemanaList] = useState(null)
  const [movingList, setMovingList] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  window.addEventListener("resize", function() {
    setScreenWidth(window.innerWidth);
  });

  if(popularesList===null) {getList('populares-en-taquilla').then(list=> setPopularesList(list)); console.log("api CALL PD")};

  return (
    <div className='list-container' id='list-container'>

      <h3>Populares en Taquilla:</h3>

      {/* left button 250 from 300+10+10 padding + 10 margin right  */}
      <button onClick={()=> movingList!==0 && setMovingList(movingList+280)}>left</button>
      
      <div className='list' style={{"transform": `translateX(${movingList}px)`}}>
        {popularesList? popularesList.data.contents.data.map((movie,idx) => <Movie key={idx} movie={movie}/>) : <p>Loading...</p>}
      </div>
      <button onClick={()=> {(-movingList<(((popularesList.data.contents.data.length)*280)-(screenWidth-(Math.floor(screenWidth/100*10))+20))) && setMovingList(movingList-280)}}>right</button>

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
