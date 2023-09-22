import React from 'react';
import './regis-css.css';

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Voyage</span>
            <span className='title'>Login</span>
        <form action="">
            <input type="email" placeholder='email' name="" id="" />
            <input type="password" placeholder='password' name="" id="" />
            <button>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login