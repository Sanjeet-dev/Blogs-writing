import { useState, useRef, useEffect } from 'react'
import Row from './components/Row.jsx'
import './App.css'

function App() {

  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [formData, setFormData] = useState({title: "", content:""});
  const titleRef = useRef();

  useEffect(()=>{
    if(blogs.length && blogs[0].title){
      document.title = blogs[0].title;
    }
    else{
      document.title = "No Blogs!!";
    }
  },[blogs]);

  useEffect(()=>{
    titleRef.current.focus();
  },[]);

  function handleSubmit(e){
    e.preventDefault()
    setBlogs([{title,content}, ...blogs]);
    console.log(blogs);
    setTitle("");
    setContent("");
    titleRef.current.focus();
    // setContent("");
    // setBlogs([{title:formData.title, content:formData.content}, ...blogs]);
    // setFormData({title:"", content:""});
  }
  function removeBlog(rm_index){
    setBlogs(blogs.filter((blog,index)=>  index !== rm_index))
  }


  return (
    <>
  <div className='App'>
    <h1>Write a Blog!</h1>
    
    <form onSubmit={handleSubmit}>
    
    <Row label="Title">
      <input type="text"
      placeholder='title goes here...'
      value={title}
      ref={titleRef}
      onChange={(e) => setTitle(e.target.value)}
      // onChange={(e)=> setFormData({title:e.target.value, content:formData.content})}
      />
    </Row>
    
    <Row label="Content">
    <textarea
    placeholder='content goes here..'
    value={content}
    onChange={(e)=> setContent(e.target.value)}
    // onChange={(e) => setFormData({title:formData.title, content:e.target.value})}
    >{content}</textarea>
    
    </Row>
    < br/>
    <button className="add">ADD</button>
    </form>

    </div>
    <h2>Blogs</h2>
  
  {blogs.map((blog, i)=>(
    <div className="blog" key={i}>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>

      <button className="delete"
        onClick={()=> removeBlog(i)}
      >
        DELETE
        </button>
    </div>
     ))}
    </>
  )
}

export default App
