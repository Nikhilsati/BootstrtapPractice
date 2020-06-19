import React from 'react';
import Header from './component/header/Header';
import Jumbotron from './component/jumbotron/Jumbotron';
import Details  from './component/details/Details';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Jumbotron />
    <Details />
    </div>
  );
}

export default App;
