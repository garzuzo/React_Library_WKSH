import React, { Component } from 'react';
import firebase from '../../config/Firebase';
class LibreriaForm extends Component {

    constructor() {
        super();
        this.state = {

            name: '', email: '', address: '', parent: '',
            librerias: [{ name: 'Pepe', email: 'pepi@library.com', address: 'Calle 15#21-1', parent: 'Don Pepe'}], db: firebase.firestore()

        };

    }

    componentDidMount() {
        this.state.db.collection("librerias").get().then((querySnapshot) =>
            querySnapshot.forEach(doc => {
                console.log(doc.data());
                let auxLibrerias = this.state.librerias;
                auxLibrerias.push(doc.data());
                this.setState({ librerias: auxLibrerias });
            })
        );
    }

    addLibrary(libreria) {

        let librerias = this.state.librerias;

        var libraryExists;
        for(var i=0;i<librerias.length;i++){

            var lAct=librerias[i];
            if(lAct.name===libreria.name){
libraryExists=true;
            }
        }
        
        if (libraryExists) {

            console.log("Esta libreria ya existe");
        } else {

            //libreria.id=libreria.name;
            librerias.push(libreria);

            this.state.db.collection("librerias").doc(libreria.name).set({
                
                 name: libreria.name, email: libreria.email, address: libreria.address, parent: libreria.parent
            
            
            });
        }
        this.setState({

            librerias: librerias
        });


    }
    handleSubmit(e) {

        e.preventDefault();
        console.log(this.state);

        let libreria = {

            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            parent: this.state.parent

        }


        this.addLibrary(libreria);
    }



    handleOnChange(event) {
        // console.log(event.target.value);

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        return (
            <div className="LibreriaForm container mt-5">

                <h1>Ingresa una nueva libreria</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleOnChange.bind(this)} value={this.state.name} placeholder="Ingresa el nombre" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Dirección</label>
                        <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleOnChange.bind(this)} placeholder="Ingresa la dirección" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="parent">Responsable</label>
                        <input type="text" className="form-control" id="parent" name="parent" value={this.state.parent} onChange={this.handleOnChange.bind(this)} placeholder="Ingresa el responsable" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={this.handleOnChange.bind(this)} value={this.state.email} placeholder="Enter email" />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default LibreriaForm;
