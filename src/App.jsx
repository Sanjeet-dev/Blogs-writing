import { useState } from 'react'
import Row from './components/Row.jsx'
import './App.css'

function App() {

  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({title: "", content:""});

  function handleSubmit(e){
    e.preventDefault()
    setBlogs([{title:formData.title, content:formData.content}, ...blogs]);
    setFormData({title:"", content:""});
  }

  return (
    <>
  <div className='App'>
    <form onSubmit={handleSubmit}>
    
    <Row label="Title">
      <input type="text" 
      onChange={(e)=> setFormData({title:e.target.value, content:formData.content})}
      />
    </Row>
    <Row label="Content">
    <textarea
    onChange={(e) => setFormData({title:formData.title, content:e.target.value})}
    ></textarea>
    
    </Row>
    < br/>
    <button className="add">ADD</button>
    </form>
    <h2>Blogs</h2>
  
  {blogs.map((blog, i)=>(
    <div className="blog">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>

      <button>DELETE</button>
    </div>
  ))}

    </div>
    </>
  )
}

export default App
