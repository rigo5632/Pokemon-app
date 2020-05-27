import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Berries from './components/Berries.js';
import Moves from './components/Moves.js';
import Pokemons from './components/Pokemons.js';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/pokemons' component={ Pokemons }/>
          <Route path='/berries' component={ Berries }/>
          <Route path='/moves' component={ Moves }/>
          <Route path="/pokemons/:name" component={ Pokemon }/>
          <Route path='berries/:name'/>
          <Route path='/moves/:name' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
