import React from 'react'
import ItemCount from './ItemCount'

const Item = ({
  greeting,
  id,
  title,
  price,
  pictureUrl,
  parrafo
  

}) => {

  const onAdd = (cantidad) => {
    console.log('SELECCIONASTE ${cantidad}')
  }

  return (
    <div className={'card & ${color}'} style={{ width: "18rem" }}>
      <img src={pictureUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{id}</p>
        <p className="card-text">{parrafo}</p>
        <h6>{price}</h6>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />

        {/* <a href="#" className={colorBtn || "btn btn-primary"} >{textoBtn}</a> */}
      </div>
    </div>
  )
}

export default Item