import Achievements from "./Components/Achievements/Achievements"
import Collection from "./Components/Collection/Collection"
import Top from "./Components/Top/Top"
import First from "./Components/First/First"
import Insights from "./Components/Insights/Insights"
import Nyus from "./Components/Nyus/Nyus"
import Navbar from "./Components/Navbar/Navbar"
import Next from "./Components/Next/Next"
import Story from "./Components/Story/Story"
import Footer from "./Components/Footer/Footer"
import Services from "./Components/Services/Services"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";

import Gad from "./Pages/Gad";
import Ogad from "./Pages/Ogad";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import ProductPage from "./Pages/ProductPage";
import { CartProvider } from "./Pages/CartContext"
const App = () => {
  return (
    <div className="app">
      <CartProvider>
   <Router>
      <Navbar/>
      <Next/>
      <Routes>
      <Route path="/" element={
        <>
      <First/>
      <Collection/>
      <Top/>
      <Story/>
      <Achievements/>
      <Services/>
      <Insights/>
      <Nyus/>
      </>
    } />
    <Route path="/shop" element={
      <>
<Shop/>
<Product/>
<Nyus/>
</>
    } />
 <Route path="/gallery" element={
      <>
<Gad/>
<Ogad/>
<Services/>
<Nyus/>


</>
    } />


     <Route path="/product/:id" element={
      <>
<ProductPage/>
<ProductDetails/>
<Top/>



</>
    } />


    <Route path="/cart" element={
      <>
      <Gad/>
<Cart/>
<Top/>
<Nyus/>



</>
    } />
    
      </Routes>
      <Footer/>
      </Router>
      </CartProvider>
      </div>
  )
}

export default App

