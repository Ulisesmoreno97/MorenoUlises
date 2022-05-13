import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";
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
                </Route>
            
            </Routes>          
        </BrowserRouter>
    </>
  )
}

export default Rutas