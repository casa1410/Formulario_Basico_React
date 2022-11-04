import React from 'react'

const Contador = () => {
    const[contador,setContador]=React.useState(0)
    const aumentar=()=>{setContador(contador+1)}
    const disminuir=()=>{setContador(contador-1)}
  return (
    <div>
        <h2>Contador</h2>
        <h3>Contador: {contador}</h3>
        <h4>{contador%2==0 ? 'Es par': 'Es impar'}</h4>
        <button className='btn btn-primary ms-2' onClick={()=>aumentar()}>Aumentar</button>
        <button className='btn btn-success ms-2' onClick={()=>disminuir()}>Disminuir</button>
    </div>
  )
}

export default Contador;