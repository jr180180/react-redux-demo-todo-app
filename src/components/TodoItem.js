import React from 'react';

export default ({ onClick, completed, text }) => {
    return (
        <li
        onClick={ () => onClick() }
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        >
            {text}
        </li>
    );
};