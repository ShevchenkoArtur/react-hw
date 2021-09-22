import React from 'react';
import style from './Modal.module.css'

const Modal = ({closeModal, user}) => {
    return (
        <div className={style.modal}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                <div className={style.body}>
                    <span onClick={() => closeModal()} className={style.close}>&times;</span>
                    <div>
                        <img src={user.picture} alt="img"/>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Eye Color: {user.eyeColor}</p>
                        <p>Company: {user.company}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Address: {user.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;