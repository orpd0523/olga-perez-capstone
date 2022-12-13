import "./Avatar.scss";
import useAvatarStore from "../../stores/avatar";

function Avatar() {
  const { avatar } = useAvatarStore();
  const bubbleView = "hidden"
  return (
    <div className="avatar__container">
      <div className={`avatar__img avatar__img--${avatar}`}>
        <div className={`avatar__bubble avatar__bubble--${bubbleView}`}>
          <div className="avatar__bubble-body">
            <small className="avatar__bubble-content">
            </small>
          </div>
          <div className="avatar__bubble-pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
