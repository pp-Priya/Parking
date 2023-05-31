import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './firebase';
import Swal from 'sweetalert2';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {      
      searchQuery: '',
      boards: [],
    };    
  }   

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = () => {   
   this.ref.get().then((querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) 
          || data.flat.toLowerCase().includes(this.state.searchQuery.toLowerCase())
          || data.vehicle.toLowerCase().includes(this.state.searchQuery.toLowerCase())
          || data.contact.includes(this.state.searchQuery)) {
            boards.push(data);
          }
        });
        this.setState({ boards });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });    
  }
 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {      
    this.handleSearch();   
    }
  }  

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { name, flat, vehicle, contact } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        flat,
        vehicle,
        contact,
      });
    });
    this.setState({
      boards : boards
   });
  }
  
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate); 
  }

  delete(id){     
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ref.doc(id).delete().then(() => {
          Swal.fire({  
            title: 'Deleted',  
            text: 'Data was deleted sucessfully',
            icon: 'success'
          }); 
        }).catch((error) => {      
        });
      }
    })
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
             Celebration Homes Parking
            </h3>
          </div>
          <div class="panel-body">
            <br/>
            <div>
            <Link to="/create" class="btn btn-primary">Add</Link> &nbsp;   
            <input type="text" value={this.searchQuery} onChange={this.handleChange} placeholder="Search"/><br/><br/>          
            </div>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Flat no.</th>
                  <th>Vehicle no.</th>
                  <th>Contact no.</th>
                  <th>Action</th>
                 </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.name}</Link></td>
                    <td>{board.flat}</td>
                    <td>{board.vehicle}</td>
                    <td>{board.contact}</td>
                    <td><Link to={`/edit/${board.key}`} class="btn btn-success">Edit</Link>&nbsp;
                    <button onClick={this.delete.bind(this, board.key)} class="btn btn-danger">Delete</button>
                    </td>
                   </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
