import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ShowBoard extends React.Component {

    constructor(props) {
        super(props);
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
        <h1>{this.props.team1.name}</h1>
        
        </div>
        );

    }

    

}

export default ShowBoard;
