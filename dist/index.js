import { TestDrive } from './containers/TestDrive';
import { createStore, initApp } from './root';
var TestDriveCmp = TestDrive.Container;
// Un comment next line while developing module
// initApp(createStore());
export var appName = 'AppointmentDatePicker';
export var TestDriveActivity = {
    appName: appName,
    createStore: createStore,
    initApp: initApp,
    testDriveCmp: TestDriveCmp,
};
export default TestDriveActivity;
