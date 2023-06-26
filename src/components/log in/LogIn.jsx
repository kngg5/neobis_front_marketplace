import React from 'react';

const LogIn = () => {
  return (
    <div class="log_in__section">
        <div class="log_in__image">
            <img src="public/images/image-1mrt.jpg" alt="background image"/>
        </div>
        <div class="log_in__form">
            <form>
                <input type="text" name="user_name" id="user_name"  placeholder="Имя пользователя"/>
                <input type="password" name="user_password" id="user_password" placeholder="Пароль"/>
                <button class="log_in__btn">Войти</button>
            </form>
        </div>
    </div>
  );
}

export default LogIn;
