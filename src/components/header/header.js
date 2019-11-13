import React from 'react';
import './header.css';


function Header(props) {
    return (
        <div className='header'>{props.name}</div>
    );
}

export default Header;