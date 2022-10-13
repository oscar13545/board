import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {collection, doc, updateDoc, getDocs} from 'firebase/firestore'
import {db} from "../firebase"
import { Button, Navbar, Container, Nav, Alert, Form, Row, Col} from 'react-bootstrap';


function RealBoard()  {

    const [tablero, setTablero] = useState([])
    function handleSubmitc1(e) {
        e.preventDefault()
        const jugador1ocolref = doc(db, 'Tablero', '1')
        const Cuarto =1
        updateDoc(jugador1ocolref, {Cuarto})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.massage)
        })
    }
    function handleSubmitc2(e) {
        e.preventDefault()
        const jugador1ocolref = doc(db, 'Tablero', '1')
        const Cuarto =2
        updateDoc(jugador1ocolref, {Cuarto})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.massage)
        })
    }
    function handleSubmitc3(e) {
        e.preventDefault()
        const jugador1ocolref = doc(db, 'Tablero', '1')
        const Cuarto =3
        updateDoc(jugador1ocolref, {Cuarto})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.massage)
        })
    }
    function handleSubmitc4(e) {
        e.preventDefault()
        const jugador1ocolref = doc(db, 'Tablero', '1')
        const Cuarto =4
        updateDoc(jugador1ocolref, {Cuarto})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.massage)
        })
    }

  function handleSubmite2p1(e) {
    e.preventDefault()
    const tablegetrocolref = collection(db, 'Tablero')
    getDocs(tablegetrocolref)
      .then(response => {
        const table = response.docs.map(doc=>({
          data: doc.data(),
          id: doc.id,
        }))
        setTablero(table)
        const PuntacionEq2 = (table[0].data.PuntacionEq2)+1
        const tablerocolref = doc(db, 'Tablero', '1')
            updateDoc(tablerocolref, {PuntacionEq2})
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.log(error.massage)
    })
        
      }) 
      .catch(error => console.log(error.massage))
  }

  function handleSubmite2p2(e) {
    e.preventDefault()
    const tablegetrocolref = collection(db, 'Tablero')
    getDocs(tablegetrocolref)
      .then(response => {
        const table = response.docs.map(doc=>({
          data: doc.data(),
          id: doc.id,
        }))
        setTablero(table)
        const PuntacionEq2 = (table[0].data.PuntacionEq2)+2
        const tablerocolref = doc(db, 'Tablero', '1')
            updateDoc(tablerocolref, {PuntacionEq2})
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.log(error.massage)
    })
      }) 
      .catch(error => console.log(error.massage))
  }

  function handleSubmite2p3(e) {
    e.preventDefault()
    const tablegetrocolref = collection(db, 'Tablero')
    getDocs(tablegetrocolref)
      .then(response => {
        const table = response.docs.map(doc=>({
          data: doc.data(),
          id: doc.id,
        }))
        setTablero(table)
        const PuntacionEq2 = (table[0].data.PuntacionEq2)+3
        const tablerocolref = doc(db, 'Tablero', '1')
            updateDoc(tablerocolref, {PuntacionEq2})
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.log(error.massage)
    })
        
      }) 
      .catch(error => console.log(error.massage))
  }

  function handleSubmite1p1(e) {
    e.preventDefault()
    const tablegetrocolref = collection(db, 'Tablero')
    getDocs(tablegetrocolref)
      .then(response => {
        const table = response.docs.map(doc=>({
          data: doc.data(),
          id: doc.id,
        }))
        setTablero(table)
        const PuntacionEq1 = (table[0].data.PuntacionEq1)+1
        const tablerocolref = doc(db, 'Tablero', '1')
            updateDoc(tablerocolref, {PuntacionEq1})
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.log(error.massage)
    })
        
      }) 
      .catch(error => console.log(error.massage))
  }

  function handleSubmite1p2(e) {
    e.preventDefault()
    const tablegetrocolref = collection(db, 'Tablero')
    getDocs(tablegetrocolref)
      .then(response => {
        const table = response.docs.map(doc=>({
          data: doc.data(),
          id: doc.id,
        }))
        setTablero(table)
        const PuntacionEq1 = (table[0].data.PuntacionEq1)+2
        const tablerocolref = doc(db, 'Tablero', '1')
            updateDoc(tablerocolref, {PuntacionEq1})
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.log(error.massage)
    })
      }) 
      .catch(error => console.log(error.massage))
  }

  function handleSubmite1p3(e) {
    e.preventDefault()
    const tablegetrocolref = collection(db, 'Tablero')
    getDocs(tablegetrocolref)
      .then(response => {
        const table = response.docs.map(doc=>({
          data: doc.data(),
          id: doc.id,
        }))
        setTablero(table)
        const PuntacionEq1 = (table[0].data.PuntacionEq1)+3
        const tablerocolref = doc(db, 'Tablero', '1')
            updateDoc(tablerocolref, {PuntacionEq1})
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.log(error.massage)
    })
        
      }) 
      .catch(error => console.log(error.massage))
  }

  const [PuntacionEq1f, setPuntacionEq1f] = useState([])
  const [PuntacionEq2f, setPuntacionEq2f] = useState([])
  function handleSubmite1(e) {
    e.preventDefault()
    if(PuntacionEq1f === ''){
      return
    }
    if(PuntacionEq2f === ''){
      return
    }
    const PuntacionEq2 = parseInt(PuntacionEq2f)
    const PuntacionEq1 = parseInt(PuntacionEq1f)
    const jugador1ocolref = doc(db, 'Tablero', '1')
    updateDoc(jugador1ocolref, {PuntacionEq1,PuntacionEq2})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.massage)
    })
  }

  function handleSubmite0(e) {
    const PuntacionEq2 = 0
    const PuntacionEq1 = 0
    const jugador1ocolref = doc(db, 'Tablero', '1')
    updateDoc(jugador1ocolref, {PuntacionEq1,PuntacionEq2})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.massage)
    })
  }


  const [show, setShow] = useState(false);
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Tablero</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Players">Jugadores</Nav.Link>
            <Nav.Link href="/Board">Puntuacion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <br/>
    <h2>Equipo Local: </h2>
    <Row>
    <Col>
    <Button variant="light" onClick={handleSubmite1p1}>Mas 1 punto</Button>
    </Col><Col>
    <Button variant="light" onClick={handleSubmite1p2}>Mas 2 punto</Button>
    </Col><Col>
    <Button variant="light" onClick={handleSubmite1p3}>Mas 3 punto</Button>
    </Col>
    </Row>
    <br/>
    <br/>
    <h2>Equipo Visitante: </h2>
    <Row>
    <Col>
    <Button  variant="light"  onClick={handleSubmite2p1}>Mas 1 punto</Button>
    </Col><Col>
    <Button variant="light" onClick={handleSubmite2p2}>Mas 2 punto</Button>
    </Col><Col>
    <Button  variant="light" onClick={handleSubmite2p3}>Mas 3 punto</Button>
    </Col>
    </Row>
    <br/>
    <br/>
    <h2>Cuarto del partido: </h2>
    <Row>
    <Col>
    <Button  variant="light" onClick={handleSubmitc1}>1 Cuarto</Button>
    </Col><Col>
    <Button  variant="light" onClick={handleSubmitc2}>2 Cuarto</Button>
    </Col><Col>
    <Button  variant="light" onClick={handleSubmitc3}>3 Cuarto</Button>
    </Col><Col>
    <Button  variant="light" onClick={handleSubmitc4}>4 Cuarto</Button>
    </Col>
    </Row>
    <br/>
    <br/>
    <h2>Editar: </h2>
    <Alert show={show} variant="secondary">
        <Alert.Heading>Que deseas cambiar?!</Alert.Heading>
        <Form  onSubmit={handleSubmite1}>
        <Form.Control id='PuntacionEq1' type='number' value={PuntacionEq1f}  placeholder="Equipo 1" onChange={e => setPuntacionEq1f(e.target.value)}/>
        <Form.Control id='PuntacionEq2' type='number' value={PuntacionEq2f} placeholder="Equipo 2" onChange={e => setPuntacionEq2f(e.target.value)}/>
        <Button type='submit'>Añadir</Button>
        </Form>
        <br/>
        
        <hr />
            <Row>
                <Col>
                <Button variant="danger" onClick={handleSubmite0}>Borrar Todo</Button>
                </Col>
                <Col>
                <Button onClick={() => setShow(false)} variant="outline-secondary">
            Listo!
          </Button>
                </Col>
            </Row>
          
      </Alert>

      {!show && <Button  variant="light" onClick={() => setShow(true)}>Editar</Button>}

      {tablero}
    </div>
  );  

} export default RealBoard;
