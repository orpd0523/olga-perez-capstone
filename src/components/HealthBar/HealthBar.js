import "./HealthBar.scss";
import { ImHeart } from "react-icons/im";
import useHealthStore from "../../stores/healthStore";
import { useEffect } from "react";
import useTodoStore from "../../stores/todoStore";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function HealthBar() {
  const { health, increaseHealth, decreaseHealth, getHealthFromLS } = useHealthStore();
  const { resetTodos } = useTodoStore();
  useEffect(() => {getHealthFromLS()}, [getHealthFromLS])
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            increaseHealth(1);
          }}
        >
          Increase
        </button>
        <button
          type="button"
          onClick={() => {
            decreaseHealth(1);
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          onClick={() => {
            resetTodos()
            increaseHealth(10)
          }}
        >
          Reset
        </button>
      </div>
      <div className="health-bar__container">
        <ImHeart className="health-bar__hp" />
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
