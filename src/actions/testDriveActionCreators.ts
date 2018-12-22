import * as actionTypes from '../constants';
import { TimeType } from './../components/ToggleTimeCard/ToggleTimeCardUI';

export const submitTestDrive = (testDriveInfo: any) => {
    return {
        payload: testDriveInfo,
        type: actionTypes.SUBMIT_TEST_DRIVE
    };
};

export const updateDay = (day: Date) => {
    return {
        payload: day,
        type: actionTypes.UPDATE_TEST_DRIVE_DAY
    };
};

export const updateTime = (time: TimeType) => {
    return {
        payload: time,
        type: actionTypes.UPDATE_TEST_DRIVE_TIME
    };
};

export const handleRescheduleLinkClick = () => {
    return {
        type: actionTypes.ROUTE_TEST_DRIVE
    };
};
