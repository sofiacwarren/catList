import React from "react";

const Cat = (props) => {
  return <div onClick={() => {props.handleClickCat(props.cat_id)}}>
    {/* single cow here */}
    <h3>{props.cat_id || '#'} - {props.cat_name || 'Mew!'}</h3>
    <p>{props.description}</p>
  </div>
};

export default Cat;