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
          <div>
            <img id="food" src={this.props.img} alt="음식 사진" width="75" height="75"></img>
          </div>
          <div id="present_state">
            <span id="read_title">현재 <strong>{this.props.title}</strong> 수치: {level}</span>
            <ProgressBar className="progress" now={number} label={`${number}%`} variant={color} striped={true} animated={true}/>
            <span id="final_date">마지막으로 먹은게 {this.props.date}일 전</span>
          </div>
          <div id="buttons">
            <input type="image" src="update.png" alt="수정" width="25" height="25" onClick={function(e){
              this.props.onClick('update');
            }.bind(this)}></input>
            <input type="image" src="delete.png" alt="삭제" width="25" height="25" onClick={function(e){
              this.props.onClick('delete');
            }.bind(this)}></input>
          </div>
        </div>
      );
    }
}

export default Read