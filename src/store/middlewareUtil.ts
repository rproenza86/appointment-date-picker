// tslint:disable-next-line:import-name
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

// tslint:disable-next-line:import-name
import historyInstance from './../history';

// middleware
import TestDriveConfiguration from './../TestDriveConfiguration';

const allMiddleware = [
    thunk,
    routerMiddleware(historyInstance),
    TestDriveConfiguration.middleware as any
    // logger // uncomment when be needed debug actions
];

export default allMiddleware;
