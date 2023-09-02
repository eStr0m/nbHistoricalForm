import React, { useState } from 'react';

export default function MainForm() {
  const [formPage, setFormPage] = useState(1)
  const [formData, setFormData] = useState({
    timeperiod: '',
    fname: '',
    lname: '',
    phone: '',
    email: '',
    pcode: ''
  });



  function formPageSelect() {
    
    setFormPage(prev => {
      console.log("New Form Page: ", formPage)
      if(prev === 1) {
        return (2)
      }
      if(prev === 2) {
        return (1)
      }
    })
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form className="flex-cen-col" onSubmit={handleSubmit}>

      <div className="form-page page-1" style={{display:`${formPage === 1 ? "flex" : "none"}`}}>
        <label className="radio-head">Tidsperiode:</label>
        <div>
          <label className="label-radio"> 
            <input 
              className="radio"
              id="timeperiod"
              name="timeperiod"
              type="radio"
              value="Antikken"
              checked={formData.timeperiod === "Antikken"}
              onChange={handleChange}
            ></input>
            Antikken
          </label>
          
          <label className="label-radio"> 
            <input 
              className="radio"
              id="timeperiod"
              name="timeperiod"
              type="radio"
              value="Tidlig Middelalder"
              checked={formData.timeperiod === "Tidlig Middelalder"}
              onChange={handleChange}
            ></input>
            Tidlig Middelalder
          </label>
          
          <label className="label-radio">
            <input 
              className="radio"
              id="timeperiod"
              name="timeperiod"
              type="radio"
              value="Høymiddelalder"
              checked={formData.timeperiod === "Høymiddelalder"}
              onChange={handleChange}
            ></input>
            Høymiddelalder
          </label>
          
          <label className="label-radio"> 
            <input 
              className="radio"
              id="timeperiod"
              name="timeperiod"
              type="radio"
              value="Senmiddelalder"
              checked={formData.timeperiod === "Senmiddelalder"}
              onChange={handleChange}
            ></input>
            Senmiddelalder
          </label>
        </div>
      </div>

      <div className="form-page page-2" style={{display:`${formPage === 2 ? "flex" : "none"}`}}>
        <label for="fname">Fornavn</label>
        <input 
          id="fname"
          name="fname"
          type="text"
          placeholder="Ola"
          value={formData.fname}
          onChange={handleChange}
        ></input>

        <label for="lname">Etternavn</label>
        <input 
          id="lname"
          name="lname"
          type="text"
          placeholder="Normann"
          value={formData.lname}
          onChange={handleChange}
        ></input>

        <label for="phone">Mobil</label>
        <input 
          id="phone"
          name="phone"
          type="tel"
          placeholder="99988777"
          value={formData.phone}
          onChange={handleChange}
        ></input>

        <label for="email">Epost</label>
        <input 
          id="email"
          name="email"
          type="email"
          placeholder="epost@mail.no"
          value={formData.email}
          onChange={handleChange}
        ></input>

        <label for="pcode">Postnummer</label>
        <input 
          id="pcode"
          name="pcode"
          type="number"
          placeholder="9900"
          value={formData.pcode}
          onChange={handleChange}
        ></input>     
      </div>

      <div className="form-btn-cont">
        <div className ="button btn-page btn-next" onClick={formPageSelect} style={{display:`${formPage === 1 ? "grid" : "none"}`}}>neste side</div>
        <div className ="button btn-page btn-prev" onClick={formPageSelect} style={{display:`${formPage === 2 ? "grid" : "none"}`}}>tilbake</div>
        <button className ="button btn-submit"type="submit" style={{display:`${formPage === 2 ? "grid" : "none"}`}}>send inn</button>
      </div>
    </form>
  );
};
 