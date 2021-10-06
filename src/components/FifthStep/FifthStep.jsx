import React from 'react';
import {useFormStore} from '../../context/FormProvider';
import FormContainer from '../FormContainer/FormContainer';
import {Typography} from '@material-ui/core';
import style from './FifthStep.module.css';

const FifthStep = () => {
    const [state, dispatch] = useFormStore()

    return (
        <FormContainer>
            <Typography align='center' variant='h4' sx={{mb: 3}}>Thank you for registering!</Typography>

            <div className={style.imageBorder}>
                <img
                    src={state.userData.image.imagePreview ? state.userData.image.imagePreview : 'http://dummyimage.com/200'}
                    alt="avatar"
                />
            </div>

            <h2>User info</h2>
            <p>First Name: {state.userData.firstName}</p>
            <p>Last Name: {state.userData.lastName}</p>
            <p>Email: {state.userData.email}</p>
            <p>Town: {state.userData.town}</p>
            <p>Street: {state.userData.street}</p>
            <p>House: {state.userData.house}</p>
        </FormContainer>
    )
}

export default FifthStep;