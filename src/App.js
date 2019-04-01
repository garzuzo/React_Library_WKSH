import React, { Component } from 'react';
import Libros from './components/Libro/Libros';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route } from  'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Libro from  './components/Libro/Libro'
import Login from './components/Login/Login'
class App extends Component {
  render() {
    var  owner="Leonardo";

    return (
      <Router>
        <div className="App">
            <NavBar />
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/libros"  render={(props) => (
                     <Libros {...props} owner={owner}/>
                  )} />
            <Route path="/about" component={About}/>
            <Route path="/libros/:id" component={Libro}/>


        </div>
      </Router>
    );
  }
}

export default App;
