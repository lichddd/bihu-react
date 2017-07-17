import React, { Component } from 'react';
import './ContextPart.css'

class ContextPart extends Component {
  constructor(props){
    super(props);
    this.state={body:null};
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
  componentWillReceiveProps(){
    this.setState({body:null});
    // this.getdata();
  }
  async getdata(id){

    // try {
    //   fetch('music163/api/playlist/catalogue').then(response=>response.json()).then(data=>console.log(data));
    //
    // } catch(e) {
    //   console.log("Oops, error", e);
    // }

    try {
      let response = await fetch(`zhihu/news/${this.props.params.id}`);
      let data = await response.json();
      console.log(data);
      this.setState({body:data.body});
    } catch(e) {
      console.log("Oops, error", e);
    }

  }

  render() {
    return (
        <div className="context-part">
          <div className="continer" dangerouslySetInnerHTML={{__html:this.state.body}}>

          </div>
        </div>
    );
  }
}

export default ContextPart;
