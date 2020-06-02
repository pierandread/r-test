import React, {useState, useEffect, useContext} from 'react';
import {getMovie} from '../../services/api-calls';
import { Link } from "react-router-dom";
import './movieDetails.css';
import convertTime from '../../utilities/convertTime';
import MovieTitleContext from '../../reactContext/movieTitle';

function MovieDetails () {

  useEffect(()=>{
    const path = window.location.pathname;
    const movieIdDisposable = path.replace (/(\/movie\/)/, "");
    setMovieId(movieIdDisposable);
    getMovie(movieIdDisposable).then(res => setMovie(res));
  }, [window.location.pathname])

  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('');
  const [plot, setPlot] = useState('');
  const [duration, setDuration] = useState('');
  const [genres, setGenres] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [movieId, setMovieId] = useState('');

  const {setMovieTitleContext}  = useContext(MovieTitleContext);

  let settingDetails = false; 

  if(movie && !settingDetails) {
    !title && setTitle(movie.data.title);
    !plot && setPlot(movie.data.short_plot);
    !year && setYear(movie.data.year);
    !duration && setDuration(movie.data.duration);
    if(!genres) {
      let genresArray=[]; 
      let genresObj=movie.data.genres; 
      for (let genre of genresObj){genresArray.push(genre.name)}; 
      setGenres(genresArray)
    };
    !backgroundImage && setBackgroundImage(movie.data.images.snapshot);
    settingDetails = true;
    setMovieTitleContext(movie.data.title)
  };

  if (movie && settingDetails) {
    return (
      <div>
        <div className='banner' style={{backgroundImage:`url(${backgroundImage})`}}>
          <h1 className='title'>{title}</h1>
        </div>
        <div className='infos-text-movie'>
          <div className='short-info-collection'>
            <div className='short-info'>
              <p><span className='bold'>Year:</span> {year}</p>
            </div>
            <div className='short-info'>
              <p><span className='bold'>Duration:</span> {convertTime(duration)}</p>
            </div>
            <div className='short-info'>
              {genres && <p className='short-info'><span className='bold'>Genres:</span> {genres.map(((el, idx) => {
                if(idx===genres.length-1) return <span key={idx}> {el}. </span>;
                  return <span key={idx}> {el}, </span>
                  }))}
                </p>}
            </div>
          </div>
          <div>
            <h3>Plot:</h3>
            <p>{plot}</p>
            <div className="trailer-button-div">
              <Link to={"/trailer/" + movieId} >
                <button className='button-trailer' data-testid="trailer-button">
                  Play Trailer.
                </button>
              </Link>
            </div>
          </div>      
        </div>
      </div>
    )
  };

  return(
    <div>
      <p className='banner'>Loading..</p>
      <p className='infos-text-movie'>Loading..</p>
    </div>
  )
}

export default MovieDetails;