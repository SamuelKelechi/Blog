import React,{useState, useRef} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '../App.css'
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");
  const [avatar, setAvatar] = useState(null); // File for the avatar
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const handleStoryChange = (value) => {
    setStory(value); // Update the editor content in state
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("story", story); // Append the content from ReactQuill
    formData.append("image", avatar); // Append the selected image file

    try {
      setLoading(true); // Show loading state while request is in progress
      const response = await fetch("https://mern-blog-yiff.onrender.com/api/posts", {
        method: "POST",
        body: formData, // Pass the FormData containing all fields
      });

      const result = await response.json(); // Parse the JSON response
      if (response.ok) {
        setResponseMessage("Post created successfully!");
        console.log(result); // Log or handle the response
        setTitle("");  // Reset title field
        setDescription("");  // Reset description field
        setStory("");  // Reset Quill story field
      } else {
        setResponseMessage("Error: Unable to create post");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error: Unable to create post");
    } finally {
      setLoading(false); // Hide loading state
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
        <h1 style={{marginBottom:'-10px'}}>Welcome Admin</h1>
        <p style={{fontSize:'22px'}}>Create Blog Story</p>
      {responseMessage && <p style={{color:'green'}}>{responseMessage}</p>}

        <form className='Post_Form' onSubmit={handleSubmit}> 
          <input type='text' placeholder='Title of Blog' value={title}
          onChange={(e) => setTitle(e.target.value)}
          required autoFocus/>
        
          <input type='text' placeholder='Short Story Description. Max 150 Characters' value={description}
          onChange={(e) => setDescription(e.target.value)}
          required maxlength="150"/>  
          
          <ReactQuill modules={modules} formats={formats}  value={story}
          onChange={handleStoryChange}
          required placeholder="Write Your Blog Story Here..." className='ql_editor'/>
          
          <input type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])} // Capture the selected file
          required/>
          <div>
             <button type="submit">Publish</button>
             
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default CreatePost