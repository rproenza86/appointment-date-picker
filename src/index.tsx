import { TestDrive } from './containers/TestDrive';
import { createStore, initApp } from './root';
import { GlobalEventDistributor } from './utils/globalEventDistributor';

const TestDriveCmp = TestDrive.Container;

initApp(createStore());

export const TestDriveActivity =  {
    GlobalEventDistributor,
    TestDriveCmp,
    createStore,
    initApp
};
export default TestDriveActivity;