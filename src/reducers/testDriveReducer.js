"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// externals
var lodash_1 = require("lodash");
// consts/enums
var types = require("./../constants");
var commonTypes = require("./../actions/actionTypes");
exports.mapPayloadToTestDrive = function (payload) {
    var result = {};
    result.day = (payload && payload.day) ? new Date(payload.day) : null;
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
exports.testDriveReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    var newState = lodash_1.assign({}, state);
    switch (action.type) {
        case commonTypes.INIT_SUCCESS: {
            var testDrive = exports.mapPayloadToTestDrive(action.payload.offer.testDrive || {});
            return lodash_1.assign({}, newState, testDrive);
        }
        case types.SCHEDULE_TEST_DRIVE_REQUEST: {
            return lodash_1.assign({}, newState, { isCalculating: true });
        }
        case types.SCHEDULE_TEST_DRIVE_SUCCESS: {
            return lodash_1.assign({}, newState, { hasError: false, isCalculating: false });
        }
        case types.SCHEDULE_TEST_DRIVE_FAILURE: {
            return lodash_1.assign({}, newState, { hasError: true, isCalculating: false });
        }
        case types.SUBMIT_TEST_DRIVE: {
            var testDrive = exports.mapPayloadToTestDrive(action.payload);
            return lodash_1.assign({}, newState, testDrive);
        }
        case types.UPDATE_TEST_DRIVE_DAY: {
            var day = action.payload;
            return __assign({}, state, { day: day });
        }
        case types.UPDATE_TEST_DRIVE_TIME: {
            var time = action.payload;
            return __assign({}, state, { time: time });
        }
        default: {
            return state;
        }
    }
};
