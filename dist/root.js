import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './css/index.css';
import configureStore from './store/configureStore';
export var EventsDistributor;
export function initApp(store, rootElementName, EventsDistributorParam, children) {
    if (rootElementName === void 0) { rootElementName = 'root'; }
    if (children === void 0) { children = React.createElement(App, null); }
    var rootElement = document.getElementById(rootElementName);
    if (EventsDistributorParam) {
        EventsDistributor = EventsDistributorParam;
    }
    ReactDOM.render(React.createElement(Provider, { store: store },
        React.createElement(MuiThemeProvider, null, children)), rootElement);
}
export function createStore(state) {
    if (state === void 0) { state = null; }
    var initialState = state || {
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
    var initStore = configureStore(initialState);
    return initStore;
}
