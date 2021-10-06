import React from 'react';

const FormContainer = ({children, props}) => {
    const containerStyles = {
        border: '1px solid grey',
        padding: '30px',
        borderRadius: '5px',
        marginTop: '200px',
    }

    return (
        <div style={containerStyles} {...props}>
            {children}
        </div>
    )
}

export default FormContainer;