import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const ErrorPage = () => {
  return (
    <div className='Error-Container'>
      ERROR...
      PAGE NOT FOUND 
      <div>
        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage