import React from 'react';
import searchIcon from '../../../../images/search.svg'
import style from './Search.module.css'

const Search = ({setFilter, filter}) => {
    return (
        <label className={style.search}>
            <img width='20' src={searchIcon} alt="search"/>
            <input className={style.input} value={filter} onChange={(e) => setFilter(e.target.value)} type="text"/>
        </label>
    )
}

export default Search;