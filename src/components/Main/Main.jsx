import React from 'react';
import {useFormStore} from '../../context/FormProvider';
import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import FourthStep from '../FourthStep/FourthStep';
import FifthStep from '../FifthStep/FifthStep';
import {Container} from '@material-ui/core';

const Main = () => {
    const [state, dispatch] = useFormStore()

    const showForm = () => {
        switch (state.step) {
            case 1:
                return <FirstStep/>
            case 2:
                return <SecondStep/>
            case 3:
                return <ThirdStep/>
            case 4:
                return <FourthStep/>
            case 5:
                return <FifthStep/>
            default:
                return <FirstStep/>
        }
    }

    return (
        <Container maxWidth='sm'>
            {showForm()}
        </Container>
    )
}

export default Main;