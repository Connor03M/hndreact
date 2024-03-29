// src/App.js

import {React} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Login from "./pages/shared/Login";
import Register from "./pages/shared/Register";
import Home from "./pages/shared/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Fourth navbar example">
  <div className="container-fluid">
    <a className="navbar-brand" href="#Home">Little Stars Medical Centre</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample04">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link class="mx-2" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link class="mx-2" to="/login">Login</Link>        
        </li>
        <li className="nav-item">
        <Link class="mx-2" to="/register">Register</Link>        
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
      </Router>
    
  );
}
export default App;
