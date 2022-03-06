import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./constants/Nav";
import Footer from "./constants/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {

  let [cart, setCart] = useState([]);

  function passCartInfo(data) {
    setCart(data)
    console.log(cart)
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop passCartInfo={passCartInfo}/>} />
        <Route path="/cart" element={<Cart items={cart}/>} />
      </Routes>
    </div>
  );
}

export default App;
