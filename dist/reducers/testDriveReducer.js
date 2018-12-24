import * as tslib_1 from "tslib";
// externals
import { assign } from 'lodash';
// consts/enums
import * as commonTypes from './../actions/actionTypes';
import * as types from './../constants';
export var mapPayloadToTestDrive = function (payload) {
    var result = {};
    result.day = payload && payload.day ? new Date(payload.day) : new Date();
    if (payload) {
        result.email = payload.email;
        result.firstName = payload.firstName;
        result.lastName = payload.lastName;
        result.message = payload.message;
        result.phone = payload.phone;
        result.time = payload.time;
    }
    return result;
};
export var testDriveReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    var newState = assign({}, state);
    switch (action.type) {
        case commonTypes.INIT_SUCCESS: {
            var testDrive = mapPayloadToTestDrive(action.payload.testDrive ||
                action.payload.offer.testDrive ||
                {});
            return assign({}, newState, testDrive);
        }
        case types.SCHEDULE_TEST_DRIVE_REQUEST: {
            return assign({}, newState, { isCalculating: true });
        }
        case types.SCHEDULE_TEST_DRIVE_SUCCESS: {
            return assign({}, newState, { hasError: false, isCalculating: false });
        }
        case types.SCHEDULE_TEST_DRIVE_FAILURE: {
            return assign({}, newState, { hasError: true, isCalculating: false });
        }
        case types.SUBMIT_TEST_DRIVE: {
            var testDrive = mapPayloadToTestDrive(action.payload);
            return assign({}, newState, testDrive);
        }
        case types.UPDATE_TEST_DRIVE_DAY: {
            var day = action.payload;
            return tslib_1.__assign({}, state, { day: day });
        }
        case types.UPDATE_TEST_DRIVE_TIME: {
            var time = action.payload;
            return tslib_1.__assign({}, state, { time: time });
        }
        default: {
            return state;
        }
    }
};
