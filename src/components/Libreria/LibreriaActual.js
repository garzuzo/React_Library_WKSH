import React, { Component } from 'react';
import LibreriaItem from './LibreriaItem';
import LibroList from '../Libro/LibroList';

class LibreriaActual extends Component {


  render() {
    
    //revisar
 //   let  libreriaList = this.props.libros.map( (libroTmp)=>
  //  (<LibreriaItem key={libroTmp.id} libro={libroTmp} handleEdit={this.handleEditLibro.bind(this)} />)
    //);
//{libreriaActual} poner en el tbody
var libreriaActual=this.props.libreria;

    return (
        <div className="Libreria">
<h1>libreria actual</h1>
<hr></hr>
<table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Responsable</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
            <tr>
        <th scope="row">{libreria.id}</th>
        <td>{libreriaActual.name}</td>
        <td>{libreriaActual.address}</td>
        <td>{libreriaActual.parent}</td>
        <td>{libreriaActual.email}</td>
      </tr>   
              
            </tbody>
        </table>

      <h1>Libros asociados</h1>



      
        </div>
    );
  }
}

export default LibreriaActual;
