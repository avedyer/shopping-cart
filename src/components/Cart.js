import { useState } from "react"

function Cart(props) {

  let total = 0

  for(let item of props.items) {
    total += item.guitar.price * item.amt;
  }

  return(
    props.items.length > 0 ?
    <div id="cart">
      <div className="items">
        {props.items.map(item => {
          console.log(item)
          return (
            <Item data={item} adjustCart={props.adjustCart}/>
          )
        })}
      </div>
      <div className="total">
        <h4>Total: ${total}</h4>
        <button>Checkout</button>
      </div>
    </div>
    :
    <h3>
      Your cart is empty
    </h3>
  )
}

function Item(props) {

  function handleChange(e) {
    if (e.target.value < 1) {
        e.target.value = props.data.amt
    }

    if (e.target.value > 9) {
        e.target.value = props.data.amt
    }

    props.adjustCart(props.data.guitar, e.target.value);
    e.target.select()
  }

  return (
    <div className="item">
      <p>{props.data.guitar.name}</p>
      <p className='price'>${props.data.guitar.price}</p>
      <img src={props.data.guitar.img} />
      <input type="number" defaultValue={props.data.amt} min={1} max={9} onFocus={(e) => e.target.select()} onChange={(e) => handleChange(e)}/>
      <button onClick={() => props.adjustCart(props.data.guitar, 0)}>Remove</button>
    </div>
  )
}

export default Cart