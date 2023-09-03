import React, { useState } from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import CustomController from './InputField.js'

export default function MainForm() {
  const [formPage, setFormPage] = useState(1)
  const errorClassTrue = ""



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


  const schema = yup.object().shape({
    timeperiod: yup.string().required('Velg en tidsperiode'),
    fname: yup.string().required('Fornavn mangler'),
    lname: yup.string().required('Etternavn mangler'),
    phone: yup.string().matches(/^[49]\d{7}$/, 'Ugyldig mobilnummer').required('Mobilnummer mangler'),
    email: yup.string().email('Ugyldig epost').required('Epost mangler'),
    pcode: yup.number().required('Postnummer mangler'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      timeperiod: '',
      fname: '',
      lname: '',
      phone: '',
      email: '',
      pcode: '',
      applicant:'',
    },
  });





  const onSubmit = (formData) => {
    // Handle form submission here
    console.log("Data submitted... waiting for this to post:", formData)
    // axios.post("https://case.nettbureau.no/submit", formData).then(response => {
    //   console.log("Post response: ", response)
    // })
    // .catch(error => {
    //   console.log("Post Error!: ", error)
    // })
  };

  return (
    <form className="flex-cen-col" onSubmit={handleSubmit(onSubmit)}>

      <div className="form-page page-1" style={{ display: `${formPage === 1 ? "flex" : "none"}` }}>
        <Controller
          name="timeperiod"
          control={control}
          render={({ field }) => (
            <>
              <label className="radio-head">Tidsperiode:</label>
              <div>
                <label className="label-radio">
                  <input
                    {...field}
                    type="radio"
                    value="Antikken"
                    checked={field.value === "Antikken"}
                  />
                  Antikken
                </label>

                <label className="label-radio">
                  <input
                    {...field}
                    type="radio"
                    value="Tidlig Middelalder"
                    checked={field.value === "Tidlig Middelalder"}
                  />
                  Tidlig Middelalder
                </label>

                <label className="label-radio">
                  <input
                    {...field}
                    type="radio"
                    value="Høymiddelalder"
                    checked={field.value === "Høymiddelalder"}
                  />
                  Høymiddelalder
                </label>

                <label className="label-radio">
                  <input
                    {...field}
                    type="radio"
                    value="Senmiddelalder"
                    checked={field.value === "Senmiddelalder"}
                  />
                  Senmiddelalder
                </label>
              </div>
              <p className='error-message'>{errors.timeperiod?.message}</p>
            </>
          )}
        />
      </div>

      <div className="form-page page-2" style={{ display: `${formPage === 2 ? "flex" : "none"}` }}>
        <Controller
          name="fname"
          control={control}
          render={({ field }) => (
            <div className='input-cont'>
              <label htmlFor="fname">Fornavn</label>
              <p className='error-message'>{errors.fname?.message}</p>
              <span className='error-symbol' style={{ display: `${errors.fname ? "grid" : "none"}` }}>!</span>
              <input
                {...field}
                id="fname"
                type="text"
                placeholder="Ola"
                style={{ boxShadow: `var(--shadow-${errors.fname ? "error" : "input"})` }}
              />
            </div>
          )}
        />

        <Controller
          name="lname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CustomController 
              field={field} 
              errors={error}
              label="Etternavn"
              type="text"
              placeholder="Normann"
            />
            // <div className='input-cont'>
            //   <label htmlFor="lname">Etternavn</label>
            //   <p className='error-message'>{errors.lname?.message}</p>
            //   <span className='error-symbol' style={{ display: `${errors.lname ? "grid" : "none"}` }}>!</span>
            //   <input
            //     {...field}
            //     id="lname"
            //     type="text"
            //     placeholder="Normann"
            //     style={{ boxShadow: `var(--shadow-${errors.lname ? "error" : "input"})` }}
            //   />
            // </div>
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div className='input-cont'>
              <label htmlFor="phone">Mobil</label>
              <p className='error-message'>{errors.phone?.message}</p>
              <span className='error-symbol' style={{ display: `${errors.phone ? "grid" : "none"}` }}>!</span>
              <input
                {...field}
                id="phone"
                type="tel"
                placeholder="99988777"
                style={{ boxShadow: `var(--shadow-${errors.phone ? "error" : "input"})` }}
              />
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div className='input-cont'>
              <label htmlFor="email">Epost</label>
              <p className='error-message'>{errors.email?.message}</p>
              <span className='error-symbol' style={{ display: `${errors.email ? "grid" : "none"}` }}>!</span>
              <input
                {...field}
                id="email"
                type="email"
                placeholder="epost@mail.no"
                style={{ boxShadow: `var(--shadow-${errors.email ? "error" : "input"})` }}
              />
            </div>
          )}
        />

        <Controller
          name="pcode"
          control={control}
          render={({ field }) => (
            <div className='input-cont'>
              <label htmlFor="pcode">Postnummer</label>
              <p className='error-message'>{errors.pcode?.message}</p>
              <span className='error-symbol' style={{ display: `${errors.pcode ? "grid" : "none"}` }}>!</span>
              <input
                {...field}
                id="pcode"
                type="number"
                placeholder="9900"
                style={{ boxShadow: `var(--shadow-${errors.pcode ? "error" : "input"})` }}
              />
            </div>
          )}
        />

        <Controller
          name="applicant"
          control={control}
          render={({ field }) => (
            <>
              <label htmlFor="applicant" className="hiddenField">Hidden Field</label>
              <input
                {...field}
                id="applicant"
                type="text"
                value="E Strom Testington"
                className="hiddenField"
              />
            </>
          )}
        />
      </div>

      

      <div className="form-btn-cont">
        <div className ="button btn-page btn-next" 
          onClick={formPageSelect} 
          style={{display:`${formPage === 1 ? "grid" : "none"}`}}>
          neste side
        </div>

        <div className ="button btn-page btn-prev" 
          onClick={formPageSelect} 
          style={{display:`${formPage === 2 ? "grid" : "none"}`}}>
          tilbake
        </div>

        <button className ="button btn-submit"
          type="submit" 
          style={{display:`${formPage === 2 ? "grid" : "none"}`}}>
          send inn
        </button>
      </div>
    </form>
  );


  // Backup code, before testing Yup:
  // return (
  //   <form className="flex-cen-col" onSubmit={handleSubmit}>

  //     <div className="form-page page-1" style={{display:`${formPage === 1 ? "flex" : "none"}`}}>
  //       <label className="radio-head">Tidsperiode:</label>
  //       <div>
  //         <label className="label-radio"> 
  //           <input 
  //             className="radio"
  //             id="timeperiod"
  //             name="timeperiod"
  //             type="radio"
  //             value="Antikken"
  //             checked={formData.timeperiod === "Antikken"}
  //             onChange={handleChange}
  //           ></input>
  //           Antikken
  //         </label>
          
  //         <label className="label-radio"> 
  //           <input 
  //             className="radio"
  //             id="timeperiod"
  //             name="timeperiod"
  //             type="radio"
  //             value="Tidlig Middelalder"
  //             checked={formData.timeperiod === "Tidlig Middelalder"}
  //             onChange={handleChange}
  //           ></input>
  //           Tidlig Middelalder
  //         </label>
          
  //         <label className="label-radio">
  //           <input 
  //             className="radio"
  //             id="timeperiod"
  //             name="timeperiod"
  //             type="radio"
  //             value="Høymiddelalder"
  //             checked={formData.timeperiod === "Høymiddelalder"}
  //             onChange={handleChange}
  //           ></input>
  //           Høymiddelalder
  //         </label>
          
  //         <label className="label-radio"> 
  //           <input 
  //             className="radio"
  //             id="timeperiod"
  //             name="timeperiod"
  //             type="radio"
  //             value="Senmiddelalder"
  //             checked={formData.timeperiod === "Senmiddelalder"}
  //             onChange={handleChange}
  //           ></input>
  //           Senmiddelalder
  //         </label>
  //       </div>
  //     </div>

  //     <div className="form-page page-2" style={{display:`${formPage === 2 ? "flex" : "none"}`}}>
  //       <label for="fname">Fornavn</label>
  //       <input 
  //         id="fname"
  //         name="fname"
  //         type="text"
  //         placeholder="Ola"
  //         value={formData.fname}
  //         onChange={handleChange}
  //       ></input>

  //       <label for="lname">Etternavn</label>
  //       <input 
  //         id="lname"
  //         name="lname"
  //         type="text"
  //         placeholder="Normann"
  //         value={formData.lname}
  //         onChange={handleChange}
  //       ></input>

  //       <label for="phone">Mobil</label>
  //       <input 
  //         id="phone"
  //         name="phone"
  //         type="tel"
  //         placeholder="99988777"
  //         value={formData.phone}
  //         onChange={handleChange}
  //       ></input>

  //       <label for="email">Epost</label>
  //       <input 
  //         id="email"
  //         name="email"
  //         type="email"
  //         placeholder="epost@mail.no"
  //         value={formData.email}
  //         onChange={handleChange}
  //       ></input>

  //       <label for="pcode">Postnummer</label>
  //       <input 
  //         id="pcode"
  //         name="pcode"
  //         type="number"
  //         placeholder="9900"
  //         value={formData.pcode}
  //         onChange={handleChange}
  //       ></input>     
  //     </div>

  //     <div className="form-btn-cont">
  //       <div className ="button btn-page btn-next" 
  //         onClick={formPageSelect} 
  //         style={{display:`${formPage === 1 ? "grid" : "none"}`}}>
  //         neste side
  //       </div>

  //       <div className ="button btn-page btn-prev" 
  //         onClick={formPageSelect} 
  //         style={{display:`${formPage === 2 ? "grid" : "none"}`}}>
  //         tilbake
  //       </div>

  //       <button className ="button btn-submit"
  //         type="submit" 
  //         style={{display:`${formPage === 2 ? "grid" : "none"}`}}>
  //         send inn
  //       </button>
  //     </div>
  //   </form>
  // );
};
 