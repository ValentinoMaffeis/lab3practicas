import { useState } from "react"

function Login(){
    
    const [user, setUser]=useState("")
    const handleChange=(e)=>{
        const userValue=e.target.value

        setUser(userValue)
        if(userValue.toLowerCase()[userValue.length-1]==="o"){
             alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }

        
    } 
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user.trim()===""|| user.toLowerCase().includes("o")){
            return alert("Usuario inválido para registrarse")

        }
        alert("¡Usuario registrado correctamente!")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={user} placeholder="Username" onChange={handleChange}/>
            <button type="submit">Registrarse</button>
            <p>{user}</p>

        </form>
    )

    
}
export default Login