import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Trailer from './components/Trailer/Trailer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieTitleContext from './reactContext/movieTitle';
import './index.css';

function App (){

  const [movieTitleContext, setMovieTitleContext] = useState("");
  const value = { movieTitleContext, setMovieTitleContext };

  return(
    // style for slidercss
    <div>
      <MovieTitleContext.Provider value={value}>


        <NavBar />
        <Router>
          <Route exact path="/"
          component={Movies}/>
          <Route path="/movie/:movieId"
            component={MovieDetails}/>
          <Route path="/trailer/:movieId"
            component={Trailer}/>        
        </Router>

      </MovieTitleContext.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
