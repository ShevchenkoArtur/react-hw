import React from 'react';
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {Box, Button, TextField} from '@material-ui/core';
import {useFormStore} from '../../context/FormProvider';
import {changeStep, updateInputs} from '../../reducers/formReducer/formAction';
import FormContainer from '../FormContainer/FormContainer';
import FormHeading from '../FormHeading/FormHeading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const FirstStep = () => {
    const [state, dispatch] = useFormStore()

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = () => dispatch(changeStep(2))

    return (
        <FormContainer>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <FormHeading>Step: 1</FormHeading>

                <Box>
                    <TextField
                        {...register('firstName')}
                        label='First Name'
                        value={state.userData.firstName}
                        onChange={(e) => dispatch(updateInputs('firstName', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='text'
                        error={!!errors.firstName}
                    />
                    <ErrorMessage>
                        {errors?.firstName?.message}
                    </ErrorMessage>
                </Box>
                <Box>
                    <TextField
                        {...register('lastName')}
                        label='Last Name'
                        value={state.userData.lastName}
                        onChange={(e) => dispatch(updateInputs('lastName', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='text'
                        error={!!errors.lastName}
                    />

                    <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
                </Box>
                <Box>
                    <TextField
                        {...register('email')}
                        label='Email'
                        value={state.userData.email}
                        onChange={(e) => dispatch(updateInputs('email', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='email'
                        error={!!errors.email}
                    />
                    <ErrorMessage>
                        {errors?.email?.message}
                    </ErrorMessage>
                </Box>

                <Button sx={{mt: 2}} variant='contained' color='primary' fullWidth type='submit'>Next</Button>
            </form>
        </FormContainer>
    )
}

export default FirstStep;