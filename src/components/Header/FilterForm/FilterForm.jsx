import React from 'react';
import Search from './Search/Search';
import Sort from './Sort/Sort';
import resetIcon from './../../../images/close.svg'
import style from './FilterForm.module.css'

const FilterForm = ({setFilter, filter, sort, setSort}) => {

    const resetInputs = (e) => {
        e.preventDefault()
        setFilter('')
        setSort('sortAge')
    }

    return (
        <form>
            <Search setFilter={setFilter} filter={filter}/>
            <Sort sort={sort} setSort={setSort}/>
            <button className={style.formBtn} onClick={resetInputs}>
                <img width='25' src={resetIcon} alt="reset"/>
            </button>
        </form>
    )
}

export default FilterForm;