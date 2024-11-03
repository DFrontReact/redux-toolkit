import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./user-reducer/reducer";

export const classicReduxStoreConfig = createStore(userReducer, composeWithDevTools(applyMiddleware()));