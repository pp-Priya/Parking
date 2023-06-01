import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './firebase';
import Swal from 'sweetalert2';
import ExcelJS from 'exceljs';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('parking');
    this.unsubscribe = null;
    this.state = {      
      searchQuery: '',
      parking: [],
    };    
  }   

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = () => {   
   this.ref.get().then((querySnapshot) => {
        const parking = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) 
          || data.flat.toLowerCase().includes(this.state.searchQuery.toLowerCase())
          || data.vehicle.toLowerCase().includes(this.state.searchQuery.toLowerCase())
          || data.contact.includes(this.state.searchQuery)
          || data.altcontact.includes(this.state.searchQuery)) {
            parking.push(data);
          }
        });
        this.setState({ parking });
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
    const parking = [];
    querySnapshot.forEach((doc) => {
      const { name, building, flat, vehicle, contact, altcontact } = doc.data();
      parking.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        building,
        flat,
        vehicle,
        contact,
        altcontact,
      });
    });
    this.setState({
      parking : parking
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

  handleExport = async () => {
    await this.ref.get()
    .then((querySnapshot) => {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Data');
      worksheet.addRow(['Name', 'Vehicle no','Flat no', 'Contact no', 'Alternet Contact no']);
      querySnapshot.forEach((doc, index) => {
        const data = doc.data();
        const rowData = [data.name, data.vehicle, data.building+'-'+ data.flat, data.contact, data.altcontact];
        worksheet.addRow(rowData);
      });
      workbook.xlsx.writeBuffer().then((buffer) => {
        this.downloadFile('data.xlsx', buffer);
      });
    })
    .catch((error) => {
      console.error('Error getting documents: ', error);
    });
  };

  downloadFile = (filename, buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <h2 class="panel-title">
             Celebration Homes Parking
            </h2>
          </div>
          <div class="panel-body">
            <br/>
            <div  class="form-group col-md-4">
            <Link to="/create" class="btn btn-primary">Add</Link> &nbsp;&nbsp;&nbsp;&nbsp;         
            <button class="btn btn-info" onClick={this.handleExport}>Export as Excel Sheet</button> 
            </div>
            <div  class="form-group col-md-4">
            <input class="form-control" type="text" value={this.searchQuery} onChange={this.handleChange} placeholder="Search"/> 
            </div>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Vehicle no.</th>                  
                  <th>Flat no.</th>
                  <th>Contact no.</th>
                  <th>Alt Contact no.</th>
                  <th>Action</th>
                 </tr>
              </thead>
              <tbody>
                {this.state.parking.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.name}</Link></td>                    
                    <td>{board.vehicle}</td>
                    <td>{board.building} - {board.flat}</td>
                    <td><a href={`tel:${board.contact}`} onClick={() => this.handleCall(board.contact)}>{board.contact}</a></td>
                    <td><a href={`tel:${board.altcontact}`} onClick={() => this.handleCall(board.altcontact)}>{board.altcontact}</a></td>
                    <td><Link to={`/edit/${board.key}`} class="btn btn-success">Edit</Link>&nbsp;&nbsp;&nbsp;&nbsp;
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
