import { TestDrive } from './containers/TestDrive';
import { createStore, initApp } from './root';
var TestDriveCmp = TestDrive.Container;
// Un comment next line while developing module
// initApp(createStore());
export var TestDriveActivity = {
    TestDriveCmp: TestDriveCmp,
    createStore: createStore,
    initApp: initApp
};
export default TestDriveActivity;
