import React, {useMemo, useState} from 'react';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';
import style from './Main.module.css'
import {userData} from '../../userData';

const Main = () => {
    const [users, setUsers] = useState(userData)
    const [filter, setFilter] = useState('')

    const filteredArr = useMemo(() => {
        return users.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
    }, [filter, users])

    return (
        <main className={style.wrapper}>
            <Header filter={filter} setFilter={setFilter}/>
            <UserList filteredArr={filteredArr}/>
        </main>
    )
}

export default Main;