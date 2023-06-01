import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',      
      name: '',
      building: '',
      flat: '',
      vehicle: '',    
      contact: '',
      altcontact: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('parking').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          name: board.name,
          building: board.building,
          flat: board.flat,
          vehicle: board.vehicle,
          contact: board.contact,
          altcontact: board.altcontact,
        });
      } else {
        console.log("No such document!");
      }
    });
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

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, building, flat, vehicle, contact, altcontact} = this.state;

    const updateRef = firebase.firestore().collection('parking').doc(this.state.key);
    updateRef.set({
      name,
      building,
      flat,
      vehicle,
      contact,
      altcontact,
    }).then((docRef) => {
      this.setState({
        key: '',
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
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" required/>
              </div>
              <div class="form-group">
                <label for="vehicle">Vehicle Number:</label>
                <input type="text" class="form-control" name="vehicle" value={this.state.vehicle} onChange={this.onChange} placeholder="vehicle" required/>
              </div>
              <div class="form-group doublecol">
              <label for="building">Select building</label>
                <select class="form-control" name="building" id="building" value={this.state.building} onChange={this.onChange} required>
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
                <label for="flat">Flat:</label>
                <input type="number" class="form-control" name="flat" value={this.state.flat} onChange={this.onChange} placeholder="Flat" required/>
              </div>             
              <div class="form-group">
              <label for="contact">Contact Number:</label>
              <PhoneInput
                    placeholder="Contact" className="form-control"
                    defaultCountry="IN"
                    limitMaxLeng="10"
                    value={this.state.contact}
                    onChange={this.handlePhoneNumberChange} rules={{ required: true }} />                        
                </div> 
              <div class="form-group">            
                     <label for="Altcontact">Alternative Contact Number:</label>
                     <PhoneInput 
                    placeholder="Contact" className="form-control"
                    defaultCountry="IN"
                    limitMaxLeng="10"
                    value={this.state.altcontact}
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

export default Edit;
