import React, { Component } from 'react';

class Create extends Component {
    render(){
      return(
        <div>
          <form action="/create-process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.img.value, e.target.std.value, e.target.date.value);
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="이름"></input>
              <input type="text" name="img" placeholder="이미지"></input>
              <input type="number" min="1" name="std" placeholder="기준 시간"></input>
              <input type="date" name="date" placeholder="시작 날짜"></input>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </div>
      );
    }
}

export default Create