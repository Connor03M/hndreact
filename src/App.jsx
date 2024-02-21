// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/shared/Login";
import Register from "./pages/shared/Register";
import Home from "./pages/shared/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar fixed="top" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Hospital</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/pages/shared/Home.jsx">Home</Nav.Link>
            <Nav.Link href="/pages/shared/Login.jsx">Login</Nav.Link>
            <Nav.Link href="/pages/shared/Register.jsx">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;