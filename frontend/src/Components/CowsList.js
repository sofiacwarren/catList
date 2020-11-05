import React from "react";
import Cow from "./Cow.js"

const cowsList = ({cowData}) => {

  return <div className='cowsList' id='cowList'>
    {cowData.map((cow) => {
      return <Cow
        key={cow.id}
        cow_id={cow.id}
        cow_name={cow.cow_name}
      />
    })}
  </div>
};


export default cowsList