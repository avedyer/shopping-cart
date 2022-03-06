import { useState } from "react"

function Cart(props) {  

  return(
    <div id="cart">
      {props.items.map(item => {
        console.log(item)
        return (
          <div className="cartItem">{item.guitar.name} {item.amt}
          </div>
        )
      })}
    </div>
  )
}

export default Cart