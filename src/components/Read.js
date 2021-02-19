import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Read extends Component {
    render(){
      var date = this.props.date;
      var std = this.props.std;
      var number = (1-(date/std))*100;
      //var color = "#A0D468";
      var color = "success"
      var level = "정상";
      if (number < 0){
          number = 0;
          level = "비상";
      }
      if (33 <= number && number < 66){
        //color= "#FFE650";
        color = "warning";
        level = "경고";
      } else if (number < 33) {
        //color = "#FF013D";
        color = "danger";
        level = "위험";
      }

      number = Math.round(number);

      return(
        <div className='read'>
            <img id="food" src="1.jpg" alt="음식 사진" width="75" height="75"></img>
            <span>현재 {this.props.title} 수치: {level}</span>
            <ProgressBar className="progress" now={number} label={`${number}%`} variant={color}/>
            <span id="final_date">마지막으로 먹은게 {date}일 전</span>
        </div>
      );
    }
}

export default Read