import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'

const ItemDetail = ({producto}) => {
  console.log(producto)

  const onAdd = (count) => {
    console.log(`SELECCIONASTE ${count}`)
  }

  return (
    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    }}>

      <div className='card text-center' style={{ width: "18rem"}}>
        <img src={producto.pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">${producto.price}</li>
            
            </ul>
            <div className="card-body">
              <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
              <Link to={`/ItemDetailContainer/${producto.id}`} className="card-link">Comprar</Link>
              <Link to={`/ItemDetailContainer/${producto.id}`} className="card-link">Another link</Link>
          </div>
        </div>
    </div>










   
    
  )
}

export default ItemDetail