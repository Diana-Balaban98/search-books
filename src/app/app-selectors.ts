import {AppRootStateType} from "../state/store";
import {createSelector} from "reselect";

const appSelector = (state: AppRootStateType) => state.app;

export const isLoadingSelector = createSelector(appSelector,
    app => app.isLoading);