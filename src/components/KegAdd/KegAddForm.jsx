import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let _name = null;
let _brand = null;
let _price = null;
let _alcoholContent = null;

class KegAddForm extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      keg: {
        id: "",
        key: "",
        name: "",
        brand: "",
        price: "",
        alcoholContent: ""
      }
    }
  }

  handleNewKegSubmit = (event) => {
    event.preventDefault();
    let newState = this.state;
    console.log("handleNewKegSubmit props = ", this.props);
    newState.keg.id = this.props.data.nextKegId;
    newState.keg.key = this.props.data.nextKegId;
    newState.keg.name = _name.value;
    newState.keg.brand = _brand.value;
    newState.keg.price = parseFloat(_price.value);
    newState.keg.alcoholContent = parseFloat(_alcoholContent.value);

    this.setState(newState);
    this.props.onNewKeg(this.state.keg)
  };

  render() {
    return (
      <Form onSubmit={this.handleNewKegSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control id="name" ref={(input) => {
            _name = input;
          }} type="text" placeholder="Enter name"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control id="brand" ref={(input) => {
            _brand = input;
          }} type="text" placeholder="Enter brand"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control id="price" ref={(input) => {
            _price = input;
          }} type="number" step="0.01" placeholder="Enter price"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Alcohol Content %</Form.Label>
          <Form.Control id="alcoholContent" ref={(input) => {
            _alcoholContent = input;
          }} type="number" step="0.01" placeholder="Enter alcohol content"/>
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default KegAddForm;
