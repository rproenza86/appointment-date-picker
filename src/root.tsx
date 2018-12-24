import { GlobalEventDistributor } from '@rproenza/events-distributor/dist/src/globalEventDistributor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import App from './components/App';
import './css/index.css';
import configureStore from './store/configureStore';

export let EventsDistributor: GlobalEventDistributor;


export function initApp(
    store: Store,
    rootElementName: string = 'root',
    EventsDistributorParam?: GlobalEventDistributor,
    children: any = <App />
) {
    const rootElement: HTMLElement = document.getElementById(rootElementName) as HTMLElement;
    if (EventsDistributorParam) {
        EventsDistributor = EventsDistributorParam;
    }
    ReactDOM.render(
        <Provider store={store}>
            <MuiThemeProvider>{children}</MuiThemeProvider>
        </Provider>,
        rootElement
    );
}

export function createStore(state: {} | null = null) {
    const initialState = state || {
        dealer: {
            address: {
                address: '2002 Summit blvd, Atlanta, GA 30319',
                timeZoneId: 'America/New_York',
                zip: '30319'
            }
        },
        testDrive: {
            day: '2018-12-19T16:39:14.953Z',
            email: 'dfffdf@gmail.com',
            firstName: 'Raul',
            hasError: false,
            isCalculating: false,
            lastName: 'Rodriguez Proenza',
            phone: '786-624-8576',
            time: 'Morning'
        }
    };
    const initStore = configureStore(initialState) as Store;
    return initStore;
}
