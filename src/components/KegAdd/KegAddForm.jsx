import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../actions';

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

function KegAddForm() {
  const dispatch = useDispatch();
  const nextKegId = useSelector(state => state.nextKegId);

  const handleNewKegSubmit = (event) => {
    event.preventDefault();
    keg.id = nextKegId;
    keg.name = _name.value;
    keg.brand = _brand.value;
    keg.price = parseFloat(_price.value);
    keg.alcoholContent = parseFloat(_alcoholContent.value);
    dispatch(add(keg));
    this.handleResetData();
  };

  const handleResetData = () => {
    _name = null;
    _brand = null;
    _price = null;
    _alcoholContent = null;
    keg = {
      id: "",
      name: "",
      brand: "",
      price: "",
      alcoholContent: "",
      inventory: 144
    }
  }

    return (
      <Form onSubmit={() => handleNewKegSubmit()}>
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

export default KegAddForm;
