import React from 'react';

const DetailsModal = ({closeModal, user}) => {
    const checkOptionalProp = (userProp) => userProp ? userProp : 'There\'s nothing yet'

    return (
        <div className='modal' onClick={() => closeModal()}>
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <div className='modalBody'>
                    <span onClick={() => closeModal()} className='close'>&times;</span>
                    <div>
                        <h2>Details</h2>
                        <img src={user.picture} alt="img"/>
                        <p>Name: {user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Balance: {user.balance}</p>
                        <p>Company: {checkOptionalProp(user.company)}</p>
                        <p>Email: {checkOptionalProp(user.email)}</p>
                        <p>Phone: {checkOptionalProp(user.phone)}</p>
                        <p>Address: {checkOptionalProp(user.address)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsModal;