import React from 'react';
import './regis-css.css';

const Register = () => {
  return (
        <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Voyage</span>
            <span className='title'>Register</span>
        </div>
        <form action="">
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email' name="" id="" />
            <input type="password" placeholder='password' name="" id="" />
            <input type="file" />
            <button>Signup</button>
        </form>
    </div>
  )
}

export default Register