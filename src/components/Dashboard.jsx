import React, { useState } from 'react'
import {Dummy_Posts} from '../components/data.js'
import { Link } from 'react-router-dom'
import '../App.css'

const Dashboard = () => {
    const [posts, setPosts] = useState(Dummy_Posts)

  return (
    <div className='Dashboard_Container'>
      {
        posts.length ? <div className='Dashboard_Wrapper'>
          {
            posts.map(post => {
              return <div key={post.id} className='Dashboard_Card'>
                <div style={{display:'flex', alignItems:'center'}}>
                  <div>
                    <img src={post.avatar} style={{width:'30px'}}/>
                  </div> 
                  <h5>{post.title}</h5>
                </div>
                <div style={{display:'flex', width:'200px', justifyContent:'space-between'}}>
                  <Link to={`/posts/${post.id}`}>View</Link>
                  <Link to='posts/:id/edit'>Edit</Link>
                  <Link to={`/posts/${post.id}`}>Delete</Link>
                </div> 
              </div>
            })
          }
        </div> : <h2>You have no Post Yet</h2>
      }

    </div>
  )
}

export default Dashboard