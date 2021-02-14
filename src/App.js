import './App.css';
import React, { Component } from 'react';
import Read from './components/Read';
import Create from './components/Create';
import Update from './components/Update';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=4;
    this.state={
      mode:'read',
      selected_id:0,
      contents:[
        {id:1, title:'떡볶이', date: '21', std:'30' , img:'1.jpg', mode:'read'},
        {id:2, title:'곱창', date: '15', std:'30', img:'2.jpg', mode:'read'},
        {id:3, title:'마라탕', date: '10', std:'30' , img:'3.jpg', mode:'read'},
        {id:4, title:'차슈덮밥', date: '8', std:'30' , img:'4.jpg', mode:'read'}
      ], 
    }
  }

  dateDiff(_date1, _date2){
    var diffDate_1 = _date1 instanceof Date ? _date1 :new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 :new Date(_date2);
    diffDate_1 =new Date(diffDate_1.getFullYear(), diffDate_1.getMonth(), diffDate_1.getDate());
    diffDate_2 =new Date(diffDate_2.getFullYear(), diffDate_2.getMonth(), diffDate_2.getDate());
    console.log(diffDate_1);
    console.log(diffDate_2);
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
    return diff; 
  }
/*
  readContent(){
    var i = 0;
    var list = [];
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      list.push(<Read title={data.title} date={data.date} std={data.std} img={data.img}></Read>);
      list.push(
        <input type="button" value="update" onClick={function(e){
          this.setState({mode:'update', selected_id:i})
        }.bind(this)}></input>
      );
      i++;
    }
    return list;
  }
*/

  block(data){
    var blocklist = [];
    var _today = new Date();
    blocklist.push(<Read title={data.title} date={data.date} std={data.std} img={data.img}></Read>);
    blocklist.push(
      <input type="button" value="update" onClick={function(e){
        data.mode = 'update';
        this.setState({data:data});
      }.bind(this)}></input>
    );
    if(data.mode === 'update'){
      blocklist.pop();
      blocklist.push(<Update data={data} onSubmit={
        function(_title, _img, _std, _date){
          _date = this.dateDiff(_date,_today);
          data.title = _title;
          data.img = _img;
          data.std = _std;
          data.date = _date;
          data.mode = 'read';
          this.setState({data});
        }.bind(this)}></Update>);    
    }
    return blocklist;
  }

  getContent(){
    var i = 0;
    var list = [];
    var _today = new Date();
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      list.push(this.block(data));
      i++;
    }
    if(this.state.mode === 'create'){
      list.push(<Create onSubmit={function(_title, _img, _std, _date){
        this.max_content_id++;
        var _contents=Array.from(this.state.contents);
        _date = this.dateDiff(_date,_today);
        _contents.push({id:this.max_content_id, title:_title, date:_date, std:_std, img:_img});
        this.setState({
          contents:_contents,
          mode:'read',
        });
      }.bind(this)}></Create>);
    }
    return list;
  }

  render(){
    return (
      <div className="App">
        {this.getContent()}
        <input type="button" value="create" onClick={function(e){
          this.setState({mode:'create'})
        }.bind(this)}></input>
      </div>
    );
  }
}

export default App;
