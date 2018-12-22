import { TimeType } from './../components/ToggleTimeCard/ToggleTimeCardUI';
import { ONE_DAY } from './../constants';
import { IStateTree, ITestDrive } from './../types';

// only get today's date once
const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);

export const getTestDrive = (state: IStateTree): ITestDrive => {
    return state.testDrive || {};
};

export const getDayOrDefault = (state: IStateTree): Date => {
    return getDay(state) || new Date(todayDate.getTime() + ONE_DAY);
};

export const getTimeOfDayOrDefault = (state: IStateTree): TimeType => {
    return getTimeOfDay(state) as TimeType || TimeType.MORNING;
};

export const getDay = (state: IStateTree): Date => {
    return getTestDrive(state).day || new Date();
};

export const getFirstName = (state: IStateTree): string => {
    return getTestDrive(state).firstName || '';
};

export const getLastName = (state: IStateTree): string => {
    return getTestDrive(state).lastName || '';
};

export const getMessage = (state: IStateTree): string => {
    return getTestDrive(state).message || '';
};

export const getEmail = (state: IStateTree): string => {
    return getTestDrive(state).email || '';
};

export const isCalculating = (state: IStateTree): boolean => {
    return getTestDrive(state).isCalculating || false;
};

export const getPhone = (state: IStateTree): string => {
    return getTestDrive(state).phone || '';
};

export const getTimeOfDay = (state: IStateTree): string => {
    const testDrive = getTestDrive(state);
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
export const isTestDriveCompleted = (state: IStateTree): boolean => {
    const testDrive = getTestDrive(state);
    return (!!testDrive.day && !!testDrive.time && !!testDrive.firstName &&
        !!testDrive.lastName && !!testDrive.email && !!testDrive.phone);
};

export const isFailedToSchedule = (state: IStateTree): boolean => {
    const testDrive = getTestDrive(state);
    return testDrive.hasError || false;
};

export const getTestDriveDisplayInfo = (state: IStateTree) => {
    const isCompleted = isTestDriveCompleted(state) || false;
    const testDriveCardText = isCompleted ? 'Your Test Drive Was Scheduled!' : '';

    return {
        isCompleted,
        testDriveCardText
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
const getTestDriveFromForm = (state: IStateTree | any): ITestDrive => {
    if (state.form && state.form.testDriveForm && state.form.testDriveForm.values) {
        return state.form.testDriveForm.values;
    }

    return {};
};

export const getFirstNameFromForm = (state: IStateTree): string => {
    return getTestDriveFromForm(state).firstName || '';
};

export const getMessageFromForm = (state: IStateTree): string => {
    return getTestDriveFromForm(state).message || '';
};

export const getEmailFromForm = (state: IStateTree): string => {
    return getTestDriveFromForm(state).email || '';
};
