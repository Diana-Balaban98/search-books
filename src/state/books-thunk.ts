import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {searchBooksApi} from "../api/search-books-api";
import {setBooks, setDetailInfoBook, setIndexPage, setTotalCount} from "./books-actions";
import {toggleIsLoading} from "../app/app-actions";
import axios from "axios";
import {NEXT_PAGE} from "../utils/utils";


export const searchBooks = (searchSubstring: string, indexPage: number, order: string, isLoadMore: boolean, filter: string): AppThunk => async (dispatch: Dispatch) => {
    const newIndexPage = isLoadMore ? indexPage + NEXT_PAGE : indexPage;

    dispatch(toggleIsLoading(true))
    try {
        const response = await searchBooksApi.getBooks(searchSubstring, newIndexPage, order, filter)
        dispatch(setBooks(response.data.items, isLoadMore))
        dispatch(setTotalCount(response.data.totalItems))
        dispatch(toggleIsLoading(false))
        dispatch(setIndexPage(newIndexPage))
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(err)
        }
    }
}
export const seeDetailInfoBook = (id: string): AppThunk => async (dispatch: Dispatch) => {
    dispatch(toggleIsLoading(true))
    try {
        const response = await searchBooksApi.getDetailInfoBook(id)
        dispatch(setDetailInfoBook(response.data))
        dispatch(toggleIsLoading(false))
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log(err)
        }
    }
}