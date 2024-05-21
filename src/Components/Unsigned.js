import React from 'react';
import logo from '../pic/logo1.png';
import { NavLink } from 'react-router-dom';

function Unsigned() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} height="100px" hspace="50px" alt="Логотип" />
        </a>
        <div className="navbar-wrap">
          <ul className="navbar-menu">
            <NavLink to="/">
              <li>Главная</li>
            </NavLink>
            <NavLink to="/famestate">
              <li>Достропримечательности</li>
            </NavLink>
            <NavLink to="/contacts">
              <li>Контакты</li>
            </NavLink>
            <NavLink to="/regform">
              <li>Регистрация</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Unsigned;
