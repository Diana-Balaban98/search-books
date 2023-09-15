import React from 'react';
import s from './Book.module.scss'
import emptyCover from '../../../assets/images/emptyCover.png'
import {NavLink} from "react-router-dom";

type BookProps = {
    id: string
    title: string
    authors: string[]
    smallThumbnail: string
    categories: string[]
}

const Book: React.FC<BookProps> = ({smallThumbnail, authors, title, categories, id}) => {

    return (
        <div className={s.cardBook}>
            <NavLink className={s.coverBook} to={`/books/${id}`}>
                <img src={smallThumbnail ? smallThumbnail : emptyCover} alt="coverBook"/>
            </NavLink>
            <div className={s.infoBook}>
                <span className={s.category}>{categories && categories[0]}</span>
                <div className={s.titleBook}>{title}</div>
                <span className={s.author}>{authors && authors.join(", ")}</span>
            </div>
        </div>
    );
};

export default Book;