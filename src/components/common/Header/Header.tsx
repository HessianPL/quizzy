import React from "react";
import './Header.css'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Quizzy App</h1>
            <h3 className="header__subtitle">Complete a quiz or create a new one and share it!</h3>
            <nav className="header__navigation">
                <ul className="header__list">
                    <li className="header__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/makequiz">Make a quiz</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}