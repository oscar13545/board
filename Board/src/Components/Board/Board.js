import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import "./Board.css";

function Board() {
  const initablero = [{ local: 0, visitante: 0, cuarto: 0 }];
  const [tablero, setTablero] = useState(initablero);
  const [showAddPlayerCard, setShowAddPlayerCard] = useState(true);

  const [logoImage, setLogoImage] = useState("/reventestlogo.png");
  const [logoImage2, setLogoImage2] = useState("/reventestlogo.png");

  const IniPlayer1 = useMemo(
    () => [
      { Equipo: "Reven", num: "10", name: "Oscar", points: 0, fouls: 0 },
      { num: "11", name: "OscarH1", points: 0, fouls: 0 },
      { num: "12", name: "OscarH2", points: 0, fouls: 0 },
      { num: "13", name: "OscarH3", points: 0, fouls: 0 },
      { num: "14", name: "OscarH4", points: 0, fouls: 0 },
    ],
    []
  );
  const IniPlayer2 = useMemo(
    () => [
      { Equipo: "Cuervo", num: "11", name: "Oscar", points: 0, fouls: 0 },
      { num: "12", name: "Oscar", points: 0, fouls: 1 },
      { num: "13", name: "OscarH1", points: 0, fouls: 0 },
      { num: "14", name: "OscarH2", points: 0, fouls: 0 },
      { num: "15", name: "OscarH3", points: 0, fouls: 0 },
    ],
    []
  );
  const [Player1, setPlayer1] = useState(IniPlayer1);
  const [Player2, setPlayer2] = useState(IniPlayer2);

  const handleIncrementCuarto = () => {
    setTablero([{ ...tablero[0], cuarto: tablero[0].cuarto + 1 }]);
  };

  const handleDecrementCuarto = () => {
    setTablero([{ ...tablero[0], cuarto: tablero[0].cuarto - 1 }]);
  };

  const tablerocs = tablero.map((tableros) => {
    return (
      <div>
        <Container>
          <Row className="my-4">
            <Col lg={6}>
              <Form.Control
                className="Points"
                type="text"
                value={tableros.local}
                disabled
              />
            </Col>

            <Col lg={6}>
              <Form.Control
                className="Points"
                type="text"
                value={tableros.visitante}
                disabled
              />
            </Col>
          </Row>

          <Row>
            <Col></Col>
            <Col>
              <Form.Control
                className="Cuarto"
                type="text"
                value={tableros.cuarto}
                disabled
              />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Button onClick={handleIncrementCuarto}>+1</Button>{" "}
              <Button onClick={handleDecrementCuarto}>-1</Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  });

  const handleIncrement2I = (num, incrementValue) => {
    const numericValue = parseInt(incrementValue, 10);
    if (!isNaN(numericValue)) {
      setPlayer2((prevPlayers) => {
        return prevPlayers.map((player) => {
          if (player.num === num) {
            return { ...player, points: numericValue };
          }
          return player;
        });
      });
    } else {
      setPlayer2((prevPlayers) => {
        return prevPlayers.map((player) => {
          if (player.num === num) {
            return { ...player, points: 0 };
          }
          return player;
        });
      });
    }
  };

  const handleIncrement1I = (num, incrementValue) => {
    const numericValue = parseInt(incrementValue, 10);
    if (!isNaN(numericValue)) {
      // Update the state with the numeric value
      setPlayer1((prevPlayers) => {
        return prevPlayers.map((player) => {
          if (player.num === num) {
            return { ...player, points: numericValue };
          }
          return player;
        });
      });
    } else {
      setPlayer1((prevPlayers) => {
        return prevPlayers.map((player) => {
          if (player.num === num) {
            return { ...player, points: 0 };
          }
          return player;
        });
      });
    }
  };

  const handleIncrement = (num, incrementValue) => {
    setPlayer2((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.num === num) {
          return { ...player, points: player.points + incrementValue };
        }
        return player;
      });
    });
  };

  const handleIncrement1 = (num, incrementValue) => {
    setPlayer1((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.num === num) {
          return { ...player, points: player.points + incrementValue };
        }
        return player;
      });
    });
  };

  const handleIncrementFP1 = (num, incrementValue) => {
    setPlayer1((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.num === num) {
          return { ...player, fouls: player.fouls + incrementValue };
        }
        return player;
      });
    });
  };

  const handleIncrementFP2 = (num, incrementValue) => {
    setPlayer2((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (player.num === num) {
          return { ...player, fouls: player.fouls + incrementValue };
        }
        return player;
      });
    });
  };

  useEffect(() => {
    const localPointsSum = Player1.reduce(
      (sum, player) => sum + player.points,
      0
    );
    const visitantePointsSum = Player2.reduce(
      (sum, player) => sum + player.points,
      0
    );

    // Update the state only if the values have changed
    if (
      localPointsSum !== tablero[0].local ||
      visitantePointsSum !== tablero[0].visitante
    ) {
      setTablero([
        { ...tablero[0], local: localPointsSum, visitante: visitantePointsSum },
      ]);
    }
  }, [Player1, Player2, tablero]);

  const NameEq1 = Player1.map((players) => {
    if (players.Equipo == null) {
      return null; // or return an empty div: return <div></div>;
    } else {
      return (
        <div key={players.Equipo}>
          <Row>
            <Col></Col>
            <Col>
              <Image
                src={logoImage}
                rounded
                style={{ width: "100px", height: "100px" }}
              />
            </Col>
            <Col></Col>
          </Row>

          <Card.Title className="NameEq1">{players.Equipo}</Card.Title>
        </div>
      );
    }
  });

  const listplay1 = Player1.map((players) => {
    if (players.name == null && players.num == null) {
      return null;
    } else {
      return (
        <div>
          <Card.Text>
            <Row className="mb-2">
              <Col lg={2}>
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.num}
                  disabled
                />
              </Col>
              <Col lg={6}>
                {" "}
                {/* lg={4} */}
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.name}
                  disabled
                />
              </Col>
              <Col lg={2}>
                {" "}
                {/* lg={3} */}
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.points}
                  onChange={(e) =>
                    handleIncrement1I(players.num, e.target.value)
                  }
                />
              </Col>
              <Col lg={2}>
                {" "}
                {/* lg={3} */}
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.fouls}
                  disabled
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={2}></Col>
              <Col lg={6}>
                {" "}
                {/* lg={4} */}
                <Button onClick={() => handleIncrement1(players.num, 1)}>
                  +1
                </Button>{" "}
                <Button onClick={() => handleIncrement1(players.num, 2)}>
                  +2
                </Button>{" "}
                <Button onClick={() => handleIncrement1(players.num, 3)}>
                  +3
                </Button>{" "}
              </Col>
              <Col lg={2}> {/* lg={3} */}</Col>
              <Col lg={2}>
                {" "}
                {/* lg={3} */}
                <Button onClick={() => handleIncrementFP1(players.num, 1)}>
                  +1
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </div>
      );
    }
  });

  const NameEq2 = Player2.map((players) => {
    if (players.Equipo == null) {
      return null;
    } else {
      return (
        <div>
          <Row>
            <Col></Col>
            <Col>
              <Image
                src={logoImage2}
                rounded
                style={{ width: "100px", height: "100px" }}
              />
            </Col>
            <Col></Col>
          </Row>
          <Card.Title className="NameEq1">{players.Equipo}</Card.Title>
        </div>
      );
    }
  });

  const listplay2 = Player2.map((players) => {
    if (players.name == null && players.num == null) {
      return null;
    } else {
      return (
        <div>
          <Card.Text>
            <Row className="mb-2">
              <Col lg={2}>
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.num}
                  disabled
                />
              </Col>
              <Col lg={6}>
                {" "}
                {/* lg={4} */}
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.name}
                  disabled
                />
              </Col>
              <Col lg={2}>
                {" "}
                {/* lg={3} */}
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.points}
                  onChange={(e) =>
                    handleIncrement2I(players.num, e.target.value)
                  }
                />
              </Col>
              <Col lg={2}>
                {" "}
                {/* lg={3} */}
                <Form.Control
                  className="FormColor"
                  type="text"
                  size="10"
                  value={players.fouls}
                  disabled
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col lg={2}></Col>
              <Col lg={6}>
                {" "}
                {/* lg={4} */}
                <Button onClick={() => handleIncrement(players.num, 1)}>
                  +1
                </Button>{" "}
                <Button onClick={() => handleIncrement(players.num, 2)}>
                  +2
                </Button>{" "}
                <Button onClick={() => handleIncrement(players.num, 3)}>
                  +3
                </Button>{" "}
              </Col>
              <Col lg={2}> {/* lg={3} */}</Col>
              <Col lg={2}>
                {" "}
                {/* lg={3} */}
                <Button onClick={() => handleIncrementFP2(players.num, 1)}>
                  +1
                </Button>
              </Col>
            </Row>
          </Card.Text>
        </div>
      );
    }
  });

  const generatePlayerCards = (num) => {
    const playerCards = [];
    for (let i = 0; i < num; i++) {
      playerCards.push(
        <Col key={i} lg={2}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId={`formNum${i}`}>
                  <Form.Label>Numero</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter player number"
                    onChange={(e) => handleTeam1playersNum(i, e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId={`formPoints${i}`}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter initial points"
                    onChange={(e) => handleTeam1playersName(i, e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return playerCards;
  };

  const generatePlayerCards2 = (num) => {
    const playerCards = [];
    for (let i = 0; i < num; i++) {
      playerCards.push(
        <Col key={i} lg={2}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId={`formNum${i}`}>
                  <Form.Label>Numero</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter player number"
                    onChange={(e) => handleTeam2playersNum(i, e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId={`formPoints${i}`}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter initial points"
                    onChange={(e) => handleTeam2playersName(i, e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return playerCards;
  };

  const handleTeamName = (newName) => {
    setPlayer1((prevPlayers) => {
      if (prevPlayers.length > 0) {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[0] = { ...updatedPlayers[0], Equipo: newName };
        return updatedPlayers;
      }
      return prevPlayers;
    });
  };

  const handleTeam2Name = (newName) => {
    setPlayer2((prevPlayers) => {
      if (prevPlayers.length > 0) {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[0] = { ...updatedPlayers[0], Equipo: newName };
        return updatedPlayers;
      }
      return prevPlayers;
    });
  };

  const handleTeam1playersName = (position, newName) => {
    setPlayer1((prevPlayers) => {
      if (prevPlayers.length > 0) {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[position] = {
          ...updatedPlayers[position],
          name: newName,
        };
        return updatedPlayers;
      }
      return prevPlayers;
    });
  };

  const handleTeam2playersName = (position, newName) => {
    setPlayer2((prevPlayers) => {
      if (prevPlayers.length > 0) {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[position] = {
          ...updatedPlayers[position],
          name: newName,
        };
        return updatedPlayers;
      }
      return prevPlayers;
    });
  };
  const handleTeam1playersNum = (position, newNum) => {
    setPlayer1((prevPlayers) => {
      if (prevPlayers.length > 0) {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[position] = { ...updatedPlayers[position], num: newNum };
        return updatedPlayers;
      }
      return prevPlayers;
    });
  };

  const handleTeam2playersNum = (position, newNum) => {
    setPlayer2((prevPlayers) => {
      if (prevPlayers.length > 0) {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[position] = { ...updatedPlayers[position], num: newNum };
        return updatedPlayers;
      }
      return prevPlayers;
    });
  };

  const endEquipo = () => {
    setShowAddPlayerCard(false);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setLogoImage(URL.createObjectURL(file));
    }
  };

  const handleLogoChange2 = (e) => {
    const file = e.target.files[0];

    if (file) {
      setLogoImage2(URL.createObjectURL(file));
    }
  };

  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      document.body.style.background = `url(${URL.createObjectURL(
        file
      )}) center center/cover no-repeat`;
    }
  };
  return (
    <div>
      {showAddPlayerCard ? (
        <div>
          <Row>
            <Card>
              <Card.Body>
                <Card.Title className="text-center"> Equipo Local</Card.Title>
                <Col lg={2} className="text-center">
                  <Form>
                    <Form.Label>Nombre del equipo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del equipo"
                      onChange={(e) => handleTeamName(e.target.value)}
                    />
                    <Form.Label>Logo del equipo</Form.Label>
                    <Form.Control type="file" onChange={handleLogoChange} />
                  </Form>
                </Col>

                <br />
                <Row>{generatePlayerCards(5)}</Row>
                <br />
                <Card.Title className="text-center">
                  {" "}
                  Equipo Visitante
                </Card.Title>
                <Col lg={2} className="text-center">
                  <Form>
                    <Form.Label>Nombre del equipo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del equipo"
                      onChange={(e) => handleTeam2Name(e.target.value)}
                    />
                    <Form.Label>Logo del equipo</Form.Label>
                    <Form.Control type="file" onChange={handleLogoChange2} />
                  </Form>
                </Col>

                <br />
                <Row>{generatePlayerCards2(5)}</Row>
                <br />
                <Card.Title className="text-center">Configuracion</Card.Title>
                <Col lg={2} className="text-center">
                  <Form>
                    <Form.Label>Imagenes de fondo</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={handleBackgroundChange}
                    />
                  </Form>
                </Col>

                <br />
                <Button onClick={endEquipo}>Siguiente</Button>
              </Card.Body>
            </Card>
          </Row>
        </div>
      ) : (
        <Container>
          <br />
          <Row>
            <Col lg={4}>
              <Card className="rightCard">
                <Card.Body>
                  <Card.Title className="NameEq">LOCAL </Card.Title>
                  {NameEq1}
                  <Row className="mb-2">
                    <Col lg={2}>Num.</Col>
                    <Col lg={6}>
                      {" "}
                      {/* lg={4} */}
                      Nombre
                    </Col>
                    <Col lg={2}>
                      {" "}
                      {/* lg={3} */}
                      Punto
                    </Col>
                    <Col lg={2}>
                      {" "}
                      {/* lg={3} */}
                      Fouls
                    </Col>
                  </Row>
                  {listplay1}
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} className="mb-3">
              <Card className="Center">
                <Card.Body>
                  <Card.Title className="NameTor">
                    <a href="/torneo" className="nolink1">
                      Torneo
                    </a>
                  </Card.Title>
                  {tablerocs}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-3">
              <Card className="rightCard">
                <Card.Body>
                  <Card.Title className="NameEq">VISITANTE </Card.Title>
                  {NameEq2}
                  <Row className="mb-2">
                    <Col lg={2} style={{ fontWeight: "bold" }}>
                      Num.
                    </Col>
                    <Col lg={6} style={{ fontWeight: "bold" }}>
                      {" "}
                      {/* lg={4} */}
                      Nombre
                    </Col>
                    <Col lg={2} style={{ fontWeight: "bold" }}>
                      {" "}
                      {/* lg={3} */}
                      Pun.
                    </Col>
                    <Col lg={2} style={{ fontWeight: "bold" }}>
                      {" "}
                      {/* lg={3} */}
                      Fouls
                    </Col>
                  </Row>
                  {listplay2}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Board;
