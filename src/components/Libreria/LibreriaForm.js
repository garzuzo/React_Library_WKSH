import React, { Component } from 'react';
import firebase from '../../config/Firebase';
class LibreriaForm extends Component {

    constructor(){
        super();
        this.state = {

            name:'', email:'', address:'', parent:'',
            librerias:[], db: firebase.firestore()
          
        };

    }

    addLibrary(libreria){

            let librerias=this.state.librerias;

            if(libreria.name!=""){

                console.log("Esta libreria ya existe");
            }else{

                //libreria.id=libreria.name;
                librerias.push(libreria);

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
        <div className="LibreriaForm">

<h1>Ingresa una nueva libreria</h1>
        
<form  onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="nombreLibreria">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleOnChange.bind(this)}   value={this.state.name}  placeholder="Ingresa el nombre" />
                        
                    </div>

                    <div className="form-group">
                        <label htmlFor="direccionLibreria">Dirección</label>
                        <input type="text" className="form-control" id="direccionLibreria" name="address" value={this.state.address}  onChange={this.handleOnChange.bind(this)} placeholder="Ingresa la dirección" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsableLibreria">Responsable</label>
                        <input type="text" className="form-control" id="responsableLibreria" name="parent" value={this.state.parent} onChange={this.handleOnChange.bind(this)} placeholder="Ingresa el responsable" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailLibreria">Email</label>
                        <input type="email" className="form-control" id="emailLibreria" name="email" aria-describedby="emailHelp" onChange={this.handleOnChange.bind(this)}  value={this.state.email}  placeholder="Enter email" />
                        
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
  }
}

export default LibreriaForm;
