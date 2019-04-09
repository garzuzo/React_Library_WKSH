import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import Alert from 'react-bootstrap/Alert'
class LibroForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '', author: '', isbn: '', genre: '', description: '', library: '',
      libros: [], db: firebase.firestore(), dbLibraries: [],
      show: false,
      msg: "",
      variante: ""

    };
  }

  // componentWillReceiveProps(props){
  // this.setState({
  // id: props.libroEdit.id,
  //name: props.libroEdit.name,
  //author: props.libroEdit.author      
  // });
  // }

  componentDidMount() {
    this.state.db.collection("libros").get().then((querySnapshot) =>
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        let auxLibros = this.state.libros;
        auxLibros.push(doc.data());
        this.setState({ libros: auxLibros });
      })
    );

    this.state.db.collection("librerias").get().then((querySnapshot) =>
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        let auxLibrerias = this.state.dbLibraries;
        auxLibrerias.push(doc.data());
        this.setState({ dbLibraries: auxLibrerias });
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // let nuevoLibro =  {
    //     name: this.refs.name.value,
    //     author: this.refs.author.value
    // };
    let libro = {
      name: this.state.name,
      author: this.state.author,
      genre: this.state.genre,
      description: this.state.description,
      isbn: this.state.isbn,
      library: this.state.library
    }

    // this.props.handleNuevoLibro(libro);
    this.createBook(libro);

  }

  createBook(libro) {

    let libros = this.state.libros;

    var libroExists;
    for (var i = 0; i < libros.length; i++) {

      var lAct = libros[i];
      if (lAct.isbn === this.state.isbn) {
        libroExists = true;
      }
    }
    if (libroExists) {
      this.setState({ show: true });
      this.setState({ variante: "warning" });

      this.setState({ msg: " Este libro ya existe" });
      console.log("Este libro ya existe");
    } else if (this.state.library === "") {
      this.setState({ show: true });
      this.setState({ variante: "warning" });
      this.setState({ msg: " Seleccione una libreria" });
      console.log("Seleccione una libreria");
    }
    else {
      this.setState({ show: true });
      this.setState({ variante: "success" });
      this.setState({ msg: "Libro creado exitosamente" });
      console.log("Creado exitosamente");
      libros.push(libro);
      this.state.db.collection("libros").doc(libro.isbn).set({
        name: libro.name, author: libro.author, isbn: libro.isbn, genre: libro.genre, description: libro.description, library: libro.library
      });
    }

    if (!libroExists && this.state.library !== "" && this.state.library !== "Selecciona una libreria") {
      this.setState({
        libros: libros,
        name: '', author: '', isbn: '', genre: '', description: '', library: ''
      });
    }


  }



  handleOnChange(event) {
    // console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    let options = [];
    options.push(<option selected>Selecciona una libreria</option>);
    for (var i = 0; i < this.state.dbLibraries.length; i++) {

      options.push(<option>{this.state.dbLibraries[i].name}</option>);
    }

    return (
      <div id="form" className="LibroForm container mt-5">
        <Alert show={this.state.show} dismissible="true" onClick={handleHide} variant={this.state.variante} onChange={this.handleOnChange.bind(this)}>{this.state.msg}</Alert>
        <h1>Agrega un nuevo libro</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="hidden" value={this.state.isbn} onChange={this.handleOnChange.bind(this)} />
          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <input type="text" className="form-control" id="isbn" name="isbn" placeholder="Ingresa el ISBN" onChange={this.handleOnChange.bind(this)} value={this.state.isbn} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Ingresa el nombre del libro" onChange={this.handleOnChange.bind(this)} value={this.state.name} required />
          </div>
          <div className="form-group">
            <label htmlFor="author">Autor</label>
            <input type="text" className="form-control" id="author" name="author" placeholder="Ingresa el autor" onChange={this.handleOnChange.bind(this)} value={this.state.author} required />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Género</label>
            <input type="text" className="form-control" id="genre" name="genre" placeholder="Ingresa el género del libro" onChange={this.handleOnChange.bind(this)} value={this.state.genre} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input type="text" className="form-control" id="description" name="description" placeholder="Ingresa una breve descripción" onChange={this.handleOnChange.bind(this)} value={this.state.description} required />
          </div>
          <div className="form-group">
            <label htmlFor="library">Librería</label>
            <select className="form-control custom-select" id="library" name="library" value={this.state.library} onChange={this.handleOnChange.bind(this)} required>
              {options}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
    );
  }
}

export default LibroForm;
