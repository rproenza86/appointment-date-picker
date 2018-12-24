import * as React from 'react';
import './style/TestDriveUI.css';
import { IAddress } from './../../types';
import { TimeType } from './../ToggleTimeCard/ToggleTimeCardUI';
export interface ITestDriveUIStateProps {
    address: IAddress;
    dealerName: string;
    educationTitle?: string;
    educationDescription?: string;
    errorMsg: string;
    day: Date;
    time: TimeType;
}
export interface ITestDriveUIDispatchProps {
    submitTestDrive: any;
    onDayChanged: (day: Date) => void;
    onTimeChanged: (time: TimeType) => void;
}
export interface ITestDriveUIProps extends ITestDriveUIStateProps, ITestDriveUIDispatchProps {
}
declare class TestDriveUI extends React.Component<ITestDriveUIProps, {}> {
    render(): JSX.Element;
}
export default TestDriveUI;
