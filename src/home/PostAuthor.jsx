import React from 'react'
import { Link } from 'react-router-dom'
import Avat from '../assets/logo.png'

const PostAuthor = () => {
  return (
    <>
        <Link to={`/posts/users/hvcjds`}>
            <div >
                <img src={Avat} alt='avatar' style={{width:'30px'}}/>
            </div>
        </Link>
    </>
  )
}

export default PostAuthor