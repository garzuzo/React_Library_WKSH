import React, { Component } from 'react';

class LibroForm extends Component {

  constructor (){
    super();
    this.state = {
         id: '',  name: '', author: ''
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
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleOnChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="author">Autor</label>
                <input type="text" className="form-control" id="author" name="author" value={this.state.author} onChange={this.handleOnChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Crear</button>
        </form>
      </div>
    );
  }
}

export default LibroForm;
