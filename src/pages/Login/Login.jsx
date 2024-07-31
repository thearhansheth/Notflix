import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/NotflixLogo.png'

const Login = () => {
  const [signState, setSignState] = useState("Log In")


  return (
    <div className='login'>
      <img src={logo} alt="" className='loginLogo'/>
      <div className='loginForm'>
        <h1>{signState}</h1>
        <form>
          {signState==='Sign Up'?<input type='text' placeholder='Name'></input>:<></>}
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <button>{signState}</button>
          <div className="formHelp">
            <div className="remember">
              <input type='checkbox'/>
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="newForm">
          {signState==='Sign Up'?<p>Already have account? <span onClick={()=>{setSignState('Log In')}}>Log In</span></p>:<p>New to Notflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
