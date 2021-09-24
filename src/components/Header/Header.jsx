import React, {useEffect, useState} from 'react';
import style from './Header.module.css'
import FilterForm from './FilterForm/FilterForm';
import AddUserModal from '../AddUserModal/AddUserModal';

const Header = ({setFilter, filter, sort, setSort, setUsers}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => setIsOpenModal((prev) => !prev)
    const closeModal = () => setIsOpenModal((prev) => !prev)

    const [addInputs, setAddInputs] = useState({})

    useEffect(() => {
        setAddInputs({
            name: {
                value: '',
                type: 'text',
                labelName: 'Name',
                placeholder: 'Ivan',
            },
            age: {
                value: '',
                type: 'number',
                labelName: 'Age',
                placeholder: '18',
            },
            balance: {
                value: '',
                type: 'number',
                labelName: 'Balance',
                placeholder: '1000',
            },
            company: {
                value: '',
                type: 'text',
                labelName: 'Company',
                placeholder: 'Nix Solutions',
            },
            email: {
                value: '',
                type: 'email',
                labelName: 'Email',
                placeholder: 'example.76@gmail.com',
            },
            phone: {
                value: '',
                type: 'tel',
                labelName: 'Phone',
                placeholder: '+1 (999) 427-3302',
            },
            address: {
                value: '',
                type: 'text',
                labelName: 'Address',
                placeholder: '796 Prospect Avenue, Thomasville, Kansas, 4553',
            }
        })
    }, [])

    return (
        <header className={style.header}>
            <button className={`${style.btn} button`}
                    onClick={() => openModal()}
            >
                Add New User
            </button>

            <FilterForm setFilter={setFilter} filter={filter} sort={sort} setSort={setSort}/>

            {
                isOpenModal
                    ?
                    <AddUserModal closeModal={closeModal}
                                  setAddInputs={setAddInputs}
                                  addInputs={addInputs}
                                  setUsers={setUsers}/>
                    :
                    ''
            }
        </header>
    )
}

export default Header;