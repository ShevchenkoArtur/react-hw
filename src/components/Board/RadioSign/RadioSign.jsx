import React from 'react';
import {useGameStore} from '../../../context/gameContext';
import {changeFirstSignTurn} from '../../../reducers/gameReducer/gameActions';
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography} from '@material-ui/core';

const RadioSign = () => {
    const [state, dispatch] = useGameStore()

    return (
        <Box mt={3}>
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    <Typography
                        variant='h6'
                        component='p'
                        style={{color: '#fff'}}
                    >
                        First move:
                    </Typography>
                </FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                    onChange={(e) => dispatch(changeFirstSignTurn(e.target.value))}
                >
                    <FormControlLabel
                        style={{color: '#fff'}}
                        value="x"
                        control={<Radio style={{color: '#fff'}}/>}
                        label="X"
                    />
                    <FormControlLabel
                        style={{color: '#fff'}}
                        value="o"
                        control={<Radio style={{color: '#fff'}}/>}
                        label="O"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default RadioSign;