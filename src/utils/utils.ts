import exp from "constants";

export const dataForSelect = {
    categories: [
        {id: 1, value: "all"},
        {id: 2, value: "art"},
        {id: 3, value: "biography"},
        {id: 4, value: "computers"},
        {id: 5, value: "history"},
        {id: 6, value: "medical"},
        {id: 7, value: "poetry"},
    ],
    sorting: [
        {id: 1, value: "relevance"},
        {id: 2, value: "newest"}]
};

export enum CommonSelect {
    Categories = "categories",
    Sort = "sorting"
}

export const MAX_RESULT = 30
export const NEXT_PAGE = 1


