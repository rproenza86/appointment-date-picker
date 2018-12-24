import * as tslib_1 from "tslib";
import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reducers from '../reducers';
import history from './../history';
import middlewareUtil from './middlewareUtil';
export default function configureStore(preloadedState) {
    var historyReducers = connectRouter(history);
    return createStore(combineReducers(tslib_1.__assign({}, reducers, { historyReducers: historyReducers })), preloadedState, compose(applyMiddleware.apply(void 0, middlewareUtil)));
}
