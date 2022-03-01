import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Nav