import React, {useEffect} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {
    addUser, resetTimer, startTimer, stopTimer, toggleShowTimer, updateTempTime,
} from '../../redux/reducers/usersReducer/actions';
import {formatTime} from '../../utils';

const Timer = ({urlId}) => {
    const {newUser, timer} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (timer.started) {
                let ms = timer.offset + (new Date()).getTime() - timer.time.getTime()
                dispatch(updateTempTime(formatTime(ms)))
            }
        })
        return () => clearInterval(intervalId)
    }, [timer.started, dispatch, timer.offset, timer.time])

    const start = () => dispatch(startTimer())
    const stop = () => dispatch(stopTimer())
    const reset = () => dispatch(resetTimer())

    const cancel = () => {
        dispatch(resetTimer())
        dispatch(toggleShowTimer())
    }

    const save = () => {
        const initialTime = timer.tempTime.split(',')[0]
        initialTime !== '00:00:00' ? dispatch(addUser(urlId)) : alert('Time shouldn\'t be 00:00:00')
    }

    return (
        <Box textAlign='center'>
            <Typography fontWeight='bold' mb={2} variant='h5' align='center'>Participant</Typography>
            <Typography>ID: {newUser.id}</Typography>
            <Typography>Name: {newUser.name}</Typography>

            <Box>
                <h1>{timer.tempTime}</h1>

                <Box mb={2}>
                    <Button onClick={start} disabled={timer.btnTimerStatus.start}>Start</Button>
                    <Button style={{marginLeft: '8px', marginRight: '8px'}}
                            onClick={stop}
                            disabled={timer.btnTimerStatus.stop}
                    >
                        Stop
                    </Button>
                    <Button onClick={reset} disabled={timer.btnTimerStatus.reset}>Reset</Button>
                </Box>
            </Box>

            <Box>
                <Button
                    variant='outlined'
                    onClick={cancel}
                    disabled={timer.btnTimerStatus.cancel}
                    fullWidth
                    style={{marginBottom: '12px'}}
                >
                    Cancel
                </Button>
                <Button
                    variant='outlined'
                    onClick={save}
                    disabled={timer.btnTimerStatus.save}
                    fullWidth
                >
                    Save
                </Button>
            </Box>
        </Box>
    )
}

export default Timer;