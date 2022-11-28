import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, ListGroup, Row} from 'react-bootstrap';
import axios from 'axios'
import './torneo.css';
import 'react-tournament-board/style.css'; // import styles



function Torneo()  {

    const [Final, setFinal] = useState([])
    useEffect(() => {
    axios.get('/api/fase/get/finales' )
    .then( res =>  {
      console.log(res.data)
      setFinal(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    },[])

    const fasefinal = Final.map(finales => {
        const url = "/home?local="+finales.equipolocal+"&visitante="+finales.equipovisitante+"&fase=finales&id="+finales._id
        if(finales.validar){
            return( 
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <Card style={{ width: '12rem' }}>
                <ListGroup variant="flush">
                    
                    <ListGroup.Item ><a href={url} className="nolink">{finales.equipolocalname}</a></ListGroup.Item>
                    <ListGroup.Item ><a href={url} className="nolink">{finales.equipovisitantename}</a></ListGroup.Item>
                </ListGroup>
                </Card>
                
                </div>   
                )
        }else{
        }
        }
    )
    const [Semifinal, setSemfinal] = useState([])
    useEffect(() => {
    axios.get('/api/fase/get/semifinal' )
    .then( res =>  {
      console.log(res.data)
      setSemfinal(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    },[])

    const semfinales = Semifinal.map(semifinales => {
        const url = "/home?local="+semifinales.equipolocal+"&visitante="+semifinales.equipovisitante+"&fase=semifinal&id="+semifinales._id
        if(semifinales.validar){
            return( 
                <div>
                    <br/>
                    <br/>
                    <br/>
                <Card style={{ width: '12rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item ><a href={url} className="nolink">{semifinales.equipolocalname}</a></ListGroup.Item>
                    <ListGroup.Item ><a href={url} className="nolink">{semifinales.equipovisitantename}</a></ListGroup.Item>
                </ListGroup>
                </Card>
                <br/>
                <br/>
                <br/>
                </div>   
                )
        }else{
        }
        }
    )
    const [Cuartos, setCuartos] = useState([])
    useEffect(() => {
    axios.get('/api/fase/get/cuartos' )
    .then( res =>  {
      console.log(res.data)
      setCuartos(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    },[])

    const cuarto = Cuartos.map(cuartos => {
        const url = "/home?local="+cuartos.equipolocal+"&visitante="+cuartos.equipovisitante+"&fase=cuartos&id="+cuartos._id
        if(cuartos.validar){
            return( 
                <div>
                    <br/>
                <Card style={{ width: '12rem' }}>
                <ListGroup variant="flush">
                    
                    <ListGroup.Item ><a href={url} className="nolink">{cuartos.equipolocalname}</a></ListGroup.Item>
                    <ListGroup.Item ><a href={url} className="nolink">{cuartos.equipovisitantename}</a></ListGroup.Item>
                </ListGroup>
                </Card>
                
                </div>   
                )
        }else{
        }
        }
    ) 

    const [Ganador, setGanador] = useState([])
    useEffect(() => {
    axios.get('/api/fase/ganador/get' )
    .then( res =>  {
      console.log(res.data)
      setGanador(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    },[])

    const ganador = Ganador.map(cuartos => {
        if(cuartos.validar){
            return( 
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <Card style={{ width: '12rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item ><a className="nolink">{cuartos.equiponame}</a></ListGroup.Item>
                </ListGroup>
                </Card>
                
                </div>   
                )
        }else{
        }
        }
    )
    return (
        <div>
            <Row>            
            <Col lg={2}>
            <Card bg="dark"  text="white"  style={{ width: '12rem' }}>
            <Card.Text>
            Cuartos 
            </Card.Text>
            </Card>    
        {cuarto}
        </Col>
        <Col lg={2}>
            <Card bg="dark"  text="white"  style={{ width: '12rem' }}>
            <Card.Text>
            Semifinales 
            </Card.Text>
            </Card>    
        {semfinales}
        
        </Col >
        <Col lg={2}>
            <Card bg="dark"  text="white"  style={{ width: '12rem' }}>
            <Card.Text>
            Final 
            </Card.Text>
            </Card>    
        {fasefinal}
        </Col>
        <Col lg={2}>
        
            <Card bg="dark"  text="white"  style={{ width: '12rem' }}>
            <Card.Text>
            Ganador 
            </Card.Text>
            </Card>    
        {ganador}
        </Col>
        </Row>

        </div>
      );  
    
    } export default Torneo;