import React from 'react';
import CardTrilha from './components/CardTrilha';
import './App.css';
import useFetch from './hooks/useFetch';
import Header from './components/header';
const App = () => {



  return (
    <>
      <Header />
      <div className="container">
        <h1 className="titulo">Explore trilhas incríveis</h1>
        <CardTrilha />

      </div>
    </>
  )
}

export default App;
