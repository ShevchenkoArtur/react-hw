import './App.css';
import UserList from './components/UserList/UserList';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import {Box, Container, Grid, TextField} from '@mui/material';
import WinnerInfo from './components/WinnerInfo/WinnerInfo';
import {useDispatch, useSelector} from 'react-redux';
import {searchUsers} from './redux/reducers/usersReducer/actions';
import Timer from './components/Timer/Timer';

const App = () => {
    const {searchValue, showTimer} = useSelector(state => state.users)
    const dispatch = useDispatch()

    return (
        <Container style={{display: 'flex', marginTop: '28px'}}>
            <Grid item xs={12}>
                <TextField
                    value={searchValue}
                    fullWidth
                    onChange={(e) => dispatch(searchUsers(e.target.value))}
                    placeholder='Enter participant name...'
                />
                <UserList/>
            </Grid>
            <Grid item xs={12} marginLeft={3}>
                <Box className='col-2'>
                    <Box style={{border: '1px solid green', padding: '20px'}}>
                        {
                            showTimer ? <Timer/> : <RegistrationForm/>
                        }
                    </Box>
                    <WinnerInfo/>
                </Box>
            </Grid>

        </Container>
    )
}

export default App;
