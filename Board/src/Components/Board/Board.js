import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Board.css';
import axios from 'axios'
import { useLocation } from "react-router-dom"


function Board()  {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const [tablero, setTablero] = useState([])
  useEffect(() => {
    const fase = params.get("fase")
    const id = params.get("id")
    console.log(fase);
    axios.get('/api/fase/get/'+ fase +'/'+id)
    .then( res =>  {
      console.log(res.data)
      setTablero(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  const tablerocs = tablero.map(tableros => {
    return( 
      <div>
        <Container>
            <Row>
            <Col lg={5} md={5} sm={5}><Form.Control className="Points" type="text" value={tableros.local} disabled/></Col><Col></Col>
            <Col lg={5} md={5} sm={5}><Form.Control className="Points" type="text" value={tableros.visitante} disabled/></Col></Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row><Col text-align="center"><Form.Control className="Cuarto" type="text" value={tableros.cuarto} disabled/></Col></Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </Container>
    </div>   
    )}
  )

  const [Player1, setPlayer1] = useState([])
  useEffect(() => {
    const local = params.get("local")
    console.log(local);
    axios.get('/api/equipo/get/'+ local )
    .then( res =>  {
      console.log(res.data)
      setPlayer1(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  const NameEq1 = Player1.map(players => {
    if(players.Equipo == null){

    }else{
    return( 
    <div>
      <Card.Title className="NameEq1">{players.Equipo}</Card.Title>
    </div>   
    )
    }
  })
  
  const listplay1 = Player1.map(players => {
    if(players.name == null && players.num == null){

    }else{
    return( 
      <div>
    <Card.Text>
    <Row> 
    <Col lg={3} md={2} sm={2} xs={2}>
    <Form.Control className= "FormColor" type="text" size="10" value={players.num} disabled/>
    </Col>
    <Col lg={9} md={6} sm={12} xs={12}>
    <Form.Control className= "FormColor" type="text" size="10" value={players.name} disabled/>
    </Col>
    </Row>
    <Form >
    {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
    <Form.Check className="Container" inline name="group1" type={type}id={`inline-${type}-1`}/>
    <Form.Check inline name="group1" type={type}id={`inline-${type}-2`}/>
    <Form.Check inline name="group1" type={type} id={`inline-${type}-1`}/>
    <Form.Check inline name="group1" type={type} id={`inline-${type}-1`}/>
    <Form.Check inline name="group1" type={type} id={`inline-${type}-1`}/>
    </div>))}
    </Form>
    </Card.Text>
    </div>   
    )}
  })

  const [Player2, setPlayer2] = useState([])
  useEffect(() => {
    const visitante = params.get("visitante")
    axios.get('/api/equipo/get/'+ visitante )
    .then( res =>  {
      console.log(res.data)
      setPlayer2(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    },[])

    const NameEq2 = Player2.map(players => {
      if(players.Equipo == null){
  
      }else{
      return( 
      <div>
        <Card.Title className="NameEq1">{players.Equipo}</Card.Title>
      </div>   
      )
      }
    })

    const listplay2 = Player2.map(players => {
      if(players.name == null && players.num == null){

      }else{
      return( 
        <div>
      <Card.Text>
      <Row> 
      <Col lg={3} md={2} sm={2} xs={2}>
      <Form.Control className= "FormColor" type="text" size="10" value={players.num} disabled/>
      </Col>
      <Col lg={9} md={6} sm={12} xs={12}>
      <Form.Control className= "FormColor" type="text" size="10" value={players.name} disabled/>
      </Col>
      </Row>
      <Form >
      {['checkbox'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
      <Form.Check className="Container" inline name="group1" type={type}id={`inline-${type}-1`}/>
      <Form.Check inline name="group1" type={type}id={`inline-${type}-2`}/>
      <Form.Check inline name="group1" type={type} id={`inline-${type}-1`}/>
      <Form.Check inline name="group1" type={type} id={`inline-${type}-1`}/>
      <Form.Check inline name="group1" type={type} id={`inline-${type}-1`}/>
      </div>))}
      </Form>
      </Card.Text>
      </div>   
      )}
    })
  
        return (
          <div>
          <Container>
            <Row>
            <Col >
            <Card className="rightCard">
              <Card.Body>
              <Card.Title className="NameEq">LOCAL </Card.Title>
             {NameEq1}

             {listplay1}
          
            </Card.Body>
            </Card>
          </Col>


        <Col lg={5}> 
        <Card className='Center'>
        <Card.Body>
          <Card.Title   className="NameTor"><a href="/torneo"className="nolink1" >Torneo</a></Card.Title>
          {tablerocs}
        </Card.Body>
        </Card>
        </Col>
        <Col>


        <Card className=  "rightCard" >
        <Card.Body>
              <Card.Title className="NameEq">VISITANTE </Card.Title>
              {NameEq2}

              {listplay2}        
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        
        </div>
        );

}

export default Board;