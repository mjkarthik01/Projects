import React, { useState } from 'react'
import FormInput from './FormInput';
import './Form.css'

export default function Form() {
  
  const[values ,setValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  })

  const inputs =[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3 to 16 characters and should not include any special character!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true
  },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address!",
      label:"Email",
      pattern:"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      required: true
  },
    {
      id:3,
      name:"dob",
      type:"date",
      placeholder:"DOB",
      label:"DOB",
      required: true
  },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8 to 20 characters and it should contain atleast 1 letter, 1 number and 1 special character!",
      label:"Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
  },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Passwords don't match",
      label:"Confirm Password",
      pattern: values.password,
      required: true
  }
]
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value})
  }
console.log(values);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
      {inputs.map((input)=>(
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
      ))}
        
        <button>Submit</button>
      </form>
    </div>
  );
}
