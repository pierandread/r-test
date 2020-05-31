import React, {useState, useEffect} from 'react';
import {getList} from '../../services/api-calls';
import Movie from '../Movie/Movie';
import './slider.css'


function Slider ({list}) {

  //states to manager left and rigth stopping points for slider
  const [movingList, setMovingList] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function() {
    setScreenWidth(window.visualViewport.width || window.innerWidth);
  });

  const [listData, setListData] = useState(null);

  useEffect(() =>{
    getList(list).then(list=> setListData(list));
  },[])

  

  return(
    <div className="slider-div">
       {/* 280 from 250(width movie)+(10+10(paddings))+10(margin right) */}
      <button className="button-left" onClick={()=> movingList!==0 && setMovingList(movingList+280)}>left</button>

      <div className='list' style={{"transform": `translateX(${movingList}px)`}}>
        {listData? listData.data.contents.data.map((movie,idx) => <Movie key={idx} movie={movie}/>) : <p>Loading...</p>}
      </div>

      {/* Math.floor(screenWidth/100*10) to consider margin div list-container + 30 to take out padding and margin right*/}
      <button className="button-right" style={{left: (screenWidth -(Math.floor(screenWidth/100*10)+42))}} onClick={()=> {(-movingList<(((listData.data.contents.data.length)*280)-(screenWidth-(Math.floor(screenWidth/100*10))+30))) && setMovingList(movingList-280)}}>right</button>
    </div>
  )
}

export default Slider;