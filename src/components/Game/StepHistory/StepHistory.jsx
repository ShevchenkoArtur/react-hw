import React from 'react';
import {Box, Button} from '@material-ui/core';
import {updateStepHistory} from '../../../reducers/gameReducer/gameActions';
import {useGameStore} from '../../../context/gameContext';

const StepHistory = () => {
    const [state, dispatch] = useGameStore()

    return state.history.map((el, idx) => {
        if (idx) {
            return (
                <Box display='flex' key={idx} mt={2}>
                    <Button
                        onClick={() => dispatch(updateStepHistory(idx))}
                        fullWidth
                        variant='contained'
                    >
                        Return to {idx} move
                    </Button>
                </Box>
            )
        }
    })
}

export default StepHistory;