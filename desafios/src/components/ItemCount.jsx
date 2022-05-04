import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count,setCount]= useState(initial);

    const Restar =() => {
      if (count === 1){
         console.log('NO PUEDE SEGUIR RESTANDO')
      }else{
        setCount(count - 1);
      }
  };

  const Sumar = () => {
    if (count >= stock) {
      console.log('NO HAY MAS PRODUCTOS')
    } else {
      setCount(count + 1);
    }
  };

  const agregarCarrito = () => {
    onAdd(count)
  }

  return (
    <>
    
      <button type='button'className='btn btn-secondary' onClick={Restar}>-</button>

      <button type='button' className='btn btn-secondary' > {count} </button>

      <button type='button' className='btn btn-secondary' onClick={Sumar}>+</button>

      <button type='button' className='btn btn-outline-secondary my-1' onClick={agregarCarrito}> Agegrar al carrito </button>
        
    </>
  )
}

export default ItemCount