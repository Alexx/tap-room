import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let _name = null;
let _brand = null;
let _price = null;
let _alcoholContent = null;
let keg = {
  id: "",
  name: "",
  brand: "",
  price: "",
  alcoholContent: "",
  inventory: 144
}

function KegEditForm() {
  return (
    <Form onSubmit={this.handleUpdateKegSubmit}>
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

export default KegEditForm;
