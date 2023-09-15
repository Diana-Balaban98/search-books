import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {booksReducer} from "./books-reducer.";
import {appReducer} from "../app/app-reducer";

const rootReducer = combineReducers({
    infoBooks: booksReducer,
    app: appReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export type AppThunk = ThunkAction<void, AppRootStateType, unknown, AnyAction>


// @ts-ignore
window.store = store;

export class useAppSelector {
}