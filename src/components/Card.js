import React, { useRef, useState } from 'react';

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
            <h3 className='name'>{props.name}</h3>
            <input type="number" defaultValue={1} min={1} max={9} onFocus={(e) => e.target.select()} onChange={handleChange}/>
            <button onClick={() => props.passItemInfo(props, amt)}>Add To Cart</button>
        </div>
    )
}

export default Card