import { useEffect, useState } from "react";
import Content1 from "./components/Content1";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Promesa from "./promesas/Promise";


function App() {

  const [items, setItems] = useState([])

  const dataItems = [1,2,3,4]

  
   useEffect(() => {

     const pedido = new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(dataItems)
       }, 2000);
     })
    
    pedido.then((res) => setItems(res))
    .catch((err) => console.log(err)) 
    
    console.log(items)
    },[])
  




  return ( 
    <div className = 'container-fluid'>
      <NavBar/>
      <div className="d-flex">
      <SideBar/>
      <ItemListContainer/>
      
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
