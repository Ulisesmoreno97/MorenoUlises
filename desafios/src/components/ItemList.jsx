import React from 'react'
import Item from './Item'



const ItemList = ({producto}) => {
  return (
    
    

    <main className='d-flex justify-content-evenly w-100'>
      
      <Item items={producto}/>
      
     
    </main>
  )
}




export default ItemList