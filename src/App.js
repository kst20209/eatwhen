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
        {id:3, title:'마라탕', date: '10', std:'30' , img:'3.jpg'},
        {id:4, title:'차슈덮밥', date: '8', std:'30' , img:'4.jpg'}
      ], 
    }
  }

  readContent(){
    var i = 0;
    var list = [];
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      list.push(
        <Read title={data.title} date={data.date} std={data.std} img={data.img}></Read>
      );
      i++;
    }
    return list;
  }

  render(){
    return (
      <div className="App">
        {this.readContent()}
      </div>
    );
  }
}

export default App;
