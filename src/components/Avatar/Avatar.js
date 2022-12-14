import "./Avatar.scss";
import useAvatarStore from "../../stores/avatarStore";
import { useEffect } from "react";
import useQuoteStore from "../../stores/quoteStore";

function Avatar() {
  const { avatar, getAvatarFromLS } = useAvatarStore();
  const { quote, quotes, getQuotes, bubbleVisible, hideBubble } = useQuoteStore();
  useEffect(() => {
    getQuotes();
    getAvatarFromLS();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (bubbleVisible === true ) {
      setTimeout(()=> {
        hideBubble()
      }, 10000)
    }
  }, [bubbleVisible])
  const bubbleView = "";
  return (
    <div className="avatar__container">
      <div className={`avatar__img avatar__img--${avatar}`}>
        {bubbleVisible === true ? (
          <div className={`avatar__bubble avatar__bubble--${bubbleView}`}>
            <div className="avatar__bubble-body">
              <small className="avatar__bubble-content">{quote}</small>
            </div>
            <div className="avatar__bubble-pointer"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Avatar;
