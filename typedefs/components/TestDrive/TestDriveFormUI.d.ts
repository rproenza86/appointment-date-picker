import { Component } from 'react';
import { TimeType } from '../ToggleTimeCard/ToggleTimeCardUI';
import './style/TestDriveFormUI.css';
export interface ITestDriveFormUIStateProps {
    selectedDate: Date;
    selectedTime: TimeType;
}
export interface ITestDriveFormUIDispatchProps {
    onDayChanged: (date: Date) => void;
    onTimeChanged: (time: TimeType) => void;
}
export interface ITestDriveFormUIProps extends ITestDriveFormUIStateProps, ITestDriveFormUIDispatchProps {
}
declare class TestDriveFormUI extends Component<ITestDriveFormUIProps, {}> {
    render(): JSX.Element;
    private getStartDate;
}
export default TestDriveFormUI;
