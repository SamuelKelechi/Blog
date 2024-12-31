import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '../App.css'

const EditPost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('uncategorized')
  const [description, setDescription] = useState('')
  const [story, setStory] = useState('')
  const [avatar, setAvatar] = useState('')

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

  const Post_Categories = ["Education", "Politics", "Business", "Agriculture", "Entertainment", "Art", "Investment",  "Weather", "Uncategorized"]

  return (
    <div className='Create_Post_Contain'>
      <div className='Create_Post_Wwrapper'>
        <h2>Edit Post</h2>
        <form className='Post_Form'> 
          <input type='text' value={title} placeholder='Title of Blog' onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name='category' value={category} onChange={e => setCategory(e.target.value)}>
            {
              Post_Categories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>
          <input type='text' value={description} placeholder='Short Story Description' onChange={e => setDescription(e.target.value)} />  
          <ReactQuill modules={modules} formats={formats} value={story} onChange={setStory} className='ql_editor'/>
          
          <input type='file' onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
          <div>
             <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPost