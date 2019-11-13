import React from 'react';
import './user.css';
import UserTitle from "../user-title/user-title";
import UserAvatar from "../user-avatar/user-avatar";
import UserInfo from "../user-info/user-info";


function User(props) {
    return (
        <div className='user'>
            <UserTitle name={props.user.name}/>
            <UserAvatar avatar={props.user.avatar}/>
            <UserInfo user={props.user}/>
        </div>
    );
}

export default User;