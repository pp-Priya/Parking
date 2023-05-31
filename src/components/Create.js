import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      name: '',
      flat: '',
      vehicle: '',
      contact: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, flat, vehicle, contact } = this.state;

    if(name && vehicle){
    this.ref.add({
      name,
      flat,
      vehicle,
      contact
    }).then((docRef) => {
      this.setState({
        name: '',
        flat: '',
        vehicle: '',
        contact: '',
      });
      this.props.history.push("/");
      Swal.fire({
        icon: 'sucess',
        title: 'Added',
        text: 'Data was added sucessfully!'
      })
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }else{
    Swal.fire({
      icon: 'warning',
      title: 'Add',
      text: 'Name and vehicle number are required!!'
    })
  }
  }

  render() {
    const { name, flat, vehicle, contact } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD 
            </h3>
          </div>
          <div class="panel-body">           
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="flat">Flat Number:</label>               
                <input type="text" class="form-control" name="flat" value={flat} onChange={this.onChange} placeholder="Flat"/>
              </div>              
              <div class="form-group">
                <label for="vehicle">Vehicle Number:</label>
                <input type="text" class="form-control" name="vehicle" value={vehicle} onChange={this.onChange} placeholder="vehicle" />
              </div>
              <div class="form-group">
                <label for="contact">Contact Number:</label>
                <input type="number" class="form-control" name="contact" value={contact} onChange={this.onChange} placeholder="Contact" />
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

export default Create;
