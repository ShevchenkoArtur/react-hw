import React from 'react';
import style from './FormContainer.module.css';
import themeImg from './../../images/theme.svg'
import {useFormStore} from "../../context/FormProvider";
import {toggleTheme} from "../../reducers/formReducer/formAction";

const FormContainer = ({children, props}) => {
    const [state, dispatch] = useFormStore()

    return (
        <div
            className={`${style.container} ${state.isDarkTheme ? style.darkBg : style.lightBg}`}
            {...props}
        >
            <button className={style.btn} onClick={() => dispatch(toggleTheme())}>
                <img width='30' src={themeImg} alt="Theme"/>
            </button>
            {children}
        </div>
    )
}

export default FormContainer;