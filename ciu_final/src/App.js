import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Animes from './Components/Animes';
import Buscador from './Components/Buscador';
import Footer from './Components/Footer';

function App() {

  
  const [listaAnimes, setListaanimes] = useState([]);


  const consultarAPI = async (e) =>{
    try{
      e.preventDefault()
      const {animes} = e.target.elements;
      const animesValue = animes.value;
      const api = await fetch(`https://api.jikan.moe/v3/search/anime?q=${animesValue}&order_by=title&sort=asc&limit=10`);
      const res = await api.json();
      setListaanimes(res.results)
      console.log(res.results)

    }catch(error){
      console.log(error)
    }
  }

  return (
    <Fragment>
        <div>
          <Header/>
          <Buscador
            consultarAPI={consultarAPI} />
          <Animes
            listaAnimes = {listaAnimes}/>
          <Footer/>
        </div>
    </Fragment>
  );
}

export default App;
