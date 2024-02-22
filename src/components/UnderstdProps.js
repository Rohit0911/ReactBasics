import React from "react";

const UnderstdProps = (props) => {

  //   console.log(props)

  return (
    <div>
      
      <h3>Hello {props.name} {props.sname}</h3>
      {props.children}

    </div>
  );
};

/* Or you can do destructuring using a different approach
const UnderstdProps = (name,sname) => {

  

  return (
    <div>
      
      <h3>Hello {name} {sname}</h3>
      

    </div>
  );
};

// Or write 

const {name,sname}=props

return{
  <h3>Hello {name} {sname}</h3>
}



*/

export default UnderstdProps;
