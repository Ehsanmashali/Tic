
import React from "react";
import axios from "axios";
import {Card,Button,Form,ListGroup } from 'react-bootstrap';

class Login extends React.Component {
    state = {
      mobile: "",
      password: "",
      respUser:{},
    }
  
    handleChange = event => {
      this.setState({ mobile: event.target.value});
    
    }
    onChange = event =>{
        this.setState({password: event.target.value});
    }
  
  
    handleSubmit = event => {
      event.preventDefault();
  
      // const login = {
      //   mobile: this.state.mobile,
      //   password : this.state.password
      // };
  

  
  
      axios.post("https://stage.mobiniran.ir/api/login", { mobile : this.state.mobile, password:this.state.password })
        .then(res => {
          // console.log(res);
          // console.log(res.data);
          
          localStorage.setItem("Token", res.data.data.token)
          console.log(localStorage.getItem("Token"))

          this.setState({respUser:res.data.data.user})

  // 
        })         
            .catch(err=>{
              console.log('this is eror')
            });
    }
  
    
  
  
    render() {
      return (
        <div className="col-4">
            <Form className="mx-2 px-5" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label> mobile :</Form.Label>
                    <Form.Control type="mobile" placeholder="Enter Mobile" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.onChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" >Submit</Button> <br/> <br/>
                {/* <Link className="btn btn-primary"  to="/TicToc" >Submit</Link> */}
                </Form>

                <br/> <br/>

        <div>
        <Card className="mx-5" style={{ width: '22rem' }}>
  <Card.Header>Users</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item> id: {this.state.respUser.id} </ListGroup.Item>
    <ListGroup.Item>national code: {this.state.respUser.national_code}</ListGroup.Item>
    <ListGroup.Item>first name: {this.state.respUser.first_name}</ListGroup.Item>
    <ListGroup.Item>last name : {this.state.respUser.last_name}</ListGroup.Item>
    <ListGroup.Item>mobile: {this.state.respUser.mobile}</ListGroup.Item>
    {/* <ListGroup.Item>token: {localStorage.getItem("Token")}</ListGroup.Item> */}
  </ListGroup>
</Card>
        </div>
      </div>
      )
    }
  }

  export default Login;