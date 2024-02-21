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

export default UnderstdProps;
