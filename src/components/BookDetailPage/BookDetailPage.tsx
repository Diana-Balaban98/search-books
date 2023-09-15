import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import s from "./BookDetailPage.module.scss"
import LinearLoader from "../LinearLoader/LinearLoader";
import {seeDetailInfoBook} from "../../state/books-thunk";
import {bookSelector} from "../../state/books-selectors";
import {useAppDispatch, useAppSelector} from "../../hooks";


const BookDetailPage: React.FC = () => {
    const location = useLocation();

    const id = location.pathname.split("/").at(-1)

    const dispatch = useAppDispatch();

    const book = useAppSelector(bookSelector);


    useEffect(() => {
        id && dispatch(seeDetailInfoBook(id))
    }, [])

    if (!book) {
        return <LinearLoader/>
    }

    return (
        <div className={s.wrapperContentBook}>
            <div className={s.coverBlockBook}>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="cover"/>
            </div>
            <div className={s.infoBlockBook}>
                <span className={s.categoryBook}>{book.volumeInfo.categories && book.volumeInfo.categories.join("/ ")}</span>
                <div className={s.titleBook}>{book.volumeInfo.title}</div>
                <span className={s.authorsBook}>{book.volumeInfo.authors && book.volumeInfo.authors.join(" ")}</span>
                <div className={s.descriptionBook} dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}/>
            </div>
        </div>
    );
};

export default BookDetailPage;