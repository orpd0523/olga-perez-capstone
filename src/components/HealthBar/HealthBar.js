import "./HealthBar.scss";
import { useState } from "react";
import { ImHeart } from "react-icons/im";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function HealthBar() {
  const [health, setHealth] = useState(10);
  //need to create function to update health
  const hpIncrease = () => {
    setHealth((current) => (current > 9 ? current : current + 1));
  }; //if(?) current is greater than(>) 9(10) return current (10) else(:) return current plus one. Condition comes before the if.

  const hpDecrease = () => {
    setHealth((current) => (current < 1 ? current : current - 1));
  }; //if(?) current is less than(<) 1(0) return current (0) else(:) return current minus one. Condition comes before the if.
  // console.log(health);
  return (
    <>
      <div>
        <button type="button" onClick={hpIncrease}>
          Increase
        </button>
        <button type="button" onClick={hpDecrease}>
          Decrease
        </button>
      </div>
      <div className="health-bar__container">
        <ImHeart className="health-bar__hp"/>
        <div className="health-bar">
          {array.map((num) => {
            //mapping through array 1 - 10
            return (
              //returning color through class name(--modifier) based on useState (health)
              <span
                key={`hp-cell-${num}`}
                className={`health-bar__cell health-bar__cell--${
                  num <= health ? "green" : "red"
                }`} //checking if(?) number in array is less than(<=) current health if it is cell is green else(:) is red
              ></span> //need to create function to update health will check to see if the fields are checked off
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HealthBar;
