import React from 'react';
import {Typography} from '@material-ui/core';
import {useFormStore} from "../../context/FormProvider";

const FormHeading = ({children, props}) => {
    const [state, dispatch] = useFormStore()
    const colorHeading = state.isDarkTheme ? {color: '#fff'} : {color: '#000'}

    return (
        <Typography style={colorHeading} variant='h6' align='center' {...props}>
            {children}
        </Typography>
    )
}

export default FormHeading;