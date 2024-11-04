import React, { useState } from 'react';
import '../App.css'
import Axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {

        const [name, setname] = useState("");
        const [email, setEmail] = useState("");
        const [regno, setRegno] = useState("");
        const [password, setPassword] = useState("")
      
 
    const navigate = useNavigate()
    Axios.defaults.withCredentials =true;

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3000/auth/Signup', {
      name,
      regno,
      email,
      password
    }).then(response => {
        if(response.data.status) navigate('/login');
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="name">name:</label>
        <input type="text" placeholder='Student name'
          onChange={(e) => setname(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" autoComplete='off' placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="regNO">RegNo</label>
        <input type="regno" autoComplete='off' placeholder='Registration Number'
          onChange={(e) => setRegno(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='******'
          onChange={(e) => setPassword(e.target.value)} />

        <button type='submit'>Sign Up</button>
        <p>Have an Account <Link to='/login'><button className='login'>Login</button></Link></p>
        
      </form>


    </div>
  )
}

export default Signup
