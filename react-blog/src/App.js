// Import des librairies

import React, { Component } from 'react';
import {Router, Route} from 'react-router';

// il evite de perdre notre historique lors du retour de la page précedente
import createHistory from 'history/createBrowserHistory';

// Import des css
import './App.css';

// Import des custom components
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Content from './components/Content.js';

// create est une fonction 
const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div className="App">
        <Route path="/" component={Header}/>
        <Route path="/" component={Nav}/>
        <Route path="/gallery" component={Content}/>
      </div>
      </Router>
    );
  }
}

export default App;
