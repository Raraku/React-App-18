import React, {Component} from 'react';
import {SupplierTableRow} from './SupplierTableRow';
import { Table } from 'react-bootstrap';

export class SupplierTable extends Component{
    render(){
        return <Table striped bordered sm>
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>City</th>
                    <th>Products</th><th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.suppliers.map(s=>
                    <SupplierTableRow supplier= {s} key = {s.id} editCallback={this.props.editCallback} deleteCallback= {this.props.deleteCallback}/>)
                    
                }
            </tbody>
        </Table>
    }
}
