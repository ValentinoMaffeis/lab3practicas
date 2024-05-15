import { useState } from 'react'
import './App.css'
import AddTask from './components/addTasks/AddTasks'
import Tasks from './components/listTasks/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  
  const addTask=(title)=>{
    setTasks(tasks.concat({
      id:crypto.randomUUID(),
      title: title,
      state: false


    }))

  }

  const eliminateTask=(id)=>{
    setTasks(tasks.filter(task=> task.id != id))

  }

  const complete=(id)=>{
    setTasks(tasks.map(task=> task.id==id ? ({...task, state: !task.state}) : task ))

  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTask addTask={addTask}/>
      <Tasks eliminateTask={eliminateTask} complete={complete} tasks={tasks}/>

    </div>
  )
}

export default App
