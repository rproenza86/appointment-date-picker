import { TestDrive } from './containers/TestDrive';
import { createStore, initApp } from './root';

const TestDriveCmp = TestDrive.Container;

// Un comment next line while developing module
// initApp(createStore());

export const appName = 'AppointmentDatePicker';

export const TestDriveActivity = {
    appName,
    createStore,
    initApp,
    testDriveCmp: TestDriveCmp,
};

export default TestDriveActivity;
