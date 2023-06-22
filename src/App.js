
import './App.css';
import uuid from 'react-uuid';
import { useState } from 'react';
import Input from './components/Input';


// 삭제 ,  추가 , 그리기 , ui 

function App() {

  const [todos,setTodos] = useState([{
    id:uuid(),
    title:"제목1",
    contents:"내용",
    isDone:false
  },
  {
    id:uuid(),
    title:"제목2",
    contents:"내용",
    isDone:false
  },
  {
    id:uuid(),
    title:"제목3",
    contents:"내용",
    isDone:false
  },
  {
    id:uuid(),
    title:"제목4",
    contents:"내용",
    isDone:false
  }])


 

  

  return (
    <div >
      <header></header>
      <main>
          <Input todos={todos} setTodos={setTodos}/>
        
        <h2>해야할일</h2>
        <div >
          {todos.filter((todo)=>{
            return todo.isDone === false
          }).map((todo)=>{
          return (
            <div  style={{
              border:"1px solid black",
              margin:"10px",
              padding:"10px"
            }}
             key={todo.id}>
              {todo.id}
              {todo.title}
              {todo.contents}
              {todo.isDone.toString()}
              <button onClick={()=>{
               const filterTodos = todos.filter((item)=>{
                  return item.id !== todo.id
                  
                  })
                  setTodos(filterTodos) }}>삭제</button>
              <button onClick={()=>{
                const newTodos = todos.map((item)=>{
                  if(item.id === todo.id){
                    return {
                     ...item, isDone: !item.isDone
                    }
                  } else{
                    return item
                  }
                })
                setTodos(newTodos)
              }}>완료</button>

            </div>
          )
        })}

            <h2>완료한일</h2>
            
            {todos.filter((todo)=>{
            return todo.isDone === true
          }).map((todo)=>{
          return (
            <div  style={{
              border:"1px solid black",
              margin:"10px",
              padding:"10px"
            }}
             key={todo.id}>
              {todo.id}
              {todo.title}
              {todo.contents}
              {todo.isDone.toString()}
              <button onClick={()=>{
               const filterTodos = todos.filter((item)=>{
                  return item.id !== todo.id
                  
                  })
                  setTodos(filterTodos) }}>삭제</button>
              <button onClick={()=>{
                const newTodos = todos.map((item)=>{
                  if(item.id === todo.id){
                    return {
                     ...item, isDone: !item.isDone
                    }
                  } else{
                    return item
                  }
                })
                setTodos(newTodos)
              }}>완료</button>

            </div>
          )
        })}

        

        </div>
      </main>
      
    
    </div>
  );
}

export default App;
