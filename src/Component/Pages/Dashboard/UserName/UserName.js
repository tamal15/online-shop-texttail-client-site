import React from 'react';
import useAuth from '../../hook/useAuth';

const UserName = () => {
    const {user}=useAuth()
    return (
        <div>
            <h1>Welcome to  Dashboard <span className='pro'>{user?.displayName}</span></h1>
        </div>
    );
};

export default UserName;