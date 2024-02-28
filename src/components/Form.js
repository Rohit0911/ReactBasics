import React, { Component } from 'react'


 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'React'
      }
    }

    updatechange=(props)=> {
        this.setState({
            username:props.target.value,
            
        })
        
    }

    updatecomments=(target)=>{
        this.setState({
            comments:target.target.value
        })
    }

    topicchange=(props)=>{
        this.setState({
            topic:props.target.value
        })
    }

    handlesubmit=(event)=>{
        
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`) 
      event.preventDefault() // To keep  data in their fields
    
    }
    
  render() {
    //const{username,comments,topic}=this.state If we destructure like this then we can remove the this.state from all the value and just write the property as username,comments,topics

    return (
      <form onSubmit={this.handlesubmit}>
        <div>
            {/* // Input text */}
            <label >Username</label>
            <input type="text" 
            value={this.state.username} 
            onChange={this.updatechange}/>

        </div>
        <div>
            {/* TextArea */}
            <label >Comments</label>
            <textarea value={this.state.comments}
            onChange={this.updatecomments}
            />
            
        </div>

        <div>
            {/* Dropdown mennu to select any option */}
            <label >Topics</label>
            <select value={this.state.topic} onChange={this.topicchange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Next">Next</option>
                

            </select>

        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form

// Here the username is state property and its value is captured in the value attribute and passed to update function which replaces the old username with the updated value