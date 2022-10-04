import React from "react";
import { Container, Col, Form, Button, ListGroup } from "react-bootstrap";

import Swal from 'sweetalert2'

import { validacionApellido, validacionDni, validacionEmail, validacionNombre } from "../validacionesForm";

import Titulo from "./Titulo";

const Formulario = () => {
  const [validar, setValidar] = React.useState(false);

  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dni, setDni] = React.useState("");

  const [cliente, setCliente] = React.useState({})

  const validarDatos =  () => {
   
    if (
      validacionNombre(nombre) &&
      validacionApellido(apellido) &&
      validacionDni(dni) &&
      validacionEmail(email)
    ) {
      setValidar(true)
      setCliente({
        nombre,
        apellido,
        email,
        dni
      })
      setNombre("")
      setApellido("")
      setDni("")
      setEmail("")
      console.log(validar)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Algo salio mal!',
        text: 'Completa todos los campos!',
      })
      console.log("Mal");
      return;
    }
  };

  

  return (
    <Container fluid xs={12} sm={12} md={8}>
      <Titulo></Titulo>
      <Form
        className="d-flex justify-content-center align-items-center"
        noValidate
      >
        <Col xs={12} sm={12} md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Nombre: </Form.Label>
            <Form.Control
            onBlur={() => validacionNombre()}
              type="text"
              value={nombre}
              required
              placeholder="Ingrese sus nombres"
              onChange={(e) => setNombre(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Apellido: </Form.Label>
            <Form.Control
            onBlur={() =>  validacionApellido()}
              type="text"
              value={apellido}
              required
              placeholder="Ingrese sus apellidos"
              onChange={(e) => setApellido(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email: </Form.Label>
            <Form.Control
            onBlur={() => validacionEmail()}
              
              type="email"
              value={email}
              required
              placeholder="Ingrese su email. Ej: rolling@rolling.com"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>DNI: </Form.Label>
            <Form.Control
            onBlur={() => validacionDni()}
              type="number"
              value={dni}
              required
              placeholder="Ingrese su DNI. Ej: 30000000"
              onChange={(e) => setDni(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            className="mb-2 mt-2 float-end"
            variant="danger"
            type="button"
            onClick={validarDatos}
          >
            Enviar
          </Button>
        </Col>
      </Form>
      {
        validar ?   
        <ListGroup>
        <ListGroup.Item>{cliente.nombre}</ListGroup.Item>
        <ListGroup.Item>{cliente.apellido}</ListGroup.Item>
        <ListGroup.Item>{cliente.dni}</ListGroup.Item>
        <ListGroup.Item>{cliente.email}</ListGroup.Item>     
        </ListGroup> : null
      }
    
    </Container>
  );
};

export default Formulario;
