import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import reducers from '../reducers';
import history from './../history';
import middlewareUtil from './middlewareUtil';

export default function configureStore(preloadedState: {}): Store {
    const historyReducers = connectRouter(history);
    return createStore(
        combineReducers({ ...reducers, historyReducers}),
        preloadedState,
        compose(
            applyMiddleware(...middlewareUtil)
        )
    ) as Store;
}
