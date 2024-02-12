import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';

 function Signup() {

  const [values, setValues] =useState({
    name:'',
    surname:'',
    email:'',
    password:''

  })

  const [errors, setErrors] = useState({})
  const navigate=useNavigate();
  
  const handleInput=(Event) => {
     setValues(prev => ({...prev, [Event.target.name]: [Event.target.value]}))
  }

  const handleSubmit=(Event)=>{
    Event.preventDefault();
    setErrors(Validation(values))
      if(errors.name==="" && errors.email===""  && errors.password==="" && errors.surname==="" ){
        axios.post('http://localhost:8081/signup',values)
        .then(res=>{
           navigate('/');
        })
        .catch(err =>console.log(err));
      }

    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlfor="name"><strong>Name</strong></label>
                <input type="text" placeholder='Enter Name' name='name'
                onChange={handleInput}  className='form-control rounded-0'></input>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>

            <div className='mb-3'>
                <label htmlfor="surname"><strong>Surname</strong></label>
                <input type="text" placeholder='Enter Surname' name='surname'
                onChange={handleInput}  className='form-control rounded-0'></input>
                {errors.surname && <span className='text-danger'>{errors.surname}</span>}
            </div>

            <div className='mb-3'>
                <label htmlfor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email' 
                 onChange={handleInput}  className='form-control rounded-0'></input>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>

            <div className='mb-3'>
                <label htmlfor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password'
                 onChange={handleInput}  className='form-control rounded-0'></input>
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>

          
            
            <button type='submit' className='btn btn-success w-100'><strong>Sign Up</strong></button>
            <p>You agree to our terms and policies</p>
            < Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>

        </form>
      </div>
    </div>
  )
}
export default Signup;