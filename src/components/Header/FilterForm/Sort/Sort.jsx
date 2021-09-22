import React from 'react';
import style from './Sort.module.css'
import filterIcon from '../../../../images/filter.svg'

const Sort = ({sort, setSort}) => {
    return (
        <label className={style.sort}>
            <img width='20' src={filterIcon} alt="filter"/>
            <select className={style.select} value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="sortAge" disabled>Sort age</option>
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
            </select>
        </label>
    )
}

export default Sort;