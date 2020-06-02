import React, {useState, useEffect} from 'react';
import {getList} from '../../services/api-calls';
import Movie from '../Movie/Movie';
import './slider.css'

function isScreenBiggerThanSlider(arrayMovies, screenWidth){
  const sliderSize = arrayMovies.data.contents.data.length * 280;
  const margins = Math.floor(screenWidth/100*10);
  const screenMinusSlider = screenWidth - margins - sliderSize;
  if (screenMinusSlider>0) return true;
  return false;
}

function Slider ({list}) {

  //states to manager left and rigth stopping points for slider
  const [movingList, setMovingList] = useState(0);
  const [screenWidth, setScreenWidth] = useState((window.innerWidth)-15);

  window.addEventListener("resize", function() {
    setScreenWidth(window.innerWidth);
  });

  const [listData, setListData] = useState(null);

  useEffect(() =>{
    getList(list).then(list=> {setListData(list)});
  },[])


  if (listData==='error' || listData && typeof(listData)==="object" && ("errors" in listData)) {
    return(
    <div>
      <p>Error loading data: No movies for this category <span alt='sad-emoji'>😢</span></p>
    </div>
    )
  };

  if (listData && isScreenBiggerThanSlider(listData, screenWidth)) {
    return(
      <div className="slider-div">  
        <div className='list' style={{"transform": `translateX(${movingList}px)`}}>
          {listData.data.contents.data.map((movie,idx) => <Movie key={idx} movie={movie}/>)}
        </div>        
      </div>
      )
    };


  if (listData && !isScreenBiggerThanSlider(listData, screenWidth)) {
    return(
    <div className="slider-div">

      {/* onClick: 280 from 250(width movie)+(10+10(paddings))+10(margin right) */}
      <i className='fas fa-arrow-alt-circle-left button-left' style={{fontSize :'35px'}} onClick={()=> movingList!==0 && setMovingList(movingList+280)}></i>

      <div className='list' style={{"transform": `translateX(${movingList}px)`}}>
        {listData.data.contents.data.map((movie,idx) => <Movie key={idx} movie={movie}/>)}
      </div>

      {/* onClick: Math.floor(screenWidth/100*10) to consider margin div list-container + 30 to take out padding and margin right*/}
      <i className='fas fa-arrow-alt-circle-right button-right' style={{fontSize :'35px', left: (screenWidth -(Math.floor(screenWidth/100*10)+40))}} 
      onClick={()=> {(-movingList<(((listData.data.contents.data.length)*280)-(screenWidth-(Math.floor(screenWidth/100*10))+30))) && setMovingList(movingList-280)}}
      ></i>
       
    </div>
    )
  };

  return (
    <div className="slider-div">
      <p>Loading...</p>
    </div>
  )
}

export default Slider;