import React, { useState, useEffect } from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import ShareButton from '../components/ShareButton';
import ConfirmationModal from "./ConfirmationModal";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://mern-blog-yiff.onrender.com/api/posts/");
        if (!response.ok) {
          throw new Error("Failed to fetch Blog Post");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

   // Open the confirmation modal
   const handleDeleteClick = (id) => {
    setPostToDelete(id);
    setIsModalOpen(true);
  };



   // Confirm delete action
   const confirmDelete = () => {
    fetch(`https://mern-blog-yiff.onrender.com/api/posts/${postToDelete}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPosts(posts.filter((post) => post._id !== postToDelete));
          alert("Post deleted successfully!");
        } else {
          throw new Error("Failed to delete post");
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        alert("Failed to delete the post. Please try again.");
      })
      .finally(() => {
        setIsModalOpen(false);
        setPostToDelete(null);
      });
  };


   // Cancel delete action
   const cancelDelete = () => {
    setIsModalOpen(false);
    setPostToDelete(null);
  };



  
  return (
    <section className='posts'>
      <div className='posts_container'>
        {posts.map(({ _id, avatar, title, description, createdAt }) => (
          <article className='post_contain' key={_id}>
              <div className='post_contain_wrapper'>
                
                  <img src={avatar} alt='PostImage' className='post_avatar'/>
                  <p><small>Created at: {new Date(createdAt).toLocaleString()}</small></p>
                  <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                  </div>
                    
                    <div className='down_holder'>
                        <Link to={`/posts/${_id}`}>Read</Link>
                        <ShareButton 
                         post={posts} />
                        <div className='down_right'>
                          <Link to={`/posts/${_id}/edit`}> Edit </Link>
                          <Link onClick={() => handleDeleteClick(_id)}>Delete</Link>
                        </div>
                    </div>
                
              </div>
                 {/* Confirmation Modal */}
                <ConfirmationModal
                  isOpen={isModalOpen}
                  onConfirm={confirmDelete}
                  onCancel={cancelDelete}
                />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Posts;