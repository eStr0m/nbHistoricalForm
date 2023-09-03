import React, { useState } from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputField from './InputField.js'

export default function MainForm() {
  const [formPage, setFormPage] = useState(1)
  const [pageOneError, setPageOneError] = useState(false)


  const schema = yup.object().shape({
    timeperiod: yup.string().required('Velg en tidsperiode'),
    fname: yup.string().required('Fornavn mangler'),
    lname: yup.string().required('Etternavn mangler'),
    phone: yup.string().matches(/^[49]\d{7}$/, 'Ugyldig mobilnummer').required('Mobilnummer mangler'),
    email: yup.string().email('Ugyldig epost').required('Epost mangler'),
    pcode: yup.string().matches(/^\d{4}$/, 'Ugyldig postnummer').required('Postnummer mangler'),
  });

  const { control, handleSubmit, formState: { errors }, getValues } = useForm({
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



  function formPageSelect() {
    setFormPage(prev => {
      const radioFormData = getValues().timeperiod
      if(prev === 2) {
        return (1)
      }
      if(prev === 1 && radioFormData) {
        setPageOneError(false)
        return (2)
      }else {
        setPageOneError(true)
        return (1)
      }

      
    })
  }




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
              {pageOneError && <p className='error-message error-radio'>Vennligst velg en tidsperiode</p>}
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
          render={({ field, fieldState: { error } }) => (
            <InputField 
              field={field} 
              errors={error}
              label="Fornavn"
              type="text"
              placeholder="Ola"
            />
          )}
        />

        <Controller
          name="lname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField 
              field={field} 
              errors={error}
              label="Etternavn"
              type="text"
              placeholder="Normann"
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField 
              field={field} 
              errors={error}
              label="Mobil"
              type="tel"
              placeholder="99988777"
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField 
              field={field} 
              errors={error}
              label="Epost"
              type="email"
              placeholder="epost@mail.no"
            />
          )}
        />

        <Controller
          name="pcode"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField 
              field={field} 
              errors={error}
              label="Postnummer"
              type="text"
              placeholder="9900"
            />
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
};
 