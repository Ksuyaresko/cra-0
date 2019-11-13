import React from 'react';
import './user-title.css';


function UserTitle(props) {
    return (
        <div className='user-title'>
            {`${props.name} Profile`}
        </div>
    );
}

export default UserTitle;