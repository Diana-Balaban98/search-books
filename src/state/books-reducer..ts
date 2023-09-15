import {SearchBook} from "../api/search-books-api";
import {ActionsType} from "./books-actions";

const initialState = {
    books: [] as SearchBook[],
    detailInfoBook: null as null | SearchBook,
    categories: "all" as CategoriesType,
    sorting: "relevance" as SortingType,
    totalCount: null as null | number,
    indexPage: 0 as number,
    substring: "" as string
}

type BooksState = typeof initialState

export const booksReducer = (state: BooksState = initialState, action: ActionsType): BooksState => {
    switch (action.type) {
        case "BOOKS/SET-BOOKS":
            return {...state, books: action.isLoadMore ? [...state.books, ...action.books] : action.books}
        case "BOOKS/SET-DETAIL-INFO-BOOK":
            return {...state, detailInfoBook: action.book}
        case "BOOKS/CHANGE-CATEGORY":
            return {...state, categories: action.category}
        case "BOOKS/CHANGE-SORT":
            return {...state, sorting: action.sortValue}
        case "BOOKS/SET-SUBSTRING-FOR-SEARCH":
            const {substring} = action
            return {...state, substring}
        case "BOOKS/SET-TOTAL-COUNT":
            const {totalCount} = action
            return {...state, totalCount}
        case "BOOKS/SET-INDEX-PAGE":
            return {...state, indexPage: action.indexPage}
        default:
            return state
    }
}

export type CategoriesType = "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry"

export type SortingType = "relevance" | "newest"






