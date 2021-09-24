import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import style from './AddUserForm.module.css'

const AddUserForm = ({addInputs, setAddInputs, setUsers, closeModal}) => {
    const [genderSelect, setGenderSelect] = useState('male')

    const resetInputs = () => {
        setAddInputs(prev => ({
            ...prev,
            name: {
                ...prev.name,
                value: ''
            },
            age: {
                ...prev.age,
                value: ''
            },
            balance: {
                ...prev.balance,
                value: ''
            },
            company: {
                ...prev.company,
                value: ''
            },
            email: {
                ...prev.email,
                value: ''
            },
            phone: {
                ...prev.phone,
                value: ''
            },
            address: {
                ...prev.address,
                value: ''
            },
        }))
    }

    const addNewUser = (e) => {
        e.preventDefault()
        if (addInputs.name && addInputs.age && addInputs.balance && genderSelect) {
            setUsers(prev => {
                return [...prev,
                    {
                        _id: Math.random() * 100,
                        picture: "http://placehold.it/32x32",
                        name: addInputs.name.value,
                        age: addInputs.age.value,
                        balance: addInputs.balance.value,
                        gender: genderSelect,
                        company: addInputs.company.value,
                        email: addInputs.email.value,
                        phone: addInputs.phone.value,
                        address: addInputs.address.value,
                    }
                ]
            })
            resetInputs()
            closeModal()
        }
    }

    return (
        <form>
            <h2>New User</h2>

            <Input type={addInputs.name.type}
                   value={addInputs.name.value}
                   labelName={addInputs.name.labelName}
                   placeholder={addInputs.name.placeholder}
                   onChange={(newValue) => {
                       setAddInputs(prev => ({
                           ...prev,
                           name: {
                               ...prev.name,
                               value: newValue
                           }
                       }))
                   }}
            />

            <Input type={addInputs.age.type}
                   value={addInputs.age.value}
                   labelName={addInputs.age.labelName}
                   placeholder={addInputs.age.placeholder}
                   onChange={(newValue) => {
                       setAddInputs(prev => ({
                           ...prev,
                           age: {
                               ...prev.age,
                               value: newValue
                           }
                       }))
                   }}
            />

            <label className={style.label}>
                Gender
                <select className={style.select}
                        value={genderSelect}
                        onChange={(e) => setGenderSelect(e.target.value)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>

            <Input type={addInputs.balance.type}
                   value={addInputs.balance.value}
                   labelName={addInputs.balance.labelName}
                   placeholder={addInputs.balance.placeholder}
                   onChange={(newValue) => {
                       setAddInputs(prev => ({
                           ...prev,
                           balance: {
                               ...prev.balance,
                               value: newValue
                           }
                       }))
                   }}
            />

            <h3 className={style.optionalHeader}>Optional</h3>

            <Input type={addInputs.company.type}
                   value={addInputs.company.value}
                   labelName={addInputs.company.labelName}
                   placeholder={addInputs.company.placeholder}
                   onChange={(newValue) => {
                       setAddInputs(prev => ({
                           ...prev,
                           company: {
                               ...prev.company,
                               value: newValue
                           }
                       }))
                   }}
            />

            <Input type={addInputs.email.type}
                   value={addInputs.email.value}
                   labelName={addInputs.email.labelName}
                   placeholder={addInputs.email.placeholder}
                   onChange={(newValue) => {
                       setAddInputs(prev => ({
                           ...prev,
                           email: {
                               ...prev.email,
                               value: newValue
                           }
                       }))
                   }}
            />

            <Input type={addInputs.phone.type}
                   value={addInputs.phone.value}
                   labelName={addInputs.phone.labelName}
                   placeholder={addInputs.phone.placeholder}
                   onChange={(newValue) => {
                       setAddInputs(prev => ({
                           ...prev,
                           phone: {
                               ...prev.phone,
                               value: newValue
                           }
                       }))
                   }}
            />

            <Input type={addInputs.address.type}
                   value={addInputs.address.value}
                   labelName={addInputs.address.labelName}
                   placeholder={addInputs.address.placeholder}
                   onChange={(newValue) => {
                       setAddInputs(prev => ({
                           ...prev,
                           address: {
                               ...prev.address,
                               value: newValue
                           }
                       }))
                   }}
            />

            <button className={`${style.formBtn} button`}
                    onClick={addNewUser}
            >
                Save
            </button>
        </form>
    )
}

export default AddUserForm;