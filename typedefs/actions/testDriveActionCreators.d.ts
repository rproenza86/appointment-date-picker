import { TimeType } from './../components/ToggleTimeCard/ToggleTimeCardUI';
export declare const submitTestDrive: (testDriveInfo: any) => {
    payload: any;
    type: string;
};
export declare const updateDay: (day: Date) => {
    payload: Date;
    type: string;
};
export declare const updateTime: (time: TimeType) => {
    payload: TimeType;
    type: string;
};
export declare const handleRescheduleLinkClick: () => {
    type: string;
};
