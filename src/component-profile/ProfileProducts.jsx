import React from 'react';
import './ProfileProd.css';
const ProfileProducts = () => {

    return (
        <div className="profile_screen__products">
            <div className="profile_navbar">
                <div class="profile_user">
                    <img src="icon_user" className="user_logo " alt="user icon"/>                         
                    <div className="profile_user__info">
                        <p className="profile_user__name">Алеся</p>
                        <p className="profile_user__user-name">sergeykrash01</p>
                    </div>
                </div>
                <div className="menu_main__items">
                    <div className="menu_main__items-fav menu_items">
                        <div className="menu_container">
                            <img src="./Images/fav-icon.svg" className="profile_logo" alt="fav icon"/>
                            <p>Понравившиеся</p>
                        </div>
                        <img src="huge-icon-direction-right.svg" alt="direction icon"/>
                    </div>
                    <div className="menu_main__items-products menu_items">
                        <div className="menu_container">
                            <img src="icon-store.svg" className="profile_logo" alt="fav icon"/>
                            <p>Мои товары</p>
                        </div>
                        <img src="huge-icon-direction-right.svg" alt="direction icon"/>
                    </div>
                </div>
                <div className="menu_item__log-out menu_items">
                    <div className="menu_container">
                        <img src="icon-logout.svg" className="profile_logo" alt="fav icon"/>
                        <p>Выйти</p>
                    </div>               
                    <img src="huge-icon-direction-right.svg" alt="direction icon"/>
                </div>
            </div>
            <div className="profile_main">
                <div className="main_window__header">
                    <button><img src="huge-icon-arrow-left.svg" className="left-icon" alt="left icon"/></button>
                    <p>Назад</p>
                </div>
                <div className="main_window__body">

                </div>
            </div>
        </div>    
    );
}

export default ProfileProducts;