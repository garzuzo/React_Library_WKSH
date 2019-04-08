import React, { Component } from 'react';
import firebase, { auth, provider } from '../../config/Firebase';
import {Link, Switch,Redirect} from  'react-router-dom';
class Libreria extends Component {

    constructor() {
        super();
        this.state = {

            username: '',
            password: '',
            user: null

        };

    }



    handleSubmit(e) {
        e.preventDefault();

console.log(this.state.username);

console.log(this.state.password);
        if (this.state.username === "garzuzo" && this.state.password === "123") {

                this.context.router.history.push(`/home`);

                console.log("in");
        }


    }


    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    render() {



        return (
            <div className="Login">

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="em">Email address</label>
                        <input type="email"  className="form-control" id="em" name="em" onChange={this.handleOnChange.bind(this)} value={this.state.username} aria-describedby="emailHelp"   placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="password" className="form-control" id="pass" name="pass" onChange={this.handleOnChange.bind(this)} value={this.state.password}  placeholder="Ingresa la contra" />
                        
                 
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Libreria;
