import React from 'react'
import HOC from './HOC';
import "./Component.css" 
// import OnClick from './OnClick';
const OnHover = (props) => {
   

        const {Counter,UpdateCounter}=props;
    
  return (
    <div>
      
      <h1 className='heading'>HOC Hover Function</h1>
        <p className='counter'>Counter:{Counter}</p>
        <button className="btn" onMouseEnter={UpdateCounter}>clickplus</button>

        {/* <OnClick /> */}
    </div>
  )
}

export default HOC(OnHover)
