import React from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {createNewUser, toggleShowTimer, updateRegisterInputValues} from '../../redux/reducers/usersReducer/actions';
import {registerUser} from '../../validationShemes/validationSchemes';

const RegistrationForm = () => {
    const dispatch = useDispatch()

    const {handleSubmit, register, formState: {errors, isValid}, getValues} = useForm({
        resolver: yupResolver(registerUser),
        mode: 'onChange'
    })

    const onSubmit = () => {
        dispatch(updateRegisterInputValues(getValues()))
        dispatch(createNewUser())
        dispatch(toggleShowTimer())
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} style={{padding: '16px'}}>
            <Typography mb={2} variant='h5' align='center'>Registration User</Typography>

            <TextField
                {...register('firstName')}
                fullWidth
                margin='normal'
                label='First Name'
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
            />
            <TextField
                {...register('secondName')}
                fullWidth
                margin='normal'
                label='Second Name'
                error={!!errors.secondName}
                helperText={errors?.secondName?.message}
            />

            <Box mt={3}>
                <Button
                    type='submit'
                    disabled={!isValid}
                    variant='outlined'
                    fullWidth
                >
                    Register Participant
                </Button>
            </Box>
        </form>
    )
}

export default RegistrationForm;