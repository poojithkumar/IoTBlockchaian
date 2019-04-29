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
        apiKey:"CIWB7GRWS8FIJV242NHQUGXBN3QPW4QQTJ",
        add:"0x493aBFb2aC57BE6a28FaC1d88E1686ABfdE25D55",
        data:[],
        ar:['ad','dadd','k']
      };
    }

  componentDidMount(){
    let base='http://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=';
let addr=this.state.add;
let mid='&startblock=0&endblock=9999999&sort=asc&apikey=';
let end=this.state.apiKey;
let url=base+addr+mid+end+'&c=json';


      fetch(url,
      {
    },
    ).then(response => {
      if (response.ok) {
        response.json().then(json => {

            this.setState({ data: json.result});
        
          console.log(json,json.result[0].blockHash,json.result[1].blockHash);
        });
      }
    });
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
    <th>BlockHash</th>
     <th>Time Stamp</th>
     <th>Block Number</th>
     <th>Gas Used</th>
     <th>Sent To</th>
  </tr>
  {(this.state.data).map((post,index)=>{
  return(<tr>
    <th>{post.blockHash}</th>
    <th>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(post.timeStamp*1000)}</th>
    <th>{post.blockNumber}</th>
    <th>{post.gasUsed}</th>
    <th>{post.to}</th>
    </tr>
  )

  }

  )
  }


</table>
  </div>
</div>




</div>

  );
}
}
export default App;
