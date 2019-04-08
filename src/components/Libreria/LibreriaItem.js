import React, { Component } from 'react';

class LibreriaItem extends Component {


  render() {
var libreria=this.props.libreria;


    return (
        <div className="Libreria">

<h1>Libreria item</h1>
<tr>
        <th scope="row">{libreria.id}</th>
        <td>{libreria.name}</td>
        <td>{libreria.address}</td>
        <td>{libreria.parent}</td>
        <td>{libreria.email}</td>
      </tr>   










        </div>
    );
  }
}

export default LibreriaItem;
