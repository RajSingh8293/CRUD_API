import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UpdateProduct = () => {
  return (
    <div className="form_container">
      <div className="form">
        <h1 className="form_heading">Update Product</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Laptop" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Produc Modal</Form.Label>
            <Form.Control type="text" placeholder="Intel i3" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" placeholder="20000" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Brand</Form.Label>
            <Form.Control type="text" placeholder="dell" />
          </Form.Group>

          <Button variat="success">Update Product</Button>
        </Form>
      </div>
    </div>
  )
}

export default UpdateProduct
