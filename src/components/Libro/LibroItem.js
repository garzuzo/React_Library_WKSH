import React, { Component } from 'react';

class LibroItem extends Component {


  clickLibro(){
    this.props.handleEdit(this.props.libro);
  }

  render() {
    var  libro=this.props.libro;

    return (
      <tr>
        <th scope="row">{libro.name}</th>
        <td>{libro.author}</td>
        <td>{libro.genre}</td>
        <td>{libro.description}</td>
        <td>{libro.isbn}</td>
        <td>{libro.library}</td>
        <td>
        <button className="btn  btn-success" onClick={this.clickLibro.bind(this)}>Editar</button>
        <button className="btn  btn-danger" >Eliminar</button>
        </td>
      </tr>       
    );
  }
}

export default LibroItem;
