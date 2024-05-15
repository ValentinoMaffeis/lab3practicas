function Tasks({tasks,complete, eliminateTask}){
    return(<ul>
        {
          tasks.map(task=>(
            <li key={task.id}>
              <p className={task.state ? "completed" : "" }>{task.title}</p>
              <button onClick={()=>eliminateTask(task.id)} className="eliminar">Eliminar</button>
              <button onClick={()=>complete(task.id)}>Marcar Completado</button>
            </li>
          ))
        }

      </ul>)
}
export default Tasks