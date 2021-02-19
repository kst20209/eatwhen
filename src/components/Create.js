import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

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
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  image
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>1.jpg</Dropdown.Item>
                  <Dropdown.Item>2.jpg</Dropdown.Item>
                  <Dropdown.Item>3.jpg</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input type="number" min="1" name="std" placeholder="기준 시간"></input>
              <input type="date" name="date" placeholder="시작 날짜"></input>
            </p>
            <p>
              <input type="submit"></input>
              <input type="button" value="취소" onClick={function(e){
                this.props.onClick('read');
              }.bind(this)}></input>
            </p>
          </form>
        </div>
      );
    }
}

export default Create