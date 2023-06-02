import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('parking');
    this.state = {
      name: '',
      building: '',
      flat: '',
      vehicle: '',    
      contact: '',
      altcontact: '',
      isVehicleNoValid: false,
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;    
    this.setState(state);
  }

  handlevehicleChange = (event) => {
    const vehicle = event.target.value;
    const regex = /^[A-Z]{2}-[0-9]{2}-[A-Z]{1,2}-[0-9]{4}$/;
    const isVehicleNoValid = regex.test(vehicle);
    this.setState({ isVehicleNoValid, vehicle});
  }

  handlePhoneNumberChange = (value) => {
    if(value !== undefined){
      this.setState({ contact: value });
    }  
    else{
      this.setState({ contact: '' });
    } 
  };

  handleAltPhoneNumberChange = (value) => {
    if(value !== undefined){
      this.setState({ altcontact: value });
    }  
    else{
      this.setState({ altcontact: '' });
    } 
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, flat, vehicle, contact, altcontact, building } = this.state;
    if(name && vehicle && contact){
    this.ref.add({
      name,
      building,
      flat,
      vehicle,
      contact,
      altcontact
    }).then((docRef) => {
      this.setState({
        name: '',
        building: '',
        flat: '',
        vehicle: '',
        contact: '',
        altcontact: '',
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
      text: 'Please fill required fieds!!'
    })
  }}  

  render() {
    const { name, building, flat, vehicle, contact,altcontact, isVehicleNoValid} = this.state;
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
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" required />
              </div>
              <div class="form-group">
                <label for="vehicle">Vehicle Number:</label>
                <input type="text" class="form-control" name="vehicle" value={vehicle}
                pattern="^[A-Z]{2}-[0-9]{2}-[A-Z]{1,2}-[0-9]{4}$" onChange={this.handlevehicleChange} placeholder="Vehicle" required />
                {isVehicleNoValid ? '' : <span class="custom-font-color">Please input a vehicle number in the format "GJ-05-HA-1977"</span>}
              </div>
              <div class="form-group doublecol">
               <label for="building">Select building</label>
                <select class="form-control" name="building" id="building" value={building} onChange={this.onChange} required>
                  <option value="">Select</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                  <option value="H">H</option>
                </select>
                <label for="flat">Flat Number:</label>               
                <input type="number" class="form-control" name="flat" value={flat} onChange={this.onChange} placeholder="Flat" required />
               </div>    
              <div class="form-group">
                    <label for="contact">Contact Number:</label>
                    <PhoneInput
                    placeholder="Contact" className="form-control"
                    defaultCountry="IN"
                    length="10"
                    value={contact}
                    onChange={this.handlePhoneNumberChange} rules={{ required: true }} />          
              </div>     
              <div class="form-group">                    
                    <label for="Altcontact">Alternative Contact Number:</label>
                    <PhoneInput
                    placeholder="Contact" className="form-control"
                    defaultCountry="IN"
                    length="10"
                    value={altcontact}
                    onChange={this.handleAltPhoneNumberChange}/>              
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
