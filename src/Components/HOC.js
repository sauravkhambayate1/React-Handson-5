import React, { useState } from 'react'
// import HoverComp from './HoverComp'
// import "./Component.css"

const HOC = (WrappedComponent) => {
    function HOC(){
    const[Counter,setCounter]=useState(0)
    const UpdateCounter=()=>{
        setCounter(Counter+1)
    }
  return (
    <div>
<WrappedComponent Counter={Counter} UpdateCounter={UpdateCounter} />
    </div>
  )
}
return HOC
}
export default HOC
