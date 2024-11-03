import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./user-reducer/reducer";
import { customLoggerMiddleware } from './custom-middleware/custom-middleware';

const middlewares = [customLoggerMiddleware];

export const middlewareStoreConfig = createStore(userReducer, composeWithDevTools(applyMiddleware(...middlewares)));