import React from 'react';
import UserCard from '../UserCard/UserCard';
import style from './UserList.module.css'


const UserList = ({filteredArr}) => {
    return (
        <div className={style.list}>
            {
                filteredArr.map(el => <UserCard key={el._id} users={el} />)
            }
        </div>
    )
}

export default UserList;