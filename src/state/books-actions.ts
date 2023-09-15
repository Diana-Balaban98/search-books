import {SearchBook} from "../api/search-books-api";
import {CategoriesType, SortingType} from "./books-reducer.";

export const setBooks = (books: SearchBook[], isLoadMore: boolean) => ({type: "BOOKS/SET-BOOKS", books, isLoadMore} as const)
export const setSubstringForSearch = (substring: string) => ({type: "BOOKS/SET-SUBSTRING-FOR-SEARCH", substring} as const)
export const changeCategory = (category: CategoriesType) => ({type: "BOOKS/CHANGE-CATEGORY", category} as const)
export const changeSort = (sortValue: SortingType) => ({type: "BOOKS/CHANGE-SORT", sortValue} as const)
export const setTotalCount = (totalCount: number) => ({type: "BOOKS/SET-TOTAL-COUNT", totalCount} as const)
export const setIndexPage = (indexPage: number) => ({type: "BOOKS/SET-INDEX-PAGE", indexPage} as const)
export const setDetailInfoBook = (book: SearchBook) => ({type: "BOOKS/SET-DETAIL-INFO-BOOK", book} as const)


type setBooksType = ReturnType<typeof setBooks>
type changeCategoryType = ReturnType<typeof changeCategory>
type changeSortType = ReturnType<typeof changeSort>
type setTotalCountType = ReturnType<typeof setTotalCount>
type setIndexPageType = ReturnType<typeof setIndexPage>
type setSubstringForSearchType = ReturnType<typeof setSubstringForSearch>
type setDetailInfoBookType = ReturnType<typeof setDetailInfoBook>


export type ActionsType = setBooksType |
    changeCategoryType |
    changeSortType |
    setTotalCountType |
    setIndexPageType |
    setSubstringForSearchType |
    setDetailInfoBookType