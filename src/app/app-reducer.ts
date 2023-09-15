import {ActionsType} from "./app-actions";

const initialState = {
    isLoading: false
}
type AppState = typeof initialState

export const appReducer = (state: AppState = initialState, action: ActionsType): AppState => {
    switch (action.type) {
        case "APP/TOGGLE-IS-LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

