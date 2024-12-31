import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  

  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <div className='Form_Container'>
      <div className='Form_Container_Wrapper'>
        <h2>SignUp</h2>
        <form className='Form_Contain'>
          <p>Invalid Login Data</p>
          <input type='text' placeholder='Name' name='name' value={userData.name} onChange={changeInputHandle} />
          <input type='text' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} />
          <input type='password' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} />
          <input type='password' placeholder='Confirm Password' name='password2' value={userData.password} onChange={changeInputHandle} />
          <button>SignUp</button>
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link> </p>
      </div>
    </div>
  )
}

export default SignUp