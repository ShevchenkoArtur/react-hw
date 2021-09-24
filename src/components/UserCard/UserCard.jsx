import React, {useState} from 'react';
import CardImage from './CardImage/CardImage';
import CardInfo from './CardInfo/CardInfo';
import style from './UserCard.module.css'
import DetailsModal from '../DetailsModal/DetailsModal';

const UserCard = ({user}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => setIsOpenModal((prev) => !prev)
    const closeModal = () => setIsOpenModal((prev) => !prev)

    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <CardImage picture={user.picture}/>
                <CardInfo user={user}/>
                <button className={`${style.btn} button`} onClick={openModal}>Details</button>
                {
                    isOpenModal ? <DetailsModal closeModal={closeModal} user={user}/> : ''
                }
            </div>
        </div>
    )
}

export default UserCard;