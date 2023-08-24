import React from 'react';
import logo from '../static/download.png'


const Main = () => {
    return (
        <div className="main-container">
            <p className="Description">
                Цей сайт для підготовки до співбесіди на позицію фронтенд
            </p>
            <img className="main-logo" src={logo} alt="logo" />
        </div>
    );
}

export default Main;
