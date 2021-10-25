import React from 'react';
import {Box, Container, Grid, TextField, Typography} from '@mui/material';
import {searchUsers} from '../../redux/reducers/usersReducer/actions';
import UserList from '../UserList/UserList';
import Timer from '../Timer/Timer';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import WinnerInfo from '../WinnerInfo/WinnerInfo';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

const Competition = () => {
    const {searchUsersValue, showTimer, winners, competitions} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const {id} = useParams()

    const getCompetitionName = () => {
        let name = ''
        competitions.map(el => {
            if(el.id === id) {
                name = el.name
            }
            return el
        })
        return name
    }

    return (
        <Container style={{display: 'flex', marginTop: '28px'}}>
            <Grid item xs={12}>
                <Typography fontWeight='bold'>{getCompetitionName()}</Typography>
                <TextField
                    value={searchUsersValue}
                    fullWidth
                    onChange={(e) => dispatch(searchUsers(id, e.target.value))}
                    placeholder='Enter participant name...'
                    margin='normal'
                />
                <UserList urlId={id}/>
            </Grid>
            <Grid item xs={12} marginLeft={3}>
                <Box className='col-2'>
                    {
                        !winners[id]?.isWinner &&
                        <Box style={{border: '1px solid green', padding: '20px'}}>
                            {
                                showTimer ? <Timer urlId={id}/> : <RegistrationForm/>
                            }
                        </Box>
                    }
                    <WinnerInfo urlId={id}/>
                </Box>
            </Grid>
        </Container>
    )
}

export default Competition;
