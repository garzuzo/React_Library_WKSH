import React, { Component } from 'react';

import LibreriaList from './LibreriaList'
class Librerias extends Component {


  render() {

    
    return (
        <div className="Libreria">

<h1>Librerias</h1>
<hr></hr>
    <LibreriaList></LibreriaList>

        </div>
    );
  }
}

export default Librerias;
