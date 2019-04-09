import React, { Component } from 'react';
import firebase, { auth, provider } from '../../config/Firebase';
import { Link } from 'react-router-dom'; 

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: ''
        };

    }

    

    handleSubmit(e) {
        e.preventDefault();

//console.log(this.state.username);

//console.log(this.state.password);
  //      if (this.state.email === "garzuzo" && this.state.password === "123") {

    //            this.context.router.history.push(`/home`);

      //          console.log("in");
       // }
       firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
        console.log(error.message);
      });

    }

    handleRegister(e){
        e.preventDefault();

       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{}).catch((error) => {
        console.log(error);
      });

    }


    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    render() {



        return (
            <div className="Login container mt-5">

                <form>
                    <div className="form-group">
                    
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Ingresa un correo electrónico" onChange={this.handleOnChange.bind(this)} value={this.state.email} />
                    </div>
                    <div className="form-group">

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Ingresa la contraseña" onChange={this.handleOnChange.bind(this)} value={this.state.password} />
                    </div>
                    <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary">Ingresar</button>
                    <button onClick={this.handleRegister.bind(this)} type="submit" className="btn btn-primary ml-3">Registrarse</button>
                </form>
            </div>
        );
    }
}

export default Login;
