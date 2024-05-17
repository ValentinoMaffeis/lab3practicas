import { useState } from "react"

function AddTask({addTask}){

  const [input, setInput]= useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (input.trim()==="") return alert("Complete el campo.");
    addTask(input);
    setInput("");



  }
  
    return(

        <form onSubmit={handleSubmit}>
        <label>Tarea:
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} /> 
        </label>
        <button type='submit' className="agregar">Agregar tarea:</button>
      </form>
    )
}

export default AddTask