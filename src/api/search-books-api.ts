import axios from "axios";
import {MAX_RESULT} from "../utils/utils";

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
})

export const searchBooksApi = {
   getBooks(searchSubstring: string, index: number, order: string, filter: string) {
       const category = filter === "all" ? "" : filter

       return instance.get<ResponseType>(`?q=${searchSubstring}+subject:${category}&maxResults=${MAX_RESULT}&startIndex=${index * MAX_RESULT}&orderBy=${order}&key=${process.env.REACT_APP_API_KEY}`)
   },
    getDetailInfoBook(id: string) {
       return instance.get<SearchBook>(`/${id}?key=${process.env.REACT_APP_API_KEY}`)
    }
}

type ResponseType = {
    totalItems: number
    items: SearchBook[]
}

type ImageSizeType = {
    smallThumbnail: string
    thumbnail: string
}

type volumeInfoType = {
    title: string
    authors: string[]
    description: string
    categories: string[]
    imageLinks: ImageSizeType
}

export type SearchBook = {
    id: string
    volumeInfo: volumeInfoType
}