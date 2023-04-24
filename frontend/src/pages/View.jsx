import React, { useEffect, useState } from 'react'
import http from '../http';
import { useNavigate, useParams } from 'react-router-dom';


export const View = (props) => {
  const[inputs, setInputs] = useState({});
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

  return (
    <div className='container'>
      
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card p-5">
            <h3 className='mb-4'>User Detail</h3>
            <h4>Name</h4>
            <p>{ inputs.name }</p>
            <h4>Email Address</h4>
            <p>{ inputs.email }</p>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
