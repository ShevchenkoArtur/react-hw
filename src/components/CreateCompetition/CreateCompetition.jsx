import React from 'react';
import {Button, Container, TextField, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {createCompetition} from '../../validationShemes/validationSchemes';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addCompetition} from '../../redux/reducers/usersReducer/actions';

const CreateCompetition = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const {handleSubmit, register, formState: {errors}, getValues} = useForm({
        resolver: yupResolver(createCompetition),
        mode: 'onBlur'
    })

    const onSubmit = () => {
        const newValue = getValues()
        dispatch(addCompetition(newValue.contestName))
        history.push('/')
    }

    return (
        <Container>
            <form noValidate style={{border: '1px solid #000', marginTop: '24px', padding: '16px'}} onSubmit={handleSubmit(onSubmit)}>
                <Typography fontWeight='bold' align='center' mt={2}>Create contest</Typography>
                <TextField
                    {...register('contestName')}
                    placeholder='Enter contest name...'
                    fullWidth
                    margin='normal'
                    error={!!errors.contestName}
                    helperText={errors?.contestName?.message}
                />
                <Button fullWidth type='submit'>Create</Button>
            </form>
        </Container>
    )
}

export default CreateCompetition;