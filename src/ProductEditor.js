import React, {Component} from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
export class ProductEditor extends Component {
    constructor(props){
        super(props);
        this.state = {
            formData: {
                id: props.product.id || "",
                name: props.product.name  || "",
                category: props.product.category || "",
                price: props.product.price ||""
            }
        }
    }
    handleChange = (ev)=>{
        ev.persist();
        this.setState(state=> state.formData[ev.target.name]=ev.target.value);
    }

    handleClick = ()=>{
        this.props.saveCallback(this.state.formdata);
    }

    render(){
        return <div className= 'm-2'>
            <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormControl name='name' value = {this.state.formData.name} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Category</FormLabel>
                <input className= 'form-control' name='category' value = {this.state.formData.category} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <FormLabel>Price</FormLabel>
                <FormControl name= 'price' value = {this.state.formData.price} onChange={this.handleChange}/>
            </FormGroup>
            <div className='text-center'>
                <Button variant='secondary' onClick = {this.props.cancelCallback}>Cancel</Button>
            </div>
        </div>
    }
}