import React, { Component } from 'react';
import './App.css'
// import Dropdown from './components/dropdown/Dropdown'
// import Card from './components/card/Card'
// import Add from './components/add/Add'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
     defaultHeight:true,    
     List:[],
     ListLock:[],
    ListPrivacy:[]   
   }
    this.clicksidebar=this.clicksidebar.bind(this)
    this.clickall=this.clickall.bind(this)
    this.clicklock=this.clicklock.bind(this)
    this.clickprivacy=this.clickprivacy.bind(this)
  }
  render() {
    let styleObj ={         
      display: this.state.defaultHeight ? 'none' : 'block'
    }
    const title=this.state.title
    
    if(title==="锁定"){
      return (
        <div className="wrapper">
            <a className="dropdown" href="##" onClick={this.clicksidebar}> 
            {this.state.title ? this.state.title : '所有项目组' } ▽</a>
              <ul style={styleObj}>
                <li>
                  <a href="##"  onClick={this.clickall}>所有项目组</a>
                </li>
                <li >
                  <a href="##" onClick={this.clicklock} >锁定</a>
                </li>
                <li >
                  <a href="##" onClick={this.clickprivacy}>私密</a>
                </li>
              </ul>
          <div className="card">
            {this.state.ListLock.map((value,id)=>{
              console.log(title);
                return(
                    <div href="##" className="carditem" key={value.id} style={{border: value.lock?"2px solid #ccc":""}}>
                    <span className="color" style={{background: value.color}}></span>
                    <span href="##">{value.name}</span>
                    <div className="lock" style={{border: value.lock?"1px solid #ccc":""}}>{value.lock ? "锁定" : "" }</div>
                    <div className="privacy" style={{border: value.privacy?"1px solid #ccc":"", left: value.lock?"110px":"70px"}}>{value.privacy ? "私密" : "" }</div>
                    <p href="##">{value.num} 项目</p>
                    </div>
                )
            })}
            <div className="carditem add">
              新建项目组
            </div>
          </div>
  
        </div>
      );
    }
    if(title==="私密"){
      return (
        <div className="wrapper">
            <a className="dropdown" href="##" onClick={this.clicksidebar}> 
            {this.state.title ? this.state.title : '所有项目组' } ▽</a>
              <ul style={styleObj}>
                <li>
                  <a href="##"  onClick={this.clickall}>所有项目组</a>
                </li>
                <li >
                  <a href="##" onClick={this.clicklock} >锁定</a>
                </li>
                <li >
                  <a href="##" onClick={this.clickprivacy}>私密</a>
                </li>
              </ul>
          <div className="card">
            {this.state.ListPrivacy.map((value,id)=>{
              console.log(title);
                return(
                    <div href="##" className="carditem" key={value.id} style={{border: value.lock?"2px solid #ccc":""}}>
                    <span className="color" style={{background: value.color}}></span>
                    <span href="##">{value.name}</span>
                    <div className="lock" style={{border: value.lock?"1px solid #ccc":""}}>{value.lock ? "锁定" : "" }</div>
                    <div className="privacy" style={{border: value.privacy?"1px solid #ccc":"", left: value.lock?"110px":"70px"}}>{value.privacy ? "私密" : "" }</div>
                    <p href="##">{value.num} 项目</p>
                    </div>
                )
            })}
            <div className="carditem add">
              新建项目组
            </div>
          </div>
  
        </div>
      );
    }
    else{
      return (
        <div className="wrapper">
            <a className="dropdown" href="##" onClick={this.clicksidebar}> 
            {this.state.title ? this.state.title : '所有项目组' } ▽</a>
              <ul style={styleObj}>
                <li>
                  <a href="##"  onClick={this.clickall}>所有项目组</a>
                </li>
                <li >
                  <a href="##" onClick={this.clicklock} >锁定</a>
                </li>
                <li >
                  <a href="##" onClick={this.clickprivacy}>私密</a>
                </li>
              </ul>
          <div className="card">
            {this.state.List.map((value,id)=>{
              console.log(title);
                return(
                    <div href="##" className="carditem" key={value.id} style={{border: value.lock?"2px solid #ccc":""}}>
                    <span className="color" style={{background: value.color}}></span>
                    <span href="##">{value.name}</span>
                    <div className="lock" style={{border: value.lock?"1px solid #ccc":""}}>{value.lock ? "锁定" : "" }</div>
                    <div className="privacy" style={{border: value.privacy?"1px solid #ccc":"", left: value.lock?"110px":"70px"}}>{value.privacy ? "私密" : "" }</div>
                    <p href="##">{value.num} 项目</p>
                    </div>
                )
            })}
            <div className="carditem add">
              新建项目组
            </div>
          </div>
  
        </div>
      );
    }
   
  }
  componentDidMount(){
    fetch('/mock/data.json')
    .then(r => {
        return r.json()
    })
    .then(result =>{     
        this.setState({
            List:result.data
        }) 
    })  
  }
  clicksidebar(){
    this.setState({
        defaultHeight: false
    })
 }
 clickall(){
  this.setState({
    defaultHeight: true,
    title:"所有项目组"
  })
 }
 clicklock(){
  fetch('/mock/data.json')
  .then(r => {
      return r.json()
  })
  .then(result =>{     
      this.setState({  
          ListLock:(result.data.filter(function(item){
              return item.lock===true
          })),
          defaultHeight: true,
          title:"锁定"
      }) 
  })
 }
 clickprivacy(){
  fetch('/mock/data.json')
  .then(r => {
      return r.json()
  })
  .then(result =>{     
      this.setState({
          ListPrivacy:(result.data.filter(function(item){
              return item.privacy===true
          })),
          defaultHeight: true,
          title:"私密"
      }) 
  })  
 }

}

export default App;
