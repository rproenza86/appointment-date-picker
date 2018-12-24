import { Component } from 'react';
import { IAddress } from './../../types';
import './style/TestDriveConfirmationUI.css';
export interface ITestDriveConfirmationUIProps {
    address: IAddress;
    name: string;
    onRescheduleLinkClick: () => void;
    phone: string;
    scheduledDateTime: string;
    leadSubmitted: boolean;
    goToLeadform: any;
    showNewTestDriveUIflow: boolean;
}
declare class TestDriveConfirmationUI extends Component<ITestDriveConfirmationUIProps, {}> {
    componentDidMount(): void;
    render(): JSX.Element;
    private handleRescheduleLinkClick;
}
export default TestDriveConfirmationUI;
