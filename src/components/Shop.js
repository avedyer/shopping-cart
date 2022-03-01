import guitars from "./guitars"
import Card from "./Card"

function Shop () {
  return(
    <div id="shop">
      <h1>Shop</h1>
      {guitars.map((guitar) => 
        <Card name={guitar.name} img={guitar.img} />
      )}
    </div>
  ) 
}

export default Shop