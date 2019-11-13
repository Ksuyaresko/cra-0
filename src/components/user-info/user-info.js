import React from 'react';
import './user-info.css';
import UserInfoItem from "../user-info-item/user-info-item";

function UserInfo(props) {
    return (
        <div className='user-info'>
            <UserInfoItem title='Followers' number={props.user.followers}/>
            <UserInfoItem  title='Following' number={props.user.following}/>
        </div>
    );
}

export default UserInfo;