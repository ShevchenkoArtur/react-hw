import React, {useState} from 'react';
import {userData} from '../../userData';
import UserCard from '../UserCard/UserCard';
import style from './UserList.module.css'


const UserList = props => {
    const [users, setUsers] = useState(userData)

    return (
        <div className={style.list}>
            {
                users.map(el => <UserCard key={el._id} users={el}/>)
            }
        </div>
    )
}

export default UserList;