import React, { useState } from 'react'
import http from '../http';
import { useNavigate } from 'react-router-dom';


export const Create = () => {
  const vavigate = useNavigate();
  const[inputs, setInputs] = useState({});
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }

  const submitForm = () =>{
    http.post('/users', inputs).then((res)=>{
      vavigate('/');
    })
  }

  return (
    <div className='container'>
      
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
        <h3 className='mb-4'>New User</h3>
          <div className="my-3">
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' placeholder='Enter Name' 
            value={inputs.name || ''} 
            onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Email Address</label>
            <input type="email" className="form-control" name='email' placeholder='Enter Email'
            value={inputs.email || ''} 
            onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-lable">Password</label>
            <input type="password" className="form-control" name='password' placeholder='Enter Password'
            value={inputs.password || ''} 
            onChange={handleChange}
            />
          </div>
          <div className="mb-3 text-end">
            <button onClick={submitForm} className="btn btn-info" type='submit'>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}
