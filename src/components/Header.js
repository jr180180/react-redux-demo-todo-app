import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to='/dashboard' className='header__title'>
                    <h1>Simple To-do App</h1>
                </Link>
            </div>
        </div>
    </header>
);

export default Header;

