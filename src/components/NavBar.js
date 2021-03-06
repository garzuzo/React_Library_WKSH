import React, { Component } from 'react';
import {Link} from  'react-router-dom';

class NavBar extends Component {
  render() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">SJ Libraries Management</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to="/ingresarLibrerias">Ingresar Librerias</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/ingresarLibros">Ingresar Libros</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/librerias">Librerias</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/busquedas">Búsquedas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">Info</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
  }
}

export default NavBar;