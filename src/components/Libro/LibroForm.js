import React, { Component } from 'react';
import firebase from '../../config/Firebase';
class LibroForm extends Component {

  constructor (){
    super();
    this.state = {
         id: '',  name: '', author: '', isbn:'', genre:'', description:'', library:'',
         libros:[], db: firebase.firestore()
    };
    
  }

 // componentWillReceiveProps(props){
   // this.setState({
     // id: props.libroEdit.id,
      //name: props.libroEdit.name,
      //author: props.libroEdit.author      
   // });
 // }

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

  handleSubmit(e){
      e.preventDefault();
      console.log(this.state);
      // let nuevoLibro =  {
      //     name: this.refs.name.value,
      //     author: this.refs.author.value
      // };
      let libro = {
        id: this.state.id,
        name: this.state.name,
        author: this.state.author,
        genre: this.state.genre,
        description: this.state.description,
        isbn:this.state.isbn,
        library: this.state.library
      }

     // this.props.handleNuevoLibro(libro);
     this.createBook(libro);

  }

  createBook(libro){

    let  libros = this.state.libros;

    if(libro.id!==""){
      console.log("Este libro ya existe");
    }
    else{
      let  id  = Math.floor(Math.random()*100000)+1 + "";
      libro.id = id;
      libros.push(libro);
    }
    this.setState({
      libros: libros
    });
    //console.log(libros);

}

  handleOnChange (event){
   // console.log(event.target.value);

    this.setState({
        [event.target.name]: event.target.value
    });
  }

 
  render() { 
    return (
      <div className="LibroForm container mt-5">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="hidden" value={this.state.id} onChange={this.handleOnChange.bind(this)} />
            <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input type="text" className="form-control" id="isbn" name="isbn" onChange={this.handleOnChange.bind(this)} value={this.state.isbn} />
            </div>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" onChange={this.handleOnChange.bind(this)} value={this.state.name}  />
            </div>
            <div className="form-group">
                <label htmlFor="author">Autor</label>
                <input type="text" className="form-control" id="author" name="author" onChange={this.handleOnChange.bind(this)} value={this.state.author} />
            </div>
            <div className="form-group">
                <label htmlFor="genre">Género</label>
                <input type="text" className="form-control" id="genre" name="genre" onChange={this.handleOnChange.bind(this)} value={this.state.genre} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <input type="text" className="form-control" id="description" name="description" onChange={this.handleOnChange.bind(this)} value={this.state.description} />
            </div>
            <div className="form-group">
                <label htmlFor="library">Libreria</label>
                <select className="form-control" id="description"  name="library" onChange={this.handleOnChange.bind(this)}>
                    <option>Libreria de Leonardo</option>
                    <option>Libreria de Sami</option>
                    <option>Libreria de Johna</option>
                </select> 
            </div>
            <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
    );
  }
}

export default LibroForm;
