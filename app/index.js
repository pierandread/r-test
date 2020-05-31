import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import regeneratorRuntime from "regenerator-runtime";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';

function App (){

  return(
    // style for slidercss
    <div>
      <NavBar />
      <Router>
        <Route exact path="/"
        component={Movies}/>
        <Route path="/movie/:movieId"
          component={MovieDetails}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
