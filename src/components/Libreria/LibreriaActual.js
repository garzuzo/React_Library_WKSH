import React, { Component } from 'react';
import LibreriaItem from './LibreriaItem';
import LibroList from '../Libro/LibroList';
import firebase from '../../config/Firebase';
class LibreriaActual extends Component {

    constructor(){

        super();

        this.state={
            id: '',  name: '', author: '', isbn:'', genre:'', description:'', library:'',
            libros:[],
            booksLibrary:[],
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
        this.state.booksLibrary=[];
      }

  render() {
    
    //revisar
 //   let  libreriaList = this.props.libros.map( (libroTmp)=>
  //  (<LibreriaItem key={libroTmp.id} libro={libroTmp} handleEdit={this.handleEditLibro.bind(this)} />)
    //);
//{libreriaActual} poner en el tbody
var libreriaActual=this.props.libreria;
let books=this.state.libros;

for(var i=0;i<books.length;i++){

    var bookAct=books[i];

    if(bookAct.library===libreriaActual.name){
        if(!this.state.booksLibrary.includes(bookAct))
        this.state.booksLibrary.push(bookAct);

    }


}
    return (
        <div className="Libreria">
<h1>libreria actual</h1>
<hr></hr>
<table className="table">
            <thead>
                <tr>
               
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Responsable</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
            <tr>
        <th scope="row">{libreriaActual.name}</th>
        <td>{libreriaActual.address}</td>
        <td>{libreriaActual.parent}</td>
        <td>{libreriaActual.email}</td>
      </tr>   
              
            </tbody>
        </table>

      <h1>Libros asociados</h1>


<LibroList libros={this.state.booksLibrary}></LibroList>
    
      
        </div>
    );
  }
}

export default LibreriaActual;
