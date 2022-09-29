import React from 'react'
import { Container, Col, Form, Button } from 'react-bootstrap'

import Titulo from './Titulo'

const Formulario = () => {

    const [validar, setValidar] = React.useState(false)

    const [nombre, setNombre] = React.useState("")
    const [apellido, setApellido] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [dni, setDni] = React.useState("")


    const validarDatos = () => {
      if(validacionNombre() && validacionApellido() && validacionDni() && validacionEmail() ){
    console.log(nombre, apellido, dni, email)

    } else{
        console.log("pal pingo")
        return 
    }
}   


    const validacionNombre = () => {
        if(nombre.trim() && isNaN(nombre)){
            setNombre(nombre)
            setValidar(true)
            return true
        } else {
            setValidar(false)
            return 
        }
        
    }
    const validacionApellido = () => {
        if(apellido.trim() && isNaN(apellido)){
            setApellido(apellido)
            setValidar(true)
            return true
        } else {
            setValidar(false)
            return 
        }
    }
    const validacionEmail = () => {
    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    if(email.trim() && regEx.test(email)){
        setEmail(email)
        console.log(email)
        setValidar(true)
        return true
    } else {
        setValidar(false)
        console.log(validar)
        return 
    }
    }
    const validacionDni= () => {
    const regEx = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/
        if(dni.trim() && regEx.test(dni)){
            setDni(dni)
            setValidar(true)
            return true            
        } else {
            setValidar(false)
            return 
        }
        
    }


  return (
    <Container fluid xs={12} sm={12} md={8}>
        <Titulo></Titulo>
        <Form className='d-flex justify-content-center align-items-center' noValidate >
            <Col xs={12} sm={12} md={6}>
            <Form.Group className='mb-2'>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type='text' required isValid={validar}  placeholder='Ingrese sus nombres' onChange={e => setNombre(e.target.value)}></Form.Control>
                {  
                   (validar) ? 
                <Form.Control.Feedback type="valid">Nice</Form.Control.Feedback> : 
                <Form.Control.Feedback className="invalid">Try again</Form.Control.Feedback>
    
                }
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type='text' required  placeholder='Ingrese sus apellidos' onChange={e => setApellido(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Email: </Form.Label>
                <Form.Control type='email' required  placeholder='Ingrese su email. Ej: rolling@rolling.com' onChange={e => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>DNI: </Form.Label>
                <Form.Control type='number' required placeholder='Ingrese su DNI. Ej: 30000000' onChange={e => setDni(e.target.value)}></Form.Control>
            </Form.Group>
            <Button className='mb-2 mt-2 float-end' variant="danger" type="button" onClick={validarDatos}>Send</Button>
            </Col>
        </Form>       
    </Container>
  )
}

export default Formulario