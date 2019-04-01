import React, { Component } from 'react';

class Libro extends Component {


  render() {

    console.log(this.props.match.params.id);
    return (
        <div>
            {this.props.match.params.id}
        </div>
    );
  }
}

export default Libro;
