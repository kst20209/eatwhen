import './App.css';
import React, { Component } from 'react';
import Read from './components/Read';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state={
      mode:'welcome',
      selected_content_id:2,
      contents:[
        {id:1, title:'떡볶이', date: '1', std:'30' , img:'1.jpg'},
        {id:2, title:'곱창', date: '3', std:'30', img:'2.jpg'},
        {id:3, title:'마라탕', date: '10', std:'30' , img:'3.jpg'}
      ], 
    }
  }

  readContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      <Read title={data.title} img={data.img}></Read>
    }
  }
  

  render(){
    return (
      <div className="App">
        <Read title={this.state.contents[1].title} img={this.state.contents[1].img}></Read>
      </div>
    );
  }
}

export default App;
