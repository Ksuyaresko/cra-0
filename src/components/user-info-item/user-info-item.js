import React from 'react';
import './user-info-item.css';


function UserInfoItem(props) {
    return (
        <div className='user-info-item'>
            <span>{props.title}</span>
            <span>{props.number}</span>
        </div>
    );
}

export default UserInfoItem;