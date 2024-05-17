function Tasks({tasks,complete, eliminateTask}){
    return(<ul>
        {
          tasks.map(task=>(
            <li key={task.id}>
              <p className={task.state ? "completed" : "" }>{task.title}</p>
              <button onClick={()=>eliminateTask(task.id)} className="eliminar">Eliminar</button>
              <button onClick={()=>complete(task.id)}>{task.state ? "Desmarcar completado": "Marcar completado"}</button>
              
            </li>
          ))
        }

      </ul>)
}
export default Tasks