import React, { useState } from 'react';

export default function CustomController({ field, errors, label, type, placeholder }) {
  const hasError = !!errors;
  console.log(errors)
  return (
    <div className={`input-cont${hasError ? ' has-error' : ''}`}>
      <label htmlFor={field.name}>{label}</label>
      <p className='error-message'>{errors?.message}</p>
      <span className='error-symbol' style={{ display: hasError ? "grid" : "none" }}>!</span>
      <input
        {...field}
        id={field.name}
        type={type}
        placeholder={placeholder}
        style={{ boxShadow: `var(--shadow-${hasError ? "error" : "input"})` }}
      />
    </div>
  );
}