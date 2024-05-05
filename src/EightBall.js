import { useState } from "react";
import examples from "./EightBallExamples";
import "./EightBall.css";
const EightBall = () => {
  const randomItem = Math.floor(Math.random() * examples.length);
  const [clicked, setClicked] = useState(false);
  const [state, setState] = useState(["Think of a Question", "black"]);
  const handleClick = () => {
    if (!clicked) {
      setState([examples[randomItem].msg, examples[randomItem].color]);
      setClicked(true);
    } else {
      setState(["Think of a Question", "black"]);
      setClicked(false);
    }
  };
  const [text, backgroundColor] = state;

  return (
    <div
      className="EightBall"
      style={{ backgroundColor: backgroundColor }}
      onClick={handleClick}
    >
      <div className="EightBall-text-div">
        <p className="EightBall-text">{text}</p>
      </div>
    </div>
  );
};
export default EightBall;
