import React, { Component } from 'react'

class EventBinding extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }
  }
  clickHandler(){
    this.setState({
        message:'Hello Again'
    })
  }

  newclickHandler=()=>{
    this.setState({
        message:'Best method for event binding'
    })
  }
  render() {
    return (
        <div>

        <div>{this.state.message}</div>
        {/* Approach 1 to handle events
         <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approach 2 to handle it using arrow functions 
         <button onClick={()=>this.clickHandler()}>Click</button>  */}



         {/*Both approach 1 and 2 has performance implications  */}
        {/* Approach 3 */}
         {/* <button onClick={this.newclickHandler}>Click</button>  */}


        
        </div>
    )
  }
}

export default EventBinding