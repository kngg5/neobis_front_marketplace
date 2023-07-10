import React from 'react';
import styles from './popUp.module.css';


const PopUp = ({active, setActive, popUpImage, popUpHeading, popUpActiveButtonText}) => {

  const logOut = () => {
    alert("You are logged out!");
  }

  const logOutCancel = () => {
    alert("Log out canceled!");
  }

  return (
      <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
        <div className={active ? `${styles.modal_content} ${styles.active}` : `${styles.modal_content}`} onClick={(e) => e.stopPropagation()}>
          <img src={popUpImage} id={styles.popup_img}  alt="log out illustration" />
          <p className={styles.popup_heading}>{popUpHeading}</p>
          <button className={styles.popup__btn_active} onClick={logOut}>{popUpActiveButtonText}</button>
          <button className={styles.popup__btn_secondary} onClick={logOutCancel}>Отмена</button>
        </div>
      </div>
  );
}

export default PopUp;