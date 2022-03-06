import guitars from "./guitars"
import Card from "./Card"
import Cart from "./Cart"
import { useState } from "react";

function Shop (props) {

  let [items, setItems] = useState([]);

  function CartEntry(guitar, amt) {
    return {
      guitar: guitar,
      amt: amt
    }
  }

  function passItemInfo(guitar, amt) {
    adjustCart(guitar, amt)
  }

  function adjustCart(guitar, amt) {

    let newItems = items;
    let amtAdjustment = false

    for (let item of newItems) {
      if (item.guitar.name === guitar.name) {
        item.amt = amt;
        amtAdjustment = true
      }
    } 

    if (!amtAdjustment) {
      newItems.push(CartEntry(guitar, amt))
    }

    setItems(newItems);

    props.passCartInfo(items);
  }

  return(
    <div id="shop">
      <h1>Guitars</h1>
      {guitars.map((guitar) => 
        <Card name={guitar.name} img={guitar.img} passItemInfo={passItemInfo}/>
      )}
    </div>
  ) 
}

export default Shop