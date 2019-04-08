import React, { Component } from 'react';

class LibroForm extends Component {

  constructor (){
    super();
    this.state = {
         id: '',  name: '', author: '', ISBN:'', genre:'', description:'', library:''
    };
    
  }

  componentWillReceiveProps(props){
    this.setState({
      id: props.libroEdit.id,
      name: props.libroEdit.name,
      author: props.libroEdit.author      
    });
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
        author: this.state.author
      }

      this.props.handleNuevoLibro(libro);

  }

  handleOnChange (event){
   // console.log(event.target.value);

    this.setState({
        [event.target.name]: event.target.value
    });
  }

  
  render() { 
    return (
      <div className="LibroForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="hidden" value={this.state.id} onChange={this.handleOnChange.bind(this)} />
            <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input type="text" className="form-control" id="isbn" name="isbn" value={this.state.ISBN} />
            </div>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={this.state.name}  />
            </div>
            <div className="form-group">
                <label htmlFor="author">Autor</label>
                <input type="text" className="form-control" id="author" name="author" value={this.state.author} />
            </div>
            <div className="form-group">
                <label htmlFor="genre">Género</label>
                <input type="text" className="form-control" id="genre" name="genre" value={this.state.genre} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <input type="text" className="form-control" id="description" name="description" value={this.state.description} />
            </div>
            <div className="form-group">
                <label htmlFor="library">Libreria</label>
                <select class="form-control" id="description"  name="library" value={this.state.library}>
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
