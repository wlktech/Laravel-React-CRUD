import React, { useEffect, useState } from 'react'
import http from "../http";
import { Link } from 'react-router-dom';

export const Home = () => {
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () =>{
    http.get('/users').then(res=>{
      setUsers(res.data);
    })
  }

  const deleteUser = (id) =>{
    http.delete('/users/'+id).then(res=>{
      fetchAllUsers();
    })
  }


  return (
    <div className='container'>
      <h3>User Listing</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index)=>(
          <tr key={user.id}>
            <td>{++index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link className="btn btn-sm btn-info" to={'/edit/'+user.id}>Edit</Link>
              <Link className="btn btn-sm btn-success mx-2" to={'/view/'+user.id}>View</Link>
              <button className="btn btn-sm btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
