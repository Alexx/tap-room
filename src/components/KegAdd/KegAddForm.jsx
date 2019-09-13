import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function KegAddForm() {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;


  // handleNewTicketSubmission = (event) => {
  //   event.preventDefault();
  //   console.log(_name);
  //   console.log(_brand);
  //   console.log(_price);
  //   console.log(_alcoholContent);
  // }

  function handleNewTicketSubmission(event) {
    event.preventDefault();
    console.log(_name);
    console.log(_brand);
    console.log(_price);
    console.log(_alcoholContent);
  }

  return (
    <Form onSubmit={handleNewTicketSubmission}>
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
