import React from 'react'
import img from '../assets/logo.png'

const PostDetail = () => {
  return (
    <div>
      <div>
        <div>Left</div>
        <div>Right</div>
      </div>
      <div>
        <img src={img} alt=''/>
        <h4>Title</h4>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default PostDetail