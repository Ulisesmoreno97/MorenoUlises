import React from 'react'
import ItemCount from './ItemCount'

const Item = (items) => {

  // const onAdd = (cantidad) => {
  //   console.log('SELECCIONASTE ${cantidad}')
  // }

  return (
    <>
      {items.length > 0 ? (
        items.map((item,index) => (
        <>
            <h1 key={index}> {item.title} </h1>
        </>
      ))

      ):  (
        <h1>Cargando ...</h1>
      )}
    </>

  )
}
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