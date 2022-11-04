import { click } from '@testing-library/user-event/dist/click';
import React from 'react'

const Eventos = () => {
    const click=()=> console.log('Click.');
  return (
    <div>
    <h2>Eventos</h2>
    <button  onClick={()=>click()}>Has click</button>
    </div>
  )
}

export default Eventos;