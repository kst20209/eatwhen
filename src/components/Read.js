import React, { Component } from 'react';
import Bar from 'react-meter-bar';

class Read extends Component {
    render(){
      var date = this.props.date;
      var std = this.props.std;
      var number = (1-(date/std))*100;
      var color = "green";
      if (33 <= number && number < 66){
        color= "yellow"
      } else if (number < 33) {
        color = "red"
      }
      return(
        <div>
            {this.props.img}
            {this.props.title}
            <Bar
                labels={[0,25,50,75,100]}
                labelColor="steelblue"
                progress = {number}
                barColor = {color}
                seperatorColor = "steelblue"
            />
            <hr></hr>
        </div>
      );
    }
}

export default Read