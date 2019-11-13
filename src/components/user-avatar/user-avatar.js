import React from 'react';
import './user-avatar.css';


function UserAvatar(props) {
    return (
        <div className='user-avatar'>
            <img src={props.avatar}/>
        </div>
    );
}

export default UserAvatar;