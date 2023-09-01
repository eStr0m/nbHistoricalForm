import axios from "axios";
import {Component, useEffect, useState } from 'react';


import logoText from './images/NB-Case-logoText.png';
import logoImg from './images/NB-Case-logoImg.png';




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
      <main className="hero-cont">
        {/* <button onClick={testFetch}></button> */}
        <img src={logoText} alt='text: Historical Form'></img>
        <img src={logoImg} alt='text: Historical Form'></img>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel diam tortor. Aliquam urna est, dapibus eu risus sed, auctor placerat enim. Nulla semper nulla massa. In eleifend, velit vel bibendum feugiat, nunc ex ultricies mauris, eget congue massa felis quis ante.</h4>
      </main>
      <aside className="form-cont">
        <form>
          <h2>Antikkens Hellas eller Nordisk høymiddelalder?</h2>
          <h3>Gi oss en kort tilbakemelding på hvor din interesse ligger. Bare svar på et par spørsmål!</h3>
          <label></label>
          <input></input>
        </form>
      </aside>
    </body>
  );
}

export default App;
