import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import LibreriaList from './LibreriaList'
class Librerias extends Component {


    constructor(){
super();

this.state={

    librerias:[],
    db:firebase.firestore()



};

    }

    componentDidMount(){
        this.state.db.collection("librerias").get().then((querySnapshot)=>
            querySnapshot.forEach(doc =>{
              console.log(doc.data());
              let auxLibrerias = this.state.librerias;
              auxLibrerias.push(doc.data());
              this.setState( {librerias: auxLibrerias});
            })
        );
      }



  render() {

    
    return (
        <div className="Libreria">

<h1>Librerias</h1>
<hr></hr>
    <LibreriaList librerias={this.state.librerias} ></LibreriaList>

        </div>
    );
  }
}

export default Librerias;
