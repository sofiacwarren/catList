import React from "react";

const Cow = (props) => {
  return <div>
    {/* single cow here */}
    <h3>{props.cow_id} - {props.cow_name}</h3>
    <p>{props.description}</p>
  </div>
};

export default Cow;