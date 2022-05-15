import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFetch } from "../../promesas/getFetch";
import { useParams } from 'react-router-dom';




function ItemDetailContainer(id) {

const [producto, setProducto] = useState({})
const [loading, setLoading] = useState(true)
const  detalleId = useParams()

  

useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(producto => producto.id === detalleId)))
        .finally(() => setLoading(false))
      }, [])
      console.log(detalleId)
      console.log(producto)
      

  return (
    <>
      { loading ? <h2>Cargando..</h2>
      :
      <ItemDetail producto={producto}/>
      }
    </>
  )
}

export default ItemDetailContainer