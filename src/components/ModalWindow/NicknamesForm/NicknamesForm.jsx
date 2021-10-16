import React from 'react';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import {useGameStore} from '../../../context/gameContext';
import {
    resetInputs,
    resetNicknames,
    saveNicknames,
    toggleModalOpener,
    updateInputs
} from '../../../reducers/gameReducer/gameActions';

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
        dispatch(resetNicknames())
        dispatch(toggleModalOpener())
        dispatch(resetInputs())
    }
    const onSaveClick = () => {
        dispatch(saveNicknames())
        dispatch(toggleModalOpener())
        dispatch(resetInputs())
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h6' component='p'>Enter your Nicknames</Typography>
            <Box>
                <TextField
                    {...register('firstPlayerName')}
                    value={state.inputValues.firstPlayerName}
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
                    value={state.inputValues.secondPlayerName}
                    onChange={(e) => dispatch(updateInputs('secondPlayerName', e.target.value))}
                    fullWidth
                    margin='normal'
                    label='Second Player'
                    error={!!errors.secondPlayerName}
                />
                <Typography color='textSecondary'>{errors?.firstPlayerName?.message}</Typography>
            </Box>
            <Box display='flex' mt={3}>
                <Button
                    fullWidth
                    variant='contained'
                    style={{backgroundColor: '#dc6533', color: '#fff', marginRight: '4px'}}
                    onClick={onCancelClick}
                >
                    Reset
                </Button>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    style={{backgroundColor: '#0c8437', color: '#fff', marginLeft: '4px'}}
                    onClick={onSaveClick}
                >
                    Save
                </Button>
            </Box>
        </form>
    )
}

export default NicknamesForm;