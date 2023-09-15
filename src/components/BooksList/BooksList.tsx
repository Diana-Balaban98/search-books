import React from 'react';
import Book from "./Book/Book";
import s from './BooksList.module.scss'
import Button from "../Button/Button";
import LinearLoader from "../LinearLoader/LinearLoader";
import {searchBooks} from "../../state/books-thunk";
import {
    booksSelector,
    categorySelector,
    indexPageSelector,
    sortSelector,
    substringSelector,
    totalCountSelector
} from "../../state/books-selectors";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {isLoadingSelector} from "../../app/app-selectors";

const BooksList = () => {
    const dispatch = useAppDispatch();

    const books = useAppSelector(booksSelector)
    const totalCount = useAppSelector(totalCountSelector)
    const substring = useAppSelector(substringSelector)
    const indexPage = useAppSelector(indexPageSelector)
    const order = useAppSelector(sortSelector)
    const filter = useAppSelector(categorySelector)
    const loading = useAppSelector(isLoadingSelector)

    const textTotalCount = totalCount ? `Found ${totalCount} results` : `For this request no books were found`;

    const mappedBooks = books?.map(b => <Book
        key={b.id}
        id={b.id}
        title={b.volumeInfo.title}
        authors={b.volumeInfo.authors}
        smallThumbnail={b.volumeInfo.imageLinks?.smallThumbnail}
        categories={b.volumeInfo.categories}
    />)

    const loadMoreBooks = () => {
        dispatch(searchBooks(substring, indexPage, order, true, filter))
    }

    if (loading) {
        return <LinearLoader/>
    }

    return books?.length > 0 ?
        <div className={s.bookListContainer}>
            <span
                className={s.foundResult}>{textTotalCount}</span>
            <div className={s.booksList}>
                {mappedBooks}
            </div>
            <Button
                style={s.btnLoadMore}
                callBack={loadMoreBooks}
                title="Load more"
                isDisabled={loading}
            />
        </div>
        :
        <div className={s.notFoundBook}>
            Here is a list of found books
        </div>
};

export default BooksList;