import React from 'react';


export default function(props) {
  const {name, cost, img} = props.data

    return (
        <div>
             <div className='text-wrapper'> Are you looking for?  <a className='link-wrapper' onClick={() => props.itemFoundSubmit(cost, name, img) } >{name}  </a></div> 
             <h4> purchase price {cost}$</h4>
        
        </div>
    )


}