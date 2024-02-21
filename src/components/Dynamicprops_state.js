import React, { Component } from 'react'


/*
0) Now we have props which we pass from the main parent App.js but as props are immutable we cannot use it when we need dynamic content 
So we use State with which we can dynamically change the content displayed

1) State is nothing but a object which is privately maintained inside a component 
2) State can decide what is rendered in the browser
3) We can change the state unlike props. 

*/

class Dynamicprops_state extends Component {

  constructor(){
    super()

    this.state={
      message:'Welcome to new users'

    }
  }

  changeMessage(){
    this.setState({
      message:'Thank you for subscribing...'
    })

  }

  

  render() {
    return(
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=>{this.changeMessage()}}>Subscribe</button>


      </div>

    ) 
    
  }
}

export default Dynamicprops_state