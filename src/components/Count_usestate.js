import React, { Component } from "react";

class Count_usestate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // incrementCount() {
  //   this.setState({
  //     count: this.count + 1
  //     },
  //     () => {
  //       console.log("Callback value", this.state.count);
  //     }
  //   );
  //   // console.log(this.state.count); This gets executed before the setstate due to asynchronous nature
  // } 


  // Way to update the current state based on some previous state values.
  incrementCount(){

    this.setState(prevState=>({
        count:prevState.count+1
    }))
    console.log(this.state.count);
  }

  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    
  }
  // Whenever we want update the state from any previous state then we need to pass a function as a argument and not object as we did by doing setState({count:etc...})

  render() {
    return (
      <div>
        <div>Count- {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Count_usestate;
 