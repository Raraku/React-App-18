import React, {Component} from 'react';
import './App.css';
//import ProductsAndSuppliers from './ProductsAndSuppliers';
import {Provider} from 'react-redux';
import {Selector} from './Selector';
import dataStore from './store';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';

export default class App extends Component{
  render(){
    return(
      <Provider store={dataStore}>
        <Selector>
          <ProductDisplay name='Products'/>
          <SupplierDisplay name='Suppliers'/>
        </Selector>
      </Provider>
    )
  }
}
