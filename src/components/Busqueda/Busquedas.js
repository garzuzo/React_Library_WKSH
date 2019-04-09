import React, { Component } from 'react';
import BusquedaLibreria from './BusquedaLibreria';
import BusquedaLibro from './BusquedaLibro';

class Busquedas extends Component {

  constructor(){
      super();

      this.state ={
      };

  }

  render() {
    return (

      <div className="Busquedas container mt-5">
         <h1> Búsquedas para la administración de librerias</h1>
         <BusquedaLibreria/>
         <BusquedaLibro/>
      </div>
    );
  }
}

export default Busquedas;