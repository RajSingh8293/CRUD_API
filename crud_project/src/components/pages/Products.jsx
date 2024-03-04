import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function Products() {
  return (
    <div className="table_conataainer">
      <h1 className="py-3">All Products</h1>
      <Table striped bordered hover className="product_table">
        <thead>
          <tr>
            <th>S.No</th>
            <th> Name</th>
            <th> Modal</th>
            <th> Price</th>
            <th> Brand</th>
            <th> Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Phone</td>
            <td>Samsung a23</td>
            <td>22000</td>
            <td>Samsung</td>
            <td>
              <Button variant="danger">Danger</Button>{' '}
              <Button variant="primary" className="">
                Update
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Phone</td>
            <td>Samsung a23</td>
            <td>22000</td>
            <td>Samsung</td>
            <td>
              <Button variant="danger">Danger</Button>{' '}
              <Button variant="primary" className="">
                Update
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Phone</td>
            <td>Samsung a23</td>
            <td>22000</td>
            <td>Samsung</td>
            <td>
              <Button variant="danger">Danger</Button>{' '}
              <Button variant="primary" className="">
                Update
              </Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Phone</td>
            <td>Samsung a23</td>
            <td>22000</td>
            <td>Samsung</td>
            <td>
              <Button variant="danger">Danger</Button>{' '}
              <Button variant="primary" className="">
                Update
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Products
