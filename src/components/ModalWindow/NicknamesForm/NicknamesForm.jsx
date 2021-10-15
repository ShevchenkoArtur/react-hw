import React, {useEffect} from 'react';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import {useGameStore} from '../../../context/gameContext';
import {resetInputs, toggleModalOpener, updateInputs} from '../../../reducers/gameReducer/gameActions';

const NicknamesForm = () => {
    const [state, dispatch] = useGameStore()

    const validateScheme = Yup.object().shape({
        firstPlayerName: Yup.string().required('Name field is empty'),
        secondPlayerName: Yup.string().required('Name field is empty'),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validateScheme),
    })

    const onCancelClick = () => {
        dispatch(resetInputs())
        dispatch(toggleModalOpener())
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h6' component='p'>Enter your Nicknames</Typography>
            <Box>
                <TextField
                    {...register('firstPlayerName')}
                    value={state.players.nicknames.firstPlayerName}
                    onChange={(e) => dispatch(updateInputs('firstPlayerName', e.target.value))}
                    fullWidth
                    label='First Player'
                    margin='normal'
                    error={!!errors.firstPlayerName}
                />
                <Typography color='textSecondary'>{errors?.firstPlayerName?.message}</Typography>
            </Box>
            <Box>
                <TextField
                    {...register('secondPlayerName')}
                    value={state.players.nicknames.secondPlayerName}
                    onChange={(e) => dispatch(updateInputs('secondPlayerName', e.target.value))}
                    fullWidth
                    margin='normal'
                    label='Second Player'
                    error={!!errors.secondPlayerName}
                />
                <Typography color='textSecondary'>{errors?.firstPlayerName?.message}</Typography>
            </Box>
            <Box mt={3}>
                <Button
                    fullWidth
                    variant='contained'
                    style={{backgroundColor: '#b66a21', color: '#fff', marginRight: '4px'}}
                    onClick={onCancelClick}
                >
                    Reset
                </Button>
            </Box>
        </form>
    )
}

export default NicknamesForm;