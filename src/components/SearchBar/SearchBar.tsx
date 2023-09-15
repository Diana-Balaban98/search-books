import React from 'react';
import s from './SearchBar.module.scss'
import {CategoriesType, SortingType} from "../../state/books-reducer.";
import Select from "../Select/Select";
import {CommonSelect, dataForSelect} from "../../utils/utils";
import {searchBooks} from "../../state/books-thunk";
import {categorySelector, indexPageSelector, sortSelector} from "../../state/books-selectors";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeCategory, changeSort, setSubstringForSearch} from "../../state/books-actions";
import SearchForm from "./SaerchForm/SearchForm";

const SearchBar = () => {
    const dispatch = useAppDispatch();

    const category = useAppSelector(categorySelector)
    const indexPage = useAppSelector(indexPageSelector)
    const order = useAppSelector(sortSelector)

    const searchBooksHandler = (value: string) => {
        dispatch(setSubstringForSearch(value))
        dispatch(searchBooks(value.trim(), indexPage, order, false, category))
    }

    const onChangeOption = (value: string, selectId: string) => {
        (selectId === CommonSelect.Categories) ?
            dispatch(changeCategory(value as CategoriesType))
            :
            dispatch(changeSort(value as SortingType))
    }


    return <div className={s.searchContainer}>
        <div className={s.searchGroup}>
            <SearchForm callback={searchBooksHandler}/>
        </div>
        <div className={s.groupSelect}>
            <Select title="Categories"
                    options={dataForSelect.categories}
                    value={category}
                    id={CommonSelect.Categories}
                    onChangeOption={onChangeOption}
            />
            <Select title="Sorting by"
                    options={dataForSelect.sorting}
                    value={category}
                    id={CommonSelect.Sort}
                    onChangeOption={onChangeOption}
            />
        </div>
    </div>
};

export default SearchBar;