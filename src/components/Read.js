import React, { Component } from 'react';
import Bar from 'react-meter-bar';

class Read extends Component {
    render(){
      var date = this.props.date;
      var std = this.props.std;
      var number = (1-(date/std))*100;
      var color = "#A0D468";
      if (number < 0){
          number = 0;
      }
      if (33 <= number && number < 66){
        color= "#FFE650"
      } else if (number < 33) {
        color = "#FF013D"
      }
      return(
        <div>
            {this.props.img}
            {this.props.title}
            <span>마지막으로 먹은게 {date}일 전...</span>
            <Bar
                labels={[0,33,66,100]}
                labelColor = "null"
                progress = {number}
                barColor = {color}
                seperatorColor = "gray"
            />
            <hr></hr>
        </div>
      );
    }
}

export default Read