import React, { Component } from 'react';
import Libros from './components/Libro/Libros';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route } from  'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Libro from  './components/Libro/Libro'
import Login from './components/Login/Login'
import LibroForm from './components/Libro/LibroForm'
import LibreriaForm from './components/Libreria/LibreriaForm'
import Librerias from './components/Libreria/Librerias'
import Busquedas from './components/Busqueda/Busquedas'
import firebase from './config/Firebase'

class App extends Component {

  constructor(){
    super();
    this.state={
      user:null
    }
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        // User is signed in.
        this.setState({user});
      } else {
        // No user is signed in.
      //  this.state.user= null
        this.setState({user: null});
      }
    });
    
  }
  

  render() {
    var  owner="S&J";

    return (
      //<Router>
        <div className="App">
           
            {this.state.user ? (<Home/>): (<Login/>)}
        </div>
     // </Router>
    );
  }
}

export default App;
