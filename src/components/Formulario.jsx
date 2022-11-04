import React from 'react'
export const Formulario = () => {

    const [nombre, setNombre] = React.useState("")
    const [apellido, setApellido] = React.useState("")
    const [lista, setLista] = React.useState([])
    const [id, setId] = React.useState(-1)

    const guardarDatos=(e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            alert("Ingrese el nombre")
            return
        }
        if (!apellido.trim()) {
            alert("Ingrese el apellido")
            return
        }
        // console.log("agregando:"+nombre+""+apellido)
        setLista([
            ...lista,
            {nombre: nombre, apellido: apellido}
        ])

        //limpiar los estados
        e.target.reset()
        //limpiar los estados
        setNombre("")
        setApellido("")

    }

    const eliminarDatos=() => {
        if (id < 0) {
            alert("Mi amor, ese id no existe uwu")
            return
        }

        setLista(lista.filter((item,index)=>index+1 !== id))
        setId(-1)
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("id").value = "";
        
    }
    
    const editarDatos=() => {
        if (id < 0) {
            alert("Mi amor, ese id no existe uwu")
            return
        }
        if (!nombre.trim()) {
            alert("Ingrese el nombre")
            return
        }
        if (!apellido.trim()) {
            alert("Ingrese el apellido")
            return
        }

        setLista(lista.map((item,index)=>{
            if (index+1 === id) {
                return{nombre: nombre, apellido: apellido}
            }
            return item
        
        }))
        
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("id").value = "";
        setNombre("")
        setApellido("")
        setId(-1)
    }

  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={guardarDatos}>
            <input onChange={(e)=>setNombre(e.target.value)} type="text" placeholder='Ingresar nombre' id='nombre'/>

            <input onChange={(e)=>setApellido(e.target.value)} type="text" placeholder='Ingresar apellido' id='apellido'/>

            <input onChange={(e)=>setId(+e.target.value)} type="number" placeholder='Ingresar el id (Solo editar)' id='id'/>
            
            <div>
                <button type='submit'>Enviar</button>
                <input onClick={eliminarDatos} type="button" value="Eliminar"/>
                <input onClick={editarDatos} type="button" value="Editar"/>
                <h3>Lista de usuairos</h3>
                <ol>
                    {
                        lista.map((x, i)=>(<li key={i}>{x.nombre} {x.apellido}</li>))
                    }
                </ol>

            </div>

            
        </form>
    </div>
  )
}

