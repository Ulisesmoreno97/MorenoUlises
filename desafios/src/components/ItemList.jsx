import React from 'react'
import Item from './Item'



const ItemList = ({productos}) => {
  return (
    
    

    <main className='d-flex justify-content-evenly w-100'>
      
      <Item items={productos}/>
      
     
    </main>
  )
}




export default ItemList