import { createStore, initApp } from './root';
export declare const appName = "AppointmentDatePicker";
export declare const TestDriveActivity: {
    appName: string;
    createStore: typeof createStore;
    initApp: typeof initApp;
    testDriveCmp: import("react-redux").ConnectedComponentClass<typeof import("./components/TestDrive/ScheduleTestDriveUI").default, Pick<import("./components/TestDrive/ScheduleTestDriveUI").ITestDriveUIProps, "onDayChanged" | "onTimeChanged" | "submitTestDrive">>;
};
export default TestDriveActivity;
