import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import LibroList from '../Libro/LibroList';

class BusquedaLibro extends Component {

    constructor(){
        super();
        this.state={
           // libreria:{name:'', address:'', parent:'', email:''},
           libros:[], 
            dbLibros:[],  db: firebase.firestore(),
            name:'', option1:Boolean, option2:Boolean, option3:Boolean 
        }
    }

    componentDidMount(){
        this.state.db.collection("libros").get().then((querySnapshot)=>
            querySnapshot.forEach(doc =>{
              console.log(doc.data());
              let auxLibros = this.state.dbLibros;
              auxLibros.push(doc.data());
              this.setState( {dbLibros: auxLibros});
            })
        );
      }
    
    
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.name);
        // let nuevoLibro =  {
        //     name: this.refs.name.value,
        //     author: this.refs.author.value
        // };        
        let  libros = this.state.libros;
        
        //nombre
        if(this.state.option1){
            for(var i=0;i<this.state.dbLibros.length;i++){
                let act= this.state.dbLibros[i];
                if(act.name===this.state.name){
                    let libro = {
                        name: act.name,
                        author: act.author,
                        genre: act.genre,
                        description: act.description,
                        isbn: act.isbn,
                        library: act.library
                      }
                      if(!this.state.libros.includes(act)){
                        libros.push(act);  
                      }
                    
                }
            }
        }

        //autor
        if(this.state.option2){
            for(var i=0;i<this.state.dbLibros.length;i++){
                let act= this.state.dbLibros[i];
                if(act.author===this.state.name){
                    let libro = {
                        name: act.name,
                        author: act.author,
                        genre: act.genre,
                        description: act.description,
                        isbn: act.isbn,
                        library: act.library
                      }
                      if(!this.state.libros.includes(act)){
                        libros.push(act);  
                      }  
                }
                }
        }

         //genero
         if(this.state.option3){
            for(var i=0;i<this.state.dbLibros.length;i++){
                let act= this.state.dbLibros[i];
                if(act.genre===this.state.name){
                    let libro = {
                        name: act.name,
                        author: act.author,
                        genre: act.genre,
                        description: act.description,
                        isbn: act.isbn,
                        library: act.library
                      }
                      if(!this.state.libros.includes(act)){
                        libros.push(act);  
                      }
                }
                }
        }

        this.setState({
            libros: libros
        });
       // this.props.handleNuevoLibro(libro);
  
    }
    
    handleOnChange (event){
        // console.log(event.target.value);
     
         this.setState({
             [event.target.name]: event.target.value
         });
       }

  render() {

    return (
        <div className="BusquedaLibro">
              <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}> 
              <input className="form-control mr-sm-2" type="search" placeholder="Busqueda de libros" name="name" onChange={this.handleOnChange.bind(this)} value={this.state.name} aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="radio1" value={this.state.option1} name="defaultRadio"/>
                <label className="form-check-label" for="radio1">Nombre</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="radio2" value={this.state.option2} name="defaultRadio" />
                <label className="form-check-label" for="radio2">Autor</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="radio3" value={this.state.option3} name="defaultRadio"/>
                <label className="form-check-label" for="radio3">Genero</label>
              </div>
             <LibroList libros={this.state.libros}/>
        </div>
    );
  }
}

export default BusquedaLibro;