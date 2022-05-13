import React from 'react'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Home = () => {
  
    return (
    
        <div className="d-flex">
            <SideBar />
            <ItemListContainer />
        </div>
            
        
  )
}

export default Home