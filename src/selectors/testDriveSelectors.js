"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToggleTimeCardUI_1 = require("./../components/ToggleTimeCard/ToggleTimeCardUI");
var constants_1 = require("./../constants");
// only get today's date once
var todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);
exports.getTestDrive = function (state) {
    return state.testDrive || {};
};
exports.getDayOrDefault = function (state) {
    return exports.getDay(state) || new Date(todayDate.getTime() + constants_1.ONE_DAY);
};
exports.getTimeOfDayOrDefault = function (state) {
    return exports.getTimeOfDay(state) || ToggleTimeCardUI_1.TimeType.MORNING;
};
exports.getDay = function (state) {
    return exports.getTestDrive(state).day;
};
exports.getFirstName = function (state) {
    return exports.getTestDrive(state).firstName;
};
exports.getLastName = function (state) {
    return exports.getTestDrive(state).lastName;
};
exports.getMessage = function (state) {
    return exports.getTestDrive(state).message;
};
exports.getEmail = function (state) {
    return exports.getTestDrive(state).email;
};
exports.isCalculating = function (state) {
    return exports.getTestDrive(state).isCalculating;
};
exports.getPhone = function (state) {
    return exports.getTestDrive(state).phone;
};
exports.getTimeOfDay = function (state) {
    var testDrive = exports.getTestDrive(state);
    if (testDrive.time) {
        return testDrive.time.toLowerCase();
    }
    else {
        return null;
    }
};
/*
 * When true is returned, it means all required fields are filled, but
 * it does not mean the schedule is completed.
 */
exports.isTestDriveCompleted = function (state) {
    var testDrive = exports.getTestDrive(state);
    return (!!testDrive.day && !!testDrive.time && !!testDrive.firstName &&
        !!testDrive.lastName && !!testDrive.email && !!testDrive.phone);
};
exports.isFailedToSchedule = function (state) {
    var testDrive = exports.getTestDrive(state);
    return testDrive.hasError;
};
exports.getTestDriveDisplayInfo = function (state) {
    var isCompleted = exports.isTestDriveCompleted(state);
    var testDriveCardText = isCompleted ? 'Your Test Drive Was Scheduled!' : '';
    return {
        testDriveCardText: testDriveCardText,
        isCompleted: isCompleted
    };
};
/**
 * [7/20/2018]The testDrive object in the state never really has the values from Test Drive page
 * when the state is in dataIslandModel, and the selectors above do not return the expected values.
 * Story US100566 was not planned to fix this issue (Rocket, and maybe other teams too, did not
 * know the existence of such issues). For this reason, the following selectors are created
 * to work for dataIslandModel. I believe the state of the Test Drive page has never been translated
 * from the redux-form to the app state. Perhaps there should be a tech debt story to handle this issue.
 */
var getTestDriveFromForm = function (state) {
    if (state.form && state.form.testDriveForm && state.form.testDriveForm.values) {
        return state.form.testDriveForm.values;
    }
    return {};
};
exports.getFirstNameFromForm = function (state) {
    return getTestDriveFromForm(state).firstName || '';
};
exports.getMessageFromForm = function (state) {
    return getTestDriveFromForm(state).message || '';
};
exports.getEmailFromForm = function (state) {
    return getTestDriveFromForm(state).email || '';
};
