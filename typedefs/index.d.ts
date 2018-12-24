import { createStore, initApp } from './root';
export declare const TestDriveActivity: {
    TestDriveCmp: import("react-redux").ConnectedComponentClass<typeof import("./components/TestDrive/ScheduleTestDriveUI").default, Pick<import("./components/TestDrive/ScheduleTestDriveUI").ITestDriveUIProps, "onDayChanged" | "onTimeChanged" | "submitTestDrive">>;
    createStore: typeof createStore;
    initApp: typeof initApp;
};
export default TestDriveActivity;
