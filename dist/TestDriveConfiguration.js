// reducers
import { testDriveReducer } from './reducers/testDriveReducer';
// middleware
import { testDriveMiddleware } from './middleware/testDriveMiddleware';
// components
// import TestDrive from './containers/TestDrive/TestDrive';
// routes
import * as testDriveRoutes from './routes/testDriveRoutes';
// selectors
// import { isTestDriveCompleted } from './selectors/testDriveSelectors';
// interfaces
// import { IFlowConfig } from './flowMaster';
// import { ITestDrive } from './types';
var TestDriveConfiguration = {
    name: 'testDrive',
    navCard: {
        label: 'Schedule Test Drive',
        // tslint:disable-next-line:object-literal-sort-keys
        icon: 'testDrive',
        iconClass: 'test-drive',
        cardId: 'dr-sp-test-drive-card'
    },
    showCardSelector: function () { return true; },
    // isCompleteSelector: isTestDriveCompleted,
    // routingComponent: TestDrive,
    // tslint:disable-next-line:object-literal-sort-keys
    defaultRoute: testDriveRoutes.TEST_DRIVE,
    routes: Object.keys(testDriveRoutes).map(function (routeName) { return testDriveRoutes[routeName]; }).slice(),
    middleware: testDriveMiddleware,
    reducer: testDriveReducer,
    isLocked: function () {
        return false;
    },
    dependsOnLeadFormCompletion: function () {
        return false;
    }
};
export default TestDriveConfiguration;
