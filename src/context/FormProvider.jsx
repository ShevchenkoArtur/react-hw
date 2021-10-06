import React, {useContext, useReducer} from 'react';

const FormContext = React.createContext()

const FormProvider = ({children, formReducer, initialState}) => {
    const [state, dispatch] = useReducer(formReducer, initialState)

    return (
        <FormContext.Provider value={[state, dispatch]}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormStore = () => useContext(FormContext)
export default FormProvider


