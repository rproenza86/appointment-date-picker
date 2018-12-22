// externals
import { assign } from 'lodash';
import { Reducer } from 'redux';

// consts/enums
import * as commonTypes from './../actions/actionTypes';
import * as types from './../constants';

// interfaces
import { ITestDrive } from './../types';


export const mapPayloadToTestDrive = (payload: any): ITestDrive => {
    const result = {} as ITestDrive;
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

export const testDriveReducer: Reducer<ITestDrive> = (state: ITestDrive = {}, action: any): ITestDrive => {
    const newState = assign({}, state);
    switch (action.type) {
        case commonTypes.INIT_SUCCESS: {
            const testDrive = mapPayloadToTestDrive(
                action.payload.testDrive ||
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
            const testDrive = mapPayloadToTestDrive(action.payload);
            return assign({}, newState, testDrive);
        }
        case types.UPDATE_TEST_DRIVE_DAY: {
            const day = action.payload;
            return { ...state, ...{ day } };
        }
        case types.UPDATE_TEST_DRIVE_TIME: {
            const time = action.payload;
            return { ...state, ...{ time } };
        }
        default: {
            return state;
        }
    }
};
