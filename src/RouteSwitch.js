import { render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App"
import Nav from "./constants/Nav";
import Footer from "./constants/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function RouteSwitch() {
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shop"/>
          <Route path="cart" />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default RouteSwitch