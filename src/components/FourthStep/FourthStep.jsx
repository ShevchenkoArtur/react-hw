import React from 'react';
import * as Yup from 'yup'
import {Box, Button, TextField, Typography} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useFormStore} from '../../context/FormProvider';
import {changeStep, updateInputs} from '../../reducers/formReducer/formAction';
import FormContainer from '../FormContainer/FormContainer';
import FormHeading from '../FormHeading/FormHeading';


const FourthStep = () => {
    const [state, dispatch] = useFormStore()

    const validationScheme = Yup.object().shape({
        password: Yup.string().required('Password is required'),
        confirmedPassword: Yup.string().required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationScheme)
    })

    const onSubmit = () => dispatch(changeStep(5))

    return (
        <FormContainer>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <FormHeading>Step: 4</FormHeading>

                <Box>
                    <TextField
                        {...register('password')}
                        label='Password'
                        value={state.userData.password}
                        onChange={(e) => dispatch(updateInputs('password', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='password'
                        error={!!errors.password}
                        variant='filled'
                        style={{backgroundColor: '#fff'}}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors?.password?.message}
                    </Typography>
                </Box>
                <Box>
                    <TextField
                        {...register('confirmedPassword')}
                        label='Confirm Password'
                        value={state.userData.confirmedPassword}
                        onChange={(e) => dispatch(updateInputs('confirmedPassword', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='password'
                        error={!!errors.confirmedPassword}
                        variant='filled'
                        style={{backgroundColor: '#fff'}}
                    />
                    <Typography variant="inherit" color="textSecondary">
                        {errors?.confirmedPassword?.message}
                    </Typography>
                </Box>
                <Box display='flex'>
                    <Button
                        sx={{mr: 1, mt: 2}}
                        fullWidth
                        variant='contained'
                        onClick={() => dispatch(changeStep(3))}
                    >
                        Previous
                    </Button>
                    <Button sx={{ml: 1, mt: 2}} fullWidth variant='contained' type='submit'>Submit</Button>
                </Box>
            </form>
        </FormContainer>
    )
}

export default FourthStep;