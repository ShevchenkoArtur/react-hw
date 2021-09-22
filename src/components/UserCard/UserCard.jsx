import React, {useState} from 'react';
import CardImage from './CardImage/CardImage';
import CardInfo from './CardInfo/CardInfo';
import style from './UserCard.module.css'
import Modal from '../Modal/Modal';

const UserCard = ({user}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => setIsOpenModal((prev) => !prev)
    const closeModal = () => setIsOpenModal((prev) => !prev)

    return (
        <div className={style.wrapper}>
            <div className={style.card} onClick={openModal}>
                <CardImage picture={user.picture}/>
                <CardInfo user={user}/>
                {
                    isOpenModal ? <Modal closeModal={closeModal} user={user}/> : ''
                }
            </div>
        </div>
    )
}

export default UserCard;