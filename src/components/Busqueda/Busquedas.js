import React, { Component } from 'react';
import firebase from '../../config/Firebase';

import LibroList from  './LibroList';
import LibroForm from './LibroForm';

class Busquedas extends Component {

  constructor(){
      super();

      this.state ={
      };

  }

  render() {
    return (

      <div className="Libros container mt-5">
         <h1> Librería de {this.props.owner}</h1>
         <LibroList  libros={this.state.libros} handleEditarLibro={this.editarLibro.bind(this)}/>
         <LibroForm handleNuevoLibro={this.createBook.bind(this)}  libroEdit={this.state.libroEdit} />
      </div>
    );
  }
}

export default Busquedas;