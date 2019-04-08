import React, { Component } from 'react';
import LibreriaItem from './LibreriaItem';
import LibreriaActual from './LibreriaActual'
class LibreriaList extends Component {


    render() {

        //revisar
        let libreriaList = this.props.librerias.map((libreriaTmp) =>
         (<LibreriaActual key={libreriaTmp.name} libreria={libreriaTmp}  />)
        );
//  {libreriaList} poner abajo del h1
        let libreriaActual;
        return (
            <div className="Libreria">

<h1>Lista de librerias</h1>
<hr></hr>
{libreriaList}



            </div>
        );
    }
}

export default LibreriaList;
