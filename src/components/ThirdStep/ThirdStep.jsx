import React from 'react';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import {useFormStore} from '../../context/FormProvider';
import {changeStep, updateInputs} from '../../reducers/formReducer/formAction';
import {useForm} from 'react-hook-form';
import FormContainer from '../FormContainer/FormContainer';

const ThirdStep = () => {
    const [state, dispatch] = useFormStore()

    const {register} = useForm()

    const uploadImage = (event) => {
        const reader = new FileReader()
        const file = event.target.files[0]
        reader.onloadend = () => dispatch(updateInputs('image', {file, imagePreview: reader.result}))
        if (file) reader.readAsDataURL(file)
    }

    const fileInputRef = React.createRef()

    const chooseFile = () => fileInputRef.current.click()

    return (
        <FormContainer>
            <form noValidate>
                <Box>
                    <Button fullWidth onClick={chooseFile}>Choose File</Button>

                    <Typography align='center'>
                        {state.userData.image.file.name ? state.userData.image.file.name : ''}
                    </Typography>

                    <label>
                        <TextField
                            sx={{display: 'none'}}
                            {...register('image')}
                            onChange={uploadImage}
                            type='file'
                            ref={fileInputRef}
                        />
                    </label>
                </Box>
                <Box display='flex'>
                    <Button sx={{mt: 2, mr: 1}} fullWidth onClick={() => dispatch(changeStep(2))}
                            variant='contained'>Previous</Button>
                    <Button sx={{mt: 2, ml: 1}} fullWidth onClick={() => dispatch(changeStep(4))}
                            variant='contained'>Next</Button>
                </Box>
            </form>
        </FormContainer>
    )
}

export default ThirdStep;