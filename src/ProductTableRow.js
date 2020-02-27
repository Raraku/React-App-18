import React, {Component} from 'react';

import Button from 'react-bootstrap/Button';
export class ProductTableRow extends Component{
    render(){
        let p = this.props.product;
        return<tr>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.category}</td>
            <td className='text-right'>${Number(p.price).toFixed(2)}</td>
            <td>
                <Button variant='warning' className='m-1' onClick={()=> this.props.editCallback(p)}>Edit</Button>
                <Button variant='danger' className='m-1' onClick={()=> this.props.deleteCallback(p)}>Delete</Button>
           </td>
        </tr>
    }
}