import React, { Component } from 'react';
import Libros from './Libro/Libros';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route } from  'react-router-dom';
import About from './About';
import Libro from  './Libro/Libro'
import Login from './Login/Login'
import LibroForm from './Libro/LibroForm'
import LibreriaForm from './Libreria/LibreriaForm'
import Librerias from './Libreria/Librerias'
import Busquedas from './Busqueda/Busquedas'
import firebase from '../config/Firebase'

class Welcome extends Component {
 
  render() {
 
    return (
      <Router>
        <div className="Welcome container mt-5 d-flex justify-content-between">
            <h1 className="mx-3 mt-5"> Bienvenidos al administrador de librerias S&J</h1>
            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
        </div>
        </Router>
    );
  }
}

export default Welcome;
