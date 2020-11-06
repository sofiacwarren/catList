import React from "react";

const Cow = (props) => {
  return <div onClick={() => {props.handleClickCow(props.cow_id)}}>
    {/* single cow here */}
    <h3>{props.cow_id || '#'} - {props.cow_name || 'Moo!'}</h3>
    <p>{props.description}</p>
  </div>
};

export default Cow;