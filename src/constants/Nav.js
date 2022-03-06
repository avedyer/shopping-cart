import { Link } from "react-router-dom"
import logo from "../imgs/logo.png"

function Nav() {
  return (
    <header>
      <img id="logo" src={logo}></img>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  )
}

export default Nav