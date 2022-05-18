import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFetch } from "../../promesas/getFetch";
import { useParams } from 'react-router-dom';




function ItemDetailContainer() {

const [productos, setProducto] = useState([])
const [loading, setLoading] = useState(true)
const {id} = useParams()

  

useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(producto => producto.id === id)))
        .finally(() => setLoading(false))
      }, [id])
      
      

  return (
    <>
      { loading ? <h2>Cargando..</h2>
      :
      <ItemDetail producto={productos}/>
      }
    </>
  )
}

export default ItemDetailContainer