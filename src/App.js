import React from 'react';
import './App.css';
import Body from './components/Body';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Sign from './components/Sign';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route  path="sign" element={ <Sign /> } />
      </Routes>
     
      <Body />
    </>
  );
}

export default App;



