import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '../App.css'

const EditPost = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState(null);




  // Fetch the post data by ID
  useEffect(() => {
    fetch(`https://mern-blog-yiff.onrender.com/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setStory(data.story);
        setImage(data.avatar); // Handle the image URL
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  // Handle form submission to update the post
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("story", story);
    if (image instanceof File) {
      formData.append("avatar", image); // Use "avatar" since the backend expects it
    }

    try {
      const response = await fetch(
        `https://mern-blog-yiff.onrender.com/api/posts/${id}`,
        {
          method: "PATCH", // Use PATCH instead of PUT
          body: formData,
        }
      );
  
      if (response.ok) {
        alert("Post updated successfully!");
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        throw new Error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update the post. Please try again.");
    }
  };

  const modules = { 
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list':'bullet'}, {'indent':'-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 
    'link', 'image'
  ]


  return (
    <div className='Create_Post_Contain'>
      <div className='Create_Post_Wwrapper'>
        <h2>Edit Post</h2>
        <form className='Post_Form' onSubmit={handleSubmit} encType="multipart/form-data"> 
          <input type='text'  value={title}
            onChange={(e) => setTitle(e.target.value)}
            required autoFocus/>
    
          <input type='text'  value={description}
            onChange={(e) => setDescription(e.target.value)}
            required />  
          
          <ReactQuill modules={modules} formats={formats} value={story} onChange={setStory} required className='ql_editor'/>
          
          {/* <input type='file'  accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}/> */}
          <div>
             <button type="submit">Update Post</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPost