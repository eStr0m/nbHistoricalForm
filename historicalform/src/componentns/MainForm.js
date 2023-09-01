import React, { useState } from 'react';

export default function MainForm() {
  const [formData, setFormData] = useState({
    timeperiod: '',
    fname: '',
    lname: '',
    phone: '',
    email: '',
    pcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form-cont" onSubmit={handleSubmit}>

      <div className=''>
        <label className="form-label tp-head">Tidsperiode</label>
        
        <label className="form-label tp"> Antikken
          <input 
            className="form-input radio"
            id="timeperiod"
            name="timeperiod"
            type="radio"
            value="Antikken"
            checked={formData.timeperiod === "Antikken"}
            onChange={handleChange}
          ></input>
        </label>
        
        <label className="form-label tp"> Tidlig Middelalder
          <input 
            className="form-input radio"
            id="timeperiod"
            name="timeperiod"
            type="radio"
            value="Tidlig Middelalder"
            checked={formData.timeperiod === "Tidlig Middelalder"}
            onChange={handleChange}
          ></input>
        </label>
        
        <label className="form-label tp"> Høymiddelalder
          <input 
            className="form-input radio"
            id="timeperiod"
            name="timeperiod"
            type="radio"
            value="Høymiddelalder"
            checked={formData.timeperiod === "Høymiddelalder"}
            onChange={handleChange}
          ></input>
        </label>
        
        <label className="form-label tp"> Senmiddelalder
          <input 
            className="form-input radio"
            id="timeperiod"
            name="timeperiod"
            type="radio"
            value="Senmiddelalder"
            checked={formData.timeperiod === "Senmiddelalder"}
            onChange={handleChange}
          ></input>
        </label>
      </div>


      <label className="form-label" for="fname">Fornavn</label>
      <input 
        className="form-input"
        id="fname"
        name="fname"
        type="text"
        placeholder="Ola"
        value={formData.fname}
        onChange={handleChange}
      ></input>

      <label className="form-label" for="lname">Etternavn</label>
      <input 
        className="form-input"
        id="lname"
        name="lname"
        type="text"
        placeholder="Normann"
        value={formData.lname}
        onChange={handleChange}
      ></input>

      <label className="form-label" for="phone">Mobil</label>
      <input 
        className="form-input"
        id="phone"
        name="phone"
        type="tel"
        placeholder="99988777"
        value={formData.phone}
        onChange={handleChange}
      ></input>

      <label className="form-label" for="email">Epost</label>
      <input 
        className="form-input"
        id="email"
        name="email"
        type="email"
        placeholder="epost@mail.no"
        value={formData.email}
        onChange={handleChange}
      ></input>

      <label className="form-label" for="pcode">Postnummer</label>
      <input 
        className="form-input"
        id="pcode"
        name="pcode"
        type="number"
        placeholder="9900"
        value={formData.pcode}
        onChange={handleChange}
      ></input>     
              
      <button type="submit">Submit</button>
    </form>
  );
};
