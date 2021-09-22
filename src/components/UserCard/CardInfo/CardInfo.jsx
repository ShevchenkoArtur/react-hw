import React from 'react';
import style from './CardInfo.module.css'

const CardInfo = ({user}) => {
    return (
        <div className={style.info}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Balance: {user.balance}</p>
        </div>
    )
}

export default CardInfo;