import React from 'react';
import * as Yup from 'yup'
import {Box, Button, TextField} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useFormStore} from '../../context/FormProvider';
import {changeStep, updateInputs} from '../../reducers/formReducer/formAction';
import FormContainer from '../FormContainer/FormContainer';
import FormHeading from '../FormHeading/FormHeading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const SecondStep = () => {
    const [state, dispatch] = useFormStore()

    const validationScheme = Yup.object().shape({
        town: Yup.string().required('Town is required'),
        street: Yup.string().required('Street is required'),
        house: Yup.string().required('House is required'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationScheme)
    })

    const onSubmit = () => dispatch(changeStep(3))


    return (
        <FormContainer>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <FormHeading>Step: 2</FormHeading>

                <Box>
                    <TextField
                        {...register('town')}
                        label='Town'
                        value={state.userData.town}
                        onChange={(e) => dispatch(updateInputs('town', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='text'
                        error={!!errors.town}
                    />

                    <ErrorMessage>{errors?.town?.message}</ErrorMessage>
                </Box>
                <Box>
                    <TextField
                        {...register('street')}
                        label='Street'
                        value={state.userData.street}
                        onChange={(e) => dispatch(updateInputs('street', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='text'
                        error={!!errors.street}
                    />

                    <ErrorMessage>{errors?.street?.message}</ErrorMessage>
                </Box>
                <Box>
                    <TextField
                        {...register('house')}
                        label='House'
                        value={state.userData.house}
                        onChange={(e) => dispatch(updateInputs('house', e.target.value))}
                        fullWidth
                        margin='normal'
                        required
                        type='text'
                        error={!!errors.house}
                    />

                    <ErrorMessage>{errors?.house?.message}</ErrorMessage>
                </Box>

                <Box display='flex'>
                    <Button sx={{mt: 2, mr: 1}} fullWidth variant='contained'
                            onClick={() => dispatch(changeStep(1))}>Previous</Button>
                    <Button sx={{mt: 2, ml: 1}} fullWidth variant='contained' type='submit'>Next</Button>
                </Box>
            </form>
        </FormContainer>
    )
}

export default SecondStep;