import React, { useState } from 'react'
import BlogImg from '../assets/blog3.jpeg'
import PostItem from './PostItem'
import '../App.css'

const Dummy_Posts = [
    {
        id : '1', 
        avatar: BlogImg,
        category: 'education',
        title: 'New Post from the President',
        desc: 'The federal Government has decided to cheat us...',
        authorID: 3
    },
    {
        id : '1',
        avatar: BlogImg,
        category: 'education',
        title: 'New Post from the President',
        desc: 'The federal Government has decided to cheat us...',
        authorID: 3
    },
    {
        id : '1',
        avatar: BlogImg,
        category: 'education',
        title: 'New Post from the President',
        desc: 'The federal Government has decided to cheat us...',
        authorID: 3
    },
    {
        id : '1',
        avatar: BlogImg,
        category: 'education',
        title: 'New Post from the President',
        desc: 'The federal Government has decided to cheat us...',
        authorID: 3
    },

]
const Posts = () => {
    const [posts, setPosts] = useState(Dummy_Posts)
  return (
    <section className='posts'>
        {
            posts.length > 0 ? 
            <div className='posts_container'>
            {
                posts.map(({id, avatar, category, title, desc, authorID}) => 
                <PostItem key={id} postID={id} avatar={avatar} category={category} title={title} description={desc} authorID={authorID}/>)
            }
        </div> : <h2>No Blog Post Found</h2>
        }
    </section>
  )
}

export default Posts