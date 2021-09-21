import React from 'react';
import style from './CardInfo.module.css'

const CardInfo = ({users}) => {
    return (
        <div className={style.info}>
            <p>Name: {users.name}</p>
            <p>Age: {users.age}</p>
            <p>Gender: {users.gender}</p>
            <p>Balance: {users.balance}</p>
        </div>
    )
}

export default CardInfo;