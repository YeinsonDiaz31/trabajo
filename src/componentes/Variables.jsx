import React from 'react'

const Variables = () => {
  const texto1="Buenas noches"
  let texto2="¿Como estás?"
const url= "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/627105d919fb73274924d07f/microprocesador-grande.jpg"
    return (
        <>
        <p>Variables en jsx, {texto1} {texto2}</p>
        <img src={url} alt="hight school"/>
    
        </>
  )
}
export default Variables;