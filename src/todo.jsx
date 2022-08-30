import { useEffect, useState } from "react";


function Todo(){
    let [task,setTask] = useState([])
    let [input,setInput] = useState("")
    let [edit,setEdit] = useState(-1)

    let AddTask=()=>{
        setTask([...task,input])
    }
    let DeleteTask=(index)=>{
        task.splice(index,1)
        console.log(task)
    }
    let EditTask=(index)=>{
        setEdit(index)
        let i= task[index]
        setInput(i)
        // task.splice(index,1)
    }
    let Save=(index)=>{
        setEdit(-1)
        task.splice(index,1,input)
        // setTask([...task,input])
    }
    // useEffect(()=>{
    //    console.log(task)
    // },[task,input])
    return(
        <>
            <div className="App">
            <h1>TODO List</h1>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button type="button" onClick={AddTask}>Add List</button>
            <div   style={{width:"300px",margin:"auto"}}>
            {
                task.length > 0 &&
                task.map((item,index)=>{
                    return(
                        edit === index ?
                        <>
                        <div key={index} style={{display:"flex",justifyContent:"space-between"}}>
                        <div>
                        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
                        </div>  
                        <div>
                        <button type="button" onClick={()=>Save(index)}>Save</button>
                        <button type="button" onClick={()=>DeleteTask(index)} >Delete</button>
                        </div>
                         </div>
                         </>
                        :
                        <div key={index} style={{display:"flex",justifyContent:"space-between"}}>
                        <div>
                        <label>{item}</label>
                        </div>
                        <div>
                        <button type="button" onClick={()=>EditTask(index)}>Edit</button>
                        <button type="button" onClick={()=>DeleteTask(index)} >Delete</button>
                        </div>
                        </div>
                    
                    )
                })
            }
            </div>
            </div>        
        </>
    )
}
export default Todo;