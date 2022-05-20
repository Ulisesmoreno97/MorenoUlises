import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({items}) => {

   const onAdd = (count) => {
     console.log(`SELECCIONASTE ${count}`)
   }

  return (
    <>
      {items.length > 0 ? (
        items.map((item,index) => (
        <>

     <div className={'card & ${color}'} style={{ width: "18rem" }}>
       <img src={item.pictureUrl} className="card-img-top" alt="..." />
       <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p>{item.resumen}</p>
          <h6>${item.price}</h6>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          <Link to={`/ItemDetailContainer/${item.id}`}  type='button' className='btn btn-primary my-1' > Detalle </Link>         
       </div>
     </div>
        </>
        
      ))

      ):  (
        <h1>Cargando ...</h1>
      )}
    </>

  )
}

    // <h1 key={index}> {item.title} </h1>
    // <div className={'card & ${color}'} style={{ width: "18rem" }}>
    //   <img src={pictureUrl} className="card-img-top" alt="..." />
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //     <p>{id}</p>
    //     <h6>{price}</h6>
    //     <ItemCount stock={10} initial={1} onAdd={onAdd} />

    //     {/* <a href="#" className={colorBtn || "btn btn-primary"} >{textoBtn}</a> */}
    //   </div>
    // </div>


export default Item