import * as tslib_1 from "tslib";
// tslint:disable:ordered-imports
import * as routes from './../routes/testDriveRoutes';
import * as types from './../constants';
import { push } from 'connected-react-router';
import { dispatchActionWithAnalytics } from './../middleware/analytics';
import { EventsDistributor } from './../root';
import { appName } from './../index';
export var testDriveMiddleware = function (store) { return function (next) { return function (action) {
    next(action);
    if (EventsDistributor) {
        var broadCastAction = tslib_1.__assign({}, action, { meta: { appSource: appName, eventType: 'BROAD_CAST_ACTION', state: store.getState() } });
        EventsDistributor.dispatch(broadCastAction);
    }
    var state = store.getState();
    // tslint:disable-next-line:no-console
    console.log(state);
    switch (action.type) {
        // analytics actions
        case types.ROUTE_TEST_DRIVE:
            dispatchActionWithAnalytics(store, 'TEST_DRIVE_STARTED', 'Test Drive Started');
            break;
        case types.SUBMIT_TEST_DRIVE:
            dispatchActionWithAnalytics(store, 'TEST_DRIVE_REQUESTED', 'Test Drive Requested');
            if (action.payload) {
                var message = action.payload.message;
                if (message && message.trim()) {
                    dispatchActionWithAnalytics(store, 'MESSAGE_ADDED_LEAD', 'Test Drive Schedule submitted with a message');
                }
            }
            break;
        default: {
            break;
        }
    }
    // routing actions
    switch (action.type) {
        case types.ROUTE_TEST_DRIVE:
            store.dispatch(push(routes.TEST_DRIVE));
            break;
        case types.SUBMIT_TEST_DRIVE:
            store.dispatch(push(routes.TEST_DRIVE_CONFIRMATION));
            break;
        case types.SCHEDULE_TEST_DRIVE_SUCCESS:
            store.dispatch(push(routes.TEST_DRIVE_CONFIRMATION));
            break;
        case types.ROUTE_TEST_DRIVE_CONFIRMATION:
            store.dispatch(push(routes.TEST_DRIVE_CONFIRMATION));
            break;
        default:
            break;
    }
}; }; };
