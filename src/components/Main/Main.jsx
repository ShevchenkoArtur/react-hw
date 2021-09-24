import React, {useMemo, useState} from 'react';
import Header from '../Header/Header';
import UserList from '../UserList/UserList';
import style from './Main.module.css'
import {userData} from '../../userData';

const Main = () => {
    const [users, setUsers] = useState(userData)
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('sortAge')

    const filteredArr = useMemo(() => {
        const searchByName = arr => arr.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))

        switch (sort) {
            case 'asc':
                return searchByName([...users].sort((a, b) => a.age - b.age))
            case 'desc':
                return searchByName([...users].sort((a, b) => b.age - a.age))
            default:
                return searchByName(users)
        }
    }, [filter, sort, users])

    return (
        <main className={style.wrapper}>
            <Header filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} setUsers={setUsers}/>
            <UserList filteredArr={filteredArr}/>
        </main>
    )
}

export default Main;