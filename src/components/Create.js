import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Create extends Component {
    render(){
      return(
        <div>
          <form action="/create-process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.image.value, e.target.std.value, e.target.date.value);
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="이름"></input>
                <DropdownButton
                  onSelect={function(e){
                    console.log(e);
                  }.bind(this)}
                >
                  <Dropdown.Item eventKey="img1">1.jpg</Dropdown.Item>
                  <Dropdown.Item eventKey="img2">2.jpg</Dropdown.Item>
                  <Dropdown.Item eventKey="img3">3.jpg</Dropdown.Item>
                </DropdownButton>
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