import React from 'react';
import s from './SearchGroup.module.scss'
import SearchBar from "../SearchBar/SearchBar";


const SearchGroup = () => {
    return (
        <div className={s.background}>
            <h1 className={s.title}>Search for books</h1>
            <SearchBar/>
        </div>
    );
};

export default SearchGroup;