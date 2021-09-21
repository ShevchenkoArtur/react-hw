import React from 'react';
import CardImage from './CardImage/CardImage';
import CardInfo from './CardInfo/CardInfo';
import style from './UserCard.module.css'

const UserCard = ({users}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <CardImage picture={users.picture}/>
                <CardInfo users={users}/>
            </div>
        </div>
    )
}

export default UserCard;