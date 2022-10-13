import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from "../../firebase"
import {Card, Container, Row, Col, Form} from 'react-bootstrap';
import './Board.css';


function Board()  {

  const [tablero, setTablero] = useState([])
  useEffect(() => {
    const tablerocolref = collection(db, 'Tablero')
    const getTablero = onSnapshot(tablerocolref, snapshot => {
      setTablero(snapshot.docs.map(doc=> ({id: doc.id, data: doc.data() })))
    })
  return () => {
    getTablero()
  }},[])

  const [Equipo1, setEquipo1] = useState([])
  useEffect(() => {
    const Equipoocolref = collection(db, 'Equipo1')
    const getEquipo1 = onSnapshot(Equipoocolref, snapshot => {
      setEquipo1(snapshot.docs.map(doc=> ({id: doc.id, data: doc.data() })))
    })
  return () => {
    getEquipo1()
  }},[])

  const [Equipo2, setEquipo2] = useState([])
  useEffect(() => {
    const Equipoocolref = collection(db, 'Equipo2')
    const getEquipo2 = onSnapshot(Equipoocolref, snapshot => {
      setEquipo2(snapshot.docs.map(doc=> ({id: doc.id, data: doc.data() })))
    })
  return () => {
    getEquipo2()
  }},[])

  const [Player1, setPlayer1] = useState([])
  useEffect(() => {
    const Jugador1colref = collection(db, 'Jugador1')
    const getplayer1 = onSnapshot(Jugador1colref, snapshot => {
      setPlayer1(snapshot.docs.map(doc=> ({id: doc.id, data: doc.data() })))
    })
  return () => {
    getplayer1()
  }},[])

  const [Player2, setPlayer2] = useState([])
  useEffect(() => {
    const Jugador2colref = collection(db, 'Jugador2')
    const getplayer2 = onSnapshot(Jugador2colref, snapshot => {
      setPlayer2(snapshot.docs.map(doc=> ({id: doc.id, data: doc.data() })))
    })
  return () => {
    getplayer2()
  }},[])

        return (
          <div>
          <Container>
            <Row>
            <Col >
            <Card className="rightCard">
              <Card.Body>
              <Card.Title className="NameEq">LOCAL </Card.Title>
              <Card.Title className="NameEq1">{Equipo1.map(equipo1=> (<div>{equipo1.data.Name}</div>))}</Card.Title>

              <Card.Text>
              <Row> 
                <Col lg={3} md={2} sm={2} xs={2}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player1.map(play1=> (play1.data.nume1j1))} disabled/>
                </Col>
                <Col lg={9} md={6} sm={12} xs={12}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player1.map(play1=> (play1.data.name1j1))} disabled/>
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

            <Card.Text>
              <Row> 
                <Col lg={3} md={2} sm={2} xs={2}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player1.map(play1=> (play1.data.nume1j2))} disabled/>
                </Col>
                <Col lg={9} md={6} sm={12} xs={12}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player1.map(play1=> (play1.data.name1j2))} disabled/>
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
            </Card.Body>
            </Card>
          </Col>


        <Col lg={5}> 
        <Card className='Center'>
        <Card.Body>
          <Card.Title className="NameTor">Torneo</Card.Title>
          <Container>
            <Row>
            <Col lg={5} md={5} sm={5}><Form.Control className="Points" type="text" value={tablero.map(table=> (table.data.PuntacionEq1))} disabled/></Col><Col></Col>
            <Col lg={5} md={5} sm={5}><Form.Control className="Points" type="text" value={tablero.map(table=> (table.data.PuntacionEq2))} disabled/></Col></Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row><Col text-align="center"><Form.Control className="Cuarto" type="text" value={tablero.map(table=> (table.data.Cuarto))} disabled/></Col></Row>
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
        </Card.Body>
        </Card>
        </Col>
        <Col>


        <Card className=  "rightCard" >
        <Card.Body>
              <Card.Title className="NameEq">VISITANTE </Card.Title>
              <Card.Title className="NameEq1">{Equipo2.map(equipo2=> (<div>{equipo2.data.Name}</div>))}</Card.Title>

              <Card.Text>
              <Row> 
                <Col lg={3} md={1} sm={1} xs={1}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player2.map(play2=> (play2.data.nume2j1))} disabled/>
                </Col>
                <Col lg={9} md={6} sm={12} xs={12}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player2.map(play2=> (play2.data.name2j1))} disabled />
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
            <Card.Text>
              <Row> 
                <Col lg={3} md={1} sm={1} xs={1}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player2.map(play2=> (play2.data.nume2j2))} disabled/>
                </Col>
                <Col lg={9} md={6} sm={12} xs={12}>
                  <Form.Control className=  "FormColor" type="text"  size="10" value={Player2.map(play2=> (play2.data.name2j2))} disabled />
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
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        
        </div>
        );

}

export default Board;