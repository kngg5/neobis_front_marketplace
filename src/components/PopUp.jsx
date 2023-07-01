import React from 'react';
import './popUp.css';


const PopUp = ({active, setActive, popUpImage, popUpHeading, popUpActiveButtonText}) => {

  const logOut = () => {
    alert("You are logged out!");
  }

  const logOutCancel = () => {
    alert("Log out canceled!");
  }

  return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal_content active" : "modal_content"} onClick={(e) => e.stopPropagation()}>
          <img src={popUpImage} id="popup_img" alt="log out illustration" />
          <p className="popup_heading">{popUpHeading}</p>
          <button className="popup__btn-active" onClick={logOut}>{popUpActiveButtonText}</button>
          <button className="popup__btn-secondary" onClick={logOutCancel}>Отмена</button>
        </div>
      </div>
  );
}

export default PopUp;