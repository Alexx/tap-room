import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function KegEditForm() {
  return (
    <Form>
    <Form.Group controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
    </Form.Group>
    
    <Form.Group controlId="formBrand">
    <Form.Label>Brand</Form.Label>
    <Form.Control type="text" placeholder="Enter brand" />
    </Form.Group>
    
    <Form.Group controlId="formPrice">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" step="0.01" placeholder="Enter price" />
    </Form.Group>
    
    <Form.Group controlId="formAlcoholContent">
    <Form.Label>Alcohol Content %</Form.Label>
    <Form.Control type="number" step="0.01" placeholder="Enter alcohol content" />
    </Form.Group>
    
    <Button variant="dark" type="submit">
    Submit
    </Button>
    </Form>
  );
}

export default KegEditForm;
