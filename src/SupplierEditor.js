import React, {Component} from 'react';
import {FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';

export class SupplierEditor extends Component{
    constructor(props){
        super(props);
        this.state = {
            formData:{
                id:props.supplier.id ||"",
                name:props.supplier.name||"",
                city:props.supplier.city||"",
                products:props.supplier.products||[],
            }
        }
    }

    handleChange=(ev)=>{
        ev.persist();
        this.setState(state=>
            state.formData[ev.target.name]= ev.target.name==="products" ? ev.target.value.split(","): ev.target.value);
    }
    handleClick = ()=>{
        this.props.saveCallback(
            {
                ...this.state.formData, products: this.state.formData.products.map(val=>Number(val))
            }
        )
    }
    render(){
        return <div className='m-2'>
            <FormGroup>
                <FormLabel>ID</FormLabel>
                <FormControl name='id' disabled value={this.state.formData.id} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel>ID</FormLabel>
                <FormControl name='name' value={this.state.formData.name} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel>City</FormLabel>
                <FormControl name='city' value={this.state.formData.city} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Products</FormLabel>
                <FormControl name='products' value={this.state.formData.products} onChange={this.handleChange}/>
            </FormGroup>
            <div className='text-center'>
                <Button variant='secondary' onClick={this.props.cancelCallback}>Cancel</Button>
            </div>
        </div>
    }
}