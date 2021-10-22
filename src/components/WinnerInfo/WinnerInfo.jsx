import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {getWinner} from '../../redux/reducers/usersReducer/actions';

const WinnerInfo = () => {
    const {filteredUsers, isWinner, winner} = useSelector(state => state.users)
    const dispatch = useDispatch()

    return (
        <Box mt={3} style={{border: '1px solid purple', padding: '16px'}}>
            {
                isWinner
                    ?
                    <>
                        <Typography mb={2} variant='h5' align='center'>The Winner</Typography>
                        <Typography align='center'>ID: {winner.id}</Typography>
                        <Typography align='center'>Name: {winner.name}</Typography>
                        <Typography align='center'>Time: {winner.time}</Typography>
                    </>
                    :
                    <Typography
                        variant='h5'
                        fontWeight='bold'
                        align='center'
                    >
                        Total Participants: {filteredUsers.length}
                    </Typography>
            }
            <Button
                onClick={() => dispatch(getWinner())}
                fullWidth
                sx={{marginTop: '20px'}}
            >
                Show Winner
            </Button>
        </Box>
    )
}

export default WinnerInfo;