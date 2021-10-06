import React from 'react';
import {Typography} from '@material-ui/core';

const ErrorMessage = ({children, props}) => {
    return (
        <Typography variant="inherit" color="textSecondary" {...props}>
            {children}
        </Typography>
    )
}

export default ErrorMessage;