import React, {useState, useEffect} from 'react';
import {postTrailer} from '../../services/api-calls';


function Trailer(){

  useEffect(()=>{
    const path = window.location.pathname;
    const movieId = path.replace (/(\/trailer\/)/, "");
    console.log(movieId);
    postTrailer(movieId).then(res=>setTrailerUrl(res.data.stream_infos[0].url))
  }, [window.location.pathname])

  const [trailerUrl, setTrailerUrl] = useState('')

  if (trailerUrl) {
    return(
      <div>
        <video controls autoPlay> 
          <source 
            src={trailerUrl} 
            type="video/mp4"/>
        </video>
      </div>
  )};

  return (
    <div>
      <p>Loading</p>
    </div>
  )
}

export default Trailer; 