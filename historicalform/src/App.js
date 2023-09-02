import axios from "axios";
import {Component, useEffect, useState } from 'react';
import logo from "./images/NB-Case-logo.svg"

import MainForm from "./components/MainForm.js";


function App() {

  const [abc, setAbc] = useState("")
 

  useEffect( () => {
    axios.get("http://localhost:3000/abc")
      .then(response => {
        console.log(response.data.status);
        setAbc(response.data.status)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);




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
        </section>

        <section className="form-cont flex-cen-col">
          <MainForm/>
        </section>
      </main>

      

      <span className="deco-stripe blue b-1"></span>
      <span className="deco-stripe yellow y-1"></span>
      <span className="deco-stripe blue b-2"></span>
    </div>
  );
}

export default App;
