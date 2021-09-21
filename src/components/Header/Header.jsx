import React from 'react';
import style from './Header.module.css'
import Search from './Search/Search';

const Header = ({setFilter, filter}) => {
    return (
        <header className={style.header}>
            <Search setFilter={setFilter} filter={filter}/>
        </header>
    )
}

export default Header;