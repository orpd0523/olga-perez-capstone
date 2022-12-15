import "./HealthBar.scss";
import { ImHeart } from "react-icons/im";
import useHealthStore from "../../stores/healthStore";
import { useEffect } from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function HealthBar() {
  const { health, getHealthFromLS } = useHealthStore();
  useEffect(() => {
    getHealthFromLS();
  }, [getHealthFromLS]);
  return (
    <div className="health-bar__container">
      <ImHeart className="health-bar__hp" />
      <div className="health-bar">
        {array.map((num) => {
          return (
            <span
              key={`hp-cell-${num}`}
              className={`health-bar__cell health-bar__cell--${
                num <= health ? "green" : "red"
              }`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default HealthBar;
