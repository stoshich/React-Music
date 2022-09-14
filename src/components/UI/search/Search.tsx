import React, { useState } from 'react'
import classes from './Search.module.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className={classes.search}>
            <input value={searchValue} onChange={changeHandler} type="text" placeholder='Search...' />
            {searchValue && <div className={classes.searchModal}>Нет результатов</div>}
        </div>
    )
}

export default Search