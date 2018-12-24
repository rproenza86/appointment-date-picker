// tslint:disable-next-line:import-name
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
// tslint:disable-next-line:import-name
import historyInstance from './../history';
// middleware
import TestDriveConfiguration from './../TestDriveConfiguration';
var allMiddleware = [
    thunk,
    routerMiddleware(historyInstance),
    TestDriveConfiguration.middleware
    // logger // uncomment when be needed debug actions
];
export default allMiddleware;
