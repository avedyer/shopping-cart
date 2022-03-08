import React, { useState } from 'react';

const Card = (props) => {

    let[amt, setAmt] = useState(1);

    function handleChange(e) {
        if (e.target.value < 1) {
            e.target.value = 1
        }

        if (e.target.value > 9) {
            e.target.value = amt
        }

        setAmt(e.target.value)
        e.target.select()
    }

    return (
        <div className='card'>
            <img src={props.img} alt={props.name} />
            <div className='info'>
                <h3 className='name'>{props.name}</h3>
                <h4 className='price'>${props.price}</h4>
                <input type="number" defaultValue={1} min={1} max={9} onFocus={(e) => e.target.select()} onChange={handleChange}/>
                <button className='add' onClick={() => props.adjustCart(props, amt)}>Add To Cart</button>
            </div>
            
        </div>
    )
}

export default Card