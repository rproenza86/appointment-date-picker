import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import history from '../history';
import reducers from '../reducers';
import middlewareUtil from './middlewareUtil';

export default function configureStore(preloadedState: {}): Store {
    const reduxDevTools = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    const composeEnhancers = reduxDevTools ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'Appointment Date Picker'
        }) : compose;

    const historyReducers = connectRouter(history);
    const store: Store = createStore(
        combineReducers({ ...reducers, historyReducers }),
        preloadedState,
        composeEnhancers(
            applyMiddleware(...middlewareUtil)
        )
    );

    if ((module as any).hot) {
        // Enable Webpack hot module replacement for reducers
        (module as any).hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
