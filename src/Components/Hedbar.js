import React from "react";
// import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,FormControl,Card,Button,Form,ListGroup } from 'react-bootstrap';

import Game from "./Game";
import Login from "./Login";


function Hedbar() {
  return (
    <Router>
        <div >
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/TicToc">TicToc</Link>
                        </li>
                    </ul>

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br />

            </>

            <Switch>
                <Route exact path="/Home">
                    <Home />
                </Route>
                <Route path="/TicToc">
                    <TicToc />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}





// class Home extends React.Component {
//     state = {
//       mobile: "",
//       password: "",
//       respUser:{},
//     }
  
//     handleChange = event => {
//       this.setState({ mobile: event.target.value});
    
//     }
//     onChange = event =>{
//         this.setState({password: event.target.value});
//     }
  
  
//     handleSubmit = event => {
//       event.preventDefault();
  
//       // const login = {
//       //   mobile: this.state.mobile,
//       //   password : this.state.password
//       // };
  

  
  
//       axios.post("https://stage.mobiniran.ir/api/login", { mobile : this.state.mobile, password:this.state.password })
//         .then(res => {
//           // console.log(res);
//           // console.log(res.data);
          
//           localStorage.setItem("Token", res.data.data.token)
//           console.log(localStorage.getItem("Token"))

//           this.setState({respUser:res.data.data.user})

//   // 
//         })         
//             .catch(err=>{
//               console.log('this is eror')
//             });
//     }
  
    
  
  
//     render() {
//       return (
//         <div className="col-4">
//             <Form className="mx-2 px-5" onSubmit={this.handleSubmit}>
//                 <Form.Group controlId="formGroupEmail">
//                     <Form.Label> mobile :</Form.Label>
//                     <Form.Control type="mobile" placeholder="Enter Mobile" onChange={this.handleChange} />
//                 </Form.Group>
//                 <Form.Group controlId="formGroupPassword">
//                     <Form.Label>Password :</Form.Label>
//                     <Form.Control type="password" placeholder="Password" onChange={this.onChange}/>
//                 </Form.Group>

//                 <Button variant="primary" type="submit" >Submit</Button> <br/> <br/>
//                 <Link className="btn btn-primary"  to="/TicToc" >Submit</Link>
//                 </Form>

//                 <br/> <br/>

//         <div>
//         <Card className="mx-5" style={{ width: '22rem' }}>
//   <Card.Header>Users</Card.Header>
//   <ListGroup variant="flush">
//     <ListGroup.Item> id: {this.state.respUser.id} </ListGroup.Item>
//     <ListGroup.Item>national code: {this.state.respUser.national_code}</ListGroup.Item>
//     <ListGroup.Item>first name: {this.state.respUser.first_name}</ListGroup.Item>
//     <ListGroup.Item>last name : {this.state.respUser.last_name}</ListGroup.Item>
//     <ListGroup.Item>mobile: {this.state.respUser.mobile}</ListGroup.Item>
//     {/* <ListGroup.Item>token: {localStorage.getItem("Token")}</ListGroup.Item> */}
//   </ListGroup>
// </Card>
//             {/* <ListGroup className="mx-auto">
//                 <ListGroup.Item> id: {this.state.respUser.id} </ListGroup.Item>
//                 <ListGroup.Item>national code: {this.state.respUser.national_code}</ListGroup.Item>
//                 <ListGroup.Item>first name: {this.state.respUser.first_name}</ListGroup.Item>
//                 <ListGroup.Item>last name : {this.state.respUser.last_name}</ListGroup.Item>
//                 <ListGroup.Item>mobile: {this.state.respUser.mobile}</ListGroup.Item>
//                 <ListGroup.Item>token: {localStorage.getItem("Token")}</ListGroup.Item>
//             </ListGroup> */}
          
//           {/* <ul>
//             <li> id: {this.state.respUser.id} </li>
//             <li> national code: {this.state.respUser.national_code} </li>
//             <li> first name: {this.state.respUser.first_name} </li>
//             <li> last name : {this.state.respUser.last_name} </li>
//             <li> mobile: {this.state.respUser.mobile} </li>
//           </ul> */}
  
//           {/* {this.state.respUser.id} <br/><br/>
//           {this.state.respUser.national_code} <br/><br/>
//           {this.state.respUser.first_name} <br/><br/>
//           {this.state.respUser.last_name} <br/><br/>
//           {this.state.respUser.mobile} <br/><br/> */}
//         </div>
//       </div>
//       )
//     }
//   }

function Home(){
    return(
       <Login /> 
    )
}

function TicToc() {
  return (
    <Game />
  );
}


export default Hedbar;