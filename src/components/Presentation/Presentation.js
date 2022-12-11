import "./Presentation.scss";
import useTodoStore from "../../stores/todoStore";
import useHealthStore from "../../stores/healthStore";
import { HiForward, HiBackward } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import Button from "../Button/Button.js";
import useDemoStore from "../../stores/demo";

function Presentation() {
  const { health, setHealth } = useHealthStore();
  const { resetTodos, completedCount } = useTodoStore();
  const { currentTime, forwardTime, backwardTime, resetTime, times } =
    useDemoStore();
  const handleTodos = () => {
    const currentIndex = times.indexOf(currentTime);
    if (completedCount >= currentIndex) {
      setHealth(10);
    } else {
      const lostHealth = (currentIndex - completedCount) * 2;
      const newHealth = 10 - lostHealth
        setHealth(newHealth)
    }
  };
  const handleReset = () => {
    resetTodos();
    setHealth(10);
    resetTime();
  };
  const handleForward = () => {
    forwardTime();
    handleTodos();
  };
  const handleBackward = () => {
    backwardTime();
    handleTodos();
  };
  return (
    <div className="demo">
      <span className="demo__time">
        <p className="demo__time-value">{currentTime}</p>
      </span>
      <span className="demo__btn-group">
        <span className="demo__btn-container">
          <Button color="demo" onClick={handleBackward}>
            <HiBackward />
          </Button>
        </span>
        <span className="demo__btn-container">
          <Button color="demo" onClick={handleForward}>
            <HiForward />
          </Button>
        </span>
        <span className="demo__btn-container">
          <Button color="demo" onClick={handleReset}>
            <VscDebugRestart />
          </Button>
        </span>
      </span>
    </div>
  );
}

export default Presentation;
