import React from 'react'

const ItemDetail = ({producto}) => {
console.log(producto)
  return (
    <>
    <div>
      <h1>{producto.id}</h1>
      <h2> {producto.resumen}</h2>
      <h3>{producto.title}</h3>
      <p>{producto.price}</p>
    </div>
    </>
  )
}

export default ItemDetail