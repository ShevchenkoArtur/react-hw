import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../../redux/reducers/usersReducer/actions';
import style from './UserCard.module.css'

const UserCard = ({user}) => {
    const dispatch = useDispatch()

    return (
        <Box className={style.card}>
            <Typography>ID: {user.id}</Typography>
            <Typography>Name: {user.name}</Typography>
            <Typography>Time: {user.time}</Typography>
            <Box mt={2}>
                <Button onClick={() => dispatch(deleteUser(user.id))} fullWidth>Delete</Button>
            </Box>
        </Box>
    )
}

export default UserCard;
