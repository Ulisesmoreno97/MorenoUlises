import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Promesa from "./promesas/Promise";


function App() {

  const [items, setItems] = useState([])

  const dataItems = [{
    resumen: 'Breve texto sobre el producto',
    stock:7,
    id: 1,
    title: 'Perfume 1',
    price: 250,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgwf7RhaOLa5yO3v7PiviaULyk6VnfJsdbA&usqp=CAU"
  }, {
    resumen: 'Breve texto sobre el producto',
    stock: 15,
    id: 2,
    title: 'Perfume 2',
    price: 100,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgwf7RhaOLa5yO3v7PiviaULyk6VnfJsdbA&usqp=CAU"
    }, {
    resumen: 'Breve texto sobre el producto probando',
    stock: 4,
    id: 3,
    title: 'Perfume 3',
    price: 150,
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgwf7RhaOLa5yO3v7PiviaULyk6VnfJsdbA&usqp=CAU"
    }
  ]

  
   useEffect(() => {

     const pedido = new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(dataItems)
       }, 2000);
     })
    
    pedido.then((res) => setItems(res))
    .catch((err) => console.log(err)) 
    
    
    },[])
  
    console.log(items)



  return ( 
    <div className = 'container-fluid'>
      <NavBar/>
      <div className="d-flex">
      <SideBar/>
      <ItemListContainer items={items}/>
      
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
