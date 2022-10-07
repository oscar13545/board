import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Row, Col, Button, Form} from 'react-bootstrap';




class Player{
  constructor(name,number,fouls){
    this.name=name;
    this.number=number;
    this.fouls=fouls;
  }
}

class Team{
  constructor(name) {
    this.name = name;
    this.player1 =  new Player("jugador1", 1,0);
    this.player2 =  new Player("jugador2", 2,0);
    this.player3 =  new Player("jugador3", 3,0);
    this.player4 =  new Player("jugador4", 4,0);
    this.player5 =  new Player("jugador5", 5,0);
    this.player6 =  new Player("jugador6", 6,0);
    this.player7 =  new Player("jugador7", 7,0);
    this.player8 =  new Player("jugador8", 8,0);

  }
}


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = { NameT1 : '', NameT1J1 : '',NameT1J7 : '',NameT1J2 : '',NameT1J3 : '',NameT1J4 : '',NameT1J8 : '',NameT1J5 : '',NameT1J6 : '',NameT2 : '', NameT2J1 : '',NameT2J7 : '',NameT2J2 : '',NameT2J3 : '',NameT2J4 : '',NameT2J8 : '',NameT2J5 : '',NameT2J6 : '', team1: new Team('Team 1'), team2: new Team('Team 2')}

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangeT1(event) {
    const value = event.target.value;
    this.state.team1.name = value;
    }
    handleChangeT2(event) {
      const value = event.target.value;
      this.setState({NameT2 : value})
  
    }
    handleChangeT1J1(event) {
      const value = event.target.value;
      this.setState({NameT1J1 : value})
  
    }
    handleChangeT1J2(event) {
      const value = event.target.value;
      this.setState({NameT1J2 : value})
  
    }
    handleChangeT1J3(event) {
      const value = event.target.value;
      this.setState({NameT1J3 : value})
  
    }
    handleChangeT1J4(event) {
      const value = event.target.value;
      this.setState({NameT1J4 : value})
  
    }
    handleChangeT1J5(event) {
      const value = event.target.value;
      this.setState({NameT1J5 : value})
  
    }
    handleChangeT1J6(event) {
      const value = event.target.value;
      this.setState({NameT1J6 : value})
  
    }
    handleChangeT1J7(event) {
      const value = event.target.value;
      this.setState({NameT1J7 : value})
  
    }
    handleChangeT1J8(event) {
      const value = event.target.value;
      this.setState({NameT1J8 : value})
  
    }
    handleChangeT2J1(event) {
      const value = event.target.value;
      this.setState({NameT2J1 : value})
  
    }
    handleChangeT2J2(event) {
      const value = event.target.value;
      this.setState({NameT2J2 : value})
  
    }
    handleChangeT2J3(event) {
      const value = event.target.value;
      this.setState({NameT2J3 : value})
  
    }
    handleChangeT2J4(event) {
      const value = event.target.value;
      this.setState({NameT2J4 : value})
  
    }
    handleChangeT2J5(event) {
      const value = event.target.value;
      this.setState({NameT2J5 : value})
  
    }
    handleChangeT2J6(event) {
      const value = event.target.value;
      this.setState({NameT2J6 : value})
  
    }
    handleChangeT2J7(event) {
      const value = event.target.value;
      this.setState({NameT2J7 : value})
  
    }
    handleChangeT2J8(event) {
      const value = event.target.value;
      this.setState({NameT2J8 : value})
  
    }

    handleSubmit() {
      this.state.team1.name = this.state.NameT1;
    }

    render() {
      
        return (
          <div>
            <Container>

            <Row>
            <Col>
          <Card>
          <Card.Body>
            <Card.Title>Equipo 1 </Card.Title>

            <Card.Text>
              Nombre del equipo: 
              <label>
            <input type="text"  size="10" value={this.state.team1.name} onChange={this.handleChangeT1.bind(this)} />
            </label>
            </Card.Text>
            

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team1.player1.number} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text" value={this.state.team1.player1.name} onChange={this.handleChangeT1J1.bind(this)} />
            </label>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    </div>
  ))}
</Form>


            </Card.Text>
            

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team1.player2.number} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text" value={this.state.team1.player2.name} onChange={this.handleChangeT1J1.bind(this)} />
            </label>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    </div>
  ))}
</Form>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team1.player3.number} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text" value={this.state.team1.player3.name} onChange={this.handleChangeT1J1.bind(this)} />
            </label>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    </div>
  ))}
</Form>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team1.player4.number} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text" value={this.state.team1.player4.name} onChange={this.handleChangeT1J1.bind(this)} />
            </label>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    </div>
  ))}
</Form>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team1.player5.number} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text" value={this.state.team1.player5.name} onChange={this.handleChangeT1J1.bind(this)} />
            </label>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    </div>
  ))}
</Form>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team1.player6.number} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text" value={this.state.team1.player6.name} onChange={this.handleChangeT1J1.bind(this)} />
            </label>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    </div>
  ))}
</Form>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team1.player7.number} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text" value={this.state.team1.player7.name} onChange={this.handleChangeT1J1.bind(this)} />
            </label>
            <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      
    </div>
  ))}
</Form>
            </Card.Text>

           
          </Card.Body>
        </Card>
        </Col>
        <Col> 
        <Card>
        <Card.Header>Torneo </Card.Header>
        <Card.Body>
          <Container>
            <Row><Col><h1>100</h1></Col><Col></Col><Col><h1>100</h1></Col></Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row><Col></Col><Col><h1>4</h1></Col><Col></Col></Row>
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
        <Card>
          <Card.Body>
            <Card.Title>Equipo 2 </Card.Title>

            <Card.Text>
              Nombre del equipo: 
              <label>
            <input type="text"  size="10" value={this.state.team2.name} onChange={this.handleChange} />
            </label>
            </Card.Text>
           

            <Card.Text>
            Num:&emsp;&emsp;&emsp;&emsp;&emsp;Nombre:&emsp;&emsp;&emsp;&emsp;&emsp;Foul:
        
            <label>
            <input type="text"size="1" value={this.state.team2.player1.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player1.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player1.fouls} onChange={this.handleChange} />
            </label>
            
            </Card.Text>
            

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team2.player2.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player2.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player2.fouls} onChange={this.handleChange} />
            </label>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team2.player3.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player3.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player3.fouls} onChange={this.handleChange} />
            </label>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team2.player4.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player4.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player4.fouls} onChange={this.handleChange} />
            </label>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team2.player5.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player5.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player5.fouls} onChange={this.handleChange} />
            </label>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team2.player6.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player6.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player6.fouls} onChange={this.handleChange} />
            </label>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team2.player7.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player7.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player7.fouls} onChange={this.handleChange} />
            </label>
            </Card.Text>

            <Card.Text>
            <label>
            <input type="text"size="1" value={this.state.team2.player8.number} onChange={this.handleChange} />
            </label>
              <label>
            <input type="text" value={this.state.team2.player8.name} onChange={this.handleChange} />
            </label>
            <label>
            <input type="text"size="1" value={this.state.team2.player8.fouls} onChange={this.handleChange} />
            </label>
            </Card.Text>

           
          </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        <h1>{this.state.NameT1}</h1>
        <Button variant="success"  href="/Board" >Registrar</Button>
        <h1>{this.state.team1.name}</h1>
        
        </div>
        );

    }
}

export default Board;