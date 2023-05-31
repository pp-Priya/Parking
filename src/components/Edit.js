import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',      
      name: '',
      flat: '',
      vehicle: '',
      contact: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          name: board.name,
          flat: board.flat,
          vehicle: board.vehicle,
          contact: board.contact,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, flat, vehicle, contact } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      name,
      flat,
      vehicle,
      contact,
    }).then((docRef) => {
      this.setState({
        key: '',
        name: '',
        flat: '',
        vehicle: '',
        contact: '',
      });
      this.props.history.push("/");
      Swal.fire({
        icon: 'sucess',
        title: 'Updated',
        text: 'Data was Updated sucessfully!'
      })
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT
            </h3>
          </div>
          <div class="panel-body">
            {/* <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">List</Link></h4> */}
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="flat">Flat:</label>
                <input type="text" class="form-control" name="flat" value={this.state.flat} onChange={this.onChange} placeholder="Flat" />
              </div>
              <div class="form-group">
                <label for="vehicle">Vehicle Number:</label>
                <input type="text" class="form-control" name="vehicle" value={this.state.vehicle} onChange={this.onChange} placeholder="vehicle" />
              </div>
              <div class="form-group">
                <label for="contact">Contact Number:</label>
                <input type="number" class="form-control" name="contact" value={this.state.contact} onChange={this.onChange} placeholder="Contact" />
              </div>            
              <div>
              <button type="submit" class="btn btn-success">Submit</button>&nbsp;
              <button type="button" class="btn btn-secondry"><Link to="/">Back</Link></button>
              </div>              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
