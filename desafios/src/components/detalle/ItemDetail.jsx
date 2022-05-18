import React from 'react'

const ItemDetail = ({producto}) => {
console.log(producto)
    
  return (
    <>
    <div>
      <h1>{producto.title}</h1>
      <h2>{producto.resumen}</h2>
      <h3>{producto.price}</h3>
      <p>{producto.id}</p>
    </div>
    </>
  )
}

export default ItemDetail