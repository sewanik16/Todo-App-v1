import { useEffect, useState } from "react";


function Todo(){
    let [task,setTask] = useState([])
    let [input,setInput] = useState("")
    let [edit,setEdit] = useState(-1)
    let [edittxt,setEditxt] = useState("")

    let AddTask=(e)=>{
        e.preventDefault()
        setTask([...task,input])
        setInput("")
    }
    let DeleteTask=(index)=>{
        task.splice(index,1)
        setInput("")
        setTask([...task])
    }
    let EditTask=(index)=>{
        setEdit(index)     // edit=0
        let i= task[index]   // task[0] == nikhil
        // setInput(i)
        setEditxt(i)
    }
    let Save=(index)=>{
        setEdit(-1)   //edit=-1
        // let editstr = task[index]
        // setEditxt(editstr)
        task.splice(index,1,edittxt)  // nkhi
        setInput(null)
    }
   
   
    return(
        <>
            <div className="main">
            <h1>TODO List</h1>
            <form onSubmit={AddTask}>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} maxLength="21"  required/>&nbsp;&nbsp;
            <button type="submit" >Add List</button>
            </form>
            <div className="list">
            {
                task.length > 0 &&
                task.map((item,index)=>{
                    return(
                        edit === index ?
                        <>
                        <div key={index} className="inner">
                            <div>{index+1+".  "}
                            <input type="text" value={edittxt} maxLength="21"  onChange={(e)=>{setEditxt(e.target.value)}}></input>
                            </div>  
                            <div>
                            <button type="button" id="save" onClick={()=>Save(index)}>Save</button>&nbsp;&nbsp;
                            <button type="button" onClick={()=>DeleteTask(index)} >Delete</button>
                            </div>
                         </div>
                         </>
                        :
                        <>
                        <div key={index} className="inner">
                        <div>{index+1+".  "}
                        <label>{item}</label>
                        </div>
                        <div>
                        <button type="button" onClick={()=>EditTask(index)}>Edit</button>&nbsp;&nbsp;
                        <button type="button" onClick={()=>DeleteTask(index)} >Delete</button>
                        </div>
                        </div>
                        </>
                    
                    )
                })
            }
            </div>
            </div>        
        </>
    )
}
export default Todo;