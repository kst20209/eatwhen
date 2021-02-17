import React, { Component } from 'react';

class Update extends Component {

    constructor(props){
      super(props);
      this.state={
        id:this.props.data.id,
        title:this.props.data.title,
        img:this.props.data.img,
        std:this.props.data.std,
        date:this.props.data.date,
      }
      this.inputFormHandler = this.inputFormHandler.bind(this)
    }
    inputFormHandler(e){
      this.setState({
        [e.target.name]:e.target.value
      });
    }

    render(){
      return(
        <div>
          <h2>Update</h2>
          <form action="/create-process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(this.state.title, this.state.img, this.state.std, this.state.date);
            }.bind(this)}
          >
            <p>
              <input type="hidden" value={this.state.id} onChange={this.inputFormHandler}></input>
              <input type="text" name="title" placeholder="이름" value={this.state.title} onChange={this.inputFormHandler}></input>
              <input type="text" name="img" placeholder="이미지" value={this.state.img} onChange={this.inputFormHandler}></input>
              <input type="number" min="1" name="std" placeholder="기준 시간" value={this.state.std} onChange={this.inputFormHandler}></input>
              <input type="date" name="date" placeholder="시작 날짜" value={new Date().toISOString().substring(0,10)} onChange={this.inputFormHandler}></input>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </div>
      );
    }
}

export default Update