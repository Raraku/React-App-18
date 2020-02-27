import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

export class Selector extends Component{
    constructor(props){
        super(props);
        this.state={
            selection :React.Children.toArray(props.children)[0].props.name
        }
    }
    setSelection = (ev)=>{
        ev.persist();
        this.setState({selection:ev.target.name});
    }
    render(){
        return( <Container>
            <Row>
                <Col xs sm md lg ={2}>
                {React.Children.map(this.props.children, c =>
                <Button name={c.props.name} onClick={this.setSelection} className={`btn-block m-2 ${this.state.selection===c.props.name ? "btn-primary active": "btn-secondary"}`} >
                    {c.props.name}
                    </Button>)}
                </Col>
                <Col>
                {React.Children.toArray(this.props.children).filter(c=>c.props.name===this.state.selection)}
                </Col>
            </Row>
        </Container>
        )}
}