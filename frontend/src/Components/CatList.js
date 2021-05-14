import React from "react";
import Cat from "./Cat.js"

const catList = (props) => {

  return <div className='catList' id='catList'>
    {props.catData.map((cat) => {
      return <Cat
        key={cat.id}
        cat_id={cat.id}
        cat_name={cat.cat_name}
        cat_description={cat.cat_description}
        handleClickCat={props.handleClickCat}
      />
    })}
  </div>
};


export default catList