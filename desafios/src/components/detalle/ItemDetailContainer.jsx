import React, { useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFetch } from "../../promesas/getFetch";




function ItemDetailContainer() {

const [producto, setProducto] = useState({})
const [loading, setLoading] = useState(true)
const {detalleId} = useParams()



useEffect(() => {
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
        .finally(() => setLoading(false))
      }, [])
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