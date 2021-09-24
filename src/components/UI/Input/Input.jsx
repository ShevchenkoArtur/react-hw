import React from 'react';
import style from './Input.module.css'

const Input = ({onChange, value, type, labelName, placeholder}) => {
    return (
        <label className={style.label}>
            {labelName ? labelName : ''}
            <input className={style.input}
                   type={type}
                   value={value}
                   onChange={(e) => onChange(e.target.value)}
                   placeholder={placeholder}
            />
        </label>
    )
}

export default Input;