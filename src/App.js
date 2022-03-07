import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./constants/Nav";
import Footer from "./constants/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {

  let [cart, setCart] = useState([]);

  function CartEntry(guitar, amt) {
    return {
      guitar: guitar,
      amt: amt
    }
  }

  function adjustCart(guitar, amt) {
    let newItems = [...cart];
    let amtAdjustment = false

    if(amt === 0) {
      for (let i=0; i<newItems.length; ++i) {
        if (newItems[i].guitar.name === guitar.name) {
          newItems.splice(i, 1);
        } 
      }
    }

    else {
      for (let item of newItems) {
        if (item.guitar.name === guitar.name) {
          item.amt = amt;
          amtAdjustment = true
        }
      } 
  
      if (!amtAdjustment) {
        newItems.push(CartEntry(guitar, amt))
      }
    }

    setCart(newItems);
    console.log(cart)
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop adjustCart={adjustCart}/>} />
        <Route path="/cart" element={<Cart items={cart} adjustCart={adjustCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
