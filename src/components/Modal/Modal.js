import "./Modal.scss";
import useAvatarStore from "../../stores/avatarStore.js";
import Card from "../Card/Card";
import useModalStore from "../../stores/modalStore.js";

function Modal(props) {
  const { selection, setAvatar } = useAvatarStore();
  const { toggle } = useModalStore();
  const handleSelect = (avatar)=>{
    setAvatar(avatar) 
    toggle()
  }  
  return (
    <div className="modal__outer">
      <div className="modal__inner">
        <Card color="modal">
          <div className="selection__container">
            <h2 className="selection__title">Select Your Buddy</h2>
            <ul className="selection__list">
              {selection?.map((avatar) => {
                return (
                  <li className={` avatar__img  avatar__img--${avatar} selection__item`} onClick={() => handleSelect(avatar)}></li>
                );
              })}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
