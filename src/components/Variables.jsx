import React from 'react'

const Variables = () => {
  const texto1="Buenas noches"
  let texto2="¿Como estás?"
const url= "https://assets1.ignimgs.com/2017/03/28/persona5-1280-3-1490728399817_160w.jpg?width=1280"
    return (
        <>
        <p>Variables en jsx, {texto1} {texto2}</p>
        <img src={url} alt="hight school"/>
    
        </>
  )
}
export default Variables;