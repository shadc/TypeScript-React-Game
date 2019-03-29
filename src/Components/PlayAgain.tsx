import React from "react";

interface IPlayAgainInterface {
  onClick: any,
  gameStatus: string
}
const PlayAgain = (props: IPlayAgainInterface) => (
  <div className="game-done">
    <div className="message"
      style={{ color: props.gameStatus == 'lost' ? 'red' : 'green' }}>
      {props.gameStatus === 'lost' ? 'Game Over' : "Nice Work"}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
)


// // PlayAgain.defaultProps = {
// //     gameStatus: 'available',
// //     number: 0
// // }

export default PlayAgain;
