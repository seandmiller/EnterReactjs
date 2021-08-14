import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default class Render extends React.Component {
    constructor(props) {
        super(props);

    }
   render() {

       const {product, expense,image, id,  time} = this.props.data;
    
       return (
          <div className='render-container'>
           <div className='render-wrapper'>
        
           <div className="list-container">
              {product ? <li> {time} you paid {expense}$ for {product}  
             
             
             <div className="remove-btn">
             
             
             <button onClick={() => this.props.handleDelete(this.props.data)}><FontAwesomeIcon icon='trash'/></button>
            
             
             </div>
             <div className='the-img'> <img src={image}  /> </div>
             </li> 

             
             : null }
            </div>

        

           </div> 

         </div>  
       )
   } 
}