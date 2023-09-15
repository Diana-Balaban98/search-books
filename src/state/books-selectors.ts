import {createSelector} from "reselect";
import {AppRootStateType} from "./store";

const infoBooksSelector = (state: AppRootStateType) => state.infoBooks;

export const booksSelector = createSelector(infoBooksSelector,
    infoBooks => infoBooks.books);

export const bookSelector = createSelector(infoBooksSelector,
    infoBooks => infoBooks.detailInfoBook);

export const categorySelector = createSelector(infoBooksSelector,
    infoBooks => infoBooks.categories);

export const sortSelector = createSelector(infoBooksSelector,
    infoBooks => infoBooks.sorting);

export const substringSelector = createSelector(infoBooksSelector,
    infoBooks => infoBooks.substring);

export const totalCountSelector = createSelector(infoBooksSelector,
    infoBooks => infoBooks.totalCount);

export const indexPageSelector = createSelector(infoBooksSelector,
    infoBooks => infoBooks.indexPage);