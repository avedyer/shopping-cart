import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt={props.name}/>
            <h3 className='name'>{props.name}</h3>
        </div>
    )
}

export default Card