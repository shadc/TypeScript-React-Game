import React from "react";

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

interface IButtonProps{
    number: number,
    status:string,
    onClick: any  // Note, not sure if I should be using any here, but I'm not sure what type to use.
}
const PlayNumber = (props : IButtonProps) => (
  <button 
    className="number" 
    style={{backgroundColor: colors[props.status as keyof typeof colors] }}
    // Note - use the arrow function for the onclick event, otherwise it will go into a loop and cause an error.
    onClick={() => props.onClick(props.number, props.status)}
  >
  {props.number}
  </button>
);

// // PlayNumber.defaultProps = {
// //     status: 'available',
// //     number: 0
// // }

export default PlayNumber;




