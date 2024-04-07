import React from 'react';
import CardTrilha from './components/CardTrilha';
import './App.css';
import useFetch from './hooks/useFetch';
import Header from './components/header';
const App = () => {


  // const listaTrilhas = [
  //   {
  //     nomeTrilha: "Trilha da Costa da Lagoa",
  //     cidade: "Florianópolis",
  //     estado: "SC",
  //     duracao: "120",
  //     trajeto: "4",
  //     dificuldade: "iniciante",
  //     tipo: "caminhada / trakkking",
  //     nomeUsuario: "Alana",
  //     urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   }
  // ];
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
