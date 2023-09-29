import { combineReducers } from "@ngrx/store";
import { counterReducer } from "./counter/counter.reducer";

export const reducers = combineReducers({
    count: counterReducer,
});