import React from 'react'

const Promesa = ({items}) => {

  return (
    <>
      {items.length > 0 ? (
        items.map((item, index) => (
          <>
            <h1 key={index}> {item.title} </h1>
          </>
        ))

      ) : (
        <h1>Cargando ...</h1>
      )}
    </>
  )
}

export default Promesa