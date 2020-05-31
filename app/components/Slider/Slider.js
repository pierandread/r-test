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
    getList(list).then(list=> {console.log(list); setListData(list)});
  },[])

  console.log(listData)

  if (listData && ("errors" in listData)) {return(
    <div className="slider-div">
      <p>ERROR</p>
    </div>
  )}
  if (listData) {return(
    <div className="slider-div">
       {/* onClick: 280 from 250(width movie)+(10+10(paddings))+10(margin right) */}
      {/* <button className="button-left" onClick={()=> movingList!==0 && setMovingList(movingList+280)}>&#xf104;</button> */}
      <i className='fas fa-arrow-alt-circle-left button-left' style={{fontSize :'35px'}} onClick={()=> movingList!==0 && setMovingList(movingList+280)}></i>

      <div className='list' style={{"transform": `translateX(${movingList}px)`}}>
        {listData.data.contents.data.map((movie,idx) => <Movie key={idx} movie={movie}/>)}
      </div>

      {/* onClick: Math.floor(screenWidth/100*10) to consider margin div list-container + 30 to take out padding and margin right*/}
      {/* <button className="button-right" style={{left: (screenWidth -(Math.floor(screenWidth/100*10)+42))}} 
      onClick={()=> {(-movingList<(((listData.data.contents.data.length)*280)-(screenWidth-(Math.floor(screenWidth/100*10))+30))) && setMovingList(movingList-280)}}
      >right</button> */}
      <i className='fas fa-arrow-alt-circle-right button-right' style={{fontSize :'35px', left: (screenWidth -(Math.floor(screenWidth/100*10)+40))}} 
      onClick={()=> {(-movingList<(((listData.data.contents.data.length)*280)-(screenWidth-(Math.floor(screenWidth/100*10))+30))) && setMovingList(movingList-280)}}
      ></i> 
    </div>
  )};
  return (
    <div>
      <p>Loading...</p>
    </div>
  )
}

export default Slider;