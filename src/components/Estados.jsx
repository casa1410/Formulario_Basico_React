import React, {useState}from 'react'

const Estados = () => {
    const[texto,setTexto]= useState('Texto inicial desde estado')
    const click=()=>{
    setTexto('texto modificado desde estado')
    }
  return (
    <div>
        <h2>Estados</h2>
        <h3>{texto}</h3>
        <button onClick={()=>click()}>Cambiar estado</button>
    </div>
  )
}

export default Estados;