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










<div className="form-group">
                        <label htmlFor="nombreLibreria">Nombre</label>
                        <input type="text" className="form-control" id="nombreLibreria"  placeholder="Ingresa el nombre" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccionLibreria">Dirección</label>
                        <input type="text" className="form-control" id="direccionLibreria" placeholder="Ingresa la dirección" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsableLibreria">Responsable</label>
                        <input type="text" className="form-control" id="responsableLibreria" placeholder="Ingresa el responsable" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailLibreria">Email</label>
                        <input type="email" className="form-control" id="emailLibreria" aria-describedby="emailHelp" placeholder="Enter email" />
                        
                    </div>
                    

        </div>
    );
  }
}

export default LibreriaItem;
