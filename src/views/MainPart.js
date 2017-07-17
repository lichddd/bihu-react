import React, { Component } from 'react';
import './MainPart.css'
import { hashHistory } from 'react-router'

class MainPart extends Component {
  constructor(props){
    super(props);
    this.state={list:[]};
  }
  clickhandel=(e)=>{
    // this.setState({hide:!this.state.hide});
    // this.setState(prevState => ({
    //   hide:!prevState.hide
    // }));
  }
  componentDidMount(){
    this.getdata();
    //
    // try {
    //   let response = await fetch('music163/api/playlist/catalogue');
    //   let data = await response.json();
    //   console.log(data);
    // } catch(e) {
    //   console.log("Oops, error", e);
    // }

  }
  componentDidUpdate(prevProps){
    // this.setState({list:[]});
    console.log(prevProps);
    let oldId = prevProps.params.id;
    let newId = this.props.params.id;
    if (newId !== oldId)
    {
      this.getdata();
    }
  }
  async getdata(id){

    // try {
    //   fetch('music163/api/playlist/catalogue').then(response=>response.json()).then(data=>console.log(data));
    //
    // } catch(e) {
    //   console.log("Oops, error", e);
    // }

    try {
      let response = this.props.params.id?(await fetch(`zhihu/theme/${this.props.params.id}`)):(await fetch('zhihu/news/latest'));
      let data = await response.json();
      console.log(data);
      this.setState({list:data.stories});
    } catch(e) {
      console.log("Oops, error", e);
    }

  }

  render() {
    return (
        <div className="main-part">
          <div className="continer">
          {
            this.state.list.map((li)=>{
              return <div onClick={(e)=>{hashHistory.push(`/context/${li.id}`)}} className={`block ${li.images?'':'noimg'}`} key={li.id}>{li.images?<img src={li.images[0]}></img>:''}<p>{li.title}</p></div>;


            })

          }
          </div>
        </div>
    );
  }
}

export default MainPart;
