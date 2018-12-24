import { TimeType } from './../components/ToggleTimeCard/ToggleTimeCardUI';
import { ONE_DAY } from './../constants';
// only get today's date once
var todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);
export var getTestDrive = function (state) {
    return state.testDrive || {};
};
export var getDayOrDefault = function (state) {
    return getDay(state) || new Date(todayDate.getTime() + ONE_DAY);
};
export var getTimeOfDayOrDefault = function (state) {
    return getTimeOfDay(state) || TimeType.MORNING;
};
export var getDay = function (state) {
    return getTestDrive(state).day || new Date();
};
export var getFirstName = function (state) {
    return getTestDrive(state).firstName || '';
};
export var getLastName = function (state) {
    return getTestDrive(state).lastName || '';
};
export var getMessage = function (state) {
    return getTestDrive(state).message || '';
};
export var getEmail = function (state) {
    return getTestDrive(state).email || '';
};
export var isCalculating = function (state) {
    return getTestDrive(state).isCalculating || false;
};
export var getPhone = function (state) {
    return getTestDrive(state).phone || '';
};
export var getTimeOfDay = function (state) {
    var testDrive = getTestDrive(state);
    if (testDrive.time) {
        return testDrive.time.toLowerCase();
    }
    else {
        return '';
    }
};
/*
 * When true is returned, it means all required fields are filled, but
 * it does not mean the schedule is completed.
 */
export var isTestDriveCompleted = function (state) {
    var testDrive = getTestDrive(state);
    return (!!testDrive.day && !!testDrive.time && !!testDrive.firstName &&
        !!testDrive.lastName && !!testDrive.email && !!testDrive.phone);
};
export var isFailedToSchedule = function (state) {
    var testDrive = getTestDrive(state);
    return testDrive.hasError || false;
};
export var getTestDriveDisplayInfo = function (state) {
    var isCompleted = isTestDriveCompleted(state) || false;
    var testDriveCardText = isCompleted ? 'Your Test Drive Was Scheduled!' : '';
    return {
        isCompleted: isCompleted,
        testDriveCardText: testDriveCardText
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
export var getFirstNameFromForm = function (state) {
    return getTestDriveFromForm(state).firstName || '';
};
export var getMessageFromForm = function (state) {
    return getTestDriveFromForm(state).message || '';
};
export var getEmailFromForm = function (state) {
    return getTestDriveFromForm(state).email || '';
};
