import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import Alert from 'react-bootstrap/Alert';
class LibreriaForm extends Component {

    constructor() {
        super();
        this.state = {

            name: '', email: '', address: '', parent: '',
            librerias: [{ name: 'Pepe', email: 'pepi@library.com', address: 'Calle 15#21-1', parent: 'Don Pepe' }], db: firebase.firestore()
           , show:false,
            msg:"",
            variante:""
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
        for (var i = 0; i < librerias.length; i++) {

            var lAct = librerias[i];
            if (lAct.name === libreria.name) {
                libraryExists = true;
            }
        }

        if (libraryExists) {
            this.setState({ show: true });
            this.setState({variante:"warning"});
            
            this.setState({msg:"Esta libreria ya existe"});
            console.log("Esta libreria ya existe");
        } else {
            this.setState({ show: true });
      this.setState({variante:"success"});
      this.setState({msg:"Libro creado exitosamente"});
            console.log("Libreria creada exitosamente");
            //libreria.id=libreria.name;
            librerias.push(libreria);

            this.state.db.collection("librerias").doc(libreria.name).set({

                name: libreria.name, email: libreria.email, address: libreria.address, parent: libreria.parent


            });
        }
        if(!libraryExists){
        this.setState({

            librerias: librerias,
            name:"",email:"",address:"",parent:""

        });
    }

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
        const handleHide = () => this.setState({ show: false });
        return (
            <div className="LibreriaForm container mt-5">
 <Alert show={this.state.show}  dismissible="true" onClick={handleHide} variant={this.state.variante} onChange={this.handleOnChange.bind(this)}>{this.state.msg}</Alert>
     
                <h1>Ingresa una nueva libreria</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleOnChange.bind(this)} value={this.state.name} placeholder="Ingresa el nombre" required/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Dirección</label>
                        <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleOnChange.bind(this)} placeholder="Ingresa la dirección" required/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="parent">Responsable</label>
                        <input type="text" className="form-control" id="parent" name="parent" value={this.state.parent} onChange={this.handleOnChange.bind(this)} placeholder="Ingresa el responsable" required/>

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
