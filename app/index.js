import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import regeneratorRuntime from "regenerator-runtime";
import './index.css';

function App (){

  return(
    <div>
      <NavBar />
      <Movies />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('app'))
