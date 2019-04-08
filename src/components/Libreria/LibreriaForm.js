import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import Libros from '../Libro/Libros';
class LibreriaForm extends Component {

    constructor(){

        this.state={

            id:'',name:'', email:'',address:'',parent:'',
            librerias=[],

            db: firebase.firestore()
        };


    }

    addLibrary(libreria){

            let librerias=this.state.librerias;

            if(libreria.name!=""){

                console.log("Esta libreria ya existe");
            }else{

                libreria.id=libreria.name;
                libros.push(libro);

            }
            this.setState({

                librerias:librerias
            });


    }
    handleSubmit(e){


        console.log(this.state);

        let libreria={

            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            parent:this.state.parent

        }


     this.addLibrary(libreria);
    }


    
  handleOnChange (event){
    // console.log(event.target.value);
 
     this.setState({
         [event.target.name]: event.target.value
     });
   }

  render() {

    return (
        <div className="Libreria">

<h1>Ingresa una nueva libreria</h1>
        
<form className="">
                    <div className="form-group">
                        <label htmlFor="nombreLibreria">Nombre</label>
                        <input type="text" className="form-control" id="nombreLibreria" value={this.state.name} onChange={this.handleOnChange.bind(this)} placeholder="Ingresa el nombre" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccionLibreria">Dirección</label>
                        <input type="text" className="form-control" id="direccionLibreria" value={this.state.address}  onChange={this.handleOnChange.bind(this)} placeholder="Ingresa la dirección" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsableLibreria">Responsable</label>
                        <input type="text" className="form-control" id="responsableLibreria" value={this.state.parent} onChange={this.handleOnChange.bind(this)} placeholder="Ingresa el responsable" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailLibreria">Email</label>
                        <input type="email" className="form-control" id="emailLibreria" aria-describedby="emailHelp" onChange={this.handleOnChange.bind(this)}  value={this.state.email}  placeholder="Enter email" />
                        
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
  }
}

export default LibreriaForm;
