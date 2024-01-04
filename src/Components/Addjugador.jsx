import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Alert, Form, Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios'
import { useLocation } from "react-router-dom"
import './AddJugador.css';


function Addjugador()  {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const[name1j1, setName1j1] = useState('')
    const[nume1j1, setNume1j1] = useState('')



    function handleSubmite1j1(e) {
        e.preventDefault()
        const equipo = params.get("equipo")
        console.log(nume1j1)
        var error=false;
        if(nume1j1 == ''){
            error=true;
        }
        if(name1j1 == ''){
            error=true;
        }
        console.log(error)
        if(!error){
        axios.get('/api/equipo/validar/'+equipo+'/'+nume1j1)
        .then( res =>  {
        console.log(res.data)
        if(res.data.length == 0 ){
            const equipo = params.get("equipo")
            axios.post('api/equipo/post/' + equipo, {
            name: name1j1,
            num: nume1j1
            }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
            .then(function (response) {
            console.log(response.data);
            alert("El jugador fue agregado")
            
            })
            .catch(function (error) {
            console.log(error);

            });
        }
        else{
            alert("El numero de jugador ya existe")
        }
        })
        .catch(err => {
        console.log(err);
        })
        }else{
            alert("Los espacios no pueden estar vacios")
        }
    }
        

    return(
        <div >
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Tablero</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Players">Jugadores</Nav.Link>
            <Nav.Link href="/Board">Puntacion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Card className='Information'>
        <Card.Header>Añadir Jugador</Card.Header>
        <Card.Text>
        <br/>
        <Form onSubmit={handleSubmite1j1}>
        <Form.Control id='num' type='text' value={nume1j1} placeholder="Numero" onChange={e => setNume1j1(e.target.value)}/>
        <Form.Control id='name' type='text' value={name1j1} placeholder="Nombre" onChange={e => setName1j1(e.target.value)}/> 
        <br/>
        <Button type='submit'>Añadir</Button>
        </Form>
        </Card.Text>
        </Card>
        <Button href='/Players'  variant="warning">Volver</Button>
        </div>
    );

} export default Addjugador;