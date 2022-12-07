import "./HealthBar.scss";
import { useState } from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function HealthBar() {
  const [health, setHealth] = useState(6);
  //need to create function to update health
  return (
    <div className="health-bar">
      {array.map((num) => {//mapping through array 1 - 10
        return (//returning color through class name(--modifier) based on useState (health)
          <span
            className={`health-bar__cell health-bar__cell--${
              num <= health ? "green" : "red" 
            }`}//checking if(?) number in array is less than(<=) current health if it is cell is green else(:) is red
          ></span>//need to create function to update health
        );
      })}
    </div>
  );
}

export default HealthBar;
