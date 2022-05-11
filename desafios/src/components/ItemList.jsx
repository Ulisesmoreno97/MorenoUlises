import React from 'react'
import Item from './Item'



const ItemList = (items) => {
  return (
    
    

    <main className='d-flex justify-content-evenly w-100'>
      
      <Item items={items}/>
      
     
    </main>
  )
}




export default ItemList