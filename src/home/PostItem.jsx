import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import '../App.css'

const PostItem = ({postID, category, title, description, authorID, avatar}) => {
  return (
    <article className='post_contain'>
        <div className='image_Holder'>
            <img src={avatar} alt='PostImage' className='post_avatar'/>
        </div>
        <div>
            <Link to={`/posts/${postID}`}>
                <h3>{title}</h3>
            </Link>
            <p>{description}</p>
            <div className='down_holder'>
                <PostAuthor />
                <Link to={`/posts/categories/${category}`}>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem