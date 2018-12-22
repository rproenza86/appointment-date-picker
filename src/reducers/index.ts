// activity configuration
// import TestDriveConfiguration from './../TestDriveConfiguration';
import { testDriveReducer } from './testDriveReducer';

const reducers = {
    testDrive: testDriveReducer
    // [TestDriveConfiguration.name]: TestDriveConfiguration.reducer
};

export default reducers;
