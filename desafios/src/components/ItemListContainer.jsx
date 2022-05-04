import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({
    greeting,
    textoBtn,
    colorBtn,
    parrafo,
    imagen,    
    titulo
    
}) => {

  const onAdd = (cantidad) =>{
    console.log('SELECCIONASTE ${cantidad}')
  }




  return (
      <div className= {'card & ${color}'} style={{ width: "18rem" }}>
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p>{greeting}</p>
            <p className="card-text">{parrafo}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        {/* <a href="#" className={colorBtn || "btn btn-primary"} >{textoBtn}</a> */}
        </div>
    </div>
  )
}

export default ItemListContainer