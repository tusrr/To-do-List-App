import './App.css';
import {useState} from 'react';
 import { Task } from './Task';

function App() {

  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]= useState("");

    //to do list is an arr of obj..so that we pass id 

 

  const handleChange= (event)=>{
    setNewTask(event.target.value);
    };

    const addTask =()=>{
      //task obj
      const task={
        id:todoList.length===0 ? 1 : todoList[todoList.length - 1 ].id+1,
        taskName:newTask,
        completed:false

      }
      setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    };

    const deleteTask = (id) =>{

        setTodoList(todoList.filter((task)=> task.id !== id));
    }

    const completeTask = (id) =>{

      setTodoList(
        todoList.map((task)=>{
          if(task.id === id){
            return {...task,completed:true};
          }else{
            return task;
          }
        })
      )

    }
  
  return (
 <div className="App"> 


  <div  className="addTask">
        <input placeholder='Enter your tasks for the day!' onChange={handleChange}/>
        &nbsp;
        &nbsp;
        <button onClick={addTask}>Add Task</button>
    </div>

        <div  className="list">
         {todoList.map((task) =>{
           return(
            <Task 
            taskName={task.taskName}
            id={task.id} 
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}/>);
          })}
         </div> 


  
  </div> 
  ); 
}
export default App;
