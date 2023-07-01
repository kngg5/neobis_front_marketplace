import React, { useState } from 'react';
import './App.css';
import PopUp from './components/PopUp';
import logout from './components/huge-icon-logout.svg';
import trash from './components/huge-icon-trash.svg';

function App() {
  const[modalActive, setModalActive] = useState(true);
  const[modalActive2, setModalActive2] = useState(true);

  return (
    <div className="App">
      <PopUp active={modalActive} setActive={setModalActive} popUpImage={logout} popUpHeading={"Вы действительно хотите выйти с приложения?"} popUpActiveButtonText={"Выйти"} />
      <PopUp active={modalActive2} setActive={setModalActive2} popUpImage={trash} popUpHeading={"Вы действительно хотите удалить данный товар?"} popUpActiveButtonText={"Удалить"} />

      <button className='popup_btn' onClick={() => setModalActive(true)}>click</button>
      <button className='popup_btn2' onClick={() => setModalActive2(true)}>click2</button>
                
    </div>
  );
}

export default App;
