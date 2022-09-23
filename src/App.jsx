import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Nav from './components/Nav';
import PokemonSearch from './components/PokemonSearch';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
       <Nav />
       <Routes> 
        <Route path="/" element={ <PokemonList />} />
        <Route path="/search" element={ <PokemonSearch />} /> 
      </Routes>
    </Router>
  );
}

export default App;
