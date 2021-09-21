import React from 'react';
import style from './CardImage.module.css'

const CardImage = ({picture}) => {
    return (
        <div className={style.image}>
            <img src={picture} alt="img"/>
        </div>
    )
}

export default CardImage;