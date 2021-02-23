input[type = "text"], input[type = "email"], input[type = "password"] {
    width: 100 %;
    height: 44px;
    border: 1px solid ${ ({ theme }) => theme.colors.darkShade[10] };
    box - sizing: border - box;
    border - radius: 4px;
    margin - bottom: 2 %;
    font - size: 22px;
}
textarea {
    border: 1px solid ${ ({ theme }) => theme.colors.darkShade[10] };
    border - radius: 4px;
}
label {
    font - size: 12px;
    font - weight: bold;
    line - height: 15px;
    text - transform: uppercase;
    margin - bottom: 20
    color: #1F2041;
}
`
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



function MailingList() {
 
 
 const mailingListSchema = yup.object().shape({
    email: yup.string().email('email is not valid').required('you must enter a email'),
    name: yup.string().required('password is required').min(2, 'name must be a a longer than two letters')
  });


  const { register, handleSubmit,  errors } = useForm({  resolver: yupResolver(schema),});
  const onSubmit = data => { console.log(data) }

  return (

      <form onSubmit={handleSubmit(onSubmit)}>
          <label> Name </label>
          <input type="text" name="name"   ref={register} />
          <p> {errors.name && errors.name.message } </p>
          <label> Email </label>
          <input type="text" name="email"  ref={register} />
          <p>{errors.email && errors.email.message }</p>
          <input type="submit" />
      </form>);
}

export default  MailingList;



