import React, { useState } from 'react'
import uuid from 'react-uuid';


function Input({todos,setTodos}) {
    
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")
  return (
    <div>
        <form onSubmit={(event)=>{
        event.preventDefault();
        const newTodos = {
          id:uuid(),
          title,
          contents,
          isDone:false
        }
      setTodos([...todos,newTodos])}} 
      >
        <input type='text' placeholder='제목입력' value={title} onChange={(event)=>{
          setTitle(event.target.value)
        }}/>
        <input type='text' placeholder='내용입력' value={contents} onChange={(event)=>{
          setContents(event.target.value)
        }}/>
        <button>추가하기</button>
      </form>
      </div>
  )
}

export default Input