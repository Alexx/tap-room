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
  }

  handleNewTicketSubmission = (event) => {
    event.preventDefault();


    const newKegData = this.props.kegData;
    newKegData.push({
      id: 999,
      name: _name,
      brand: _brand,
      price: _price,
      alcoholContent: _alcoholContent,
      inventory: 124
    });

    this.setState(
      {
        kegData: newKegData
      }
    );

    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_alcoholContent.value);
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  };

  render() {
    return (
      <Form onSubmit={this.handleNewTicketSubmission}>
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
