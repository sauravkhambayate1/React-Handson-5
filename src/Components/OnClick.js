import React from 'react'
import HOC from "./HOC"
import "./Component.css"



const OnClick = (props) => {

    const {Counter,UpdateCounter}=props;
  return (

    <div>
      
        <h1 className='heading'>HOC Click Function</h1>
        <p className='counter'>Counter:{Counter}</p>
        <button className="btn" onClick={UpdateCounter}>clickplus</button>
    </div>
  )
}

export default HOC(OnClick)