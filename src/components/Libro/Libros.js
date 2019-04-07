import React, { Component } from 'react';
import firebase from '../../config/Firebase';

import LibroList from  './LibroList';
import LibroForm from './LibroForm';

class Libros extends Component {

  constructor(){
      super();

      this.state ={
            libros: [
                { id: 1,  name: "Hojarasca", author: "Gabriel GM" },
                { id: 2,  name: "Cien  años de soledad", author: "Gabriel GM" },
                { id: 3,  name: "platero y yo", author: "Juan Ramón Jimenez" },
                { id: 4,  name: "Romeo y julieta", author: "William Shakespeare" }
            ],
            libroEdit: { id: "",  name: "", author: ""},
            db: firebase.firestore()
      };

  }


  componentDidMount(){
    this.state.db.collection("libros").get().then((querySnapshot)=>
        querySnapshot.forEach(doc =>{
          console.log(doc.data());
          let auxLibros = this.state.libros;
          auxLibros.push(doc.data());
          this.setState( {libros: auxLibros});
        })
    );
  }

  agregarLibro(libro){

      let  libros = this.state.libros;

      if(libro.id!==""){
        let index = libros.findIndex( (libroItem) => {return libroItem.id===libro.id });
        libros[index] = libro;
      }
      else{
        let  id  = Math.floor(Math.random()*100000)+1;
        libro.id = id;
        libros.push(libro);
      }
      this.setState({
        libros: libros,
        libroEdit: { id: "",  name: "", author: ""}
      });
      //console.log(libros);

  }

  editarLibro(libro){
    console.log(libro);
    this.setState({
       libroEdit: libro
     });
  }


  render() {
    return (

      <div className="Libros container mt-5">
         <h1> Librería de {this.props.owner}</h1>
         <LibroList  libros={this.state.libros} handleEditarLibro={this.editarLibro.bind(this)}/>
         <LibroForm handleNuevoLibro={this.agregarLibro.bind(this)}  libroEdit={this.state.libroEdit} />
      </div>
    );
  }
}

export default Libros;
