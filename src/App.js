import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as  rs from 'react-bootstrap';


//import Dropdownrs.Button from 'react-bootstrap/Dropdownrs.Button';
//import Dropdown from 'react-bootstrap/Dropdown';
class App extends Component {

  constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
          this.handleClose = this.handleClose.bind(this);

      this.state = {
        show: false,
        value : '',
        ar:['ad','dadd','k']
      };
    }


      handleClose() {
        this.setState({ show: false });
      }

      handleShow() {
        this.setState({ show: true });
      }


myFunction=event =>{
  alert("dd");
};

  createSelectItems() {

     let items = [];
     for (let i = 0; i <= this.state.ar.length; i++) {
          items.push(<option key={i} value={i}>{i}</option>);
          //here I will be creating my options dynamically based on
          //what props are currently passed to the parent component
     }
     return items;
 }
 onDropdownSelected(e) {
     console.log("THE VAL", e.target.value);
     //here you will see the current selected value of the select input
 }



 // When the user clicks the button, open the modal



render() {
  return (
<div>


<div >
  < rs.Navbar bg="dark" variant="dark">
    < rs.Navbar.Brand href="#home">BLockchain</ rs.Navbar.Brand>
    < rs.Nav className="mr-auto" >

      < rs.Nav.Link href="#home" >Home</ rs.Nav.Link>
      < rs.Nav.Link href="#features">Features</ rs.Nav.Link>
      < rs.Nav.Link href="#pricing">Pricing</ rs.Nav.Link>

    </ rs.Nav>
       <h4 style={{color:"white"}}>{this.state.value}</h4>

  </ rs.Navbar>
  <br />

</div>



<div >


<select  class="button" style={{backgroundColor:""}} value = {this.state.value}
onChange = {event => this.setState({value : event.target.value})}>
 {this.createSelectItems()}
</select>

<button class="button " >Enter Device</button>
<button class="button " onClick={this.handleShow}>Send Data</button>


        <rs.Modal show={this.state.show} onHide={this.handleClose}>
          <rs.Modal.Header closeButton>
            <rs.Modal.Title>Modal heading</rs.Modal.Title>
          </rs.Modal.Header>
          <rs.Modal.Body>Woohoo, you're reading this text in a modal!</rs.Modal.Body>
          <rs.Modal.Footer>
            <rs.Button variant="secondary" onClick={this.handleClose}>
              Close
            </rs.Button>
            <rs.Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </rs.Button>
          </rs.Modal.Footer>
        </rs.Modal>



<button class="button " >Read Data</button>
<button class="button ">32px 16px</button>



</div>


<div style={{height:"20px"}}>
</div>

<div >
  <div class="column" style={{backgroundColor:"#f0f0f0"}} id ="rcorners2">
  <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds </td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds </td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds </td>
    <td>Christina </td>
    <td>Sweden</td>
    <td>Berglunds </td>
    <td>Christina </td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro  </td>
    <td>Francisco </td>
    <td>Mexico</td>
    <td>Centro  </td>
    <td>Francisco </td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst </td>
    <td>Roland </td>
    <td>Austria</td>
    <td>Ernst </td>
    <td>Roland </td>
    <td>Austria</td>
  </tr>



</table>
  </div>
</div>




</div>

  );
}
}
export default App;
