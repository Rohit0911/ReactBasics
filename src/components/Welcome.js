import React,{Component} from "react";


class Welcome extends Component{

    render(){
        return <h2>{this.props.name}</h2>
    }

}

/* Or you can destructure it by
const {name,sname}=this.props

and use it without this.props.name , this.props.sname

*/


export default Welcome