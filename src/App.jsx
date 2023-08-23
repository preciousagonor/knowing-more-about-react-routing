import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from './pages/productDetails';
import Checkout from './pages/Checkout';
import ShippingDetails from './pages/ShippingDetails';
import NavBar from './component/NavBar';

function App() {
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element ={<ProductDetails/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/shipping" element={<ShippingDetails/>} />
    </Routes>
    

   
  
    
    </>
  )
}

export default App
