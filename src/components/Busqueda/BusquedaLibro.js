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
            name:'', selectedRadio:'nombre' 
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
         
       
        this.setState({libros:[]});
        let  libros = this.state.libros;
        //nombre
        if(this.state.selectedRadio==='nombre'){
            //this.state.libros=[];
            //let  libros = this.state.libros;
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
                      if(!libros.includes(act)){
                        libros.push(act);  
                      }
                    
                }
            }
            //this.setState({
              //  libros: libros
            //});
        }

        //autor
        if(this.state.selectedRadio==='autor'){
            //this.setState({libros:[]});
            console.log("ENTRO A AUTOR");
            console.log(this.state.libros);
            console.log("IMPRIMIO VACIO");
            //let  libros = this.state.libros;
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
                      if(!libros.includes(act)){
                        libros.push(act);  
                      }  
                }
            }
            //this.setState({
               // libros: libros
            //});
        }

         //genero
         if(this.state.selectedRadio==='genero'){
           // this.setState({libros:[]});
            let  libros = this.state.libros;
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
                      if(!libros.includes(act)){
                        libros.push(act);  
                      }
                }
            }
            //this.setState({
              //  libros: libros
            //});
        }
       
        this.setState({
            libros: libros
        });
       
    }
    
    handleOnChange (event){
        // console.log(event.target.value);
     
         this.setState({
             [event.target.name]: event.target.value
         });
    }

    handleOnChangeRadio(event){
        this.setState({
            selectedRadio: event.target.value
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
                <input className="form-check-input" type="radio" id="radio1" value="nombre" name="defaultRadio" onChange={this.handleOnChangeRadio.bind(this)}/>
                <label className="form-check-label" htmlFor="radio1">Nombre</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="radio2" value="autor" name="defaultRadio" onChange={this.handleOnChangeRadio.bind(this)}/>
                <label className="form-check-label" htmlFor="radio2">Autor</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="radio3" value="genero" name="defaultRadio"onChange={this.handleOnChangeRadio.bind(this)} />
                <label className="form-check-label" htmlFor="radio3">Genero</label>
              </div>
             <LibroList libros={this.state.libros}/>
        </div>
    );
  }
}

export default BusquedaLibro;