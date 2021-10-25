import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from './UserCard/UserCard';
import {Box, Typography} from '@mui/material';
import {getUsers} from '../../redux/reducers/usersReducer/actions';
import {users as usersArr} from '../../data/users';
import style from './UserList.module.css';

const UserList = ({urlId}) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users[urlId + 'Filtered'])

    useEffect(() => {
        dispatch(getUsers(urlId, usersArr))
    }, [dispatch, urlId])

    const renderList = () => {
        if (users) {
            const arr = users.map(el => <UserCard key={el.id} user={el} urlId={urlId}/>)
            return arr.length ? arr : <Typography>There not any participants</Typography>
        }
    }

    return (
        <Box className={style.list} mt={3}>
            {
                renderList()
            }
        </Box>
    )
}

export default UserList;
