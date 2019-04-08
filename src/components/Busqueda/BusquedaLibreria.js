import React, { Component } from 'react';
import LibreriaActual from '../Libreria/LibreriaActual';
import firebase from '../../config/Firebase';

class BusquedaLibreria extends Component {

    constructor(){
        super();
        this.state={
            libreria:{name:'', address:'', parent:'', email:''},
            dbLibraries:[],  db: firebase.firestore(),
            name:''
        }
    }

    componentDidMount(){
        this.state.db.collection("librerias").get().then((querySnapshot)=>
            querySnapshot.forEach(doc =>{
              console.log(doc.data());
              let auxLibrerias = this.state.dbLibraries;
              auxLibrerias.push(doc.data());
              this.setState( {dbLibraries: auxLibrerias});
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
       
        for(var i=0;i<this.state.dbLibraries.length;i++){
        let act= this.state.dbLibraries[i];
        if(act.name===this.state.name){
            this.setState({
                libreria: {
                    name:act.name,
                    address: act.address,
                    parent: act.parent,
                    email: act.email
                }
            });
        }
        }
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
        <div className="BusquedaLibreria">
              <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}> 
              <input className="form-control mr-sm-2" type="search" placeholder="Libreria por nombre" name="name" onChange={this.handleOnChange.bind(this)} value={this.state.name} aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
              <LibreriaActual libreria={this.state.libreria}/>
        </div>
    );
  }
}

export default BusquedaLibreria;