import React from "react";
import Cow from "./Cow.js"

const cowsList = (props) => {

  return <div className='cowsList' id='cowList'>
    {props.cowData.map((cow) => {
      return <Cow
        key={cow.id}
        cow_id={cow.id}
        cow_name={cow.cow_name}
        cow_description={cow.cow_description}
        handleClickCow={props.handleClickCow}
      />
    })}
  </div>
};


export default cowsList