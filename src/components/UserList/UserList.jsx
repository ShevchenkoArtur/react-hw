import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from './UserCard/UserCard';
import {Box} from '@mui/material';
import {getUsers} from '../../redux/reducers/usersReducer/actions';
import {users as usersArr} from '../../data/users';
import style from './UserList.module.css'

const UserList = () => {
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.filteredUsers)

    useEffect(() => {
        dispatch(getUsers(usersArr))
    }, [dispatch])

    return (
        <Box className={style.list} mt={3}>
            {
                users.map(el => <UserCard key={el.id} user={el}/>)
            }
        </Box>
    )
}

export default UserList;
