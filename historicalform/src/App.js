import axios from "axios";
import {Component, useEffect, useState } from 'react';
import logoText from './images/NB-Case-logoText.png';
import logoImg from './images/NB-Case-logoImg.png';

import MainForm from "./componentns/MainForm";


function App() {

const [abc, setAbc] = useState("")
  
  useEffect( () => {
    axios.get('http://localhost:3000/abc')
      .then(response => {
        console.log(response.data.status);
        setAbc(response.data.status)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);




  return (
    <body id="body">
      <headder className="hero-cont">
        <img src={logoText} alt='text: Historical Form'></img>
        <img src={logoImg} alt='text: Historical Form'></img>
        <h1>Antikkens Hellas eller Nordisk høymiddelalder?</h1>
        <p>Gi oss en kort tilbakemelding på hvor din interesse ligger. Bare svar på et par spårsmål!</p>
      </headder>
      <main>
        <MainForm/>
      </main>
    </body>
  );
}

export default App;
