/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import data from "./data.js";
import Detail from "./detail.js";

import { useState } from "react";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail/0">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              console.log(결과.data);
            })
            .catch(() => {
              console.log("실패함");
            });
        }}
      >
        버튼
      </button>

      {/* 여러 페이지 */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <div className="row">
                  {shoes.map(function (value, i) {
                    return <Card shoes={value} key={value.id}></Card>;
                  })}
                </div>
              </div>
              <Button variant="info">Info</Button>{" "}
            </>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <>
              <Detail shoes={shoes} />
            </>
          }
        />
        {/* 상세 페이지 */}
        <Route
          path="/about"
          element={
            <>
              <div>about 페이지 html</div>
              <Outlet></Outlet>
            </>
          }
        >
          <Route path="member" element={<h1> member</h1>} />
        </Route>

        <Route path="*" element={<div> none page</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
