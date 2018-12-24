import * as tslib_1 from "tslib";
import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import history from '../history';
import reducers from '../reducers';
import middlewareUtil from './middlewareUtil';
export default function configureStore(preloadedState) {
    var reduxDevTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    var composeEnhancers = reduxDevTools ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'Test Drive Schedule'
        }) : compose;
    var historyReducers = connectRouter(history);
    var store = createStore(combineReducers(tslib_1.__assign({}, reducers, { historyReducers: historyReducers })), preloadedState, composeEnhancers(applyMiddleware.apply(void 0, middlewareUtil)));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', function () {
            var nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
