import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";
import ItemDetailContainer from "../components/detalle/ItemDetailContainer";
import Error from "../components/Error";
import Home from "../components/Home";
import Layout from "../components/Layout";


const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>}/>
                </Route>
            
            </Routes>          
        </BrowserRouter>
    </>
  )
}

export default Rutas