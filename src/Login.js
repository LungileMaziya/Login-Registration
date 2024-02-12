import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios';



 function Login() {

  const [values, setValues] =useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput=(Event) => {
     setValues(prev => ({...prev, [Event.target.name]: [Event.target.value]}))
  }

  const handleSubmit=(Event)=>{
    Event.preventDefault();
    setErrors(Validation(values))
    if(errors.email===""  && errors.password===""){
      axios.post('http://localhost:8081/login',values)
      .then(res=>{
        if(res.data==="Success") 
        navigate('/home');
        else
        alert("no record existed")
      })
      .catch(err =>console.log(err));
    }
    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlfor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email'
                onChange={handleInput} className='form-control rounded-0'></input>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>

            <div className='mb-3'>
                <label htmlfor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password'
                onChange={handleInput} className='form-control rounded-0'></input>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            
            <button type='submit' className='btn btn-success w-100'><strong>Log In</strong></button>
            <p>You agree to our terms and policies</p>
            < Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none'>Creat Account</Link>

        </form>
      </div>
    </div>
  )
}
export default Login;