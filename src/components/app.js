import React, { Component } from 'react';
import Navi from './navigation/navigation';
import Page from './page';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearchDollar,faTrash,faSadTear,faBolt } from '@fortawesome/free-solid-svg-icons';

library.add(faSearchDollar,faTrash, faSadTear, faBolt)
export default class App extends Component {
  render() {
    return (
      <div className='app'>
       <Navi/>
      <div className="body-container">
      <Page/>
      </div>
      
      </div>
    );
  }
}