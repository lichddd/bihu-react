import React, { Component } from 'react';
import logo from '../logo.svg';
import './TopPart.css'

class TopPart extends Component {
  constructor(props){
    super(props);
    // this.state={aaa:"aaa",hide:false};
  }
  clickhandel=(e)=>{
    // this.setState({hide:!this.state.hide});
    // this.setState(prevState => ({
    //   hide:!prevState.hide
    // }));
  }
  async componentDidMount(){
    //
    // try {
    //   let response = await fetch('music163/api/playlist/catalogue');
    //   let data = await response.json();
    //   console.log(data);
    // } catch(e) {
    //   console.log("Oops, error", e);
    // }

  }


  render() {
    return (
        <div className="top-part">
          <img src={logo} className="App-logo" alt="logo" onClick={this.props.logoClick} />
          <h2>逼乎日报</h2>
          <h6>-向世人展示你的装逼奇技淫巧</h6>
        </div>
    );
  }
}

export default TopPart;
