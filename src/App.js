import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopPart from './views/TopPart';
import ListView from './views/ListView';
import MainPart from './views/MainPart'


class App extends Component {
  constructor(props){
    super(props);
    this.state={showlist:false,list:[],themeid:""};
  }
  clickhandel=(e)=>{
    this.setState({showlist:!this.state.showlist});
    // this.setState(prevState => ({
    //   hide:!prevState.hide
    // }));
  }
  showlist=(e)=>{
    e.nativeEvent.stopImmediatePropagation()
    this.setState({showlist:!this.state.showlist});
  }
  componentDidMount(){

    document.addEventListener("click",(e)=>{this.setState({showlist:false});console.log(this.state)});
  }




  render() {
    return (
      <div className="App">

        <TopPart logoClick={this.showlist}></TopPart>
        {/* <MainPart></MainPart> */}
        {this.props.children}
        <ListView show={this.state.showlist} themeid={this.state.themeid} themeClick={(id)=>{this.setState({themeid:id});this.getdata(id);}}></ListView>
      </div>
    );
  }
}

export default App;
