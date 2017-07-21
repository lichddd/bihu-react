import React, { Component } from 'react';
import {  Link } from 'react-router'
import './ListView.css'

class ListPart extends Component {
  constructor(props){
    super(props);
    this.state={list:[{id:"",name:"首页"}]};
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
  async getdata(){


    try {
      let response = await fetch('zhihu/themes');
      let data = await response.json();
      console.log(data);
      this.setState({list:[{id:"",name:"首页"},...data.subscribed,...data.others]});
    } catch(e) {
      console.log("Oops, error", e);
    }

  }

  render() {
    return (
        <div className={this.props.show?'list-view show':'list-view'}>
          {
            this.state.list.map((li)=>{
              return <h3 key={li.id}><Link activeClassName="active" to={`/${li.id}`}>{li.name}</Link></h3>
            })

          }
        </div>
    );
  }
}

export default ListPart;
