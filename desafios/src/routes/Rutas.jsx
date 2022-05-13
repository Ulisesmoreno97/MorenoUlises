import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";
import Home from "../components/Home";


const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            
            
            </Routes>          
        </BrowserRouter>
    </>
  )
}

export default Rutas