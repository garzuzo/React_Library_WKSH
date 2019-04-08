import React, { Component } from 'react';
import LibreriaItem from './LibreriaItem';

class LibreriaList extends Component {


    render() {

        //revisar
        let libreriaList = this.props.libros.map((libroTmp) =>
            (<LibreriaActual key={libroTmp.id} libro={libroTmp} handleEdit={this.handleEditLibro.bind(this)} />)
        );

        let libreriaActual;
        return (
            <div className="Libreria">


                {libreriaList}




            </div>
        );
    }
}

export default LibreriaList;
