import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardGroup, Form, Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios'


function ShowBoard()  {

  const [Equipo1, setEquipo1] = useState([])
  const [Equipo2, setEquipo2] = useState([])
  const [Equipo3, setEquipo3] = useState([])
  const [Equipo4, setEquipo4] = useState([])
  const [Equipo5, setEquipo5] = useState([])
  const [Equipo6, setEquipo6] = useState([])
  const [Equipo7, setEquipo7] = useState([])
  const [Equipo8, setEquipo8] = useState([])
  useEffect(() => {
    axios.get('/api/equipo/get/equipo1' )
    .then( res =>  {
      console.log(res.data)
      setEquipo1(res.data)
    })
    .catch(err => {
      console.log(err);
    })
    },[])
    const JugadoresEq1 = Equipo1.map(equipos => {
      if(equipos.name == null && equipos.num == null){
      }else{
      return( 
      <div>
        <Card style={{ width: '9rem' }}>
        <Card.Header>{equipos.name}</Card.Header>
        <Card.Text>{equipos.num}</Card.Text>
        <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo1") } href="/Players">Borrar</Button>
        </Card>
      </div>   
      )
      }
    })

    const NombreEq1 = Equipo1.map(equipos => {
      if(equipos.Equipo == null){
      }else{
      const url ="/Equipo?equipo=equipo1&id="+equipos._id
      return( 
      <div>
        <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
      </div>   
      )
      }
    })

    function handleSubmit(id,equipo) {
      console.log(id)
      axios.delete('/api/equipo/delete/'+equipo+'/'+id )
      .then( res =>  {
        console.log(res.data)
        setEquipo1(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    }
    useEffect(() => {
      axios.get('/api/equipo/get/equipo2' )
      .then( res =>  {
        console.log(res.data)
        setEquipo2(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      },[])
      const JugadoresEq2 = Equipo2.map(equipos => {
        if(equipos.name == null && equipos.num == null){
        }else{
        return( 
        <div>
          <Card style={{ width: ' 9rem' }}>
          <Card.Header>{equipos.name}</Card.Header>
          <Card.Text>{equipos.num}</Card.Text>
          <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo2") } href="/Players">Borrar</Button>
          </Card>
        </div>   
        )
        }
      })
  
      const NombreEq2 = Equipo2.map(equipos => {
        if(equipos.Equipo == null){
        }else{
        const url ="/Equipo?equipo=equipo2&id="+equipos._id
        return( 
        <div>
          <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
        </div>   
        )
        }
      })

      useEffect(() => {
        axios.get('/api/equipo/get/equipo3' )
        .then( res =>  {
          console.log(res.data)
          setEquipo3(res.data)
        })
        .catch(err => {
          console.log(err);
        })
        },[])
        const JugadoresEq3 = Equipo3.map(equipos => {
          if(equipos.name == null && equipos.num == null){
          }else{
          return( 
          <div>
            <Card style={{ width: ' 9rem' }}>
            <Card.Header>{equipos.name}</Card.Header>
            <Card.Text>{equipos.num}</Card.Text>
            <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo3") } href="/Players">Borrar</Button>
            </Card>
          </div>   
          )
          }
        })
        const NombreEq3 = Equipo3.map(equipos => {
          if(equipos.Equipo == null){
          }else{
          const url ="/Equipo?equipo=equipo3&id="+equipos._id
          return( 
          <div>
            <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
          </div>   
          )
          }
        })
        useEffect(() => {
          axios.get('/api/equipo/get/equipo4' )
          .then( res =>  {
            console.log(res.data)
            setEquipo4(res.data)
          })
          .catch(err => {
            console.log(err);
          })
          },[])
          const JugadoresEq4 = Equipo4.map(equipos => {
            if(equipos.name == null && equipos.num == null){
            }else{
            return( 
            <div>
              <Card style={{ width: ' 9rem' }}>
              <Card.Header>{equipos.name}</Card.Header>
              <Card.Text>{equipos.num}</Card.Text>
              <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo4") } href="/Players">Borrar</Button>
              </Card>
            </div>   
            )
            }
          })
          const NombreEq4 = Equipo4.map(equipos => {
            if(equipos.Equipo == null){
            }else{
            const url ="/Equipo?equipo=equipo4&id="+equipos._id
            return( 
            <div>
              <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
            </div>   
            )
            }
          })

          useEffect(() => {
            axios.get('/api/equipo/get/equipo5' )
            .then( res =>  {
              console.log(res.data)
              setEquipo5(res.data)
            })
            .catch(err => {
              console.log(err);
            })
            },[])
            const JugadoresEq5 = Equipo5.map(equipos => {
              if(equipos.name == null && equipos.num == null){
              }else{
              return( 
              <div>
                <Card style={{ width: ' 9rem' }}>
                <Card.Header>{equipos.name}</Card.Header>
                <Card.Text>{equipos.num}</Card.Text>
                <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo5") } href="/Players">Borrar</Button>
                </Card>
              </div>   
              )
              }
            })
            const NombreEq5 = Equipo5.map(equipos => {
              if(equipos.Equipo == null){
              }else{
              const url ="/Equipo?equipo=equipo5&id="+equipos._id
              return( 
              <div>
                <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
              </div>   
              )
              }
            })

            useEffect(() => {
              axios.get('/api/equipo/get/equipo6' )
              .then( res =>  {
                console.log(res.data)
                setEquipo6(res.data)
              })
              .catch(err => {
                console.log(err);
              })
              },[])
              const JugadoresEq6 = Equipo6.map(equipos => {
                if(equipos.name == null && equipos.num == null){
                }else{
                return( 
                <div>
                  <Card style={{ width: ' 9rem' }}>
                  <Card.Header>{equipos.name}</Card.Header>
                  <Card.Text>{equipos.num}</Card.Text>
                  <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo6") } href="/Players">Borrar</Button>
                  </Card>
                </div>   
                )
                }
              })
              const NombreEq6 = Equipo6.map(equipos => {
                if(equipos.Equipo == null){
                }else{
                const url ="/Equipo?equipo=equipo6&id="+equipos._id
                return( 
                <div>
                  <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
                </div>   
                )
                }
              })

              useEffect(() => {
                axios.get('/api/equipo/get/equipo7' )
                .then( res =>  {
                  console.log(res.data)
                  setEquipo7(res.data)
                })
                .catch(err => {
                  console.log(err);
                })
                },[])
                const JugadoresEq7 = Equipo7.map(equipos => {
                  if(equipos.name == null && equipos.num == null){
                  }else{
                  return( 
                  <div>
                    <Card style={{ width: ' 9rem' }}>
                    <Card.Header>{equipos.name}</Card.Header>
                    <Card.Text>{equipos.num}</Card.Text>
                    <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo7") } href="/Players">Borrar</Button>
                    </Card>
                  </div>   
                  )
                  }
                })
                const NombreEq7 = Equipo7.map(equipos => {
                  if(equipos.Equipo == null){
                  }else{
                  const url ="/Equipo?equipo=equipo7&id="+equipos._id
                  return( 
                  <div>
                    <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
                  </div>   
                  )
                  }
                })

                useEffect(() => {
                  axios.get('/api/equipo/get/equipo8' )
                  .then( res =>  {
                    console.log(res.data)
                    setEquipo8(res.data)
                  })
                  .catch(err => {
                    console.log(err);
                  })
                  },[])
                  const JugadoresEq8 = Equipo8.map(equipos => {
                    if(equipos.name == null && equipos.num == null){
                    }else{
                    return( 
                    <div>
                      <Card style={{ width: ' 9rem' }}>
                      <Card.Header>{equipos.name}</Card.Header>
                      <Card.Text>{equipos.num}</Card.Text>
                      <Button variant="danger" onClick={() => handleSubmit(equipos._id, "equipo8") } href="/Players">Borrar</Button>
                      </Card>
                    </div>   
                    )
                    }
                  })
                  const NombreEq8 = Equipo8.map(equipos => {
                    if(equipos.Equipo == null){
                    }else{
                    const url ="/Equipo?equipo=equipo8&id="+equipos._id
                    return( 
                    <div>
                      <Card.Header>{equipos.Equipo}<Button href={url}>Cambiar </Button></Card.Header>
                    </div>   
                    )
                    }
                  })

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tablero</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Players">Jugadores</Nav.Link>
            <Nav.Link href="/Board">Puntacion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Card>
        {NombreEq1}
        <CardGroup>
        {JugadoresEq1}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo1">Añadir Jugador</Button></Card.Footer>
        </Card>
        <br/>
        <Card>
        {NombreEq2}
        <CardGroup>
        {JugadoresEq2}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo2">Añadir Jugador</Button></Card.Footer>
        </Card>
        <br/>
        <Card>
        {NombreEq3}
        <CardGroup>
        {JugadoresEq3}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo3">Añadir Jugador</Button></Card.Footer>
        </Card>
        <br/>
        <Card>
        {NombreEq4}
        <CardGroup>
        {JugadoresEq4}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo4">Añadir Jugador</Button></Card.Footer>
        </Card>
        <br/>
        <Card>
        {NombreEq5}
        <CardGroup>
        {JugadoresEq5}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo5">Añadir Jugador</Button></Card.Footer>
        </Card>
        <br/>
        <Card>
        {NombreEq6}
        <CardGroup>
        {JugadoresEq6}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo6">Añadir Jugador</Button></Card.Footer>
        </Card>
        <br/>
        <Card>
        {NombreEq7}
        <CardGroup>
        {JugadoresEq7}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo7">Añadir Jugador</Button></Card.Footer>
        </Card>
        <br/>
        <Card>
        {NombreEq8}
        <CardGroup>
        {JugadoresEq8}
        </CardGroup>
        <Card.Footer><Button href="/Add?equipo=equipo8">Añadir Jugador</Button></Card.Footer>
        </Card>

   
    </div>
  );  

} export default ShowBoard;


