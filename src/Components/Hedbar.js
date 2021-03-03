import React from "react";
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