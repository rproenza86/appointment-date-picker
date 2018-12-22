import { Store } from 'redux';
// tslint:disable:ordered-imports
import * as routes from './../routes/testDriveRoutes';
import * as types from './../constants';
import { IStateTree } from './../types';
import { push } from 'connected-react-router';
import { dispatchActionWithAnalytics } from './../middleware/analytics';
// import { buildApiUrlWithServiceEndpoint } from './../utils/testDrive';
// import { getTestDrive } from './../selectors/testDriveSelectors';
// import * as ram from 'redux-api-middleware';

// const CALL_API = ram.CALL_API;

// const createScheduleTestDriveRequest = (state: IStateTree) => {
//     const url = buildApiUrlWithServiceEndpoint({ endPoint: 'testDrive' });
//     const payload = JSON.stringify(getTestDrive(state));

//     const request = {
//         body: payload,
//         endpoint: url,
//         headers: { 'Content-Type': 'application/json' },
//         method: 'POST',
//         types: [
//             types.SCHEDULE_TEST_DRIVE_REQUEST,
//             types.SCHEDULE_TEST_DRIVE_SUCCESS,
//             types.SCHEDULE_TEST_DRIVE_FAILURE
//         ]
//     };

//     return request;
// };

export const testDriveMiddleware = (store: Store<IStateTree>) => (next: any) => (action: any) => {
    next(action);
    const state = store.getState();
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
                const message: string = action.payload.message;
                if (message && message.trim()) {
                    dispatchActionWithAnalytics(
                        store,
                        'MESSAGE_ADDED_LEAD',
                        'Test Drive Schedule submitted with a message'
                    );
                }
            }
            break;
        default: {
            break;
        }
    }

    // api calls
    // switch (action.type) {
    //     case types.SUBMIT_TEST_DRIVE:
    //         const request = createScheduleTestDriveRequest(state);
    //         store.dispatch({
    //             [CALL_API]: request
    //         } as any);
    //         break;
    //     default:
    //         break;
    // }

    // routing actions
    switch (action.type) {
        case types.ROUTE_TEST_DRIVE:
            store.dispatch(push(routes.TEST_DRIVE));
            break;
        case types.ROUTE_LEAD_FORM:
            store.dispatch(push(routes.LEAD_FORM));
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
};
