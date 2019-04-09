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
import Welcome from './Welcome'
import firebase from '../config/Firebase'

class Home extends Component {
 
  constructor(props){
    super(props);
  }
  logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('HA SALIDO');
    }).catch(function(error) {
      // An error happened.
      console.log(error.message);
    });
  }
  render() {
    var  owner="Leonardo";
    return (
      <Router>
        <div className="Home">
         <NavBar />           
            <Route exact path="/home" component={Welcome}/>
            <Route exact path="/librerias" component={Librerias}/>
            <Route exact path="/librerias1"  render={(props) => (
                     <Libros {...props} owner={owner}/>
                  )} />
                  <Route exact path="/ingresarLibrerias" component={LibreriaForm}/>
                 
                  
            <Route path="/about" component={About}/>
            <Route path="/libros/:id" component={Libro}/>
            <Route path="/ingresarLibros" component={LibroForm}/>    
            <Route path="/busquedas" component={Busquedas}/>
            <br></br>
            <br></br>
            <button className="btn btn-primary" onClick={this.logout.bind(this)}>Salir</button>
        </div>
        </Router>
    );
  }
}

export default Home;
