import React, { Component } from 'react';
import LibreriaItem from './LibreriaItem';
import LibreriaActual from './LibreriaActual'
class LibreriaList extends Component {


    render() {

        //revisar
     //   let libreriaList = this.props.libros.map((libroTmp) =>
       //     (<LibreriaActual key={libroTmp.id} libro={libroTmp} handleEdit={this.handleEditLibro.bind(this)} />)
      //  );
//  {libreriaList} poner abajo del h1
        let libreriaActual;
        return (
            <div className="Libreria">

<h1>Lista de librerias</h1>
<hr></hr>
<LibreriaActual></LibreriaActual>



            </div>
        );
    }
}

export default LibreriaList;
