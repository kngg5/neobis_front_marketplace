import React from 'react';
import './ProfileProd.css';

const ProfileProducts = () => {

    return (
        <div>
            <div class="profile_screen__products">
        <div class="profile_navbar">
            <div class="profile_user">
                <img src="icon-user.svg" class="user_logo " alt="user icon">                         
                <div class="profile_user__info">
                    <p class="profile_user__name">Алеся</p>
                    <p class="profile_user__user-name">sergeykrash01</p>
                </div>
            </div>
            <div class="menu_main__items">
                <div class="menu_main__items-fav menu_items">
                    <div class="menu_container">
                        <img src="fav-icon.svg" class="profile_logo" alt="fav icon">
                        <p>Понравившиеся</p>
                    </div>
                    <img src="huge-icon-direction-right.svg" alt="direction icon">
                </div>
                <div class="menu_main__items-products menu_items">
                    <div class="menu_container">
                        <img src="icon-store.svg" class="profile_logo" alt="fav icon">
                        <p>Мои товары</p>
                    </div>
                    <img src="huge-icon-direction-right.svg" alt="direction icon">
                </div>
            </div>
            <div class="menu_item__log-out menu_items">
                <div class="menu_container">
                    <img src="icon-logout.svg" class="profile_logo" alt="fav icon">
                    <p>Выйти</p>
                </div>               
                <img src="huge-icon-direction-right.svg" alt="direction icon">
            </div>
        </div>
        <div class="profile_main">
            <div class="main_window__header">
                <button><img src="huge-icon-arrow-left.svg" class="left-icon" alt="left icon"></button>
                <p>Назад</p>
            </div>
            <div class="main_window__body">

            </div>
        </div>
    </div>
        </div>
    );
}

export default ProfileProducts;