import React from "react";
import Cow from "./Cow.js"

const cowsList = ({cowData}) => {

  return <div className='cowsList'>
    {cowData.map((cow) => {
      return <Cow
        key={cow.id}
        cow_id={cow.id}
        cow_name={cow.cow_name}
        description={cow.cow_description}
      />
    })}
  </div>
};


export default cowsList