import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Button, Navbar, Container, Nav, Alert, Form, Row, Col, CarouselItem, Card} from 'react-bootstrap';


function RealBoard()  {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [PuntacionEq1f, setPuntacionEq1f] = useState([])
  const [PuntacionEq2f, setPuntacionEq2f] = useState([])
  const [Cuarto, setCuarto] = useState([])
  const [id, setId] = useState('')

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

    function refrescar(fase) {
        axios.get('/api/fase/get/'+fase )
        .then( res =>  {
          console.log(res.data)
          setCuartos(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }

    const cuarto = Cuartos.map(cuartos => {
        const url = "/home?local="+cuartos.equipolocal+"&visitante="+cuartos.equipovisitante+"&fase=cuartos&id="+cuartos._id
        if(cuartos.validar){
            return( 
                <div>
        <Alert show={show} variant="secondary">
        <Alert.Heading>{cuartos.equipolocalname} vs {cuartos.equipovisitantename}</Alert.Heading>
        <br/>
        <Form  onSubmit={handleSubmite1}>
        <Form.Label>{cuartos.equipolocalname}</Form.Label>
        <Form.Control id='PuntacionEq1' type='number' value={PuntacionEq1f}  placeholder={cuartos.local} onChange={e => setPuntacionEq1f(e.target.value)}/>
        <Form.Label>{cuartos.equipovisitantename}</Form.Label>
        <Form.Control id='PuntacionEq2' type='number' value={PuntacionEq2f} placeholder={cuartos.visitante} onChange={e => setPuntacionEq2f(e.target.value)}/>
        <h1>Van en el {cuartos.cuarto} cuarto</h1>
        <Row>
        <Col>
        <Button  variant="light" onClick={() => setCuarto(1)}>1 Cuarto</Button>
        </Col><Col>
        <Button  variant="light" onClick={() => setCuarto(2)}>2 Cuarto</Button>
        </Col><Col>
        <Button  variant="light" onClick={() => setCuarto(3)}>3 Cuarto</Button>
        </Col><Col>
        <Button  variant="light" onClick={() => setCuarto(4)}>4 Cuarto</Button>
        </Col>
        </Row>
        
          <br/>
          <br/>
        <Button type='submit' onClick={() => setId(cuartos._id)}>Añadir</Button>
        </Form>
        <br/>
        
        <hr />
            <Row>
                <Col>
                <Button onClick={() => handleSubmite0(cuartos._id,cuartos.cuarto,cuartos.local,cuartos.equipolocalname,cuartos.equipolocal,cuartos.visitante,cuartos.equipovisitantename,cuartos.equipovisitante)} variant="outline-secondary">Terminar</Button>
                </Col>
                <Col>
                <Button onClick={() => setShow(false)} variant="outline-secondary">Listo!</Button>
                </Col>
            </Row>
          
      </Alert>      
                </div>   
                )
        }else{
        }
    })

  function handleSubmite1(e) {
    e.preventDefault()
    var error=false;
        if(PuntacionEq1f == ''){
            error=true;
        }
        if(PuntacionEq2f == ''){
            error=true;
        }
        if(Cuarto == ''){
          error=true;
      }
        console.log(error)
        if(!error){
          axios.post('api/fase/update/cuartos/'+ id, {
            local: PuntacionEq1f,
            visitante: PuntacionEq2f,
            cuarto: Cuarto
            }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
            .then(function (response) {
            console.log(response.data);
            setPuntacionEq1f('')
            setPuntacionEq2f('')
            setCuarto('')
            refrescar("cuartos")
            refrescar1("semifinal")
            refrescar2("finales")
            alert("El tablero cambio")
            })
            .catch(function (error) {
            console.log(error);
            });
        }else{
            alert("Los espacios no pueden estar vacios")
        }
    
  }

  function handleSubmite0(id,cuarto,localp,localn,local,visitantep,visitanten,visitante) {
    if(parseInt(localp)>parseInt(visitantep)){
      var ganadorname = localn
      var ganador = local
    }else{
      var ganadorname = visitanten
      var ganador = visitante
    }
    var semifinales = ""
    var posicion = ""
    if(id == "637fe44f7a3c1c86709a747f" ){
      semifinales = "637fe3577a3c1c86709a7477"
      posicion = "local"
    }
    if(id == "637fe4767a3c1c86709a7481"){
      semifinales = "637fe3577a3c1c86709a7477"
      posicion = "visitante"
    }
    if(id == "637fe4e87a3c1c86709a7483"){
      semifinales = "637fe3c97a3c1c86709a747b"
      posicion = "local"
    }
    if(id == "637fe50d7a3c1c86709a7485"){
      semifinales = "637fe3c97a3c1c86709a747b"
      posicion = "visitante"
    }
    if(cuarto != 4){
      alert("No se puede terminar antes del 4 cuarto")
    }else{
      axios.post('api/fase/update/semifinal/'+semifinales+"/"+posicion, {
        ganador: ganador,
        ganadorname: ganadorname,
        }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
        .then(function (response) {
        console.log(response.data);
        axios.get('/api/fase/get/semifinal/'+semifinales )
        .then( res =>  {
          console.log(res.data[0])
          if(posicion == "local"){
            if(res.data[0].equipovisitante == ""){
            }else{
              axios.post('/api/fase/validar/semifinal/'+semifinales)
            .then( res =>  {
              console.log("cambio a valido")
              alert("Se termino el partido")
            })
            .catch(err => {
              console.log(err);
            })
            }
          }else{
            if(res.data[0].local == ""){
            }else{
              axios.post('/api/fase/validar/semifinal/'+semifinales)
            .then( res =>  {
              console.log("cambio a valido")
              alert("Se termino el partido")
            })
            .catch(err => {
              console.log(err);
            })
            }
          }
        })
        .catch(err => {
          console.log(err);
        })

        })
        .catch(function (error) {
        console.log(error);

        });
    }

  }

  const [Semifinales, setSemifnales] = useState([])
    useEffect(() => {
      axios.get('/api/fase/get/semifinal' )
      .then( res =>  {
        console.log(res.data)
        setSemifnales(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    },[])

    const semifi = Semifinales.map(cuartos => {
      const url = "/home?local="+cuartos.equipolocal+"&visitante="+cuartos.equipovisitante+"&fase=cuartos&id="+cuartos._id
      if(cuartos.validar){
          return( 
              <div>
              <Alert show={show1} variant="secondary">
      <Alert.Heading>{cuartos.equipolocalname} vs {cuartos.equipovisitantename}</Alert.Heading>
      <br/>
      <Form  onSubmit={handleSubmite2}>
      <Form.Label>{cuartos.equipolocalname}</Form.Label>
      <Form.Control id='PuntacionEq1' type='number' value={PuntacionEq1f}  placeholder={cuartos.local} onChange={e => setPuntacionEq1f(e.target.value)}/>
      <Form.Label>{cuartos.equipovisitantename}</Form.Label>
      <Form.Control id='PuntacionEq2' type='number' value={PuntacionEq2f} placeholder={cuartos.visitante} onChange={e => setPuntacionEq2f(e.target.value)}/>
      <h1>Van en el {cuartos.cuarto} cuarto</h1>
      <Row>
      <Col>
      <Button  variant="light" onClick={() => setCuarto(1)}>1 Cuarto</Button>
      </Col><Col>
      <Button  variant="light" onClick={() => setCuarto(2)}>2 Cuarto</Button>
      </Col><Col>
      <Button  variant="light" onClick={() => setCuarto(3)}>3 Cuarto</Button>
      </Col><Col>
      <Button  variant="light" onClick={() => setCuarto(4)}>4 Cuarto</Button>
      </Col>
      </Row>
      
        <br/>
        <br/>
      <Button type='submit' onClick={() => setId(cuartos._id)}>Añadir</Button>
      </Form>
      <br/>
      
      <hr />
          <Row>
              <Col>
              <Button onClick={() => handleSubmite3(cuartos._id,cuartos.cuarto,cuartos.local,cuartos.equipolocalname,cuartos.equipolocal,cuartos.visitante,cuartos.equipovisitantename,cuartos.equipovisitante)} variant="outline-secondary">Terminar</Button>
              </Col>
              <Col>
              <Button onClick={() => setShow1(false)} variant="outline-secondary">Listo!</Button>
              </Col>
          </Row>
        
    </Alert>      
              </div>   
              )
      }else{
      }
  })
  function handleSubmite2(e) {
    e.preventDefault()
    var error=false;
        if(PuntacionEq1f == ''){
            error=true;
        }
        if(PuntacionEq2f == ''){
            error=true;
        }
        if(Cuarto == ''){
          error=true;
      }
        console.log(error)
        if(!error){
          axios.post('api/fase/update/semifinal/'+ id, {
            local: PuntacionEq1f,
            visitante: PuntacionEq2f,
            cuarto: Cuarto
            }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
            .then(function (response) {
            console.log(response.data);
            setPuntacionEq1f('')
            setPuntacionEq2f('')
            setCuarto('')
            refrescar("cuartos")
            refrescar1("semifinal")
            refrescar2("finales")
            alert("El tablero cambio")
            })
            .catch(function (error) {
            console.log(error);
            });
        }else{
            alert("Los espacios no pueden estar vacios")
        }
  }
  function refrescar1(fase) {
    axios.get('/api/fase/get/'+fase )
    .then( res =>  {
      console.log(res.data)
      setSemifnales(res.data)
    })
    .catch(err => {
      console.log(err);
    })
}

function handleSubmite3(id,cuarto,localp,localn,local,visitantep,visitanten,visitante) {
  if(parseInt(localp)>parseInt(visitantep)){
    var ganadorname = localn
    var ganador = local
  }else{
    var ganadorname = visitanten
    var ganador = visitante
  }
  var finales = "637f012be9d7f00dacc8099f"
  var posicion = ""
  if(id == "637fe3577a3c1c86709a7477" ){
    posicion = "local"
  }
  if(id == "637fe3c97a3c1c86709a747b"){
    posicion = "visitante"
  }
  if(cuarto != 4){
    alert("No se puede terminar antes del 4 cuarto")
  }else{
    axios.post('api/fase/update/finales/'+finales+"/"+posicion, {
      ganador: ganador,
      ganadorname: ganadorname,
      }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
      .then(function (response) {
      console.log(response.data);
      axios.get('/api/fase/get/finales/'+finales )
      .then( res =>  {
        console.log(res.data[0])
        if(posicion == "local"){
          if(res.data[0].equipovisitante == ""){
          }else{
            axios.post('/api/fase/validar/finales/'+finales)
          .then( res =>  {
            console.log("cambio a valido")
            alert("Se termino el partido")
          })
          .catch(err => {
            console.log(err);
          })
          }
        }else{
          if(res.data[0].local == ""){
          }else{
            axios.post('/api/fase/validar/finales/'+finales)
          .then( res =>  {
            console.log("cambio a valido")
            alert("Se termino el partido")
          })
          .catch(err => {
            console.log(err);
          })
          }
        }
      })
      .catch(err => {
        console.log(err);
      })

      })
      .catch(function (error) {
      console.log(error);

      });
  }

}

const [Finales, setFinales] = useState([])
useEffect(() => {
  axios.get('/api/fase/get/finales' )
  .then( res =>  {
    console.log(res.data)
    setFinales(res.data)
  })
  .catch(err => {
    console.log(err);
  })
},[])

const final = Finales.map(cuartos => {
  const url = "/home?local="+cuartos.equipolocal+"&visitante="+cuartos.equipovisitante+"&fase=cuartos&id="+cuartos._id
  console.log(cuartos.validar);
  if(cuartos.validar){
      return( 
          <div>
          <Alert show={show2} variant="secondary">
          <Alert.Heading>{cuartos.equipolocalname} vs {cuartos.equipovisitantename}</Alert.Heading>
          <br/>
          <Form  onSubmit={handleSubmite4}>
          <Form.Label>{cuartos.equipolocalname}</Form.Label>
          <Form.Control id='PuntacionEq1' type='number' value={PuntacionEq1f}  placeholder={cuartos.local} onChange={e => setPuntacionEq1f(e.target.value)}/>
          <Form.Label>{cuartos.equipovisitantename}</Form.Label>
          <Form.Control id='PuntacionEq2' type='number' value={PuntacionEq2f} placeholder={cuartos.visitante} onChange={e => setPuntacionEq2f(e.target.value)}/>
          <h1>Van en el {cuartos.cuarto} cuarto</h1>
          <Row>
          <Col>
          <Button  variant="light" onClick={() => setCuarto(1)}>1 Cuarto</Button>
          </Col><Col>
          <Button  variant="light" onClick={() => setCuarto(2)}>2 Cuarto</Button>
          </Col><Col>
          <Button  variant="light" onClick={() => setCuarto(3)}>3 Cuarto</Button>
          </Col><Col>
          <Button  variant="light" onClick={() => setCuarto(4)}>4 Cuarto</Button>
          </Col>
          </Row>
  
    <br/>
    <br/>
  <Button type='submit' onClick={() => setId(cuartos._id)}>Añadir</Button>
  </Form>
  <br/>
  
  <hr />
      <Row>
          <Col>
          <Button onClick={() => handleSubmite5(cuartos._id,cuartos.cuarto,cuartos.local,cuartos.equipolocalname,cuartos.equipolocal,cuartos.visitante,cuartos.equipovisitantename,cuartos.equipovisitante)} variant="outline-secondary">Terminar</Button>
          </Col>
          <Col>
          <Button onClick={() => setShow2(false)} variant="outline-secondary">Listo!</Button>
          </Col>
      </Row>
    
</Alert>      
          </div>   
          )
  }else{
  }
})

function handleSubmite4(e) {
  e.preventDefault()
  var error=false;
      if(PuntacionEq1f == ''){
          error=true;
      }
      if(PuntacionEq2f == ''){
          error=true;
      }
      if(Cuarto == ''){
        error=true;
    }
      console.log(error)
      if(!error){
        axios.post('api/fase/update/finales/'+ id, {
          local: PuntacionEq1f,
          visitante: PuntacionEq2f,
          cuarto: Cuarto
          }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
          .then(function (response) {
          console.log(response.data);
          setPuntacionEq1f('')
          setPuntacionEq2f('')
          setCuarto('')
          refrescar("cuartos")
          refrescar1("semifinal")
          refrescar2("finales")
          alert("El tablero cambio")
          })
          .catch(function (error) {
          console.log(error);
          });
      }else{
          alert("Los espacios no pueden estar vacios")
      }
}
function refrescar2(fase) {
  axios.get('/api/fase/get/'+fase )
  .then( res =>  {
    console.log(res.data)
    setFinales(res.data)
  })
  .catch(err => {
    console.log(err);
  })
}
function handleSubmite5(id,cuarto,localp,localn,local,visitantep,visitanten,visitante) {
  if(parseInt(localp)>parseInt(visitantep)){
    var ganadorname = localn
    var ganador = local
  }else{
    var ganadorname = visitanten
    var ganador = visitante
  }
  if(cuarto != 4){
    alert("No se puede terminar antes del 4 cuarto")
  }else{
    axios.post('api/fase/ganador/6381b443583a4163e579b045', {
      equipo: ganador,
      equiponame: ganadorname,
      validar: true,
      }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
      .then(function (response) {
      console.log(response.data);
      alert("Se termino el partido")
      })
      .catch(function (error) {
      console.log(error);

      });
  }
}

function ReiniciarNombre(){
  axios.post('api/equiponame/post/equipo1/637e87d7304404f1a640ad7f', {
    name: ""
    }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
    .then(function (response) {
    console.log(response.data);
    axios.post('api/equiponame/post/equipo2/637e9955304404f1a640ad81', {
      name: ""
      }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
      .then(function (response) {
      console.log(response.data);
      axios.post('api/equiponame/post/equipo3/637fe653e7d9611e8cdcf030', {
        name: ""
        }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
        .then(function (response) {
        console.log(response.data);
        axios.post('api/equiponame/post/equipo4/637fe666e7d9611e8cdcf031', {
          name: ""
          }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
          .then(function (response) {
          console.log(response.data);
          axios.post('api/equiponame/post/equipo5/637ff6b8e7d9611e8cdcf032', {
            name: ""
            }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
            .then(function (response) {
            console.log(response.data);
            axios.post('api/equiponame/post/equipo6/637ff6c9e7d9611e8cdcf033', {
              name: ""
              }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
              .then(function (response) {
              console.log(response.data);
              axios.post('api/equiponame/post/equipo7/637ff6d7e7d9611e8cdcf034', {
                name: ""
                }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
                .then(function (response) {
                console.log(response.data);
                axios.post('api/equiponame/post/equipo8/637ff6e8e7d9611e8cdcf035', {
                  name: ""
                  }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }},)
                  .then(function (response) {
                  console.log(response.data);
                  })
                  .catch(function (error) {
                  console.log(error);
                  });
                })
                .catch(function (error) {
                console.log(error);
                });
              })
              .catch(function (error) {
              console.log(error);
              });
            })
            .catch(function (error) {
            console.log(error);
            });
          })
          .catch(function (error) {
          console.log(error);
          });
        })
        .catch(function (error) {
        console.log(error);
        });
      })
      .catch(function (error) {
      console.log(error);
      });
    })
    .catch(function (error) {
    console.log(error);
    });
}

function Reiniciar(){
  axios.delete('/api/fase/delete/ganador' )
  .then( res =>  {
    console.log(res.data)
    axios.delete('/api/fase/delete/finales/637f012be9d7f00dacc8099f' )
    .then( res =>  {
      console.log(res.data)
      axios.delete('/api/fase/delete/semifinal/637fe3577a3c1c86709a7477' )
      .then( res =>  {
        console.log(res.data)
        axios.delete('/api/fase/delete/semifinal/637fe3c97a3c1c86709a747b' )
        .then( res =>  {
          console.log(res.data)
          axios.delete('/api/fase/deleteall/cuartos/637fe44f7a3c1c86709a747f' )
        .then( res =>  {
          console.log(res.data)
          axios.delete('/api/fase/deleteall/cuartos/637fe4767a3c1c86709a7481' )
          .then( res =>  {
            console.log(res.data)
            axios.delete('/api/fase/deleteall/cuartos/637fe4e87a3c1c86709a7483' )
            .then( res =>  {
              console.log(res.data)
              axios.delete('/api/fase/deleteall/cuartos/637fe50d7a3c1c86709a7485' )
              .then( res =>  {
                console.log(res.data)
                ReiniciarNombre()
                refrescar("cuartos")
                refrescar1("semifinal")
                refrescar2("finales")
                alert("El torneo se reinicio")
              })
              .catch(err => {
                console.log(err);
              })
            })
            .catch(err => {
              console.log(err);
            })
          })
          .catch(err => {
            console.log(err);
          })
        })
        .catch(err => {
          console.log(err);
        })
        })
        .catch(err => {
          console.log(err);
        })
      })
      .catch(err => {
        console.log(err);
      })
    })
    .catch(err => {
      console.log(err);
    })
  })
  .catch(err => {
    console.log(err);
  })
}

  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tablero</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Players">Jugadores</Nav.Link>
            <Nav.Link href="/Board">Puntuacion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <br/>
    <br/>
    <h2>Cuartos: </h2>
    {!show && <Button  variant="light" onClick={() => setShow(true)}>Editar</Button>}
    {cuarto}
    <h2>Semifinales: </h2>
    {!show1 && <Button  variant="light" onClick={() => setShow1(true)}>Editar</Button>}
    {semifi}
    <h2>Finales: </h2>
    {!show2 && <Button  variant="light" onClick={() => setShow2(true)}>Editar</Button>}
    {final}
    <br/>
    <br/> 
    {!show3 && <Button  variant="danger" onClick={() => setShow3(true)}>Reiniciar</Button>}
    <Alert show={show3} variant="danger">
          <Alert.Heading>Reiniciar Torneo</Alert.Heading>
              <Row>
                  <Col>
                  <Button  variant="danger" onClick={() => Reiniciar()}>Reiniciar Torneo</Button>
                  </Col>
                  <Col>
                  <Button  type='submit' onClick={() => setShow3(false)  } variant="outline-secondary">Listo!</Button>
                  </Col>
              </Row>
            
        </Alert>
    
    </div>
  );  

} export default RealBoard;
