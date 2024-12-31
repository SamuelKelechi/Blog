import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Login = () => {
   const [userData, setUserData] = useState({
      email: '',
      password: ''
    })


    const changeInputHandle = (e) => {
      setUserData(prevState => {
        return {...prevState, [e.target.name]: e.target.value}
      })
    }


  return (
     <div className='Form_Container'>
         <div className='Form_Container_Wrapper'>
           <h2>Login</h2>
           <form className='Form_Contain'>
             <p>Invalid Login Data</p>
             <input type='text' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandle} />
             <input type='password' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} />
             <button>Login</button>
           </form>
           <p>Don't have an account? <Link to='/signup'>SignUp</Link> </p>
         </div>
       </div>
  )
}

export default Login