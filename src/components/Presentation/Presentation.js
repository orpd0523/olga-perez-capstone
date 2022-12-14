import "./Presentation.scss";
import useTodoStore from "../../stores/todoStore";
import useHealthStore from "../../stores/healthStore";
import { HiForward, HiBackward } from "react-icons/hi2";
import { VscDebugRestart } from "react-icons/vsc";
import Button from "../Button/Button.js";
import useDemoStore from "../../stores/demoStore.js";

function Presentation() {
  const { setHealth } = useHealthStore();
  const { resetTodos, completedCount } = useTodoStore();
  const { currentTime, forwardTime, backwardTime, resetTime, times } =
    useDemoStore();
  const handleReset = () => {
    resetTodos();
    setHealth(10);
    resetTime();
  };
  const handleForward = () => {
    const maxIndex = times.length - 1;
    const currentIndex = times.indexOf(currentTime);
    forwardTime();
    let newIndex = currentIndex + 1;
    newIndex = newIndex > maxIndex ? maxIndex : newIndex;
    if (completedCount >= newIndex) {
      setHealth(10);
    } else {
      const lostHealth = (newIndex - completedCount) * 2;
      const newHealth = 10 - lostHealth;
      setHealth(newHealth);
    }
  };
  const handleBackward = () => {
    const currentIndex = times.indexOf(currentTime);
    backwardTime();
    const newIndex = currentIndex - 1;
    if (completedCount >= newIndex) {
      setHealth(10);
    } else {
      const lostHealth = (newIndex - completedCount) * 2;
      const newHealth = 10 - lostHealth;
      setHealth(newHealth);
    }
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
