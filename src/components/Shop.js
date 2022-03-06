import guitars from "./guitars"
import Card from "./Card"
import Cart from "./Cart"
import { useState } from "react";

function Shop () {

  let [items, setItems] = useState([]);

  function passItemInfo(guitar, amt) {
    adjustCart(guitar, amt)
  }

  function adjustCart(guitar, amt) {
    console.log(guitar.name, amt)
    /*
    setItems([{guitar: guitar, amt: amt}]);
    console.log(items)
    */
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