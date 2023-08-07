export const Task=(props)=>{
return(
    <div className='task'
    style={{backgroundColor:props.completed ? "green" : "beige"}}>
   <h1>{props.taskName}</h1>
 <button  onClick={()=>props.completeTask(props.id)}>Complete</button>
 <button className="del" onClick={()=>props.deleteTask(props.id)}>X</button>
 </div> 
 );
}; 