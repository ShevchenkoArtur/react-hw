import React from 'react';
import search from './../../../images/search.svg'
import style from './Search.module.css'

const Search = ({setFilter, filter}) => {
    return (
        <label className={style.search}>
            <img width='20' src={search} alt="search"/>
            <input className={style.input} value={filter} onChange={(e) => setFilter(e.target.value)} type="text"/>
        </label>
    )
}

export default Search;