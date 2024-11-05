import React, { useState } from 'react';
import '../pages/login/login.css'
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
        const [regno, setRegno] = useState("");
        const [password, setPassword] = useState("")
      
 
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3000/auth/login', {
      regno,
      password
    }).then(response => {
        if(response.data.status) navigate('/home');
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="RegNo">Registration Number</label>
        <input type="RegNo" autoComplete='off' placeholder='Registration Number'
          onChange={(e) => setRegno(e.target.value)} />

        

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='******'
          onChange={(e) => setPassword(e.target.value)} />

        <Link to="/Dashboard"><button type='submit'>Login</button></Link>
        <p>Don't have an Account <Link to='/Signup'><button className='login'>Signup</button></Link></p>
        
      </form>


    </div>
  )
}

