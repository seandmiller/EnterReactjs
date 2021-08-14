import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





export default class Navi extends Component {
    render() {

        return (
            <div className="nav-container">
                <h1>Electric Vehicle Warehouse</h1>
                
               <div className="icon"> <FontAwesomeIcon icon="bolt"/> </div>
                
            </div>
        )
    }
}