import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

export class SupplierTableRow extends Component {
    render(){
        let s= this.props.supplier;
        return <tr>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.products.join(', ')}</td>
            <td>
                <Button variant='warning' className='m-1' onClick={()=> this.props.editCallback(s)}>Delete</Button>
                <Button variant = 'danger' className='m-1' onClick={()=> this.props.deleteCallback(s)}>Delete</Button>
            </td>
        </tr>
    }
}