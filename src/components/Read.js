import React, { Component } from 'react';

class Read extends Component {
    render(){
      return(
        <div>
            {this.props.img}
            {this.props.title}
            <hr></hr>
        </div>
      );
    }
}

export default Read