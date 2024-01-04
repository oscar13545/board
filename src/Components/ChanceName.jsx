import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Alert, Form, Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios'
import { useLocation } from "react-router-dom"
import './AddJugador.css';


function ChanceName()  {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const[name1j1, setName1j1] = useState('')

    function igualarnombre(equipo, name){
        console.log(equipo)
        var id=""
        var posicion=""
        if(equipo== "equipo1"){
            id="637fe44f7a3c1c86709a747f"
            posicion="local"
        }
        if(equipo== "equipo2"){
            id="637fe44f7a3c1c86709a747f"
            posicion="visitante"
        }
        if(equipo== "equipo3"){
            id="637fe4767a3c1c86709a7481"
            posicion="local"
        }
        if(equipo== "equipo4"){
            id="637fe4767a3c1c86709a7481"
            posicion="visitante"
        }
        if(equipo=="equipo5"){
            id="637fe4e87a3c1c86709a7483"
            posicion="local"
        }
        if(equipo== "equipo6"){
            id="637fe4e87a3c1c86709a7483"
            posicion="visitante"
        }
        if(equipo=="equipo7"){
            id="637fe50d7a3c1c86709a7485"
            posicion="local"
        }
        if(equipo== "equipo8"){
            id="637fe50d7a3c1c86709a7485"
            posicion="visitante"
        }
        axios.post('api/equipoigual/'+posicion+'/'+id, {
            name: name1j1
            }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
            .then(function (response) {
            console.log(response.data);
            })
            .catch(function (error) {
            console.log(error);
            });
    }



    function handleSubmite1j1(e) {
        e.preventDefault()
        var error=false;
        if(name1j1 == ''){
            error=true;
        }
        if(!error){
            console.log(error)
            axios.get('/api/equiponame/validar/equipo1/637e87d7304404f1a640ad7f/'+name1j1)
            .then( res =>  {
            console.log(res.data.length)
            if(res.data.length == 0 ){ 
                axios.get('/api/equiponame/validar/equipo2/637e9955304404f1a640ad81/'+name1j1)
                .then( res =>  {
                console.log(res.data.length)
                if(res.data.length == 0 ){ 
                    axios.get('/api/equiponame/validar/equipo3/637fe653e7d9611e8cdcf030/'+name1j1)
                    .then( res =>  {
                    console.log(res.data.length)
                    if(res.data.length == 0 ){ 
                        axios.get('/api/equiponame/validar/equipo4/637fe666e7d9611e8cdcf031/'+name1j1)
                        .then( res =>  {
                        console.log(res.data.length)
                        if(res.data.length == 0 ){ 
                            axios.get('/api/equiponame/validar/equipo5/637ff6b8e7d9611e8cdcf032/'+name1j1)
                            .then( res =>  {
                            console.log(res.data.length)
                            if(res.data.length == 0 ){ 
                                axios.get('/api/equiponame/validar/equipo6/637ff6c9e7d9611e8cdcf033/'+name1j1)
                                .then( res =>  {
                                console.log(res.data.length)
                                if(res.data.length == 0 ){ 
                                    axios.get('/api/equiponame/validar/equipo7/637ff6d7e7d9611e8cdcf034/'+name1j1)
                                    .then( res =>  {
                                    console.log(res.data.length)
                                    if(res.data.length == 0 ){ 
                                        axios.get('/api/equiponame/validar/equipo8/637ff6e8e7d9611e8cdcf035/'+name1j1)
                                        .then( res =>  {
                                        console.log(res.data.length)
                                        if(res.data.length == 0 ){ 
                                            const equipo = params.get("equipo")
                                            const id = params.get("id")
                                            axios.post('api/equiponame/post/'+equipo+'/'+id, {
                                            name: name1j1
                                            }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
                                            .then(function (response) {
                                            console.log(response.data);
                                            igualarnombre(equipo,name1j1)
                                            alert("Nombre del equipo cambiado")
                                            })
                                            .catch(function (error) {
                                            console.log(error);
                                            });
                                        }else{
                                            alert("Ya un equipo tiene ese nombre")
                                        }
                                        })
                                        .catch(err => {
                                        console.log(err);
                                        })
                                    }else{
                                        alert("Ya un equipo tiene ese nombre")
                                    }
                                    })
                                    .catch(err => {
                                    console.log(err);
                                    })
                                                        }else{
                                    alert("Ya un equipo tiene ese nombre")
                                }
                                })
                                .catch(err => {
                                console.log(err);
                                })
                            }else{
                                alert("Ya un equipo tiene ese nombre")
                            }
                            })
                            .catch(err => {
                            console.log(err);
                            })
                        }else{
                            alert("Ya un equipo tiene ese nombre")
                        }
                        })
                        .catch(err => {
                        console.log(err);
                        }) 
                    }else{
                        alert("Ya un equipo tiene ese nombre")
                    }
                    })
                    .catch(err => {
                    console.log(err);
                    })
                }else{
                    alert("Ya un equipo tiene ese nombre")
                }
                })
                .catch(err => {
                console.log(err);
                })
            }else{
                alert("Ya un equipo tiene ese nombre")
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
        <Card.Header>Cambiar nombre</Card.Header>
        <Card.Text>
        <br/>
        <Form onSubmit={handleSubmite1j1}>
        <Form.Control id='name' type='text' value={name1j1} placeholder="Nombre" onChange={e => setName1j1(e.target.value)}/> 
        <br/>
        <Button type='submit'>Añadir</Button>
        </Form>
        </Card.Text>
        </Card>
        <Button href='/Players'  variant="warning">Volver</Button>
        </div>
    );

} export default ChanceName;