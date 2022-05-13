import React, { useEffect, useState } from 'react'
import Promesa from '../promesas/Promise'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { getFetch } from "../promesas/getFetch";

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
    .then((respuesta)=> {
      return respuesta
    })
    .then((resp) => setProductos(resp))
    .then(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      { loading ? <h2>Cargando...</h2>
        :
        <ItemList productos={productos} />  
    }
    </div>
  )
}

export default ItemListContainer