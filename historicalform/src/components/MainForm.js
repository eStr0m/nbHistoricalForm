import React, { useState } from 'react';
import axios from "axios";
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputField from './InputField.js'

export default function MainForm(props) {
  const [formPage, setFormPage] = useState(1)
  const [pageOneError, setPageOneError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [didSend, setDidSend] = useState(false)


  function formPageSelect() {
    setFormPage(prev => {
      const radioFormData = getValues().timeperiod
      if(prev === 2) {
        return (1)
      };
      if(prev === 1 && radioFormData) {
        setPageOneError(false)
        return (2)
      }else {
        setPageOneError(true)
        return (1)
      };      
    })
  };

  const schema = yup.object().shape({
    timeperiod: yup.string().required('Velg en tidsperiode'),
    fname: yup.string().required('Fornavn mangler'),
    lname: yup.string().required('Etternavn mangler'),
    phone: yup.string().matches(/^[49]\d{7}$/, 'Ugyldig mobilnummer').required('Mobilnummer mangler'),
    email: yup.string().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Ugyldig epost').required('Epost mangler'),
    pcode: yup.string().matches(/^\d{4}$/, 'Ugyldig postnummer').required('Postnummer mangler'),
  });

  const { control, handleSubmit, formState: { errors }, getValues, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      timeperiod: '',
      fname: '',
      lname: '',
      phone: '',
      email: '',
      pcode: '',
      applicant: 'Espen',
    }
  });

  const clearFormFields = () => {
    reset({
      timeperiod: '',
      fname: '',
      lname: '',
      phone: '',
      email: '',
      pcode: '',
    });
  };

  // const onSubmit = (formData) => {
  //   console.log("Data submitted... waiting for this to post:", formData)
  //   setLoading(true)
  //   axios.post("https://case.nettbureau.no/submit", formData).then(response => {
  //     console.log("Post response: ", response)
  //     setLoading(false)
  //   })
  //   .catch(error => {
  //     console.log("Post Error!: ", error)
  //     setLoading(false)
  //   })
  // };






  const onSubmit = (formData) => {
    console.log("Data submitted... waiting for this to post:", formData)
    setLoading(true)

    axios.post('http://localhost:3000/submit', formData)
    .then(response => {
      console.log(response.data);
      setLoading(false);
      setDidSend(true);
      clearFormFields();
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
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
              type="string"
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
                value="Espen"
                className="hiddenField"
              />
            </>
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <>
              <label htmlFor="name" className="hiddenField">Hidden Field</label>
              <input
                {...field}
                id="name"
                type="text"
                value="Espen"
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
          {loading ? "sender..." : "send inn"}
        </button>
        {props.handleIfSent(didSend)}
      </div>
    </form>
  );
};
 