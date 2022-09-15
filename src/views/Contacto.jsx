import React from 'react'
import Form from 'react-bootstrap/Form';
import { Container, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container>
      <Form className='mt-5'>
        <h2 className='mb-3'> Cuentanos, ¿en que te podemos ayudar?</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger">Enviar</Button>{' '}
      </Form>
    </Container>
  )
}

export default Contacto