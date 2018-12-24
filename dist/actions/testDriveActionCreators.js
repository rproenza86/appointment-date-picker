import * as actionTypes from '../constants';
export var submitTestDrive = function (testDriveInfo) {
    return {
        payload: testDriveInfo,
        type: actionTypes.SUBMIT_TEST_DRIVE
    };
};
export var updateDay = function (day) {
    return {
        payload: day,
        type: actionTypes.UPDATE_TEST_DRIVE_DAY
    };
};
export var updateTime = function (time) {
    return {
        payload: time,
        type: actionTypes.UPDATE_TEST_DRIVE_TIME
    };
};
export var handleRescheduleLinkClick = function () {
    return {
        type: actionTypes.ROUTE_TEST_DRIVE
    };
};
