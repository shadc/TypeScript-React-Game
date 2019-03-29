import React from "react";
import utils from "../Utils";

interface IStarsProps{
  count: number
}
const StarsDisplay = (props: IStarsProps) => (
  <>
    {utils.range(1, props.count).map(starId =>
      <div key={starId} className="star" />
    )}
  </>
);

export default StarsDisplay;