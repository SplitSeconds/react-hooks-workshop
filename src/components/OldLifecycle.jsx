import React, { Component } from 'react';

class OldLife extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    document.title = `you clicked ${this.state.count} times `
  }
  componentDidUpdate(){
    document.title = `you clicked ${this.state.count} times `
  }
  increase = () => {
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    return (
      <div className="Old">
        <h1>I'm old Lifecycle: {this.state.count}</h1>
        <button onClick={this.increase}>click me</button>
        <br></br>
        <hr></hr>
      </div>
    );
  }
}

export default OldLife;