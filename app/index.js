import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import NavBar from './components/NavBar/NavBar';
import MovieLists from './components/MovieLists/MovieLists';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Trailer from './components/Trailer/Trailer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieTitleContext from './reactContext/movieTitle';
import ErrorBoundary from './utilities/ErrorBoundary';
import './index.css';

function App (){

  const [movieTitleContext, setMovieTitleContext] = useState("");
  const value = { movieTitleContext, setMovieTitleContext };

  return(
    <div>
      <MovieTitleContext.Provider value={value}>
        <ErrorBoundary>
          <NavBar/>
          <Router>
            <Route exact path="/"
            component={MovieLists}/>
            <Route path="/movie/:movieId"
              component={MovieDetails}/>
            <Route path="/trailer/:movieId"
              component={Trailer}/>        
          </Router>         
        </ErrorBoundary>
      </MovieTitleContext.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
