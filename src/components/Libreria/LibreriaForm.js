import React, { Component } from 'react';

class LibreriaForm extends Component {


  render() {

    return (
        <div className="Libreria">

<h1>Ingresa una nueva libreria</h1>
        
<form className="">
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
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
  }
}

export default LibreriaForm;
