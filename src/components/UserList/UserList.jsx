import React from 'react';
import UserCard from '../UserCard/UserCard';
import style from './UserList.module.css'

const UserList = ({filteredArr}) => {
    const notFoundMessageStyles = {
        fontWeight: 'bold',
        fontSize: '18px'
    }

    return (
        <div className={filteredArr.length ? style.foundList : style.notFoundList}>
            {
                filteredArr.length
                    ?
                    filteredArr.map(el => <UserCard key={el._id} user={el}/>)
                    :
                    <span style={notFoundMessageStyles}>Users not found</span>
            }
        </div>
    )
}

export default UserList;