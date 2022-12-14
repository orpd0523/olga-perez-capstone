import "./Avatar.scss";
import useAvatarStore from "../../stores/avatarStore";
import { useEffect } from "react";
import useQuoteStore from "../../stores/quoteStore";

function Avatar() {
  const { avatar, getAvatarFromLS } = useAvatarStore();
  const { quote, quotes, getQuotes } = useQuoteStore();
  useEffect(() => {
    getQuotes()
    getAvatarFromLS();
    // eslint-disable-next-line
  }, []);
  const bubbleView = "";
  return (
    <div className="avatar__container">
      <div className={`avatar__img avatar__img--${avatar}`}>
        <div className={`avatar__bubble avatar__bubble--${bubbleView}`}>
          <div className="avatar__bubble-body">
            <small className="avatar__bubble-content">
                {quote}
            </small>
          </div>
          <div className="avatar__bubble-pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
