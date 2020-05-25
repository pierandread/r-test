import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar'
import './index.css';

class App extends React.Component{
    render(){
        return(
          <div>
            <NavBar />
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
