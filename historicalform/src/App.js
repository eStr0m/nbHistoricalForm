import axios from "axios";
import {Component, useEffect, useState } from 'react';
import logo from "./images/NB-Case-logo.svg"

import MainForm from "./components/MainForm.js";


export default function App() {
  const[didSend, setDidSend] = useState(false)

  useEffect( () => {
    axios.get("http://localhost:3000/test")
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  function CheckIfSent(mailDidSend) {
    if(mailDidSend){
      setDidSend(true)
    };

  };


  return (
    <div className="body flex-cen-col">
      <header>
        <img className="header-logo" src={logo} alt="logo for Historical Form"></img>
      </header>

      <main className="flex-cen-col">
        <section className="main-txt-cont flex-cen-col">
          <h1>Antikkens Hellas eller Nordisk høymiddelalder?</h1>
          <p>Gi oss en kort tilbakemelding på hvor din interesse ligger. 
            <br></br>
            Bare svar på et par spårsmål!
          </p>
          {didSend && <p className="submit-confirmation">Takk for at du tok deg tid til å svare!</p>}
        </section>

        <section className="form-cont flex-cen-col">
          <MainForm handleIfSent={CheckIfSent}/>
        </section>
      </main>

      <span className="deco-stripe blue b-1"></span>
      <span className="deco-stripe yellow y-1"></span>
      <span className="deco-stripe blue b-2"></span>
    </div>
  );
};