import React from 'react';
import style from './Header.module.css'
import FilterForm from './FilterForm/FilterForm';

const Header = ({setFilter, filter, sort, setSort}) => {
    return (
        <header className={style.header}>
            <FilterForm setFilter={setFilter} filter={filter} sort={sort} setSort={setSort}/>
        </header>
    )
}

export default Header;