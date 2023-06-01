import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('parking').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }  

  handleCall = (phoneNumber) => {
    const telUrl = `tel:${phoneNumber}`;
    window.open(telUrl);
  };

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading"> 
          <br/>        
            <h3 class="panel-title doublecol">
              {this.state.board.name} <h4><Link to="/">Go to Home</Link></h4>
            </h3>
            <br/>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Flat number:</dt>
              <dd>{this.state.board.building} - {this.state.board.flat}</dd>
              <dt>vehicle number:</dt>
              <dd>{this.state.board.vehicle}</dd>
              <dt>Contact number:</dt>
              <dd><a href={`tel:${this.state.board.contact}`} onClick={() => this.handleCall(this.state.board.contact)}>{this.state.board.contact}</a></dd>
              <dt>Alternative Contact number:</dt>
              <dd><a href={`tel:${this.state.board.altcontact}`} onClick={() => this.handleCall(this.state.board.altcontact)}>{this.state.board.altcontact}</a></dd>
            </dl>
            </div>
            
        </div>
      </div>
    );
  }
}

export default Show;
