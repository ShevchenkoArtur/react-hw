import React from 'react';
import {Typography} from '@material-ui/core';

const FormHeading = ({children, props}) => {
    return (
        <Typography variant='h6' align='center' {...props}>
            {children}
        </Typography>
    )
}

export default FormHeading;