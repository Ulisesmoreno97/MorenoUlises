import React, { useState } from 'react'

const ItemCount = (stock) => {

    const [contador,setContador]= useState(1)
    var cantidad = {stock} 
    var prueba = cantidad - 1 
    console.log(cantidad)
    
    console.log (prueba)


  function restar(params) {
      if (contador > 1){
         setContador(contador -1)
      }
  }

  function sumar(params) {
      setContador(contador +1)
  }

  return (
    <div className='d-flex justify-content-evenly w-100 m-2'>
    
        <button onClick={restar}>-</button>
        <h5> {contador}</h5>
        <button onClick={sumar}>+</button>
        
        


    </div>
  )
}

export default ItemCount