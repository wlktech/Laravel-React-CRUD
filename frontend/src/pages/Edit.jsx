import React, { useEffect, useState } from 'react'
import http from '../http';
import { useNavigate, useParams } from 'react-router-dom';


export const Edit = (props) => {
  const vavigate = useNavigate();
  const[inputs, setInputs] = useState({});
  // const[users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    fetchUser();
  }, []);

  const fetchUser = () =>{
    http.get('/users/'+id+'/edit').then((res)=>{
      setInputs({
        name:res.data.name,
        email:res.data.email,
      });
    })
  }

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }

  const submitForm = () =>{
    http.put('/users/'+id, inputs).then((res)=>{
      vavigate('/');
    })
  }

  return (
    <div className='container'>
      
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
        <h3 className='mb-4'>Edit User</h3>
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
          
          <div className="mb-3 text-end">
            <button onClick={submitForm} className="btn btn-info" type='submit'>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}
