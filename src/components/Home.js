import { Link } from "react-router-dom"

function Home() {
  return (
    <div id="home">
      <div id="shopPrompt">
        <Link to="/shop">Shop Now</Link>
      </div>
    </div>
  )
}

export default Home