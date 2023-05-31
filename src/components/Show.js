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
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
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

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">         
            <h3 class="panel-title">
              {this.state.board.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Flat:</dt>
              <dd>{this.state.board.flat}</dd>
              <dt>vehicle:</dt>
              <dd>{this.state.board.vehicle}</dd>
              <dt>Contact:</dt>
              <dd>{this.state.board.contact}</dd>
            </dl>
            </div>
            <h4><Link to="/">Go to Home</Link></h4>
        </div>
      </div>
    );
  }
}

export default Show;
