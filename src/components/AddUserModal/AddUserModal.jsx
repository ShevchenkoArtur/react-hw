import React from 'react';
import AddUserForm from '../AddUserForm/AddUserForm';

const AddUserModal = ({closeModal, setAddInputs, addInputs, setUsers}) => {
    return (
        <div className='modal' onClick={() => closeModal()}>
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <div className='modalBody'>
                    <span onClick={() => closeModal()} className='close'>&times;</span>
                    <AddUserForm addInputs={addInputs}
                                 setAddInputs={setAddInputs}
                                 setUsers={setUsers}
                                 closeModal={closeModal}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddUserModal;