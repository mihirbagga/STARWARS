import React from 'react';

function First(props){

  return(
   <div>
   <h1>First Component</h1>
   {props.myname}
  <h2>{props.counter}</h2>
   </div>
  )

}
export default First;