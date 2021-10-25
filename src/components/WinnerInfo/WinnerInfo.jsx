import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {getWinner} from '../../redux/reducers/usersReducer/actions';

const WinnerInfo = ({urlId}) => {
    const {users, winners} = useSelector(state => state.users)
    const dispatch = useDispatch()

    const renderWinner = () => {

        return winners[urlId]?.isWinner
            ?
            <>
                <Typography mb={2} variant='h5' align='center'>The Winner</Typography>
                <Typography align='center'>ID: {winners[urlId]?.winner.id}</Typography>
                <Typography align='center'>Name: {winners[urlId]?.winner.name}</Typography>
                <Typography align='center'>Time: {winners[urlId]?.winner.time}</Typography>
            </>
            :
            <Typography
                variant='h5'
                fontWeight='bold'
                align='center'
            >
                Total Participants: {users[urlId] && users[urlId].length}
            </Typography>
    }


    return (
        <Box mt={3} style={{border: '1px solid purple', padding: '16px'}}>
            {
                renderWinner()
            }
            <Button
                onClick={() => dispatch(getWinner(urlId))}
                fullWidth
                sx={{marginTop: '20px'}}
            >
                Show Winner
            </Button>
        </Box>
    )
}

export default WinnerInfo;