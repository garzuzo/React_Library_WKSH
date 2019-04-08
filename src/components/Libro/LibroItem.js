import React, { Component } from 'react';

class LibroItem extends Component {

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
      </tr>       
    );
  }
}

export default LibroItem;
