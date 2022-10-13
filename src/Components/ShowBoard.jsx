import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doc, updateDoc} from 'firebase/firestore'
import {db} from "../firebase"
import { Button, Card, CardGroup, Form, Navbar, Container, Nav } from 'react-bootstrap';


function ShowBoard()  {

  const[name1j1, setName1j1] = useState('')
  const[nume1j1, setNume1j1] = useState('')
  const[name1j2, setName1j2] = useState('')
  const[nume1j2, setNume1j2] = useState('')

  const[name2j1, setName2j1] = useState('')
  const[nume2j1, setNume2j1] = useState('')
  const[name2j2, setName2j2] = useState('')
  const[nume2j2, setNume2j2] = useState('')
  
  
  function handleSubmite1j1(e) {
    e.preventDefault()
    if(name1j1 === ''){
      return
    }
    if(nume1j1 === ''){
      return
    }
    const jugador1ocolref = doc(db, 'Jugador1', '4ENlhPLH5Z3pCgYSANPD')
    updateDoc(jugador1ocolref, {name1j1,nume1j1})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.massage)
    })
  }
  function handleSubmite1j2(e) {
    e.preventDefault()
    if(name1j2 === ''){
      return
    }
    if(nume1j2 === ''){
      return
    }
    const jugador1ocolref = doc(db, 'Jugador1', '4ENlhPLH5Z3pCgYSANPD')
    updateDoc(jugador1ocolref, {name1j2,nume1j2})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.massage)
    })
  }

  function handleSubmite2j1(e) {
    e.preventDefault()
    if(name2j1 === ''){
      return
    }
    if(nume2j1 === ''){
      return
    }
    const jugador1ocolref = doc(db, 'Jugador2', 'mVPFYr29Kt23iSHixYEu')
    updateDoc(jugador1ocolref, {name2j1,nume2j1})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.massage)
    })
  }
  function handleSubmite2j2(e) {
    e.preventDefault()
    if(name2j2 === ''){
      return
    }
    if(nume2j2 === ''){
      return
    }
    const jugador1ocolref = doc(db, 'Jugador2', 'mVPFYr29Kt23iSHixYEu')
    updateDoc(jugador1ocolref, {name2j2,nume2j2})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.massage)
    })
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Tablero</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Players">Jugadores</Nav.Link>
            <Nav.Link href="/Board">Puntacion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <h1>Lista</h1>
    <CardGroup>
    <Card >
    <Card.Header>Jugador1</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite1j1}>
      <Form.Control id='num' type='text' value={nume1j1}  placeholder="Numero" onChange={e => setNume1j1(e.target.value)}/>
      <Form.Control id='name' type='text' value={name1j1} placeholder="Nombre" onChange={e => setName1j1(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    <Card   >
    <Card.Header>Jugador2</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite1j2}>
      <Form.Control id='num' type='text' value={nume1j2}  placeholder="Numero" onChange={e => setNume1j2(e.target.value)}/>
      <Form.Control id='name' type='text' value={name1j2} placeholder="Nombre" onChange={e => setName1j2(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    <Card   >
    <Card.Header>Jugador2</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite1j2}>
      <Form.Control id='num' type='text' value={nume1j2}  placeholder="Numero" onChange={e => setNume1j2(e.target.value)}/>
      <Form.Control id='name' type='text' value={name1j2} placeholder="Nombre" onChange={e => setName1j2(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    <Card   >
    <Card.Header>Jugador2</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite1j2}>
      <Form.Control id='num' type='text' value={nume1j2}  placeholder="Numero" onChange={e => setNume1j2(e.target.value)}/>
      <Form.Control id='name' type='text' value={name1j2} placeholder="Nombre" onChange={e => setName1j2(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    </CardGroup>

    <br/>

    <CardGroup>
    <Card   >
    <Card.Header>Jugador1</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite2j1}>
      <Form.Control id='num' type='text' value={nume2j1}  placeholder="Numero" onChange={e => setNume2j1(e.target.value)}/>
      <Form.Control id='name' type='text' value={name2j1} placeholder="Nombre" onChange={e => setName2j1(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    <Card   >
    <Card.Header>Jugador2</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite2j2}>
      <Form.Control id='num' type='text' value={nume2j2}  placeholder="Numero" onChange={e => setNume2j2(e.target.value)}/>
      <Form.Control id='name' type='text' value={name2j2} placeholder="Nombre" onChange={e => setName2j2(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    <Card   >
    <Card.Header>Jugador2</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite1j2}>
      <Form.Control id='num' type='text' value={nume1j2}  placeholder="Numero" onChange={e => setNume1j2(e.target.value)}/>
      <Form.Control id='name' type='text' value={name1j2} placeholder="Nombre" onChange={e => setName1j2(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    <Card   >
    <Card.Header>Jugador2</Card.Header>
    <Card.Text>
    <Form  onSubmit={handleSubmite1j2}>
      <Form.Control id='num' type='text' value={nume1j2}  placeholder="Numero" onChange={e => setNume1j2(e.target.value)}/>
      <Form.Control id='name' type='text' value={name1j2} placeholder="Nombre" onChange={e => setName1j2(e.target.value)}/>
      <Button type='submit'>Añadir</Button>
    </Form>
    </Card.Text>
    </Card>
    </CardGroup>


   
    </div>
  );  

} export default ShowBoard;


