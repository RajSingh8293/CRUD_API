import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <div className="form_container">
      <div className="form">
        <h1 className="form_heading">Regitser</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*******" />
          </Form.Group>

          <Button variat="success">Register</Button>
          <p className="link">
            Don't have an account
            <NavLink to="/login">login</NavLink>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default Register
